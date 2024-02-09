import React from 'react'

const Links=[
    {
        title:'Trading',
        link:'/',
        soon:<div className='absolute flex items-center justify-center top-[8px] ml-1'> <span className='sm:text-sm xl:text-sm text-[7px] px-2 bg-[#9089DC]  text-yellow-50 rounded-3xl   '>coming soon</span></div>,
        span:'coming soon',
        border:'border-r-[1.47px] border-[#B9B9B9]'
    },
    {
        title:'Automation',
        link:'/',
        soon:<div className='absolute flex items-center justify-center top-[8px] ml-1'> <span className='sm:text-sm xl:text-sm text-[7px] px-2 bg-[#9089DC]  text-yellow-50 rounded-3xl   '>coming soon</span></div>,

        span:'coming soon',
        border:'border-r-[1.47px] border-[#B9B9B9]'
    },
    {
        title:'Protfolio',
        soon:<div className='absolute flex items-center justify-center top-[8px] ml-1'> <span className='sm:text-sm xl:text-sm text-[7px] px-2 bg-[#9089DC] text-yellow-50 rounded-3xl   '>coming soon</span></div>,

        link:'/',
        span:'coming soon',
        border:'border-r-[1.47px] border-[#B9B9B9]'
    },
    {
        title:'Alrets',
        link:'/',
        border:'border-r-[1.47px] border-[#B9B9B9]'

       
    },
    {
        title:'Traning',
        link:'/',
      
    },
]


const BottomNav=()=>{

 return(<>
<div className='bg-black h-[90px] rounded-2xl mx-2 sm:mx-5 xl:mx-5 flex relative'>


<div className="grid grid-cols-5 w-full relative">
    
   {
    Links.map((link,index)=>(
        <div key={index} className='text-sm sm:text-3xl md:text-lg xl:text-3xl text-center flex items-center justify-center text-[#484848] w-full '> {link.soon}
<a href={link.link} className={` ${link.border} w-full `} >  {link.title}</a>
        </div> 
     

    ))
   }
</div>



</div>
 
 </>)

}
export default BottomNav