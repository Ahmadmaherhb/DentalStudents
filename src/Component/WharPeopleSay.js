import React from 'react';

function WharPeopleSay() {
  return (
    <div className=" flex   bg-slate-600 w-screen h-[579px]">
   {/* القسم الاول تبع الصورة */}
   <div className='bg-red-500 w-[43%] h-full'>
    <img src='/imgoftuth.png' alt='tuth'/>
   </div>

   {/* القسم الثاني  */}
   <div className='bg-pink-700 w-[57%]  flex-col'>
            <div>
                <h1 className='mb-11 pt-2 font-bold text-3xl'>What do people say about us?</h1>
            </div>
{/* w---------------------------------------- */}
            <div className='flex flex-row bg-orange-500 w-[390px] h-[95px] ml-7 mb-11'>
                <div className='w-[30%]'>
                    <img src='ELLipse 33.png' className='border-gray-950 border-2 border-solid rounded-full'/>
                    </div>
                <div className='w-[70%] bg-slate-500 rounded-3xl flex-col '>
                    <p className='w-full h-[50%] pt-4 pl-4 text-2xl'>some text.. some text..</p>
                    <p className='w-full h-[50%] pt-2 pl-4 text-2xl'>- David</p>
                </div>
            </div>
{/* --------------------------------------------------------- */}
            <div className='flex flex-row bg-orange-500 w-[390px] h-[95px] ml-80 mb-11'>
            <div className='w-[70%] bg-slate-500 rounded-3xl flex-col mr-7'>
                    <p className='w-full h-[50%] pt-4 pl-9 text-2xl'>some text..</p>
                    <p className='w-full h-[50%] pt-2 pr-20 text-2xl text-right'>Mia -</p>
                </div>
            <div className='w-[30%] '>
                    <img src='ELLipse 33 (2).png'/>
                    </div>
            </div>
{/* --------------------------------------------------------- */}
              <div className='flex flex-row bg-orange-500 w-[390px] h-[95px] ml-7 mb-11'>
                <div className='w-[30%]'>
                    <img src='ELLipse 34 (3).png' className='border-gray-950 border-2 border-solid rounded-full'/>
                    </div>
                <div className='w-[70%] bg-slate-500 rounded-3xl flex-col '>
                    <p className='w-full h-[50%] pt-4 pl-4 text-2xl'>some text.. some text..</p>
                    <p className='w-full h-[50%] pt-2 pl-4 text-2xl'>- David</p>
                </div>
            </div>

   </div>
{/* النهاية =====================================*/}
   </div>
  );
}

export default WharPeopleSay;
