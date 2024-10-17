import { Navbar } from '@/components/ui'
import React from 'react'

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">{children}</div>
    </div>
  )
}

export default HomeLayout
