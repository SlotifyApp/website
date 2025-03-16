'use client'

import { useState, useEffect, Suspense } from 'react'
import { Input } from '@/components/ui/input'
import { SlotifyGroupList } from '@/components/slotify-group-list'
import { SlotifyGroupMembers, Member } from '@/components/slotify-group-members'
import { ProfileForm } from '@/components/slotify-group-form'
import { Skeleton } from '@/components/ui/skeleton'
import slotifyClient from '@/hooks/fetch'
import { errorToast } from '@/hooks/use-toast'
import { SlotifyGroup } from '@/types/types'

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
  //for teams, your current teams and joinable teams
  const [pagetokengroups, setPageTokenGroups] = useState<number>(0)
  const [pagetokengroupmembers, setPageTokenGroupMembers] = useState<number>(0)
  const [yourSlotifyGroups, setYourSlotifyGroups] = useState<
    Array<SlotifyGroup>
  >([])
  // currently selected teams
  const [selectedSlotifyGroup, setSelectedSlotifyGroup] =
    useState<SlotifyGroup | null>(null)
  // members of currently selected team
  const [members, setMembers] = useState<Array<Member>>([])

  // On every page refresh, set yourSlotifyGroups
  useEffect(() => {
    const getUserSlotifyGroups = async () => {
      try {
        const slotifyGroupsData = await slotifyClient.GetAPISlotifyGroupsMe({
          queries: {
            limit: 10,
            pageToken: pagetokengroups
          }
        })
        const {groups, nextPageToken } = slotifyGroupsData
        setYourSlotifyGroups(groups)
        setPageTokenGroups(nextPageToken)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }

    const getSlotifyGroupMembers = async () => {
      if (!selectedSlotifyGroup) {
        return
      }
      const teamID = selectedSlotifyGroup?.id

      try {
        const slotifyGrouppMemberData =
          await slotifyClient.GetAPISlotifyGroupsSlotifyGroupIDUsers({
            params: {
              slotifyGroupID: teamID,
            },
            queries: {
              limit: 10,
              pageToken: pagetokengroupmembers,
            }
          })
        const {users, nextPageToken } = slotifyGrouppMemberData
        setMembers(users)
        setPageTokenGroupMembers(nextPageToken)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }

    getUserSlotifyGroups()
    getSlotifyGroupMembers()
  }, [selectedSlotifyGroup])

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
            placeholder='Search your teams...'
            value={yourSlotifyGroupsSearchTerm}
            onChange={e => setYourSlotifyGroupsSearchTerm(e.target.value)}
            className='w-full max-w-md mb-4'
          />
          <Suspense fallback={<LoadingDashboardGroups />}>
            <SlotifyGroupList
              slotifyGroups={yourSlotifyGroups}
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
              <p>Select a team to view its members</p>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  )
}
