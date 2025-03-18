'use client'

import { User } from '@/types/types'
import { Card, CardContent } from '@/components/ui/card'

import { useState, useRef, useEffect } from 'react'
import { Search, Check, UserIcon, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import slotifyClient from '@/hooks/fetch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { errorToast } from '@/hooks/use-toast'

interface UserSearchProps {
  handleAddUsersAction: (user: User) => void
  handleRemoveUserAction: (userID: number) => void
  selectedUsers: User[]
}
export function UserSearch({
  handleAddUsersAction,
  handleRemoveUserAction,
  selectedUsers,
}: UserSearchProps) {
  const [searchType, setSearchType] = useState<'name' | 'email'>('name')
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    const getFilteredUsers = async () => {
      if (!searchQuery) {
        setFilteredUsers([])
        return
      }
      if (searchType == 'name') {
        try {
          const users = await slotifyClient.GetAPIUsers({
            queries: {
              name: searchQuery,
            },
          })
          setFilteredUsers(users)
        } catch (error) {
          console.error(error)
          errorToast(error)
        }
      } else if (searchType == 'email') {
        try {
          const users = await slotifyClient.GetAPIUsers({
            queries: {
              email: searchQuery,
            },
          })
          setFilteredUsers(users)
        } catch (error) {
          console.error(error)
          errorToast(error)
        }
      }
    }
    getFilteredUsers()
  }, [searchType, searchQuery])

  // Close dropdown when clicking outside
  const inputRef = useRef<HTMLInputElement>(null)

  // Handle input change
  const handleInputChange = (value: string) => {
    setSearchQuery(value)
    setSelectedUser(null)
    if (value.length > 0) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  // // Handle user selection
  // const handleSelectUser = (user: User) => {
  //   setSelectedUser(user)
  //   setSearchQuery(searchType === 'name' ? user.name : user.email)
  //   setOpen(false)
  //   if (inputRef.current) {
  //     inputRef.current.focus()
  //   }
  // }

  return (
    <div className='space-y-6 max-w-md mx-auto'>
      <div className='relative'>
        <div className='flex'>
          <div className='relative flex-1 flex'>
            <div className='absolute inset-y-0 left-0 flex items-center'>
              <Select
                value={searchType}
                onValueChange={value => {
                  setSearchType(value as 'name' | 'email')
                  setSearchQuery('')
                  setSelectedUser(null)
                }}
              >
                <SelectTrigger className='h-9 border-0 bg-transparent w-[110px] focus:ring-0 focus:ring-offset-0 rounded-none border-r'>
                  <SelectValue placeholder='Search by' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='name'>Name</SelectItem>
                  <SelectItem value='email'>Email</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              ref={inputRef}
              type='text'
              placeholder={`Search by ${searchType}...`}
              value={searchQuery}
              onChange={e => handleInputChange(e.target.value)}
              onFocus={() => searchQuery.length > 0 && setOpen(true)}
              className='pl-[110px] rounded-r-none'
            />
          </div>
          <Button type='button' className='rounded-l-none'>
            <Search size={18} />
            <span className='sr-only'>Search</span>
          </Button>
        </div>

        {/* Dropdown for search results */}
        <div
          className={cn(
            'absolute mt-1 w-full z-10 bg-popover text-popover-foreground shadow-md rounded-md border border-border overflow-hidden transition-all',
            open && filteredUsers.length > 0
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none',
          )}
        >
          {open && filteredUsers.length > 0 && (
            <div className='max-h-[300px] overflow-y-auto p-1'>
              {filteredUsers.map(user => (
                <div
                  key={user.id}
                  className='flex items-center gap-2 p-2 hover:bg-accent rounded-sm cursor-pointer'
                  onClick={() => {
                    handleAddUsersAction(user)
                    setOpen(false)
                  }}
                >
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center gap-1'>
                      <UserIcon size={12} className='text-muted-foreground' />
                      <p className='text-sm font-medium truncate'>
                        {user.firstName + ' ' + user.lastName}
                      </p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Mail size={12} className='text-muted-foreground' />
                      <p className='text-xs text-muted-foreground truncate'>
                        {user.email}
                      </p>
                    </div>
                  </div>
                  {selectedUser?.id === user.id && (
                    <Check className='h-4 w-4 text-primary' />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedUsers.length > 0 && (
          <div className='m-2'>
            <div className='font-medium mb-2'>Selected Participants:</div>
            <div className='flex flex-wrap gap-2'>
              {selectedUsers.map(user => (
                <div
                  key={user.id}
                  className='flex items-center gap-1 bg-blue-100 text-blue-800 rounded px-2 py-1'
                >
                  <span>{user.firstName ? user.firstName : user.email}</span>
                  <button
                    onClick={() => handleRemoveUserAction(user.id)}
                    className='text-blue-500 hover:text-blue-700'
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface UserListProps {
  users: User[]
}

export function UserList({ users }: UserListProps) {
  return (
    <div className='space-y-3'>
      {users.map(user => (
        <Card
          key={user.id}
          className='overflow-hidden transition-all hover:shadow-md'
        >
          <CardContent className='p-4 flex items-center gap-4'>
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-2'>
                <UserIcon size={14} className='text-muted-foreground' />
                <h3 className='font-medium truncate'>
                  {user.firstName + ' ' + user.lastName}
                </h3>
              </div>
              <div className='flex items-center gap-2 mt-1'>
                <Mail size={14} className='text-muted-foreground' />
                <p className='text-sm text-muted-foreground truncate'>
                  {user.email}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
