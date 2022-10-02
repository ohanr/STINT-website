import Navbar from './../NavBar/navbar';
import Footer from './../Footer/footer';

const HomePage = () => {
    return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "bg-light_blue pt-5 lg:pt-28 pb-36 w-full min-h-[500px]">
        <div class = "bg-transparent pb-0 w-full lg:w-5/12 xl:mt-0 xl:mr-12 lg:mt-16 lg:mr-10 lg:float-right">
         <div class = "inline-grid items-center justify-items-center lg:pt-10">
          <div class = "z-20 bg-outer_circle_blue rounded-full opacity-[.40] align-middle object-center w-6/12 xl:w-[35rem] xl:h-[35rem] col-span-full row-span-full"></div>
          <div class = "z-30 bg-circle_blue rounded-full col-span-full row-span-full align-middle w-5/12 lg:w-[25rem] lg:h-[25rem]"></div>
          <img class = "motion-safe:animate-bounce-slow z-40 object-center col-span-full row-span-full lg:py-0 py-10 lg:w-[17rem] w-5/12 align-middle" src={require('./../Images/Hats.png')}/>
          {/* <div className="mx-auto rounded-full bg-outer_circle_blue z-0 col-span-full row-span-full align-middle object-center w-6/12 lg:w-[20rem] lg:h-[20rem]">
          <div className="mx-auto rounded-full bg-black z-1 object-center col-span-full row-span-full align-middle w-5/12 lg:w-[15rem] lg:h-[15rem]">
           
          </div>
          </div> */}
         </div>
        </div>
        <div class = "bg-transparent w-full pt-5 lg:w-7/12 px-12 lg:px-0 lg:pl-20">
          <p class = "lg:text-left lexend text-center text-4xl lg:w-8/12 lg:text-6xl lg:leading-[1.3] font-bold">
            Largest International Student Community in Australia
          </p>
          <p class = "lg:text-left lexend pt-6 text-sm md:text-xl lg:mr-40">
          Gain personalised support from other international students in Australia and access our exclsuive Job Board!
          </p>
          <div class = "lg:mr-36 pt-5">
            <button class="bg-dark_blue text-white w-full font-bold mt-8 py-3 rounded-lg lg:hover:bg-dark_blue">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScEg-PTGW04bk_ctv62nwj0t2gj_ZBI7BVQj82L4lQtb5AI2g/viewform" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                  Join Our Community!
              </a>
            </button>
            <div class = "pt-5 pb-5 float-left w-6/12 pr-2">
              <button class="float-left bg-mid_blue w-full text-white font-bold py-3 rounded-lg lg:hover:bg-dark_blue">
                <a href="/job-board" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                    Job Board
                </a>
              </button>
            </div>
            <div class = "pt-5 pb-5 float-right w-6/12 pl-2">
              <button class="float-right bg-mid_blue w-full text-white font-bold py-3 rounded-lg lg:hover:bg-dark_blue">
                <a href="/companies" class="text-xs lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                  For Companies
                </a>
              </button>
            </div>
            <p class = "lg:text-left lexend text-sm md:text-2xl">
            Join over 400+ international students in Australia and secure your dream job now!
            </p>
          </div>
        </div>
      </div>
      <div class = "pt-10 bg-white min-h-[1000px]">
        <p class = "text-4xl pt-5 lexend font-bold">Why Join Stint?</p>
        <p class = "px-5 pt-5 pb-10 lg:pb-20 text-lg lexend">Here at Stint, we are building a more diverse and inclusive Australia workforce.</p>
        <div class = "grid gap-y-5 lg:gap-y-0 grid-rows-4 grid-cols-4 pr-20 w-full bg-tranparent float-left lg:h-[45rem] lg:w-6/12">
          <div class = "ml-5 md:ml-16">
            <img class = "object-center" src={require('./../Images/Resources.png')}/>
          </div>
          <div class = "bg-white col-span-3 text-left pl-10 ">
            <p class = "lexend font-bold text-lg">
              Resources
            </p>
            <p class = "pt-5 lexend">
              Gain access to weekly, helpful resources to inch you closer to landing a professional career in Australia. We offer our community benefits such as FREE CV reviews!
            </p>
          </div>
          <div class = "ml-5 md:ml-16">
            <img class = "object-center" src={require('./../Images/Community.png')}/>
          </div>
          <div class = "bg-white col-span-3 text-left pl-10 ">
            <p class = "lexend font-bold text-lg">
              Community
            </p>
            <p class = "pt-5 lexend">
            Connect with like-minded students and share personal experiences and questions to pick up traits of what successful applicants have done in the past.
            </p>
          </div>
          <div class = "ml-5 md:ml-16">
            <img class = "md:w-auto object-center" src={require('./../Images/Events.png')}/>
          </div>
          <div class = "bg-white col-span-3 text-left pl-10 ">
            <p class = "lexend font-bold text-lg">
              Events
            </p>
            <p class = "pt-5 lexend">
            We hold exclusive events for our community members to help prepare them for every step of the recruitment process. From CV-Writing to assessment centres, we cover it all!
            </p>
          </div>
          <div class = "ml-5 md:ml-16">
            <img class = "object-center" src={require('./../Images/Notice Board.png')}/>
          </div>
          <div class = "bg-white col-span-3 text-left pl-10 ">
            <p class = "lexend font-bold text-lg">
              Notice Board
            </p>
            <p class = "pt-5 lexend">
            Get weekly updates on job listings from companies nationwide that are looking for international students to join their team and make an impact.
            </p>
          </div>
        </div>
        <div class = "w-full lg:h-[45rem] py-10 lg:py-0 lg:float-right lg:w-6/12 grid place-items-center">
          <div class="aspect-w-16 aspect-h-9 flex align-center">
            <iframe class = "mx-auto object-contain sm:w-[640px] lg:w-[505px] lg:h-[285px] xl:w-[630px] xl:h-[355px] sm:h-[360px]" src="https://www.youtube.com/embed/DNq6yLNBiFQ" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
  };

export default HomePage;