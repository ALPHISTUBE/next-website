import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const links = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About', url: '/about' },
    { id: 3, title: 'Blog', url: '/blog' },
    { id: 4, title: 'Dashboard', url: '/dashboard' },
    { id: 5, title: 'Contact', url: '/contact' },
    { id: 6, title: 'Portfolio', url: '/portfolio' }
];

const Navbar = () => {
  return (
    <div>
        <Link href={links[0].url}><Image src="/logo.jpg" alt="Logo" width={50} height={50} /></Link>
        <div>
            {links.map((link) => (
                <Link key={link.id} href={link.url}>
                    {link.title}
                </Link>
            ))}
        </div>
    </div>
  );
}

export default Navbar;