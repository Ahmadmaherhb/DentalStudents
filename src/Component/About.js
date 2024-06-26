import React from 'react';
import './Style.css'
import Abouthero from './Abouthero';
import pic from  './About1.png'
import pic2 from  './About2.png'
function About() {
  return (
    <div className="container mx-auto px-4 py-16 text-center margintop10">
      <h2 className="text-3xl font-bold mb-4">About us</h2>
      <div className="">
          <div className="flex justify-around items-center flexclomn ">
          <div className='mw50'>
            <img
            className="w-full object-cover "
            src={pic}
            alt="About Hero Image"
            />
          </div>
          <div className=' mw50'>
            <h3 className="text-2xl font-bold mb-2">Join us as a dentist</h3>
            <p className="text-gray-600 mb-4">To have a valuable scientific experience</p>
            <ul className="list-disc">
              <li>Find your next patient.</li>
              <li>Contact easily</li>
              <li>Organize your appointments</li>
            </ul>
            <button className="bgbluedenhover borderbluedent whitedenhover blueden font-bold py-2 px-4 rounded mt-4">Join Now</button>
          </div>
      </div>
        <div className='flex flex-row-reverse justify-around items-center flexclomn margintop1 md:top-40'>
          <div className=" mw50">
          <img
            className="w-full object-cover "
            src={pic2}
            alt="About Hero Image"
          />

          </div>
          <div>
          <div className=' mw50'>
          <h3 className="text-2xl font-bold mb-2">Join us as a client</h3>
          <p className="text-gray-600 mb-4">To have a free dental care</p>
          <ul className="list-disc">
            <li>Find well trained students under the supervision of professional doctors</li>
            <li>Book an appointment</li>
            <li>Contact easily</li>
          </ul>
          <button className=" bgbluedenhover borderbluedent whitedenhover blueden font-bold py-2 px-4 rounded mt-4">Join Now</button>
          </div>
          </div>
        </div>
        </div>
      </div>  
  );
}

export default About;