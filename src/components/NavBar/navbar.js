import React, { Component } from 'react';

class Navbar extends Component {
    render() {
      let navBarReturn = 
        <nav class="bg-light_blue border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://stintcommunity.com/" class="flex items-center">
              <img src={require('./../Images/Logo2.png')} class="mr-0 w-72"/>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 bg-transparent-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button class="ml-4 bg-transparent text-gray-700 rounded font-bold py-2 px-4 rounded">
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark_blue md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Job Board
                  </a>
                </button>
              </li>
                <button class="ml-4 bg-transparent text-gray-700 rounded font-bold py-2 px-4 rounded">
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark_blue md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    For Businesses
                  </a>
                </button>
              <li>
                <button class="ml-4 bg-transparent text-gray-700 rounded font-bold py-2 px-4 rounded">
                  <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark_blue md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About Us
                  </a>
                </button>
              </li>
              <li>
                <button class="ml-14 mr-10 bg-dark_blue text-white font-bold py-2 px-4 rounded md:hover:bg-dark_blue">
                  <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                    Join our Community
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      return navBarReturn
    }
  }

export default Navbar;