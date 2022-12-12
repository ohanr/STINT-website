import React, { useState } from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  return(
        <nav class="static bg-dark_blue lg:py-5 py-2.5 w-full">
        <div class="static container mx-auto md:ml-2 flex flex-wrap justify-between lg:pl-0 lg:mr-12 w-full items-center">
          <div class = "float-left lg:w-3/12">
            <a href="/" class="lg:absolute left-0 top-0 pt-5 pl-5 lg:pl-14 flex items-center">
                <img src={require('./../Images/Logo2.png')} class="mr-0 lg:w-80 w-52"/>
            </a>
          </div>
          <div class = "xl:w-auto w-full static float-right mr-5">
            <button data-collapse-toggle="navbar-default" onClick={() => setNavbarOpen(!navbarOpen)} type="button" class="absolute right-7 top-8 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="static hidden lg:block lg:w-auto pt-5 " id="navbar-default" className={
                "lg:flex flex-grow items-right" +
                (navbarOpen ? " flex" : " hidden")
              }>
              <ul class="text-left lg:top-10 lg:absolute top-0 right-0 flex flex-col lg:p-0 mt-4 bg-transparent-50 rounded-lg lg:flex-row lg:space-x-10 md:mt-0 md:text-sm lg:font-medium lg:border-0 lg:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 ml-5">
                <li>
                  <button class="xl:pr-9 lg:px-0 xl:ml-72 bg-transparent text-gray-700 rounded font-bold md:pb-2 lg:py-2 md:pt-5 px-4 rounded">
                    <a href="/job-board" class="text-white lexend text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent lg:border-0 md:hover:text-light_blue lg:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Job Board
                    </a>
                  </button>
                </li>
                <li>
                  <button class="xl:pr-6 lg:px-0 px-4 bg-transparent text-gray-700 rounded font-bold md:py-2 rounded">
                    <a href="/companies" class="text-white lexend pl-3 text-base block py-2 pr-7 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent lg:border-0 md:hover:text-light_blue lg:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      For Companies
                    </a>
                  </button>
                </li>
                <li class = "pl-4 lg:pl-0">
                  <button aria-controls="dropdown-default" aria-expanded="false" onClick={() => setDropdownOpen(!dropdownOpen)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center py-2 pr-9 lg:pr-0 xl:pr-9 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:mid_blue md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    <button class= "xl:pr-0 lg:pt-0 bg-pr-5 transparent text-gray-700 rounded font-bold md:py-2 rounded">
                      <a class="text-white lexend text-base block py-1 pr-7 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent lg:border-0 md:hover:text-light_blue lg:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Learn More
                      </a>
                    </button>
                    <svg class="ml-1 w-5 h-5" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  <div class="static hidden block w-full pt-5" id="dropdown-default" className={
                      "flex flex-grow items-right" +
                      (dropdownOpen ? " flex" : " hidden")
                    }>
                      <ul class="bg-dark_blue pr-5 py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                        <li>
                          <a href="about-us" class="hover:text-light_blue lexend pl-4 text-lg block py-2 pt-0 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            About Us 
                          </a>
                        </li>
                        <li>
                          <a href="/testimonials" class="hover:text-light_blue lexend pl-4 text-lg block py-2 pb-5 lg:pb-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Testimonials
                          </a>
                        </li>
                      </ul>
                  </div>
                </li>
                <li>
                  <button class="xl:mr-20 lg:mr-5 bg-white text-white font-bold md:py-1 md:my-1 my-2 ml-5 lg:ml-0 px-3 rounded-lg md:hover:bg-light_blue">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="lexend text-base block py-2 text-black bg-transparent rounded md:bg-transparent lg:p-0 dark:text-white">
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