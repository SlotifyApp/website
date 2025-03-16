export interface MSFTMember {
  email: string
  firstName: string
  lastName: string
}

interface MSFTGroupMembersProps {
  members: MSFTMember[]
}

export function MSFTGroupMembers({ members }: MSFTGroupMembersProps) {
  return (
    <ul className='space-y-4'>
      {members.map(member => (
        <li key={member.email} className='flex items-center space-x-4'>
          {/* Not sure how to get MSFT avatar images, please put the code here if you do */}
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
