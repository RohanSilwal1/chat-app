import { ModeToggle } from '@/components/ui/mode-toggle'
import { Sun } from 'lucide-react'
import React from 'react'

const Headers = () => {
  return (
    <div className='flex h-17 w-full flex-row justify-end items-center border-b-2 border-t-2 border-border bg-sidebar px-4 py-2'>
        <ModeToggle/>
    </div>
  )
}

export default Headers