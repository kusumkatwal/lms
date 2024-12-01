"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import logo from "../assets/images/LOGO.png";

export function MainNav() {
  return (
    <div className="flex w-full items-center justify-between ">
      <nav className="flex items-center space-x-6">
        <Link href="/" className="text-lg font-semibold text-primary">
          <Image src={logo.src} alt="" height={100} width={100} className="h-[70px] w-20"/>
        </Link>
        <Link href="/" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
          Home
        </Link>
        <Link href="/courses" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
          Courses
        </Link>
        <Link href="/assignments" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
          Assignments
        </Link>
        {/* <Link href="/register" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
          Enrollment
        </Link> */}
      </nav>
      <div className="flex items-center space-x-4">
       <Link href="/login"> <Button variant="ghost" className="text-base">Log In</Button></Link>
        <Link href="/register"><Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base">Register</Button></Link>
      </div>
    </div>
  )
}

