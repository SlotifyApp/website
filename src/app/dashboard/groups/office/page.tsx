'use client'

import { useState, useEffect, Suspense } from 'react'
import { Input } from '@/components/ui/input'
import { MSFTGroupMembers, MSFTMember } from '@/components/msft-group-members'
import { Skeleton } from '@/components/ui/skeleton'
import slotifyClient from '@/hooks/fetch'
import { errorToast } from '@/hooks/use-toast'
import { MSFTGroup } from '@/types/types'
import { MSFTGroupList } from '@/components/msft-group-list'

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
  const [yourMSFTGroupsSearchTerm, setYourMSFTGroupsSearchTerm] =
    useState<string>('')
  //for groups, your current groups and joinable groups
  const [yourMSFTGroups, setYourMSFTGroups] = useState<Array<MSFTGroup>>([])
  // currently selected groups
  const [selectedMSFTGroup, setSelectedMSFTGroup] = useState<MSFTGroup | null>(
    null,
  )
  // members of currently selected group
  const [members, setMembers] = useState<Array<MSFTMember>>([])

  // On every page refresh, set yourSlotifyGroups
  useEffect(() => {
    const getUserMSFTGroups = async () => {
      try {
        const myMSFTGroupIDs = await slotifyClient.GetAPIMSFTGroupsMe()
        for (const msftGroupID of myMSFTGroupIDs) {
          const myMSFTGroup = await slotifyClient.GetAPIMSFTGroupsGroupID({
            params: {
              groupID: msftGroupID,
            },
          })

          // Check if myMSFTGroup already exists in the array
          const groupAdded = yourMSFTGroups.some(
            group => group.id === myMSFTGroup.id,
          )
          if (!groupAdded) {
            setYourMSFTGroups(myMSFTGroups => [...myMSFTGroups, myMSFTGroup])
          }
        }
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }

    const getMSFTGroupMembers = async () => {
      if (!selectedMSFTGroup) {
        return
      }
      const msftGroupID = selectedMSFTGroup?.id
      try {
        const MSFTGroupMemberData =
          await slotifyClient.GetAPIMSFTGroupsGroupIDUsers({
            params: {
              groupID: msftGroupID,
            },
            queries: {
              limit: 10,
            },
          })
        setMembers(MSFTGroupMemberData.users)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }

    getUserMSFTGroups()
    getMSFTGroupMembers()
  }, [selectedMSFTGroup, yourMSFTGroups])

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Microsoft Teams Groups</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>
            My Microsoft Teams Groups
          </h2>
          <Input
            type='text'
            placeholder='Search your groups...'
            value={yourMSFTGroupsSearchTerm}
            onChange={e => setYourMSFTGroupsSearchTerm(e.target.value)}
            className='w-full max-w-md mb-4'
          />
          <Suspense fallback={<LoadingDashboardGroups />}>
            <MSFTGroupList
              MSFTGroups={yourMSFTGroups}
              onSelectMSFTGroup={setSelectedMSFTGroup}
            />
          </Suspense>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>
            Microsoft Teams Group Members
          </h2>

          <Suspense fallback={<LoadingDashboardGroups />}>
            {selectedMSFTGroup ? (
              <MSFTGroupMembers members={members} />
            ) : (
              <p>Select a group to view its members</p>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  )
}
