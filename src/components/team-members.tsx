import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export interface Member {
  id: number
  email: string
  firstName: string
  lastName: string
}

interface TeamMembersProps {
  members: Member[]
}

export function TeamMembers({ members }: TeamMembersProps) {
  return (
    <ul className='space-y-4'>
      {members.map(member => (
        <li key={member.id} className='flex items-center space-x-4'>
          <Avatar>
            <AvatarImage
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${
                member.firstName + ' ' + member.lastName
              }`}
              alt={member.firstName + ' ' + member.lastName}
            />
            <AvatarFallback>
              {member.firstName + ' ' + member.lastName}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className='font-medium'>
              {member.firstName + ' ' + member.lastName}
            </p>
            <p className='text-sm text-gray-500'>Member Role</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
