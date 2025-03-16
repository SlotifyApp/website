import { Button } from '@/components/ui/button'
import { MSFTGroup } from '@/types/types'

interface MSFTGroupListProps {
  MSFTGroups: MSFTGroup[]
  onSelectMSFTGroup: (MSFTGroup: MSFTGroup) => void
}

export function MSFTGroupList({
  MSFTGroups: MSFTGroups,
  onSelectMSFTGroup: onSelectMSFTGroup,
}: MSFTGroupListProps) {
  return (
    <ul className='space-y-2'>
      {MSFTGroups.map(MSFTGroup => (
        <li key={MSFTGroup.id}>
          <Button
            variant='outline'
            className='w-full justify-start text-left'
            onClick={() => onSelectMSFTGroup(MSFTGroup)}
          >
            {MSFTGroup.name}
          </Button>
        </li>
      ))}
    </ul>
  )
}
