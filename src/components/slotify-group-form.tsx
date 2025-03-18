'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import slotifyClient from '@/hooks/fetch'
import { SlotifyGroup } from '@/types/types'
import { errorToast } from '@/hooks/use-toast'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

interface ProfileFormProps {
  slotifyGroups: SlotifyGroup[]
  onSetYourSlotifyGroupsAction: (slotifyGroups: SlotifyGroup[]) => void
}
export function ProfileForm({
  slotifyGroups: slotifyGroups,
  onSetYourSlotifyGroupsAction: onSetYourSlotifyGroupsAction,
}: ProfileFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = await slotifyClient.PostAPISlotifyGroups({
        name: values.name,
      })
      onSetYourSlotifyGroupsAction([data, ...slotifyGroups])
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
    setIsOpen(false)
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant='outline' className='relative min-w-max'>
          + Create Slotify Group
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[90vw] sm:h-[90vh] sm:max-h-[90vh] flex flex-col'>
        <DialogHeader>
          <DialogTitle>Slotify Group Form</DialogTitle>
          <DialogDescription>Create a new slotify group.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slotify Group Name</FormLabel>
                  <FormControl>
                    <Input placeholder='AWSome' {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public slotify group name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
