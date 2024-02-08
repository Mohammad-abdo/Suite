import React from 'react'


const TextContent  =[
  {
    p:' doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  {
    p:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi asperiores vitae, doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  {
    p:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi asperiores vitae, doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  {
    p:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi asperiores vitae, doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  {
    p:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi asperiores vitae, doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  {
    p:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi asperiores vitae, doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
]
const RightSection = () => {
  return (
    <div>
      <div className="m-1 bg-gradient-to-r border border-[#ddd] from-[#212121] via-[#3f4d8c] to-[#687ac9] shadow rounded-2xl h-[150px] from-25%"
      
      >
<div className="p-3  grid grid-cols-4">
  <div className=" flex items-center justify-center  border-r-2 border-white">
  {/* img + word */}
  <img src="/public/dolar.png" alt="" className='w-[20px]' />
  <span className='text-[] text-[20px] font-semibold font-[Nunito Sans] line-[32px]'>STSLA</span>
  </div>
  <div className=" flex items-center justify-center  border-r-[1.47px] border-[#B9B9B9]">
  {/* img + word */}
  </div>
  <div className=" flex items-center justify-center  border-r-2 border-white">
   {/* img + word */}
  </div>
  <div className=" flex items-center justify-center ">
   {/* img + word */}
  </div>

</div>
      </div>

      {
        TextContent.map((text,index)=>(
          <div key={index}>
            <div className="flex items-center  px-3 py-4  mx-1 my-2 rounded-xl border border-[#ddd]">
              <p className="text-[14px]"> {text.p} </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default RightSection
