import Navbar from './../NavBar/navbar';

const HomePage = () => {
    return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "bg-light_blue pt-10 pb-32 w-full min-h-[200px]">
        <div class = "bg-transparent pb-5 w-full lg:w-5/12 float-center lg:float-right">
          <div className="mx-auto lg:mt-4 rounded-full bg-circle_blue object-center w-5/12 lg:w-7/12">
            <img class = "object-center w-auto" src={require('./../Images/Hats.png')}/>
          </div>
        </div>
        <div class = "bg-transparent w-full lg:w-7/12 px-12 lg:px-0 lg:pl-20">
          <p class = "lg:text-left lexend text-center text-4xl lg:w-9/12 lg:text-6xl lg:leading-none font-bold">
            Largest International Student Community in Australia
          </p>
          <p class = "lg:text-left lexend pt-5 text-sm lg:text-lg lg:mr-24">
          Gain personalised support from other international students in Australia and secure your dream job now!
          </p>
          <div class = "lg:mr-36">
            <button class="bg-dark_blue text-white w-full font-bold mt-8 py-3 rounded-lg lg:hover:bg-dark_blue">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                  Join Our Community!
              </a>
            </button>
            <div class = "pt-5 float-left w-6/12 pr-2">
              <button class="float-left bg-mid_blue w-full text-white font-bold py-3 rounded-lg lg:hover:bg-dark_blue">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                    Job Board
                </a>
              </button>
            </div>
            <div class = "pt-5 float-right w-6/12 pl-2">
              <button class="float-right bg-mid_blue w-full text-white font-bold py-3 rounded-lg lg:hover:bg-dark_blue">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                  For Companies
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class = "pt-10 bg-white min-h-[1000px]">
        <p class = "text-4xl lexend font-bold">Why Join Stint?</p>
        <p class = "pt-5 pb-10 text-lg lexend">Here at Stint, we are building a more diverse and inclusive Australia workforce.</p>
        <div class = "w-full bg-tranparent float-left md:w-6/12">
          <div class = "py-5">
            <div class = "w-2/12 float-left">
              <img class = "ml-12 object-center py-3" src={require('./../Images/Resource Logo.png')}/>
              <img class = "ml-12 object-center py-3" src={require('./../Images/Resource Logo.png')}/>
              <img class = "ml-12 object-center py-3" src={require('./../Images/Resource Logo.png')}/>
              <img class = "ml-12 object-center py-3" src={require('./../Images/Resource Logo.png')}/>
            </div>
            <div class = "w-9/12 float-right">
              <p class = "py-3 lexend font-bold text-lg text-left">
                Resources
              </p>
              <p class = "text-left text-sm lexend mr-10 pt-5">
                Gain access to weekly, helpful resources to inch you closer to landing a professional career in Australia. We offer our community benefits such as FREE CV reviews!
              </p>
            </div>
          </div>
        </div>
        <div class = "w-full bg-black float-right md:w-6/12">Hi</div>
      </div>
      <div class = "bg-light_blue min-h-[500px]">HI BLUE</div>
    </div>
    );
  };

export default HomePage;