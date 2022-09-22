import React, { useState } from "react";
export default function Footer({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return(
       <div class = "bg-gray p-2 pl-12 object-left pb-10 h-[20rem]">
            <div class = "lg:w-3/12 w-10/12 pr-5">
                <img src={require('./../Images/Logo2.png')} class="mt-6 lg:w-72 w-52"/>
                <div class = "lexend text-md text-left pl-4 lg:pl-5">
                    Towards a more diverse and inclusive workforce.
                </div>
                <div class= "float-left ml-5 lg:ml-6 pt-2">
                <button class = "pr-4">
                    <a href="https://www.facebook.com/stintcommunity/">
                        <img src={require('./../Images/facebook.png')} class="mt-6 inline lg:w-8 w-7"/>
                    </a>
                </button>
                <button class = "pr-4">
                    <a href="https://www.instagram.com/stint.community/">
                        <img src={require('./../Images/instagram.png')} class="mt-6 inline lg:w-8  w-7"/>
                    </a>
                </button>
                <button class = "pr-4">
                    <a href="https://www.linkedin.com/company/stintcommunity/">
                        <img src={require('./../Images/linkedin.png')} class="mt-6 inline lg:w-8  w-7"/>
                    </a>
                </button>
                    <img src={require('./../Images/meeting.png')} class="mt-6 inline lg:w-16  w-16"/>
                </div>
            </div>
       </div>
      )}