'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {signIn, signOut } from '@/auth'

const NavbarContent = ({session}: {session: any}) => {
  return (
    <>
       <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-center items-center'>
        <Link href={"/"}>
          <Image src={"/logo.png"} alt={"logo"} width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {
            session && session?.user ? (
              <>
                <Link href={"/startup/create"}>
                  <span>Create</span>
                </Link>
                <button onClick={async ()=> await signOut({ redirectTo: "/"})}>
                  <span>Logout</span>
                </button>

                <Link href={`/user/${session?.user?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <>
                <form action={async () => {
                  "use server"
                  await signIn('github')}}>
                    <button type='submit'>Login</button>
                </form>
              </>
            )
          }
        </div>
      </nav>
    </header>
    </>
  )
}

export default NavbarContent