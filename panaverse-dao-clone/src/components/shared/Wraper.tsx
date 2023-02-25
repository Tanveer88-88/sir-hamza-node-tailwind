import React from 'react'

function Wraper({children}:{children:React.ReactNode}) {
  return (
    <div className='max-w-screen-2xl mx-auto px-4'>
        {children}
    </div>
  )
}

export default Wraper
