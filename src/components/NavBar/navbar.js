import React, { useState } from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return(
        <nav class="static bg-light_blue lg:py-5 py-2.5 w-full">
        <div class="static container mx-auto flex flex-wrap justify-between lg:pl-0 lg:mr-12 w-full items-center">
          <div class = "float-left w-3/12">
            <a href="https://stintcommunity.com/" class="md:absolute left-0 top-0 pt-5 pl-5 md:pl-14 flex items-center">
                <img src={require('./../Images/Logo2.png')} class="mr-0 lg:w-80 w-52"/>
            </a>
          </div>
          <div class = "float-right mr-5">
            <button data-collapse-toggle="navbar-default" onClick={() => setNavbarOpen(!navbarOpen)} type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto pt-5 " id="navbar-default" className={
                "md:flex flex-grow items-right" +
                (navbarOpen ? " flex" : " hidden")
              }>
              <ul class="text-left flex flex-col md:p-0 mt-4 bg-transparent-50 rounded-lg border md:flex-row lg:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900">
                <li>
                  <button class="sm:py-6 lg:pr-6 xl:ml-72 ml-0 bg-transparent text-gray-700 rounded font-bold md:py-2 px-4 rounded">
                    <a href="#" class="lexend text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mid_blue md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Job Board
                    </a>
                  </button>
                </li>
                  <button class="md:pr-2 bg-transparent text-gray-700 rounded font-bold md:py-2 rounded">
                    <a href="#" class="lexend text-base block py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mid_blue md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      For Companies
                    </a>
                  </button>
                <li>
                  <button class="pr-4 bg-transparent text-gray-700 rounded font-bold md:py-2 px-4 rounded">
                    <a href="#" class="lexend text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-mid_blue md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      About Us
                    </a>
                  </button>
                </li>
                <li>
                  <button class="bg-dark_blue text-white font-bold md:py-1 md:my-1 my-3 ml-5 px-3 rounded-lg md:hover:bg-dark_blue">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                      Join our Community
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      )}