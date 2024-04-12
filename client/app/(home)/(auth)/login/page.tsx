"use client";

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from "../../components/navbar";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BackgroundBeams } from '@/components/ui/background-beams'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import { LuLoader2 } from 'react-icons/lu';
import { toast } from 'sonner';

export default function LogPage() {

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleInputChange = (event: any) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/` + user.email, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = await res.json();
      if (!userData) {
        toast.error("Account doesn't exist!");
        setLoading(false);
        return;
      }

      // Compare the password
      if (userData.password !== user.password) {
        toast.error("Incorrect password!");
        setLoading(false);
        return;
      }
      // router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className=" w-full flex items-center justify-center py-12 px-4">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={handleInputChange}
                  placeholder="m@example.com"
                  required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label>Password</Label>
                </div>
                <Input name="password" type="password" required value={user.password} onChange={handleInputChange} />
              </div>
              {loading ?
                <Button disabled>
                  <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
                :
                <Button type="submit">
                  Login
                </Button>
              }
              <Button variant="outline" disabled={loading} className="gap-3">
                <FcGoogle />
                Login with Google
              </Button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline hover:text-slate-300 transition-all">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}
