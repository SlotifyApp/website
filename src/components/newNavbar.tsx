"use client"

import { usePathname } from "next/navigation"
import { Calendar, ChevronDown, Home, LogOut, Users, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import slotifyClient from "@/hooks/fetch"
import Link from "next/link"
import { useNotifications } from "@/context/notification_context"
import { Badge } from "@/components/ui/badge"
import NotificationButton from "./notification-bell"
import { useState, useRef } from "react"

const items = [
  {
    title: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Groups",
    href: "/dashboard/groups",
    icon: Users,
    hasDropdown: true,
    dropdownItems: [
      { title: "Slotify", href: "/dashboard/groups/slotify" },
      { title: "Office", href: "/dashboard/groups/office" },
    ],
  },
  {
    title: "Meetings",
    href: "/dashboard/meetings",
    icon: Video,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
  },
]

export default function NewNavbar() {
  const { notifications } = useNotifications()
  const [isNotifsOpen, setIsNotifsOpen] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const pathname = usePathname()
  const handleLogout = async () => {
    try {
      slotifyClient.PostAPIUsersMeLogout(undefined)
    } catch (error) {
      console.error(`error: ${JSON.stringify(error)}`)
    }

    // Want to redirect the user back to the home page
    // even if logout api failed
    window.location.href = "/"
  }

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setOpenDropdown(title)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 100)
  }

  return (
    <div className="flex flex-row justify-between items-center h-[10vh] min-w-screen border-b">
      <Link href="/dashboard">
        <div className="flex flex-col justify-center ml-5 text-2xl font-semibold h-[10vh] duration-300 hover:scale-110 hover:text-focusColor hover:font-semibold">
          Slotify
        </div>
      </Link>
      <div className="flex flex-row items-center">
        <nav className="h-[10vh] flex items-center justify-around w-[40vw]">
          {items.map((item) =>
            item.title === "Meetings" ? (
              <Button variant={"ghost"} disabled key={item.href}>
                <item.icon className="h-4 w-4" />
                Meetings
              </Button>
            ) : item.hasDropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`flex flex-row justify-center items-center gap-3 h-[7vh] w-36 ${
                    pathname.startsWith(item.href)
                      ? "bg-gray-300/40 rounded-2xl ml-5 text-focusColor font-semibold"
                      : "duration-300 hover:scale-110 hover:text-focusColor hover:font-semibold rounded-2xl ml-5"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                  <ChevronDown className="h-3 w-3" />
                </div>

                {openDropdown === item.title && (
                  <div
                    className="absolute left-0 top-[7vh] z-10 mt-1 w-48 origin-top-left rounded-md border border-input bg-white shadow-md py-1"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300/40 hover:font-semibold hover:text-focusColor duration-300"
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : pathname === item.href ? (
              <div
                key={item.href}
                className="flex flex-row justify-center items-center gap-3 h-[7vh] w-36 bg-gray-300/40 rounded-2xl ml-5 text-focusColor font-semibold"
                onClick={() => (window.location.href = item.href)}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </div>
            ) : (
              <div
                key={item.href}
                className="flex flex-row justify-center items-center gap-3 h-[7vh] w-36 duration-300 hover:scale-110 hover:text-focusColor hover:font-semibold rounded-2xl ml-5"
                onClick={() => (window.location.href = item.href)}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </div>
            ),
          )}
        </nav>
        <Menu as="div" className="relative ml-5 mr-10">
          <div>
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {notifications.length > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-1 text-xs">
                  {notifications.length}
                </Badge>
              )}
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <MenuItem>
              <NotificationButton
                open={isNotifsOpen}
                onOpenChangeAction={setIsNotifsOpen}
                notifications={notifications}
                trigger={
                  <a
                    href="#"
                    className="flex flex-row justify-center items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden hover:bg-gray-300/40 hover:font-semibold hover:text-focusColor duration-300 scale-100"
                  >
                    Notifications
                  </a>
                }
              />
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="flex flex-row justify-center items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden hover:bg-gray-300/40 hover:font-semibold hover:text-focusColor duration-300 scale-100"
              >
                View Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="flex flex-row justify-center items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden hover:bg-gray-300/40 hover:font-semibold hover:text-focusColor duration-300 scale-100"
              >
                Settings
              </a>
            </MenuItem>
            <MenuItem>
              <div
                className="flex flex-row justify-center items-center hover:bg-gray-300/40 hover:font-semibold hover:text-red-500 duration-300 scale-100"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" /> {/* Logout Icon */}
                <a href="#" className="block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden">
                  Sign out
                </a>
              </div>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}
