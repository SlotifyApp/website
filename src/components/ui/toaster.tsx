'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'
import { useToast } from '@/hooks/use-toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, icon, title, description, action, ...props }) => {
        // Determine if the content is likely JSON or a long string
        const isComplexContent =
          typeof description === 'string' &&
          (description.startsWith('{') || description.length > 100)

        return (
          <Toast key={id} {...props}>
            <div className='flex gap-3 w-full max-w-[calc(100%-24px)]'>
              {icon && <div className='flex-shrink-0 mt-0.5'>{icon}</div>}
              <div className='grid gap-1 w-full overflow-hidden'>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription
                    className={`${
                      isComplexContent
                        ? 'max-h-[200px] overflow-y-auto whitespace-pre-wrap'
                        : ''
                    } break-words`}
                  >
                    {typeof description === 'string' &&
                    description.startsWith('{')
                      ? formatJsonString(description)
                      : formatErrorString(description.toString())}
                  </ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

// format JSON strings with indents
function formatJsonString(jsonString: string): string {
  try {
    const parsed = JSON.parse(jsonString)
    console.log(jsonString)
    return JSON.stringify(parsed, null, 2)
  } catch {
    return jsonString
  }
}

// Format regular text with line breaks for status, request header if they exist
function formatErrorString(error: string): React.ReactNode {
  if (error.includes('status')) {
    const parts = error.split('status')
    return (
      <>
        {parts[0]}
        <br />
        {'status' + parts[1]}
      </>
    )
  }
  return error
}
