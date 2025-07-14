import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);
    const [active, setActive] = useState('Home');

    const navLinks = [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/#about' },
      { name: 'Projects', href: '/#projects' },
      { name: 'Resume', href: '/#resume' },
      { name: 'Contact', href: '/#contact' }
    ];

    return <header className="flex justify-between px-5 py-4 bg-white shadow-md sticky top-0 z-50">
        <a className="font-bold text-primary text-xl hover:text-secondary transition-colors" href="#">Jeeva S</a>
        <nav className="hidden md:block">
            <ul className="flex text-secondary gap-8 font-medium">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`px-2 py-1 rounded transition-all duration-300 hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white ${active === link.name ? 'bg-secondary text-white shadow-lg' : ''}`}
                      onClick={() => setActive(link.name)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`px-2 py-1 rounded transition-all duration-300 hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white ${active === link.name ? 'bg-secondary text-white shadow-lg' : ''}`}
                      onClick={() => setActive(link.name)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
          <Bars3Icon className='text-secondary h-8 w-8'/>
        </button>
    </header>
}