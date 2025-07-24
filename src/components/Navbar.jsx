import React, { useEffect, useState } from 'react'


import { cn } from '../lib/utils'
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';






const Navbar = () => {

    // Objects for the navbar
const navItems = [
    {name :"Home" , href : "#hero"}, 
    {name :"About" , href : "#about"}, 
    {name :"Skills" , href : "#skills"}, 
    {name :"Projects" , href : "#projects"}, 
    {name :"Contact" , href : "#contact"}, 
    
];

    const [isScrolled , setIsScrolled] = useState(false)
    const [isMenuOpen , setIsMenuOpen] = useState (true)

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll" , handleScroll)
        return ()=> window.removeEventListener("scroll", handleScroll)
    },[])

  return (
    <nav className= {cn("fixed w-full z-40 transition-all duration-300",isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" :"py-5",
        

    )}>
      <div className="container flex items-center justify-between">

    <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
    <span className='relative z-10'>
        <span className='text-glow text-foreground'>
        Abhay   
        </span>
        Portfolio
    </span>

    </a>
      {/* <ThemeToggle/> */}
 

    {/* Desktop  */}

        <div className='hidden md:flex space-x-8'>
            {navItems.map((item , key)=>(
                <a href={item.href} key={key}
                className='text-foreground/80 hover:text-primary transition-colors from-neutral-300'
                >{item.name}</a>
            ))}
        </div>


<div className="absolute right-14 md:static md:ml-4 z-50">
    <ThemeToggle />
  </div>





            {/* mobile  */}
            <button onClick={()=>setIsMenuOpen((prev)=>!prev)}
                className='md:hidden p-2 text-foreground z-50'
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >

                {isMenuOpen ? <X size={24}/> : <Menu size={24}/> }
            
                </button>




            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center" ,"transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"

            )}>

            <div className='flex flex-col space-x-8'>
            {navItems.map((item , key)=>(
                <a href={item.href} key={key}
                className='text-foreground/80 hover:text-primary transition-colors from-neutral-300' onClick={()=>setIsMenuOpen(false)}
                >{item.name}</a>
            ))}
        </div> 
            </div>
            {/* <ThemeToggle/> */}
      </div>
    </nav>
  )
}

export default Navbar