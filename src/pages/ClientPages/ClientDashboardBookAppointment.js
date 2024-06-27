import React, { useState } from 'react';
import Sidebar from '../../Component/Sidebar';

const ClientDashboardBookAppointment = () => {
  return(
    <div className="min-h-screen bg-gray-100">
      <div className="w-full mx-auto bg-[#F2F1FE] rounded-lg overflow-hidden">
        <div className="flex">
          <Sidebar />
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