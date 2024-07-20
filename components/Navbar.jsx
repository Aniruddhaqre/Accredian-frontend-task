import React from "react";

const Navbar = () => {
  return (
    <div class="flex justify-between mr-10 ml-10 p-4 text-s font-semibold">
      <div class="flex gap-2.5">
        <div class="p-1.5 flex justify-center align-middle">Accredian</div>
        <div class="bg-blue-500 p-1.5 text-slate-200 pr-3 pl-3 rounded">
          courses
        </div>
      </div>
      <div class="flex gap-2.5">
        <div class="p-1.5 flex justify-center align-middle">Refer & Earn</div>
        <div class="p-1.5 flex justify-center align-middle">Resources</div>
        <div class="p-1.5 flex justify-center align-middle">About Us</div>
        <div class="bg-slate-300 pr-3 pl-3 p-1.5 flex justify-center align-middle rounded">
          Login
        </div>
        <div class=" bg-blue-500 p-1.5 flex justify-center align-middle text-slate-200 pr-3 pl-3 rounded">
          Try For Free
        </div>
      </div>
    </div>
  );
};

export default Navbar;
