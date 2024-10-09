import { LucideDot } from 'lucide-react'
import React from 'react'
import Text from './Text'

function Infomation() {
  return (
    <div>
         <div className="space-y-4">
          <h2 className="text-xl font-bold">I make <span className="text-green-600"><Text/></span></h2>
          <p className="text-gray-300 text-md">
           Hi, I'm Raman Prakash. A self-taught, frontend-focused devloper based in Noida, India. Crafting Modern Web Applications with my brain & laptop 
          </p>

          <p className='text-sm -mt-2'>Currently, I'm exploring {""}
          <span className='relative inline-block text-white'>
        <span className='absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded p-1'></span>
        <span className='relative z-10 text-green-400 font-bold italic p-2 '>Next.js</span>
      </span> {""}
      <span className='relative inline-block text-white'>
        <span className='absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded p-1'></span>
        <span className='relative z-10 text-green-400 font-bold italic p-2'>React</span>
      </span>  and
      <span className='relative inline-block text-white'>
        <span className='absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded p-1'></span>
        <span className='relative z-10 text-green-400 font-semibold italic p-2'>SEO</span>
      </span> with some other cool stuffs</p>
          {/* <p className='text-xs italic text-muted-foreground'>Resume</p> */}
          
          {/* <a 
             href="https://drive.google.com/file/d/1ldwJDKYGmKOMR5kO9AsAJXmC93VT08BG/view?usp=drive_link" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-green-500 flex gap-2 opacity-90 text-sm hover:underline"
           >
  <LucideDot className='animate-ping' /> Resume
</a> */}

        </div>
    </div>
  )
}

export default Infomation