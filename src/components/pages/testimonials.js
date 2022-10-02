import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';

const Testimonials = () => {
  const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4')
    },
];

const options = {
    activeItemPosition: 1,
    interval: 3000,
    
    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1')
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2')
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3')
            },
            {
                position: 3,
                el: document.getElementById('carousel-indicator-4')
            },
        ]
    },
    
    // callback functions
    onNext: () => {
        console.log('next slider item is shown');
    },
    onPrev: ( ) => {
        console.log('previous slider item is shown');
    },
    onChange: ( ) => {
        console.log('new slider item has been shown');
    }
};

    return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "bg-light_blue pt-5 lg:pt-40 pb-10 w-full lg:min-h-[900px] xl:min-h-[800px]">
        <p class = "lg:pl-24 lexend text-5xl md:text-6xl lg:text-8xl px-10 text-left text-dark_blue">
          Our Success Stories
        </p>
        <div class = "lg:w-8/12 lg:float-left pt-12 lg:pt-24 px-10 lg:pr-0 lg:pl-24 w-full">
          <p class = "text-left lexend text-3xl font-bold">
            Business Operations Analyst Intern @ Sample
          </p>
          <p class = "text-left pt-4 lg:pt-12 lexend text-2xl">
            "Stint helped me secure this job by creating an environment where I can have direct contact to my employees/recruiters. I love how the moderators at Stint are very active and are always ready to answer members questions about job search and tips."
          </p>
          <p class = "text-left pt-12 lexend text-2xl">
            Bruce Doan | Bachelor of Commerce (Finance)
          </p>
        </div>
        <div class = "w-full lg:px-24 lg:pt-20 lg:w-4/12 lg:float-right">
          <img src={require('./../Images/Bruce.jpeg')} class = "hover:animate-spin mx-auto lg:mx-0 lg:mt-24 xl:mt-10 mt-10 lg:w-full md:w-5/12 w-10/12 xl:w-8/12 rounded-full" />
        </div>
      </div>
      <div class = "bg-white pt-5 lg:pt-20 pb-16 w-full min-h-[500px]">
      <div>
        <p class = "font-bold lexend text-left px-10 lg:pl-20 text-3xl lg:text-5xl pb-8 lg:pt-0 pt-8 lg:pb-16 text-dark_blue">
          Feedback from our community!
        </p>
      </div>
      <div id="carouselExampleCaptions" class="border-black carousel carousel-dark slide pb-0 relative" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 hidden lg:flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
          <div class = "w-full relative">
              <img
                src={require('./../Images/Testimonial Template.png')}
                class="mx-auto block lg:px-12 md:px-9 xl:px-20 h-[45rem]"
                alt="..."
              />
              <img
                src={require('./../Images/Logo2.png')}
                class="absolute top-[8%] left-[13%] w-48 sm:w-96"
                alt="..."
              />
              <text class = "float-left absolute top-[17%] sm:top-[19.5%] left-[17.5%] text-dark_blue lexend text-3xl">
                TESTIMONIALS
              </text>
              <div class = "absolute w-full h-full bottom-0">
                <span class = "absolute top-1/2 px-12 text-xl sm:px-32 sm:text-3xl md:text-3xl md:px-32 lg:text-4xl lg:px-40 xl:text-5xl mt-14 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full xl:px-52">
                "Very random, I know sometimes slack might be a bit dead, but given there were 2 other similar communities that popped up at the same time, I find y'all are doing the best job so far, wanted to give some encouragement" - Bryce Chee
                </span>
              </div>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div class = "w-full relative">
              <img
                src={require('./../Images/Testimonial Template.png')}
                class="mx-auto block lg:px-12 md:px-9 xl:px-20 h-[45rem]"
                alt="..."
              />
              <img
                src={require('./../Images/Logo2.png')}
                class="absolute top-[8%] left-[13%] w-48 sm:w-96"
                alt="..."
              />
              <text class = "float-left absolute top-[17%] sm:top-[19.5%] left-[17.5%] text-dark_blue lexend text-3xl">
                TESTIMONIALS
              </text>
              <div class = "absolute w-full h-full bottom-0">
                <span class = "absolute top-1/2 px-12 text-xl sm:px-32 sm:text-3xl md:text-3xl md:px-32 lg:text-4xl lg:px-40 xl:text-5xl mt-14 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full xl:px-52">
                "Fantastic work team! As someone who moved to Australia myself, I can only attest to the power of community! keep up the great work" - Jasca Zittel
                </span>
              </div>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div class = "w-full relative">
              <img
                src={require('./../Images/Testimonial Template.png')}
                class="mx-auto block lg:px-12 md:px-9 xl:px-20 h-[45rem]"
                alt="..."
              />
              <img
                src={require('./../Images/Logo2.png')}
                class="absolute top-[8%] left-[13%] w-48 sm:w-96"
                alt="..."
              />
              <text class = "float-left absolute top-[17%] sm:top-[19.5%] left-[17.5%] text-dark_blue lexend text-3xl">
                TESTIMONIALS
              </text>
              <div class = "absolute w-full h-full bottom-0">
                <span class = "absolute top-1/2 px-12 text-xl sm:px-32 sm:text-3xl md:text-3xl md:px-32 lg:text-4xl lg:px-40 xl:text-5xl mt-14 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full xl:px-52">"I reckon what you guy sare doing is awesome, cause you are helping a lot of people who sometimes don't even know where to ask for help. Keep doing all the great work guys" - Frank Ha</span>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev black absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block hidden flex-grow md:flex bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon hidden flex-grow md:flex inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <Footer></Footer>
    </div>
    );
  };

export default Testimonials;

