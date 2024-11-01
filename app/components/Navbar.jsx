import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
        <Image
            src={Logo}
            alt='Dojo Helpdesk Logo'
            width={70}
            quality={100}
        />

        <h1>Ken's Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets"> Tickets</Link>
    </nav>
  )
}
