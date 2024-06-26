'use client' // Add this line at the top

import React from 'react'
import { useRouter } from 'next/navigation'

const ClientComponent: React.FC = () => {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/about')
  }

  return (
    <div>
      <button onClick={handleNavigation}>Go to About Page</button>
    </div>
  )
}

export default ClientComponent
