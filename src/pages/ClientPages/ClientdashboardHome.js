import React from 'react'
import './ClientdashboardHome.css'
import Sidebar from '../../Component/Sidebar'

function ClientdashboardHome() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full mx-auto bg-[#F2F1FE] rounded-lg overflow-hidden">
        <div className="flex">
          <Sidebar /> 
          <div className="w-3/4">
            <header className="relative flex mt-5 mb-10 rounded-xl bg-white h-52 shadow-lg">
              <div className='mt-10 ml-28 w-4/12'>
              <h1 className="text-4xl font-bold mb-7">Hello Sam!</h1>
              <p className="text-black text-xl">Let’s help you book an appointment Choose a service to find dentist</p>
              </div>
              <img src={"/img1.png"} alt="Sam Alex" id="img1" className="absolute w-5/12 right-0 -top-6"/>
            </header>
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Services</h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="p-5 bg-white rounded-2xl shadow-lg text-center border-[#FFFFFF] border-2 border-solid hover:border-[#55CDF1] hover:text-[#55CDF1]">
              <img src={"/img6.png"} alt="Sam Alex" className="w-52 h-44 ml-5"/>
                  <p className="text-xl font-bold pb-2">Orthodontics</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg text-center border-[#FFFFFF] border-2 border-solid hover:border-[#55CDF1] hover:text-[#55CDF1]">
              <img src={"/img7.png"} alt="Sam Alex" className="w-52 h-44 ml-5"/>
                  <p className="text-lg font-bold">Oral Hygiene</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg text-center border-[#FFFFFF] border-2 border-solid hover:border-[#55CDF1] hover:text-[#55CDF1]">
              <img src={"/img8.png"} alt="Sam Alex" className="w-52 h-44 ml-5"/>
                  <p className="text-lg font-bold">Cosmetic Dentistry</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg text-center border-[#FFFFFF] border-2 border-solid hover:border-[#55CDF1] hover:text-[#55CDF1]">
              <img src={"/img9.png"} alt="Sam Alex" className="w-52 h-44 ml-5"/>
                  <p className="text-lg font-bold">Cosmetic Dentistry</p>
                </div>
              </div>
            </section>
            <section className='relative'>
              <h2 className="text-3xl font-bold mb-4 display: inline-block">Dentists</h2>
              <img src={"/img13.png"} alt="search icon" className="display: inline-block absolute right-64 top-2"/>
            <input type='text' placeholder='Search for dentist' className='outline-none placeholder:text-black border-[#F2F1FE] border-b-black border-2 border-solid w-60 bg-[#F2F1FE] absolute right-0'/>
              <div>
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="flex items-center mb-4 p-4 bg-white shadow-lg rounded-lg">
                    <img src="/img4.png" alt="Dr. Joseph Brostito" className="w-16 h-16 rounded-full mr-4"/>
                    <div>
                      <h3 className="text-lg font-bold">Dr. Joseph Brostito</h3>
                      <div className=''>
                      <img src="/img5.png" alt="location" className="w-3 h-4 display: inline-block mr-4"/>
                      <p className="text-g ray-600 display: inline-block">Damascus</p>
                      </div>
                    </div>
                    <button className="ml-auto bg-[#FFFFFF]
                    text-[#55CDF1] border-[#55CDF1] border-solid
                    border-2 hover:bg-[#55CDF1] 
                    hover:text-[#FFFFFF] hover:border-[#55CDF1] 
                    px-4 py-2 rounded-3xl">Book an appointment</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientdashboardHome