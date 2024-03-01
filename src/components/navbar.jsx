import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'iconsax-react'
import logo from '@/app/icon.png'

function NavBar() {
  const items = [
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'my-services' },
    { name: 'Fees and FAQ', path: 'fees-faq' },
    { name: 'Contact', path: 'contact' },
  ]

  return (
    <nav className='absolute z-1 px-16 py-5 flex items-center justify-between w-full'>
      <div className='relative w-8 h-8'>
        <Link href='/'>
          <Image
            className='object-cover drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]'
            src={logo}
            fill
          />
        </Link>
      </div>
      <ul>
        {items.map(({ name, path }) => (
          <li className='inline px-10' key={path}>
            <Link href={`/${path}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <button className='border-white border-2 rounded-full px-6 py-3'>
        Individual therapy &nbsp;
        <ArrowRight className='inline' size='20' color='#ffffff' />
      </button>
    </nav>
  )
}

export default NavBar
