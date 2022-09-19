import Navbar from './../NavBar/navbar';

const HomePage = () => {
    return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "bg-light_blue pt-12 pb-32 w-full min-h-[600px]">
        <div class = "bg-transparent w-full md:w-5/12 float-center md:float-right">
          <div className="ml-24 md:mt-12 rounded-full bg-circle_blue object-center w-5/12 md:w-7/12">
            <img class = "mx-auto object-center" src={require('./../Images/Hats.png')}/>
          </div>
        </div>
        <div class = "bg-transparent w-full md:w-7/12 float-left pl-20">
          <p class = "text-left lexend text-4xl md:text-6xl font-bold">
            Largest 
          </p>
          <p class = "text-left lexend  text-4xl md:text-6xl font-bold pt-3">
            International
          </p>
          <p class = "text-left lexend  text-4xl md:text-6xl font-bold pt-3">
            Student Community
          </p>
          <p class = "text-left lexend  text-4xl md:text-6xl font-bold pt-3">
            in Australia
          </p>
          <p class = "text-left lexend pt-5 text-sm md:text-lg mr-24">
          Gain personalised support from other international students in Australia and secure your dream job now!
          </p>
          <div class = "mr-36">
            <button class="bg-dark_blue text-white w-full font-bold mt-8 py-3 rounded-lg md:hover:bg-dark_blue">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                  Join Our Community!
              </a>
            </button>
              <div class = "pt-5 float-left w-5/12 lg:w-6/12 pr-2">
                <button class="float-left bg-mid_blue w-full text-white font-bold py-3 rounded-lg md:hover:bg-dark_blue">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                      Job Board
                  </a>
                </button>
              </div>
              <div class = "pt-5 float-right w-7/12 lg:w-6/12 pl-2">
                <button class="float-right bg-mid_blue w-full text-white font-bold py-3 rounded-lg md:hover:bg-dark_blue">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                    For Companies
                  </a>
                </button>
              </div>
            </div>
          </div>
        {/* <div class = "w-7/12">
          <p class = "text-left lexend text-4xl md:text-6xl font-bold">
            Largest 
          </p>
          <p class = "text-left lexend  text-4xl md:text-6xl font-bold pt-3">
            International
          </p>
          <p class = "text-left lexend  text-4xl md:text-6xl font-bold pt-3">
            Student Community
          </p>
          <p class = "text-left lexend  text-4xl md:text-6xl font-bold pt-3">
            in Australia
          </p>
          <p class = "text-left lexend pt-5 text-sm md:text-xl mr-10">
            Gain personalised support from other international students and access our exclusive Job Board.
          </p>
          <div class = "pt-5 float-center mr-10">
            <button class="bg-dark_blue text-white w-full font-bold py-3 rounded-lg md:hover:bg-dark_blue">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                  Join Our Community!
              </a>
            </button>
            <div class = "pt-5 float-left w-5/12 lg:w-6/12">
            <button class="float-left bg-mid_blue w-11/12 text-white font-bold py-3 rounded-lg md:hover:bg-dark_blue">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                    Job Board
                </a>
              </button>
            </div>
            <div class = "pt-5 float-right w-7/12 lg:w-6/12">
              <button class="float-right bg-mid_blue w-11/12 text-white font-bold py-3 rounded-lg md:hover:bg-dark_blue">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                  For Companies
                </a>
              </button>
            </div>
            <div class = "pt-5 float-left">
              <span class = "lexend text-left text-xl">
                Join over 400+ international students in Australia and secure your dream job now!
              </span>
            </div>
          </div>
        </div>
        <div class = "xl:pt-12 w-3/12 float-right">
          <div className="xl:p-0 rounded-full bg-circle_blue object-center">
            <img class = "mx-auto object-center" src={require('./../Images/Hats.png')}/>
          </div>
    </div>*/}
      </div>
      <div class = "pt-10 bg-white min-h-[500px]">
        <p class = "text-4xl lexend font-bold">Why Join Stint?</p>
        <p class = "pt-5 pb-10 text-md lexend">Here at Stint, we are building a more diverse and inclusive Australia workforce.</p>
        <div class = "w-full bg-black md:w-6/12">Hi</div>
      </div>
      <div class = "bg-light_blue min-h-[500px]">HI BLUE</div>
    </div>
    );
  };

export default HomePage;