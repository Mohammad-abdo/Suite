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
    p:'  Lorem, ipsum dolor sit amet   elit.dolor sit amet consectetur  Rem excepturi asperiores vitae, doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
]
const ContentInfo=[
  {
    src:'/public/dolar.png',
    content:'$TSLA',
    border:'border-r-[1.47px] border-[#B9B9B9]'
  },
  {
    src:'/public/book.png',
    content:'200 Contracts',
    border:'border-r-[1.47px] border-[#B9B9B9]'
  },
  {
    src:'/public/rang.png',
    content:'12.2%',
    border:'border-r-[1.47px] border-[#B9B9B9]'
  },
  {
    src:'/public/mony.png',
    content:'High risk',
    
  },
]
const RightSection = () => {
  return (
    <div>
      <div className="m-1 bg-gradient-to-r border border-[#ddd]
       from-[#212121] via-[#3f4d8c] to-[#687ac9] shadow rounded-2xl  from-25%"
      
      >
<div className="py-3 px-8  grid grid-cols-4">
  {
    ContentInfo.map((item,index)=>(
      <div className={`flex text-start   `}   key={index}>
  {/* img + word */}
  <div className={`${item.border} flex text-start w-[70%]`}>
     <img src={item.src} alt="" className='w-[26px] mr-2' />
  <span className='text-[#FFFFFF] text-[14px]  font-[Nunito Sans] line-[32px]'> {item.content} </span>
  </div>
 
  </div>

    ))
  }
  
  

</div>
<div className="flex items-center  px-8 py-4  mx-1 my-2">
  <p className='text-[19px] text-[#FFFFFF]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi officiis possimus, animi reprehenderit odit magnam? Dolor aspernatur 
  a ut nam quam ea corporis nostrum expedita error laboriosam. Repellat, beatae.</p>
</div>
      </div>

      {
        TextContent.map((text,index)=>(
          <div key={index}>
            <div className="flex items-center  pl-8 pr-[2px] py-3  mx-1 my-2 rounded-xl border border-[#ddd]">
              <p className="text-[14px]"> {text.p} </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default RightSection
