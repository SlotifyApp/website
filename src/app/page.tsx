"use client";
import { useEffect } from "react";
import slotifyClient from "@/hooks/fetch";
import Image from "next/image";
import BackgroundPaths from "@/components/BackgroundPaths"; // Import background component
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const fetchUser = async () => {
      // Detects whether the access token or refresh token are valid.
      // If either one is, then redirect to /dashboard.
      const { response } = await slotifyClient.GET("/api/users/me", {});
      if (response.status == 200) {
        window.location.href = "/dashboard";
      } else if (response.status == 401) {
        const { response } = await slotifyClient.POST("/api/refresh", {});
        if (response.status == 201) {
          window.location.href = "/dashboard";
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="relative min-h-screen min-w-screen flex flex-col items-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Background Animation */}
      <BackgroundPaths />

      {/* Page Content */}
      <div className="relative h-full z-10 flex flex-col items-center w-full">
        {/* Header */}
        <div
          id="header"
          className="min-h-[5vh] w-full flex flex-row justify-between items-center bg-white border-solid"
        >
          <div className="ml-5 text-2xl font-semibold">Slotify</div>
          <div className="min-w-72 min-h-16 flex flex-row justify-between items-center">
            <div className="transform transition duration-300 hover:scale-110">
              About
            </div>
            <div className="transform transition duration-300 hover:scale-110">
              Contact
            </div>
            <div
              className="h-10 w-20 rounded-lg bg-focusColor text-white font-semibold drop-shadow-lg flex items-center justify-center transform transition duration-300 hover:scale-110 mr-5"
              onClick={() => (window.location.href = "/login")}
            >
              Log in
            </div>
          </div>
        </div>

        {/* 1st Body */}
        <div
          id="body1"
          className="flex flex-col justify-center min-h-[95vh] w-full"
        >
          <div className="flex flex-row justify-center items-center text-4xl font-semibold mt-32 drop-shadow-lg">
            One tap to book your next meeting
          </div>
          <div className="flex flex-row justify-center items-center text-center mt-3">
            <div className="max-w-2xl">
              Slotify uses AI to dynamically find the best meeting time based on
              everyone&apos;s availability—no hassle, just smart scheduling.
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-10">
            <div
              className="flex justify-center items-center h-12 w-44 rounded-lg bg-focusColor text-white font-semibold drop-shadow-lg transform transition duration-300 hover:scale-110 mr-5"
              onClick={() => (window.location.href = "/login")}
            >
              Get started now
            </div>
          </div>
          <div className="flex flex-row w-full justify-center items-start mt-10 max-h-52 overflow-clip">
            <Image
              src="/assets/images/slotify-preview.png"
              alt="Slotify Preview - to be replaced" // TODO replace this image
              width={400}
              height={200}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-row justify-center mt-10 text-xs text-gray-500 px-4 py-2">
            <div className="max-w-[70vw] backdrop-blur-lg rounded-lg bg-white/30">
              Working in conjunction with AWS & councils across the United
              Kingdom
            </div>
          </div>

          <div className="flex flex-row justify-center items-center mt-14">
            <div className="-lg flex size-10 animate-bounce items-center justify-center rounded-full bg-white p-2 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20">
              <svg
                className="size-6 text-violet-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* 2nd Body */}
        <div
          id="body2"
          className="w-full flex flex-col justify-between items-center"
        >
          <section className="border-t bg-muted/90 w-full">
            <div className="flex flex-row justify-center mt-20">
              <div className="flex flex-row w-[70vw] justify-between items-center">
                <Card className="w-[20vw]">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <Calendar className="h-12 w-12 text-focusColor" />
                      <h3 className="font-bold">Easy Scheduling</h3>
                      <p className="text-sm text-muted-foreground">
                        Create and manage meetings with just a few clicks.
                        Automatically find the best time for everyone.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="w-[20vw]">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <Clock className="h-12 w-12 text-focusColor" />
                      <h3 className="font-bold">Time Zone Friendly</h3>
                      <p className="text-sm text-muted-foreground">
                        Schedule meetings across different time zones without
                        hassle. Perfect for regional councils.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="w-[20vw]">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <Users className="h-12 w-12 text-focusColor" />
                      <h3 className="font-bold">Team Collaboration</h3>
                      <p className="text-sm text-muted-foreground">
                        Invite team members and collaborate seamlessly. Keep
                        everyone in sync.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="container py-12 md:py-24 lg:py-32">
              <div className="mx-auto max-w-5xl">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-focusColor">
                        Trusted by Councils Across the UK
                      </h2>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Join hundreds of local government organizations already
                        using Slotify to streamline their meeting scheduling.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="font-medium">GDPR Compliant</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="font-medium">ISO 27001 Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="font-medium">UK Data Centers</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardContent className="pt-6">
                        <blockquote className="space-y-2">
                          <p className="text-sm">
                            &quot;Slotify has transformed how we schedule
                            council meetings. What used to take hours now takes
                            minutes.&quot;
                          </p>
                          <footer className="text-sm text-muted-foreground">
                            - Sarah Thompson, Council Secretary
                          </footer>
                        </blockquote>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <blockquote className="space-y-2">
                          <p className="text-sm">
                            &quot;The automated scheduling has saved our
                            administrative team countless hours. Highly
                            recommended.&quot;
                          </p>
                          <footer className="text-sm text-muted-foreground">
                            - James Wilson, Council Leader
                          </footer>
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t w-full bg-muted/90">
          <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 ml-32">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-lg font-bold">Slotify</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                © 2025 Slotify. All rights reserved.
              </p>
            </div>
            <nav className="flex gap-4">
              <Link href="/privacy" className="text-sm hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm hover:underline">
                Terms
              </Link>
              <Link href="/contact" className="text-sm hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
