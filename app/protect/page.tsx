import Link from 'next/link'
import { SignedIn, UserButton } from '@clerk/nextjs'


function page() {
  return (<>
    <nav className="bg-green-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">My App</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                
                    Home
                 
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  
                    About
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
    <SignedIn>
      <UserButton afterSignOutUrl='/' />
    </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  </>

  )
}

export default page