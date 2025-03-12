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
import type { SlotifyGroup } from '@/types/types'
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
import { X } from 'lucide-react'

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
  // invite form state
  const [isInviteFormOpen, setIsInviteFormOpen] = useState(false)
  const [isLeaveGroupOpen, setIsLeaveGroupOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [inviteEmails, setInviteEmails] = useState<string[]>([])
  const [duplicateEmailError, setDuplicateEmailError] = useState(false)
  const [userDoesntExistError, setUserDoesntExistError] = useState(false)
  const [userAlreadyInGroupError, setUserAlreadyInGroupError] = useState(false)

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

    getUserSlotifyGroups()
    getSlotifyGroupMembers()
  }, [selectedSlotifyGroup])

  const handleAddEmail = async () => {
    if (email) {
      if (inviteEmails.includes(email)) {
        setDuplicateEmailError(true)
        return
      }
      try {
        const users = (await slotifyClient.GetAPIUsers()).map(
          user => user.email,
        )
        if (!users.includes(email)) {
          setUserDoesntExistError(true)
          return
        }
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
      const groupId = selectedSlotifyGroup?.id
      if (groupId) {
        try {
          const slotifyGroupMemberData = (
            await slotifyClient.GetAPISlotifyGroupsSlotifyGroupIDUsers({
              params: {
                slotifyGroupID: groupId,
              },
            })
          ).map(user => user.email)
          if (slotifyGroupMemberData.includes(email)) {
            setUserAlreadyInGroupError(true)
            return
          }
        } catch (error) {
          console.error(error)
          errorToast(error)
        }
      }
      setInviteEmails([...inviteEmails, email])
      setEmail('')
      setDuplicateEmailError(false)
      setUserDoesntExistError(false)
      setUserAlreadyInGroupError(false)
    }
  }

  const handleRemoveEmail = (emailToRemove: string) => {
    setInviteEmails(inviteEmails.filter(e => e !== emailToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddEmail()
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    // Clear any error when the user starts typing again
    if (duplicateEmailError) {
      setDuplicateEmailError(false)
    }
    if (userDoesntExistError) {
      setUserDoesntExistError(false)
    }
    if (userAlreadyInGroupError) {
      setUserAlreadyInGroupError(false)
    }
  }

  const handleSubmitInvites = async () => {
    if (!selectedSlotifyGroup || inviteEmails.length === 0) return
    try {
      // placeholder for the actual invite API call
      // for (const emailToInvite of inviteEmails) {
      /* await slotifyClient.PostAPISlotifyGroupsSlotifyGroupIDInvite({
          params: {
            slotifyGroupID: selectedSlotifyGroup.id,
          },
          body: {
            email: emailToInvite,
          },
        }) */
      // }

      toast({
        title: 'Invitations sent',
        description: `Successfully invited ${inviteEmails.length} member(s) to ${selectedSlotifyGroup.name}`,
        variant: 'default',
      })

      setInviteEmails([])
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
        const data =
          await slotifyClient.DeleteSlotifyGroupsSlotifyGroupIDLeaveMe(
            undefined,
            {
              params: { slotifyGroupID: selectedSlotifyGroup.id },
            },
          )
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
      setSelectedSlotifyGroup(null)
      setIsLeaveGroupOpen(false)
    }
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
              <div className='space-y-4'>
                <SlotifyGroupMembers members={members} />
                <Button
                  onClick={() => setIsInviteFormOpen(true)}
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
      </div>

      {/* Invite Members Dialog */}
      <Dialog open={isInviteFormOpen} onOpenChange={setIsInviteFormOpen}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>
              Invite members to {selectedSlotifyGroup?.name}
            </DialogTitle>
            <DialogDescription>
              Enter email addresses of people you'd like to invite to this
              group.
            </DialogDescription>
            <DialogDescription>
              Unable to find someone? Ask them sign up for Slotify.
            </DialogDescription>
          </DialogHeader>

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
              <div className='h-[16px]'>
                {duplicateEmailError && (
                  <p className='text-red-500 text-xs mt-1'>
                    This user has already been added to the invitation list.
                  </p>
                )}
                {userDoesntExistError && (
                  <p className='text-red-500 text-xs mt-1'>
                    No user found for this e-mail address.
                  </p>
                )}
                {userAlreadyInGroupError && (
                  <p className='text-red-500 text-xs mt-1'>
                    This user is already in this group.
                  </p>
                )}
              </div>
            </div>
            <Button
              type='button'
              onClick={handleAddEmail}
              className='mt-[22px] self-start'
            >
              Add User
            </Button>
          </div>
          {inviteEmails.length > 0 && (
            <div className='mt-4'>
              <Label>Emails to invite:</Label>
              <div className='flex flex-wrap gap-2 mt-2'>
                {inviteEmails.map(email => (
                  <div
                    key={email}
                    className='flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm'
                  >
                    {email}
                    <button
                      onClick={() => handleRemoveEmail(email)}
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
              onClick={handleSubmitInvites}
              disabled={inviteEmails.length === 0}
            >
              {'Send Invitations'}
            </Button>
          </DialogFooter>
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
