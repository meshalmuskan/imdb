import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { SignedIn,SignedOut,UserButton } from '@clerk/nextjs';
export default function Header() {
    return(
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
            <ul className="flex gap-4">
                <SignedIn>
                    <UserButton/>
                </SignedIn>
               <SignedOut>
               <Link href={'/sign-in'} className='hover:text-amber-500'>Sign in</Link>
                   
               </SignedOut>
                    
              
                <li className='hidden sm:block'>
                    <Link href={'/'} className='hover:text-amber-500'>Home</Link>

                </li>
                <li className='hidden sm:block'>
                    <Link href={'/favourites'} className='hover:text-amber-500'>Favourites</Link>
                </li> 
                <li className='hidden sm:block'>
                    <Link href={'/about'} className='hover:text-amber-500'>About</Link>
                </li>    
            </ul>
            <div className="flex gap-1 items-center">
                <DarkModeSwitch/>
            
            <Link href={'/'} className='flex gap-1 items-center'>
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
                IMDB</span>
                <span className='text-xl hidden sm:inline'>Clone</span></Link>
                </div>
        </div>
    )
}