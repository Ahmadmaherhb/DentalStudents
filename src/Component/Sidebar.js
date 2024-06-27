import React from 'react'

function Sidebar() {
return (
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
                            <img src={"/schedule.svg"} alt='calendar icon' className='mr-4'/>
                        <span className="mr-4 hover:text-[#55CDF1]">Appointment</span>
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center ml-2">
                            <img src={"/img11.png"} alt='inbox icon' className='mr-4'/>
                            <span className="mr-4 hover:text-[#55CDF1]">Inbox</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center ml-2">
                            <img src={"/img12.png"} alt='logout icon' className='mr-4'/>
                            <span className="mr-4 hover:text-[#55CDF1]">Log out</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default Sidebar