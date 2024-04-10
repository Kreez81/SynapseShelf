import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Navbar from "../components/navbar";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className=" w-full flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com" 
                required />
            </div>
            <div className="grid gap-4">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit">
              Login
            </Button>
            <Button variant="outline">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
