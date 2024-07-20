import { Container } from "postcss";
import React from "react";
import icon1 from "../src/assets/icon1.png";
import icon2 from "../src/assets/icon2.png";
import icon3 from "../src/assets/icon3.png";
import ReferButton from "./ReferButton";

const Body = () => {
  return (
    <>
      <div class="text-xl font-medium text-gray-600 text-center mb-10">
        How Do I <span class="text-2xl text-blue-500">Refer?</span>
      </div>

      <div class=" ml-40 mr-40 ">
        <div class="flex justify-between gap-10">
          <div class="flex justify-center flex-col p-20 rounded-full bg-blue-5 shadow-2xl size-[17rem] gap-4">
            <div class="flex justify-center align-middle ">
              <img src={icon1} alt="" class="h-12" />
            </div>
            <div class="text-center font-medium text-sm text-gray-600">
              Submit referrals easily via our website’s referral section.
            </div>
          </div>
          <div class="flex justify-center flex-col p-20 rounded-full bg-blue-5 shadow-2xl size-[17rem] gap-4">
            <div class="flex justify-center align-middle">
              <img src={icon2} alt="" class="h-12" />
            </div>
            <div class="text-center font-medium text-sm text-gray-600">
              Earn rewards once your referral joins an Accredian program.
            </div>
          </div>
          <div class="flex justify-center flex-col p-20 rounded-full bg-blue-5 shadow-2xl size-[17rem] gap-4">
            <div class="flex justify-center align-middle">
              <img src={icon3} alt="" class="h-12" />
            </div>
            <div class="text-center font-medium text-sm text-gray-600">
              Both parties receive a bonus 30 days after program enrollment.
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-16">
        <div class="w-1/3 flex justify-center">
        </div>
      </div>
    </>
  );
};

export default Body;
