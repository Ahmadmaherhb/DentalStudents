import React from 'react';
import Hero from './Hero';
import './Style.css'
import Buttonlight from './Buttonlight';
import Buttondark from './Buttondark';
function Herosection() {
  return (
    <div className="bg-white  flex justify-center  h-screen  flexclrev ">
      <div className=" mw50 mx-auto flex flex-col items-center gap-8">
        <h1 className="pt-24 text-3xl font-bold text-black sm:text-5xl md:text-6xl">Welcome to</h1>
        <h2 className="text-4xl font-bold text-sky-500 sm:text-5xl md:text-6xl">Smile Bridge</h2>
        <p className="text-lg text-gray-700 sm:text-xl md:text-2xl">The bridge between you <br></br>and the best dental students</p>
        <div className="flex gap-4">
          <Buttondark/>
          <Buttonlight/>
        </div>
      </div>
      <div className="flex justify-end md:w-full margintop10">
        <Hero/>
      </div>
    </div>
  );
}
export default Herosection;