import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <div className='bg-orange-100 min-h-screen flex justify-center items-center'>
      <Image src="/ramo-loading.gif" width={100} height={100} alt="Cargando" />
    </div>
  )
}

export default loading