"use client";

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from "../../components/navbar";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BackgroundBeams } from '@/components/ui/background-beams'
import { FcGoogle } from "react-icons/fc";
import { LuLoader2 } from "react-icons/lu";
import { useRouter } from 'next/navigation';
import { toast } from "sonner";

export default function SignPage() {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
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
        if (user.password.length < 6) {
            toast.error("Password should be of atleast 6 digits!");
            setLoading(false);
            return;
        }
        try {
            //check whether email already exists
            const res = await fetch(`http://localhost:8080/api/get-user/${encodeURIComponent(user.email)}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) {
                toast.error("Something went wrong!");
                setLoading(false);
                return;
            }
            if(res.status == 200){
                toast.error("User with this email already exists!");
                setLoading(false);
                return;
            }
            // create new user 
            const userRes = await fetch(`http://localhost:8080/api/create-user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (!userRes.ok) {
                toast.error("Something went wrong!");
                setLoading(false);
                return;
            }
            router.push("/login");
            toast.success("Account successfully created!", { description: "Login with your credentials" });
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });
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
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your details to create an account
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label>First name</Label>
                                <Input name="firstName" value={user.firstName} onChange={handleInputChange} placeholder="first" required />
                            </div>
                            <div className="grid gap-2">
                                <Label>Last name</Label>
                                <Input name="lastName" value={user.lastName} onChange={handleInputChange} placeholder="last" required />
                            </div>
                        </div>
                        <div className="grid gap-6 mt-6">
                            <div className="grid gap-2">
                                <Label>Email</Label>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    value={user.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label>Password</Label>
                                </div>
                                <Input name="password" value={user.password} onChange={handleInputChange} type="password" required />
                            </div>
                            {loading ?
                                <Button disabled>
                                    <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </Button>
                                :
                                <Button type="submit">
                                    Signup
                                </Button>
                            }
                            <Button variant="outline" disabled={loading} className="gap-3">
                                <FcGoogle />
                                Signup with Google
                            </Button>
                        </div>
                    </form>

                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline hover:text-slate-300 transition-all">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    )
}
