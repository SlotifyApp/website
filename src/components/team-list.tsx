import { Button } from '@/components/ui/button'
import { components } from '@/types/openapi'
export type Team = components['schemas']['Team']

interface TeamListProps {
  teams: Team[]
  onSelectTeam: (team: Team) => void
}

export function TeamList({ teams, onSelectTeam }: TeamListProps) {
  return (
    <ul className='space-y-2'>
      {teams.map(team => (
        <li key={team.id}>
          <Button
            variant='outline'
            className='w-full justify-start text-left'
            onClick={() => onSelectTeam(team)}
          >
            {team.name}
          </Button>
        </li>
      ))}
    </ul>
  )
}
