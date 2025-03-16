'use client'

import type React from 'react'

import { useState, useEffect, Suspense } from 'react'
import { Input } from '@/components/ui/input'
import { SlotifyGroupList } from '@/components/slotify-group-list'
import {
  SlotifyGroupMembers,
  type Member,
} from '@/components/slotify-group-members'
import { ProfileForm } from '@/components/slotify-group-form'
import { Skeleton } from '@/components/ui/skeleton'
import slotifyClient from '@/hooks/fetch'
import { errorToast, toast } from '@/hooks/use-toast'
import type { SlotifyGroup, InvitesGroup } from '@/types/types'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { X, Clock } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { formatDistanceToNow, format } from 'date-fns'

function LoadingDashboardGroups() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-[125px] w-[250px] rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  )
}

// Expiry options
type ExpiryOption = '1day' | '3days' | '7days'

export default function GroupsPage() {
  // for search bars
  const [yourSlotifyGroupsSearchTerm, setYourSlotifyGroupsSearchTerm] =
    useState<string>('')
  //for groups, your current groups and joinable groups
  const [yourSlotifyGroups, setYourSlotifyGroups] = useState<
    Array<SlotifyGroup>
  >([])
  // currently selected groups
  const [selectedSlotifyGroup, setSelectedSlotifyGroup] =
    useState<SlotifyGroup | null>(null)
  // members of currently selected group
  const [members, setMembers] = useState<Array<Member>>([])
  // leave group popup state
  const [isLeaveGroupOpen, setIsLeaveGroupOpen] = useState(false)
  // invite form state, and fields
  const [isInviteFormOpen, setIsInviteFormOpen] = useState(false)
  const [dialogPage, setDialogPage] = useState(1)
  const [email, setEmail] = useState('')
  const [inviteUserEmailIDs, setInviteUserEmailIDs] = useState<
    {
      email: string
      id: number
      firstName?: string
      lastName?: string
    }[]
  >([])
  const [expiryOption, setExpiryOption] = useState<ExpiryOption>('1day')
  const [inviteMessage, setInviteMessage] = useState('')
  // group invites
  const [groupInvites, setGroupInvites] = useState<InvitesGroup[]>([])
  const [isLoadingInvites, setIsLoadingInvites] = useState(false)

  // On every page refresh, set yourSlotifyGroups
  useEffect(() => {
    const getUserSlotifyGroups = async () => {
      try {
        const slotifyGroupsData = await slotifyClient.GetAPISlotifyGroupsMe()
        setYourSlotifyGroups(slotifyGroupsData)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }

    getUserSlotifyGroups()
  }, [])

  // When a group is selected, fetch members and invites for that specific group
  useEffect(() => {
    const getSlotifyGroupMembers = async () => {
      if (!selectedSlotifyGroup) {
        return
      }
      const groupID = selectedSlotifyGroup?.id

      try {
        const slotifyGroupMemberData =
          await slotifyClient.GetAPISlotifyGroupsSlotifyGroupIDUsers({
            params: {
              slotifyGroupID: groupID,
            },
          })
        setMembers(slotifyGroupMemberData)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }

    const getGroupInvites = async () => {
      if (!selectedSlotifyGroup) {
        setGroupInvites([])
        return
      }

      setIsLoadingInvites(true)
      try {
        const invites =
          await slotifyClient.GetAPISlotifyGroupsSlotifyGroupIDInvites({
            params: {
              slotifyGroupID: selectedSlotifyGroup.id,
            },
          })
        setGroupInvites(invites.filter(invite => invite.status === 'pending'))
      } catch (error) {
        console.error(error)
        errorToast(error)
      } finally {
        setIsLoadingInvites(false)
      }
    }

    getSlotifyGroupMembers()
    getGroupInvites()
  }, [selectedSlotifyGroup])

  useEffect(() => {
    if (!isInviteFormOpen) {
      setDialogPage(1)
    }
  }, [isInviteFormOpen])

  const calculateExpiryDate = (option: ExpiryOption): Date => {
    const now = new Date()
    const expiryDate = new Date(now)
    switch (option) {
      case '1day':
        expiryDate.setDate(now.getDate() + 1)
        break
      case '3days':
        expiryDate.setDate(now.getDate() + 3)
        break
      case '7days':
        expiryDate.setDate(now.getDate() + 7)
        break
    }
    return expiryDate
  }

  const handleAddEmail = async () => {
    if (email) {
      try {
        const userToInvite = (
          await slotifyClient.GetAPIUsers({
            queries: {
              email: email,
            },
          })
        ).find(user => user.email == email)
        if (userToInvite) {
          setInviteUserEmailIDs([
            ...inviteUserEmailIDs,
            {
              email: email,
              id: userToInvite.id,
              firstName: userToInvite.firstName,
              lastName: userToInvite.lastName,
            },
          ])
          setEmail('')
        }
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }
  }

  const handleRemoveEmail = (emailToRemove: string) => {
    setInviteUserEmailIDs(
      inviteUserEmailIDs.filter(e => e.email !== emailToRemove),
    )
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddEmail()
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmitInvites = async () => {
    if (!selectedSlotifyGroup || inviteUserEmailIDs.length === 0) return
    try {
      const expiryDate = calculateExpiryDate(expiryOption)
      const currentUser = await slotifyClient.GetAPIUsersMe()
      const newInvites: InvitesGroup[] = []

      for (const userData of inviteUserEmailIDs) {
        const response = await slotifyClient.PostAPIInvites({
          slotifyGroupID: selectedSlotifyGroup.id,
          // note: expiryDate needs this different format, cannot be an ISO String
          expiryDate: new Intl.DateTimeFormat('en-CA').format(expiryDate),
          toUserID: userData.id,
          message: inviteMessage,
          createdAt: new Date().toISOString(),
        })

        // Create a new invite object to add to the UI immediately
        const newInvite: InvitesGroup = {
          inviteID: response.inviteID || Date.now(),
          message: inviteMessage,
          status: 'pending',
          expiryDate: expiryDate.toISOString(),
          fromUserEmail: currentUser.email,
          fromUserFirstName: currentUser.firstName,
          fromUserLastName: currentUser.lastName,
          toUserFirstName: userData.firstName || '',
          toUserLastName: userData.lastName || '',
          toUserEmail: userData.email || '',
          createdAt: new Date().toISOString(),
        }

        newInvites.push(newInvite)
      }
      setGroupInvites(prev => [...prev, ...newInvites])

      toast({
        title: 'Invitations sent',
        description: `Successfully invited ${inviteUserEmailIDs.length} member(s) to ${selectedSlotifyGroup.name}`,
        variant: 'default',
      })
      setInviteUserEmailIDs([])
      setExpiryOption('1day')
      setInviteMessage('')
      setIsInviteFormOpen(false)
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
  }

  const handleGroupSelect = (group: SlotifyGroup) => {
    setSelectedSlotifyGroup(group)
  }

  const handleLeaveGroup = async () => {
    if (selectedSlotifyGroup) {
      try {
        setYourSlotifyGroups(
          yourSlotifyGroups.filter(
            group => group.id !== selectedSlotifyGroup.id,
          ),
        )
        await slotifyClient.DeleteSlotifyGroupsSlotifyGroupIDLeaveMe(
          undefined,
          {
            params: { slotifyGroupID: selectedSlotifyGroup.id },
          },
        )
        toast({
          title: `You left SlotifyGroup ${selectedSlotifyGroup.name}.`,
          variant: 'default',
        })
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
      setSelectedSlotifyGroup(null)
      setIsLeaveGroupOpen(false)
    }
  }

  // Helper function to get full name
  const getFullName = (firstName: string, lastName: string) => {
    return `${firstName} ${lastName}`.trim() || 'Unknown User'
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Slotify Groups</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <ProfileForm
            slotifyGroups={yourSlotifyGroups}
            onSetYourSlotifyGroupsAction={setYourSlotifyGroups}
          />
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>My Slotify Groups</h2>
          <Input
            type='text'
            placeholder='Search your groups...'
            value={yourSlotifyGroupsSearchTerm}
            onChange={e => setYourSlotifyGroupsSearchTerm(e.target.value)}
            className='w-full max-w-md mb-4'
          />
          <Suspense fallback={<LoadingDashboardGroups />}>
            <SlotifyGroupList
              slotifyGroups={yourSlotifyGroups}
              onSelectSlotifyGroup={handleGroupSelect}
            />
          </Suspense>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>
            Slotify Group Members{' '}
            {selectedSlotifyGroup
              ? `: Group ${selectedSlotifyGroup.name}`
              : null}{' '}
          </h2>

          <Suspense fallback={<LoadingDashboardGroups />}>
            {selectedSlotifyGroup ? (
              <div className='space-y-1 flex flex-col gap-0'>
                <SlotifyGroupMembers members={members} />
                <Button
                  onClick={() => {
                    setDialogPage(1)
                    setIsInviteFormOpen(true)
                  }}
                  className='mt-4'
                >
                  Invite Members
                </Button>
                <Button
                  onClick={() => setIsLeaveGroupOpen(true)}
                  className='mt-4'
                >
                  Leave Group
                </Button>
              </div>
            ) : (
              <p>Select a group to view its members</p>
            )}
          </Suspense>
        </div>

        {/* Pending Group Invites */}
        {selectedSlotifyGroup && (
          <div>
            <h2 className='text-xl font-semibold mb-4'>
              Pending Group Invites{' '}
              {selectedSlotifyGroup
                ? `: Group ${selectedSlotifyGroup.name}`
                : null}
            </h2>
            {isLoadingInvites ? (
              <div className='space-y-4'>
                <Skeleton className='h-24 w-full' />
                <Skeleton className='h-24 w-full' />
              </div>
            ) : groupInvites.length > 0 ? (
              <div className='grid gap-4'>
                {groupInvites.map(invite => (
                  <Card key={invite.inviteID}>
                    <CardHeader>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-4'>
                          <Avatar>
                            <AvatarImage
                              src={`https://api.dicebear.com/6.x/initials/svg?seed=${getFullName(invite.toUserFirstName, invite.toUserLastName)}`}
                              alt={getFullName(
                                invite.toUserFirstName,
                                invite.toUserLastName,
                              )}
                            />
                            <AvatarFallback>
                              {invite.toUserFirstName.charAt(0)}
                              {invite.toUserLastName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle>
                              {getFullName(
                                invite.toUserFirstName,
                                invite.toUserLastName,
                              )}
                            </CardTitle>
                            <CardDescription>
                              {invite.toUserEmail}
                            </CardDescription>
                          </div>
                        </div>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center text-xs text-muted-foreground'>
                            <Clock className='mr-1 h-3 w-3' />
                            Expires&nbsp;
                            {format(
                              new Date(invite.expiryDate),
                              'MMM d, h:mm a',
                            )}
                          </div>
                          <span className='inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'>
                            Pending
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground'>
                        {invite.message || 'No message provided.'}
                      </p>
                      <p className='mt-2 text-xs text-muted-foreground'>
                        Invited{' '}
                        {formatDistanceToNow(new Date(invite.createdAt), {
                          addSuffix: true,
                        })}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className='text-center py-8 bg-muted rounded-lg'>
                <p className='text-muted-foreground'>
                  This group currently has no outgoing pending invitations.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Invite Members Dialog */}
      <Dialog
        open={isInviteFormOpen}
        onOpenChange={open => {
          setIsInviteFormOpen(open)
          if (!open) setDialogPage(1)
        }}
      >
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>
              Invite members to {selectedSlotifyGroup?.name}
            </DialogTitle>
            {dialogPage === 1 ? (
              <>
                <DialogDescription>
                  Enter email addresses of people you want to invite to this
                  group.
                </DialogDescription>
                <DialogDescription>
                  Unable to find someone? Ask them sign up for Slotify.
                </DialogDescription>
              </>
            ) : (
              <DialogDescription></DialogDescription>
            )}
          </DialogHeader>

          {dialogPage === 1 ? (
            // PAGE 1
            <>
              <div className='flex items-end gap-2 mt-4'>
                <div className='grid flex-1 gap-2'>
                  <Label htmlFor='email'>Email address</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='name@example.com'
                    value={email}
                    onChange={handleEmailChange}
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <Button
                  type='button'
                  onClick={handleAddEmail}
                  className='mt-[22px] self-start'
                >
                  Add User
                </Button>
              </div>
              {inviteUserEmailIDs.length > 0 && (
                <div className='mt-4'>
                  <Label>Users to be invited:</Label>
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {inviteUserEmailIDs.map(userEmailID => (
                      <div
                        key={userEmailID.email}
                        className='flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm'
                      >
                        {userEmailID.firstName && userEmailID.lastName
                          ? `${userEmailID.firstName} ${userEmailID.lastName}`
                          : userEmailID.email}
                        <button
                          onClick={() => handleRemoveEmail(userEmailID.email)}
                          className='text-secondary-foreground/70 hover:text-secondary-foreground'
                        >
                          <X className='h-3 w-3' />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <DialogFooter className='mt-6'>
                <Button
                  variant='outline'
                  onClick={() => setIsInviteFormOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => setDialogPage(2)}
                  disabled={inviteUserEmailIDs.length === 0}
                >
                  Next
                </Button>
              </DialogFooter>
            </>
          ) : (
            // PAGE 2
            <>
              {/* Expiry Option Dropdown */}
              <div className='mt-4'>
                <Label htmlFor='expiry-option'>Invite will expire in:</Label>
                <Select
                  value={expiryOption}
                  onValueChange={value =>
                    setExpiryOption(value as ExpiryOption)
                  }
                >
                  <SelectTrigger className='w-full mt-2'>
                    <SelectValue placeholder='Select expiry time' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='1day'>1 day</SelectItem>
                    <SelectItem value='3days'>3 days</SelectItem>
                    <SelectItem value='7days'>7 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Custom Message Field */}
              <div className='mt-4'>
                <Label htmlFor='invite-message'>
                  Add an invitation message?
                </Label>
                <textarea
                  id='invite-message'
                  value={inviteMessage}
                  onChange={e => setInviteMessage(e.target.value)}
                  className='mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  rows={4}
                />
              </div>

              <div className='mt-4'>
                <h3 className='text-sm font-medium mb-2'>
                  Inviting the following users:
                </h3>
                <div className='bg-muted p-2 rounded-md text-sm'>
                  {inviteUserEmailIDs
                    .map(userData =>
                      userData.firstName && userData.lastName
                        ? `${userData.firstName} ${userData.lastName}`
                        : userData.email,
                    )
                    .join(', ')}
                </div>
              </div>

              <DialogFooter className='mt-6'>
                <div className='flex w-full justify-between'>
                  <Button variant='outline' onClick={() => setDialogPage(1)}>
                    Back
                  </Button>
                  <div className='flex gap-2'>
                    <Button
                      variant='outline'
                      onClick={() => setIsInviteFormOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleSubmitInvites}>Send</Button>
                  </div>
                </div>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Leave Group Dialog */}
      <Dialog open={isLeaveGroupOpen} onOpenChange={setIsLeaveGroupOpen}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Leave Group</DialogTitle>
            <DialogDescription>
              Are you sure you want to leave {selectedSlotifyGroup?.name}?
            </DialogDescription>
            <DialogDescription>
              You will not be able to re-join without another invitation.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className='mt-6'>
            <Button
              variant='outline'
              onClick={() => setIsLeaveGroupOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleLeaveGroup}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
