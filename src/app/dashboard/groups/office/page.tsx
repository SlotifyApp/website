'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { Input } from '@/components/ui/input'
import { SlotifyGroupList } from '@/components/slotify-group-list'
import { SlotifyGroupMembers, Member } from '@/components/slotify-group-members'
import { ProfileForm } from '@/components/slotify-group-form'
import { Skeleton } from '@/components/ui/skeleton'
import slotifyClient from '@/hooks/fetch'
import { errorToast } from '@/hooks/use-toast'
import { SlotifyGroup } from '@/types/types'
import { Button } from '@/components/ui/button'

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
<<<<<<< HEAD
  //for teams, your current teams and joinable teams
  const [pagetokengroups, setPageTokenGroups] = useState<number>(0)
  const [yourSlotifyGroups, setYourSlotifyGroups] = useState<Set<SlotifyGroup>>(
    new Set(),
  )
  // currently selected teams
=======
  //for groups, your current groups and joinable groups
  const [yourSlotifyGroups, setYourSlotifyGroups] = useState<
    Array<SlotifyGroup>
  >([])
  // currently selected groups
>>>>>>> 68e79fe (refactor: make distinction between MS Team and Slotify Group clearer)
  const [selectedSlotifyGroup, setSelectedSlotifyGroup] =
    useState<SlotifyGroup | null>(null)
  // members of currently selected group
  const [members, setMembers] = useState<Array<Member>>([])
  const [pagetokengroupmembers, setPageTokenGroupMembers] = useState<number>(0)

  const getUserSlotifyGroups = useCallback(async () => {
    try {
      const slotifyGroupsData = await slotifyClient.GetAPISlotifyGroupsMe({
        queries: {
          limit: 10,
          pageToken: pagetokengroups,
        },
      })
      const { slotifyGroups, nextPageToken } = slotifyGroupsData

      setYourSlotifyGroups(prevGroups => {
        const newGroups = new Set(prevGroups)
        slotifyGroups.forEach((newGroup: SlotifyGroup) => {
          const doesexists = [...newGroups].some(
            group => group.id === newGroup.id,
          )
          if (!doesexists) {
            newGroups.add(newGroup)
          }
        })
        return newGroups
      })
      setPageTokenGroups(nextPageToken)
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
  }, [pagetokengroups, setYourSlotifyGroups, setPageTokenGroups])

  useEffect(() => {
    getUserSlotifyGroups()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // On every page refresh, set yourSlotifyGroups
  useEffect(() => {
    const getSlotifyGroupMembers = async () => {
<<<<<<< HEAD
      if (!selectedSlotifyGroup) return
=======
      if (!selectedSlotifyGroup) {
        return
      }
      const groupID = selectedSlotifyGroup?.id

>>>>>>> 68e79fe (refactor: make distinction between MS Team and Slotify Group clearer)
      try {
        const slotifyGroupMemberData =
          await slotifyClient.GetAPISlotifyGroupsSlotifyGroupIDUsers({
<<<<<<< HEAD
            params: { slotifyGroupID: selectedSlotifyGroup.id },
            queries: { limit: 10, pageToken: pagetokengroupmembers },
=======
            params: {
              slotifyGroupID: groupID,
            },
>>>>>>> 68e79fe (refactor: make distinction between MS Team and Slotify Group clearer)
          })
        const { users, nextPageToken } = slotifyGroupMemberData
        setMembers(users)
        setPageTokenGroupMembers(nextPageToken)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }
    getSlotifyGroupMembers()
  }, [selectedSlotifyGroup, getUserSlotifyGroups, pagetokengroupmembers])

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Slotify Groups</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <ProfileForm
            slotifyGroups={[...yourSlotifyGroups]}
            onSetYourSlotifyGroupsAction={groups =>
              setYourSlotifyGroups(new Set(groups))
            }
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
              slotifyGroups={[...yourSlotifyGroups]}
              onSelectSlotifyGroup={setSelectedSlotifyGroup}
            />
          </Suspense>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Slotify Group Members</h2>

          <Suspense fallback={<LoadingDashboardGroups />}>
            {selectedSlotifyGroup ? (
              <SlotifyGroupMembers members={members} />
            ) : (
              <p>Select a group to view its members</p>
            )}
          </Suspense>
        </div>
        <div>
          <Button
            size='icon'
            variant='outline'
            onClick={() => {
              getUserSlotifyGroups()
            }}
            className='h-8 w-8 text-destructive'
          >
            load next
          </Button>
        </div>
      </div>
    </div>
  )
}
