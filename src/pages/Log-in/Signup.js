import { useState } from 'react';
import pic2 from  './../../Component/About2.png';
import './../../Component/Style.css'
function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    location: '',
    birthDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className='flex justify-around items-center flex-row-reverse flexclomn margintop1'>
    <div className='mw50 flex justify-center'>
    <img
        className=" w-1/2 "
        src={pic2}
        alt="About Hero Image"
        />
    </div>
    <div className="container  mt-10 mw50 pl-9 flex justify-start flex-col items-start">
      <h1 className="text-3xl font-bold text-center mb-8 ">
        Sign up as a<span className='blueden'>Dental Student</span> 
      </h1>
      <p className="text-center mb-10">
        Let's get you all set up so you can access your personal account.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="relative flex flex-col w-full">
            <label htmlFor="text" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              First Name
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="john.doe@gmail.com"
            />
          </div>
          <div className="relative flex flex-col w-full">
            <label htmlFor="text" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
            Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="john.doe@gmail.com"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative flex flex-col w-full">
            <label htmlFor="email" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="john.doe@gmail.com"
            />
          </div>
          <div className="relative flex flex-col w-full">
            <label htmlFor="phoneNumber" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="phoneNumber  "
            />
          </div>
        </div>
        <div className="relative flex flex-col w-full">
            <label htmlFor="password" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="password  "
            />
          </div>
          <div className="relative flex flex-col w-full">
            <label htmlFor="confirmPassword" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="password  "
            />
          </div>
        <div className="flex gap-4">
          <div className="relative flex flex-col w-full">
            <label htmlFor="text" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Location  "
            />
          </div><div className="relative flex flex-col w-full">
            <label htmlFor="birthDate" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              Birth Date
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Birth Date  "
            />
          </div>
          {/* <div className="w-1/2">
            <label htmlFor="birthDate" className="block mb-2">
              Birth Date
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div> */}
        </div>
        <button
          type="submit"
          className="bgblueden hover:bg-white bluedenhover borderbluedenthover text-white font-bold py-2 px-4 rounded-md"
        >
          Next
        </button>
      <p className="text-center mt-1 ">
        Already have an account?{' '}
        <a href="#" className="underline blueden">
          Login
        </a>
      </p>
      </form>
    </div>
    </div>
  );
}

export default Signup;