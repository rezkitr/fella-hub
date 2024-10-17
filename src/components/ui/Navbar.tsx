'use client'

import { COOKIES } from '@/utils/enum'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaPowerOff } from 'react-icons/fa'
import logo from '../../../public/images/logo.webp'

const Navbar = () => {
  const router = useRouter()

  const onSignOut = () => {
    router.replace('/sign-in')
    Cookies.remove(COOKIES.auth)
  }

  return (
    <div className="bg-blue-400 fixed top-0 inset-x-0 px-6 py-5 flex items-center justify-between">
      <Image src={logo} alt="logo" width={100} height={50} />
      <button
        className="text-sm text-white flex items-center gap-x-2"
        onClick={onSignOut}
      >
        <FaPowerOff />
        Sign out
      </button>
    </div>
  )
}

export default Navbar
