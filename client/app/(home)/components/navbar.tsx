import React from 'react'
import { IoLogoBuffer } from 'react-icons/io'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'

export default function navbar() {
  return (
    <div>
        <nav className="max-w-7xl mx-auto lg:p-10 p-5 flex justify-between text-[3.1vh]">
        <Link href="http://localhost:3000"><h1 className="flex flex-row">Synapse<IoLogoBuffer/>Shelf</h1></Link>
        <ModeToggle/>
      </nav>
    </div>
  )
}

