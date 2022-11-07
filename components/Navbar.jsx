import React, { useState ,useEffect} from 'react'
import * as ReactDOM from 'react-dom';
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaDiscord, FaInstagram, FaTwitter ,FaSun,FaMoon} from 'react-icons/fa'
import { GoMailRead } from 'react-icons/go'


export default function Navbar() {
    const [nav, setNav] = useState('false');  
    const handleNav = () => {
        setNav(!nav);
      };

      const{systemTheme,theme , setTheme} = useTheme()
      const [isMounted, setIsMounted] = useState(false);
      useEffect(() =>  { 
        setIsMounted(true);
       },[]);
    
       const renderThemeChanger = () => {
        if(!isMounted) return null;
        const currentTheme = theme === 'system' ?  systemTheme  : theme ;  
        if(currentTheme === 'dark'){
          return(
            <FaSun className='w-7 h-7' 
              role="button"
              onClick={() => setTheme('light')} 
              />
              )
        } else { 
          return(
            <FaMoon className='w-7 h-7'  role="button"   
            onClick={() => setTheme('dark')}/>
              )
     
        }  
      };
    





      
    return (
        <div className='fixed w-full h-30 '>

            <div className='flex justify-between items-center w-full h-full z-100 px-2 2xl:px-16'>
                <div className='jqAOcG'>  </div>
                
                <div className='flex'>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 '>work</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 '>about</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 '>artlabs</li>
                        </Link>
                        <li className='ml-10'> {renderThemeChanger()} </li>
                    </ul>  
                    <div  onClick={handleNav} className='md:hidden '>
                        <AiOutlineMenu size={50} />
                    </div>
                </div>
            </div>
            <div className={!nav ? 
            'md:hidden fixed top-0 opacity-100 w-full h-screen  backdrop-blur-sm p-10 ease-in duration-500' :
            'md:hidden fixed top-0 opacity-0 w-full h-screen  p-10 ease-in duration-500'  }>
                <div className={nav ? 
                'md:hidden flex top-0  left-0 w-full items-center justify-between ':
                'md:hidden flex top-0  left-0 w-full items-center justify-between ' }>
                
                <Image src="/assets/logo.svg" alt="fukinride Logo" width={72} height={16} /> 
                    <div onClick={handleNav} className='cursor-pointer'><AiOutlineClose size={50} /></div> 
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className=' '>
                        <Link href='/'>
                            <li className='py-4 text-md'>work</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-md'>about</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-md'>artlabs</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>

                    </div>
                    <div className='flex items-center justify-between my-4 w-full'>
                        <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaDiscord size={25} />
                        </div>
                        <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaInstagram size={25} />
                        </div>
                        <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaTwitter size={25} />
                        </div>
                        <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <GoMailRead size={25} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
