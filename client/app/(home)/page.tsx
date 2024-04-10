import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import Navbar from "./components/navbar"

export default function page() {

  const socials = [
    {
        Link: "https://www.linkedin.com/in/karan-pawar-212599219/",
        Lable:"Linkedin",
        Icon: SiLinkedin
    },
    {
        Link: "https://github.com/Kreez81",
        Lable:"Github",
        Icon: SiGithub
    },
    {
        Link: "https://twitter.com/KaranPawar81",
        Lable:"Twitter",
        Icon: SiX
    }
]

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="min-h-[70svh] max-w-7xl flex flex-col gap-10 mx-auto p-4 items-center text-center justify-center">
        <h1 className="lg:text-5xl text-3xl font-bold">&quot;Streamline Your Entertainment Picks with Ease&quot;</h1>
        <p className="text-[2vh] text-muted-foreground">
          Easily organize and track your favorite movies, books, and shows with our user-friendly platform. <br/>
          This app helps you to simplify your entertainment choices.</p>
        <div className="flex flex-row gap-8">
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/signup">Signup</Link>
          </Button>
        </div>
      </div>
      <footer className="gap-4 flex flex-col text-center justify-center items-center text-[2vh]">
        <div>Created By KARAN</div>
        <div className="gap-5 flex items-center">
            {socials.map((social,index) => {
                const Icon = social.Icon
                return <Link href={social.Link} key={index} area-label={social.Lable} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-[2.2vh] h-[2.2vh] hover:scale-125 transition-all"/>
                </Link>
            })}
        </div>
      </footer>
      <BackgroundBeams />
    </div>

  )
}

