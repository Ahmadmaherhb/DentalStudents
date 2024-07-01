import React from 'react';
import './../Component/Style.css'
function Service() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
      <p className="text-2xl text-gray-600 text-center mb-16">
        Our team of dentists can help with a variety of dental services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32 ">
        <div className="bg-white rounded-xl shadow-xl w-80">
          <div className="flex justify-center rounded-t-xl items-center mb-4 w-80 h-[226px] bg-gray-200">
          <img  src='/tuth.png' alt='tuth' className=' w-64 '/>
          </div>
         <div className='p-8'>
         <h3 className="text-xl font-bold mb-2">Cosmetic Dentistry</h3>
         <div className="text-gray-600">
            <p>some text some text some</p>
            <p>some text some text.</p>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:underline mt-4"
          >
            Learn More
          </a>
         </div>

        </div>
        {/* /'--------------------------------------------------------' */}
        <div className="bg-white rounded-xl shadow-xl w-80">  
          <div className="flex justify-center rounded-t-xl items-center mb-4 w-80 h-[226px] bg-gray-200">
          <img src='/alhashwa.png' alt='alhawsha' className='w-74'/>
          </div>
       <div className='p-8'>
       <h3 className="text-xl font-bold mb-2">Orthodontics</h3>
          <div className="text-gray-600">
            <p>some text some text some</p>
            <p>some text some text.</p>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:underline mt-4"
          >
            Learn More
          </a>
       </div>
        </div>
        {/* =============================================================== */}
        <div className="bg-white rounded-xl shadow-xl w-80 ">
          <div className="flex justify-center items-center mb-4 w-80 h-[226px] bg-gray-200 rounded-t-xl" >
          <img src='/talmea.png' alt='alhawsha' className='w-74'/>
           </div>
      <div className='p-8'>
      <h3 className="text-xl font-bold mb-2">Oral Hygiene</h3>
      <div className="text-gray-600">
            <p>some text some text some</p>
            <p>some text some text.</p>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:underline mt-4"
          >
            Learn More
          </a>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
