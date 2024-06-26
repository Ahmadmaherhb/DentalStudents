import React, { useState } from 'react';

const ClientDashboardBookAppointment = () => {
  return(
    <div className="min-h-screen bg-gray-100">
      <div className="w-full mx-auto bg-[#F2F1FE] rounded-lg overflow-hidden">
        <div className="flex">
          <div className="w-2/12 mr-20 bg-[#FFFFFF]">
            <div className="text-center mb-12">
              <div className="w-32 h-32 rounded-full m-auto mt-12 mb-6 border-[#55CDF1] border-8 border-solid">
              <img src={"/img2.png"}alt="Sam Alex" className='w-24 h-24 m-auto mt-2'/>
              </div>
              <div className='flex ml-20'>
              <h2 className="text-lg font-bold mr-4">Sam Alex</h2>
              <img src={'/img3.png'}alt='pen' className='w-6 h-6'/>
              </div>
            </div>
            <nav>
              <ul>
                <li className="mb-4">
                  <a href="#" className="flex items-start text-[#55CDF1] border-white border-l-[#55CDF1] border-4 border-solid pl-2">
                    <span className="material-icons mr-4">home</span>Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="flex items-center ml-2">
                    <img src={"/img10.png"} alt='calendar icon' className='mr-4'/>
                    <span className="mr-4">Appointment</span>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="flex items-center ml-2">
                    <img src={"/img11.png"} alt='inbox icon' className='mr-4'/>
                    <span className="mr-4">Inbox</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center ml-2">
                    <img src={"/img12.png"} alt='logout icon' className='mr-4'/>
                    <span className="mr-4">Log out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-3/4">
            <img src={'/img14.png'} alt='back icon' className='pt-14 pl-8'/>
            <h1 className='font-bold text-3xl pl-8 pt-14'>Book an appointment</h1>
            <form className='flex justify-between w-full'>
                <div className='mb-4 w-5/12 relative border border-gray-400 rounded-md mt-10 ml-8'>
                    <label className='absolute -top-2.5 left-2.5 bg-[#F2F1FE] px-1 text-gray-700 text-xs'>Dr. Name</label>
                    <input type='text' placeholder='Enter Dr. Name' className='px-3 py-2 rounded-md w-full'/>
                </div>
                <div className='mb-4 w-5/12 relative border border-gray-400 rounded-md mt-10 mr-16'>
                    <label className='absolute -top-2.5 left-2.5 bg-[#F2F1FE] px-1 text-gray-700 text-xs'>Services</label>
                    <select className='rounded-md w-full h-full'>
                        <option value={'Orthodontics'}>Orthodontics</option>
                        <option value={'Oral Hygiene'}>Oral Hygiene</option>
                        <option value={'Cosmetic Dentistry'}>Cosmetic Dentistry</option>
                        <option value={'Cosmetic Dentistry'}>Cosmetic Dentistry</option>
                    </select>
                </div>
            </form>
            <form className='flex justify-between w-full'>
                <div className='mb-4 w-5/12 relative border border-gray-400 rounded-md mt-10 ml-8'>
                    <label className='absolute -top-2.5 left-2.5 bg-[#F2F1FE] px-1 text-gray-700 text-xs'>Date</label>
                    <input type='date' className='px-3 py-2 rounded-md w-full'/>
                </div>
                <div className='mb-4 w-5/12 relative border border-gray-400 rounded-md mt-10 mr-16'>
                    <label className='absolute -top-2.5 left-2.5 bg-[#F2F1FE] px-1 text-gray-700 text-xs'>Date</label>
                    <input type='time' className='px-3 py-2 rounded-md w-full'/>
                </div>
            </form>
            <form className='w-full'>
                <div className='mb-4 w-11/12 relative border border-gray-400 rounded-md mt-10 ml-8'>
                    <label className='absolute -top-2.5 left-2.5 bg-[#F2F1FE] px-1 text-gray-700 text-xs'>Description</label>
                    <input type='text' placeholder='Enter Dr. Name' className='px-3 py-2 rounded-md w-full'/>
                </div>
            </form>
            <form className='w-full'>
                <div className='mb-4 w-11/12 relative border border-gray-400 rounded-md mt-10 ml-8'>
                    <input type='file' className='px-3 py-2 rounded-md'/>
                </div>
            </form>
            <form className='w-full'>
                <div className='mb-4 w-11/12 rounded-md mt-10 ml-8 pb-24'>
                    <input type='submit' value={'Submit'} className='px-3 py-2 rounded-md w-full bg-[#55CDF1] text-white'/>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardBookAppointment;