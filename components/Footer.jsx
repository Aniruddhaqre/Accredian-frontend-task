import React from "react";
import logo from "../src/assets/Logo.png";

const Footer = () => {
  return (
    <div class="bg-gray-800 mt-20 ">
      <div class="flex justify-between mr-32 ml-32 p-4">
        <div>
          <img src={logo} alt="" class="h-10" />
        </div>
        <div class="flex flex-col justify-center align-middle gap-1">
          <div class="h-8 bg-blue-500 rounded-md text-sm text-slate-200 text-center flex flex-col align-middle justify-center pt font-semibold pr-2 pl-2">
            Schedule 1-on-1 Call Now
          </div>
          <p class="text-slate-100 text-xs font-base">
            Speak with our Learning Advisor
          </p>
        </div>
      </div>
      <div class="flex gap-8 mr-32 ml-32 p-4 text-sm text-slate-300">
        <div class="basis-2/6">
          <h1 class="text-lg mb-4">Programs</h1>
          <div class="flex flex-col">
            <div class="flex justify-between pb-4 w-4/5">
              <div class="font-bold ">Data Science & AI</div>
              <div class="font-bold ">+</div>
            </div>
            <div class="flex justify-between pb-4 w-4/5">
              <div class="font-bold ">Product Management</div>
              <div class="font-bold ">+</div>
            </div>
            <div class="flex justify-between pb-4 w-4/5">
              <div class="font-bold ">Bussiness Analytics</div>
              <div class="font-bold ">+</div>
            </div>
            <div class="flex justify-between pb-4 w-4/5">
              <div class="font-bold ">Digital Transformation</div>
              <div class="font-bold ">+</div>
            </div>
            <div class="flex justify-between pb-4 w-4/5">
              <div class="font-bold ">Project Management</div>
              <div class="font-bold ">+</div>
            </div>
            <div class="flex justify-between pb-4 w-4/5">
              <div class="font-bold ">Bussiness Management</div>
              <div class="font-bold ">+</div>
            </div>
            <div class="flex justify-between pb-4 w-4/5">
              <div class="font-bold ">Strategy leadership</div>
              <div class="font-bold ">+</div>
            </div>
            <div class="flex justify-between pb-4 w-4/5">
              <div class="font-bold ">Senior Management</div>
              <div class="font-bold ">+</div>
            </div>
            <div class="flex justify-between pb-4 w-4/5">
              <div class="font-bold ">Fintech</div>
              <div class="font-bold ">+</div>
            </div>
          </div>
        </div>
        <div class="basis-2/6 pl-12">
          <h1 class="text-lg mb-4">Contact Us</h1>
          <ul class="list-none">
            <li>
              <a href="">
                Email us (For Data Science Queries): admissions@accredian.com
              </a>
            </li>
            <li>
              <a href="">
                Email us (For Product Management Queries):pm@accredian.com
              </a>
            </li>
            <li>
              <a href="">
                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
              </a>
            </li>
            <li>
              <a href="">
                Product Management Admission Helpline:+91 9625811095
              </a>
            </li>
            <li>
              <a href="">Enrolled Student Helpline: +91 7969322507</a>
            </li>
            <li>
              <a href="">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </a>
            </li>
          </ul>
        </div>
        <div class="basis-2/6 pl-20">
          <h1 class="text-lg mb-4">Accredian</h1>
          <ul class="list-none">
            <li>About</li>
            <li>Carrer</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral privacy</li>
            <li>Terms & Conditions</li>
            <li>FaQs</li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center align-middle text-slate-300 font-bold text-xs pb-10 mt-10">
        © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights 
        Reserved
      </div>
    </div>
  );
};

export default Footer;
