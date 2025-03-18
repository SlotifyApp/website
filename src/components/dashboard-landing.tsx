'use client'

import { motion } from 'framer-motion'
import { Pacifico } from 'next/font/google'
import { cn } from '@/lib/utils'
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Calendar, Clock, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-gray-200',
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        style={{
          width,
          height,
        }}
        className='relative'
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'backdrop-blur-[2px] border-2 border-gray-400/70',
            'shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]',
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function LandingPage() {
  const [showDetails, setShowDetails] = useState(false)
  const detailsRef = useRef<HTMLDivElement>(null)

  const handleLogin = () => {
    // Construct the /authorize URL
    const clientId = process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_ID
    const tenantId = process.env.NEXT_PUBLIC_MICROSOFT_TENANT_ID
    const redirectUri = encodeURIComponent(
      process.env.NEXT_PUBLIC_API_URL + 'api/auth/callback',
    )
    const scopes = encodeURIComponent(
      'openid profile email User.ReadWrite Calendars.ReadBasic Calendars.Read Calendars.ReadWrite Calendars.ReadWrite.Shared Group.ReadWrite.All Place.Read.All People.Read.All',
    ) // Replace with your required scopes
    const state = '12345' // Random string for CSRF protection

    const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}&state=${state}`

    // Redirect the user to the /authorize endpoint
    window.location.href = authUrl
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const handleLearnMore = () => {
    setShowDetails(true)
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className='relative w-full bg-white'>
      <div className='min-h-screen flex flex-col'>
        <div className='flex-grow flex items-center justify-center relative'>
          <div className='absolute inset-0 bg-gradient-to-br from-indigo-300/50 via-transparent to-rose-300/50 blur-3xl' />

          <div className='absolute inset-0 overflow-hidden'>
            <ElegantShape
              delay={0.3}
              width={600}
              height={140}
              rotate={12}
              gradient='from-indigo-400/70'
              className='left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]'
            />

            <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient='from-rose-400/70'
              className='right-[-5%] md:right-[0%] top-[70%] md:top-[75%]'
            />

            <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient='from-violet-400/70'
              className='left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]'
            />

            <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={20}
              gradient='from-amber-400/70'
              className='right-[15%] md:right-[20%] top-[10%] md:top-[15%]'
            />

            <ElegantShape
              delay={0.7}
              width={150}
              height={40}
              rotate={-25}
              gradient='from-cyan-400/70'
              className='left-[20%] md:left-[25%] top-[5%] md:top-[10%]'
            />
          </div>

          <div className='relative z-10 container mx-auto px-4 md:px-6'>
            <div className='max-w-3xl mx-auto text-center'>
              <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial='hidden'
                animate='visible'
              >
                <h1 className='text-5xl sm:text-7xl md:text-9xl font-bold mb-6 md:mb-8 tracking-tight'>
                  <span
                    className={cn(
                      'bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500',
                      pacifico.className,
                    )}
                  >
                    Slotify
                  </span>
                </h1>
              </motion.div>

              <motion.div
                custom={1}
                variants={fadeUpVariants}
                initial='hidden'
                animate='visible'
              >
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight'>
                  <span className='bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600'>
                    AI-Powered Scheduling
                  </span>
                </h2>
              </motion.div>

              <motion.div
                custom={2}
                variants={fadeUpVariants}
                initial='hidden'
                animate='visible'
              >
                <p className='text-base sm:text-lg md:text-xl text-gray-500 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4'>
                  Effortlessly manage your time with Slotify, the intelligent
                  scheduling assistant that adapts to your needs.
                </p>
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeUpVariants}
                initial='hidden'
                animate='visible'
              >
                <Button
                  size='lg'
                  className='bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-3 px-6 py-3 w-72 mx-auto text-lg font-medium'
                  onClick={handleLogin}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 21 21'
                    className='mr-1'
                  >
                    <rect x='1' y='1' width='9' height='9' fill='#f25022' />
                    <rect x='1' y='11' width='9' height='9' fill='#00a4ef' />
                    <rect x='11' y='1' width='9' height='9' fill='#7fba00' />
                    <rect x='11' y='11' width='9' height='9' fill='#ffb900' />
                  </svg>
                  Sign in with Microsoft
                </Button>
              </motion.div>
            </div>
          </div>

          <div className='absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 pointer-events-none' />
        </div>
      </div>

      {showDetails && (
        <div
          ref={detailsRef}
          id='body2'
          className='w-full flex flex-col justify-between items-center'
        >
          <section className='border-t bg-muted/90 w-full relative overflow-hidden'>
            <div className='relative z-10'>
              <div className='flex flex-row justify-center mt-20'>
                <div className='flex flex-row w-[70vw] justify-between items-center'>
                  <Card className='w-[20vw]'>
                    <CardContent className='pt-6'>
                      <div className='flex flex-col items-center space-y-4 text-center'>
                        <Calendar className='h-12 w-12 text-focusColor' />
                        <h3 className='font-bold'>Easy Scheduling</h3>
                        <p className='text-sm text-muted-foreground'>
                          Create and manage meetings with just a few clicks.
                          Automatically find the best time for everyone.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='w-[20vw]'>
                    <CardContent className='pt-6'>
                      <div className='flex flex-col items-center space-y-4 text-center'>
                        <Clock className='h-12 w-12 text-focusColor' />
                        <h3 className='font-bold'>Time Zone Friendly</h3>
                        <p className='text-sm text-muted-foreground'>
                          Schedule meetings across different time zones without
                          hassle. Perfect for regional councils.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='w-[20vw]'>
                    <CardContent className='pt-6'>
                      <div className='flex flex-col items-center space-y-4 text-center'>
                        <Users className='h-12 w-12 text-focusColor' />
                        <h3 className='font-bold'>Group Collaboration</h3>
                        <p className='text-sm text-muted-foreground'>
                          Invite group members and collaborate seamlessly. Keep
                          everyone in sync.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className='container py-12 md:py-24 lg:py-32 relative z-10'>
                <div className='mx-auto max-w-5xl'>
                  <div className='grid gap-8 md:grid-cols-2'>
                    <div className='flex flex-col justify-center space-y-4'>
                      <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-focusColor'>
                          Trusted by Councils Across the UK
                        </h2>
                        <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                          Join hundreds of local government organizations
                          already using Slotify to streamline their meeting
                          scheduling.
                        </p>
                      </div>
                      <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                          <CheckCircle className='h-4 w-4 text-primary' />
                          <span className='font-medium'>GDPR Compliant</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <CheckCircle className='h-4 w-4 text-primary' />
                          <span className='font-medium'>
                            ISO 27001 Certified
                          </span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <CheckCircle className='h-4 w-4 text-primary' />
                          <span className='font-medium'>UK Data Centers</span>
                        </div>
                      </div>
                    </div>
                    <div className='grid gap-4 md:grid-cols-2'>
                      <Card>
                        <CardContent className='pt-6'>
                          <blockquote className='space-y-2'>
                            <p className='text-sm'>
                              &quot;Slotify has transformed how we schedule
                              council meetings. What used to take hours now
                              takes minutes.&quot;
                            </p>
                            <footer className='text-sm text-muted-foreground'>
                              - Sarah Thompson, Council Secretary
                            </footer>
                          </blockquote>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className='pt-6'>
                          <blockquote className='space-y-2'>
                            <p className='text-sm'>
                              &quot;The automated scheduling has saved our
                              administrative group countless hours. Highly
                              recommended.&quot;
                            </p>
                            <footer className='text-sm text-muted-foreground'>
                              - James Wilson, Council Leader
                            </footer>
                          </blockquote>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      <motion.div
        className='fixed bottom-8 right-8 z-50'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Button
            variant='outline'
            size='icon'
            className='rounded-full w-12 h-12 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300'
            onClick={handleLearnMore}
          >
            <ArrowDown className='h-6 w-6' />
          </Button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className='border-t w-full bg-muted/90'>
        <div className='container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between'>
          <div className='flex flex-col gap-2 ml-32'>
            <Link href='/' className='flex items-center space-x-2'>
              <span className='text-lg font-bold'>Slotify</span>
            </Link>
            <p className='text-sm text-muted-foreground'>
              © 2025 Slotify. All rights reserved.
            </p>
          </div>
          <nav className='flex gap-4'>
            <Link
              href='/swagger/index.html'
              className='text-sm hover:underline'
            >
              Slotify API Docs
            </Link>
            <Link href='/privacy' className='text-sm hover:underline'>
              Privacy
            </Link>
            <Link href='/terms' className='text-sm hover:underline'>
              Terms
            </Link>
            <Link href='/contact' className='text-sm hover:underline'>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
