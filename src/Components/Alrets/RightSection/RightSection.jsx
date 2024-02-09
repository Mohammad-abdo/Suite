import React from 'react';
import { Book, Dolar, Mony, Rang } from '../../../assets';
  

 

  

  
const TextContent = [
  {
    p: 'Doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  {
    p: 'Rem excepturi asperiores vitae, doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  {
    p: 'Doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  {
    p: 'Rem excepturi asperiores vitae, doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  {
    p: 'Doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  {
    p: 'Rem excepturi asperiores vitae, doloribus rerum odio voluptatibus labore illum corrupti, itaque dolorum.'
  },
  // Add more items as needed
];

const ContentInfo = [
  {
    src: Dolar,
    content: '$TSLA',
    border: 'border-[#B9B9B9] sm:border-r-[1.47px] xl:border-r-[1.47px] md:border-r-[1.47px] lg:border-r-[1.47px]'
  },
  {
    src: Book,
    content: '200 Contracts',
    border: 'border-[#B9B9B9] sm:border-r-[1.47px] xl:border-r-[1.47px] md:border-r-[1.47px] lg:border-r-[1.47px]'
  },
  {
    src: Rang,
    content: '12.2%',
    border: 'border-[#B9B9B9] sm:border-r-[1.47px] xl:border-r-[1.47px] md:border-r-[1.47px] lg:border-r-[1.47px]'
  },
  {
    src: Mony,
    content: 'High risk'
  },
  // Add more items as needed
];

const RightSection = () => {
  return (
    <div>
      {/* ContentInfo */}
      <div className="m-1 bg-gradient-to-r border border-[#ddd] from-[#212121] via-[#3f4d8c] to-[#687ac9] shadow sm:rounded-2xl xl:rounded-2xl rounded-lg from-25%">
        <div className="py-3 sm:px-8 xl:px-8 px-3 grid grid-cols-4">
          {ContentInfo.map((item, index) => (
            <div className={`flex text-start`} key={index}>
              <div className={`${item.border} flex text-start items-center w-[100%] xl:w-[70%] md:w-[90%] sm:w-[70%]`}>
                <img src={item.src} alt="" className='sm:w-[26px] xl:w-[26px] w-[10px] h-auto mr-2' />
                <span className='text-[#FFFFFF] sm:text-[16px] xl:text-[16px] md:text-[16px] text-[10px] font-[Nunito Sans] bg-dark'>{item.content}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Additional content */}
        <div className="flex items-center sm:px-8 xl:px-8 px-3 py-4 mx-1 my-2">
          <p className='sm:text-[19px] xl:text-[19px] md:text-[13px] text-[11px] text-[#FFFFFF]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi officiis possimus, animi reprehenderit odit magnam? Dolor aspernatura ut nam quam ea corporis nostrum expedita error laboriosam. Repellat, beatae.
          </p>
        </div>
      </div>
      {/* TextContent */}
      {TextContent.map((text, index) => (
        <div key={index}>
          <div className="flex items-center xl:pl-8 sm:pl-8 px-3 xl:pr-[2px] sm:py-3 xl:py-3 py-1 mx-1 my-2 rounded-lg xl:rounded-xl sm:rounded-xl border border-[#ddd]">
            <p className="text-[10px] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[14px]">{text.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSection;
