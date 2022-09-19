import Navbar from './../NavBar/navbar';

const HomePage = () => {
    return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "bg-light_blue pb-16">
        <div class = "grid grid-cols-5 gap-4 pt-10 pl-5 md:pr-32 md:pl-32">
          <div class = "col-span-3 min-h-[50px] pt-5">
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
                <p class = "lexend text-left text-xl">
                  Join over 400+ international students in Australia and secure your dream job now!
                </p>
              </div>
            </div>
          </div>
          <div class = "xl:p-0 xl:pl-12 pt-12 xl:pt-12 col-span-2 align-middle pl-8 md:pl-10">
            <div className="xl:p-24 rounded-full bg-circle_blue object-center mx-auto mr-10">
              <img class = "mx-auto object-center" src={require('./../Images/Hats.png')}/>
            </div>
          </div>
        </div>
      </div>
      <div class = "bg-white min-h-[500px]">HI WHITE</div>
      <div class = "bg-light_blue min-h-[500px]">HI BLUE</div>
    </div>
    );
  };

export default HomePage;