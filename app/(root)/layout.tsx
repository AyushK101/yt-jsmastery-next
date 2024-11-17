import { ReactNode } from "react"
import Navbar from "../components/Navbar"

type LayoutType = Readonly<{
  children: ReactNode
}>


export default function Layout({children}: LayoutType) {
  return (
    <main className="font-work-sans">
      <Navbar/>
      {children}
    </main>
  )
}