import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({ referrer: '', referee: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://accredian-backend-task-aniruddha.onrender.com/api/referrals', formData);
      alert('Referral submitted successfully');
      onClose();
    } catch (error) {
      alert('Error submitting referral');
    }
  };

  return (
    <div className="modal" class="h-4/5 bg-slate-50 absolute rounded top-4 z-50 w-10/12 flex justify-center align-middle shadow-2xl">
      <form onSubmit={handleSubmit} class="flex flex-col gap-8 justify-evenly align-middle w-2/3">
      <div class="flex gap-2" >
        <label class="text-center font-bold text-lg text-gray-600 ">
          Referrer:
          <input type="text" name="referrer" value={formData.referrer} onChange={handleChange} required class="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        </label>
        </div>
        <div class="flex gap-2">
        <label class="text-center font-bold text-lg text-gray-600" >
          Referee:
          <input type="text" name="referee" value={formData.referee} onChange={handleChange} required class=" mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
        </label>
        </div>
        <div class="flex gap-2">
        <label class="text-center font-bold text-lg text-gray-600">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required class=" mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
        </label>
        </div>
        <div class="flex ">
        <button type="submit" class=" bg-blue-500 mt-5 p-1.5 flex justify-center align-middle text-slate-200 hover:bg-slate-100 hover:text-blue-500 pr-3 pl-3 rounded w-5/12 font-semibold text-sm">Submit</button>
        <button type="button" class=" bg-slate-100 mt-5 p-1.5 flex justify-center align-middle text-blue-500  hover:bg-blue-500 hover:text-slate-100 pr-3 pl-3 rounded w-5/12 font-semibold text-sm ml-4"onClick={onClose}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
