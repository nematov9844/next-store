import React from 'react'

export default function Catogory({props}) {
  return (
    <div className='w-full bg-[rgba(0,0,0,0.1)] p-4 flex flex-col gap-4'>
        <h1 className='text-4xl font-semibold'>Kategoriyalar</h1>
      <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 ' >
      {
          props.map((item)=>{
              return (
                <div key={item.id + Math.floor(Math.random() * 100000)} className='bg-white p-3 rounded-md text-center'>
                    <img src={item.img} alt=""  className='w-full '/>
                    <h1 className='text-xs md:text-xl'>{item.title}</h1>
                </div>
            )
        })
      }
      </div>
      <div className='w-full flex justify-center'>
      <button className='w-full bg-white rounded-md px-4 py-2'>Batafsil</button>
      </div>
    </div>
  )
}
