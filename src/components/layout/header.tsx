import { Menu } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Header() {
  return(
    <header className="flex justify-between items-center px-10 py-3 bg-slate-100 border-b-2 
    border-slate-400 max-w-screen-2xl mx-auto">
      <div>
        <div className="text-2xl">Logo</div>
      </div>

      <ul className="flex items-center">
        <li className="hidden md:flex space-x-8 text-lg">
          <Link href={"/"}>Home</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </li>
        
        <Sheet>
          <SheetTrigger className="md:hidden" >
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="underline decoration-2">Menu</SheetTitle>
              <ul className="">
                <li className="flex  flex-col space-y-4 mt-7">
                  <Link href={"/"}>Home</Link>
                  <Link href={""}>About</Link>
                  <Link href={""}>Contact</Link>
                </li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </ul>
    </header>
  )
}