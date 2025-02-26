import { Button } from '@/components/ui/button'
import { SlotifyGroup } from '@/types/types'

interface SlotifyGroupListProps {
  slotifyGroups: SlotifyGroup[]
  onSelectSlotifyGroup: (slotifyGroup: SlotifyGroup) => void
}

export function SlotifyGroupList({
  slotifyGroups: slotifyGroups,
  onSelectSlotifyGroup: onSelectSlotifyGroup,
}: SlotifyGroupListProps) {
  return (
    <ul className='space-y-2'>
      {slotifyGroups.map(slotifyGroup => (
        <li key={slotifyGroup.id}>
          <Button
            variant='outline'
            className='w-full justify-start text-left'
            onClick={() => onSelectSlotifyGroup(slotifyGroup)}
          >
            {slotifyGroup.name}
          </Button>
        </li>
      ))}
    </ul>
  )
}
