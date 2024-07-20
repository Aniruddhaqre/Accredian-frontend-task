import React from "react";

const Questions = () => {
  return (
    <div class="ml-40 mr-40 mt-32">
      <div class="text-xl font-medium text-gray-600 text-center mb-20">
        Frequently Asked <span class="text-2xl text-blue-500">Questions</span>
      </div>
      <div class="flex gap-10">
        <div class="flex flex-col basis-1/3 text-center gap-4">
          <div class="bg-blue-100 rounded-lg shadow-inner text-sm font-semibold p-3 hover:bg-blue-500 hover:text-slate-100 w-5/6">Eligibility</div>
          <div class="bg-blue-100 rounded-lg shadow-inner text-sm font-semibold p-3 hover:bg-blue-500 hover:text-slate-100 w-5/6">How To Use?</div>
          <div class="bg-blue-100 rounded-lg shadow-inner text-sm font-semibold p-3 hover:bg-blue-500 hover:text-slate-100 w-5/6">Terms and Conditions</div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="text-blue-500 font-medium">Do I need to have prior Product Management and Project Management experience to enroll in the program?</div>
          <div>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</div>
          <div class="font-medium"> What is the minimum system configuration required?</div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
