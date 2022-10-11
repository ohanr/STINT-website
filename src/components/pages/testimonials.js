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
          <div class = "grid grid-cols-12 px-12">
            <div class = "my-5 lg-my-0 relative col-span-full lg:col-span-4 bg-light_blue rounded-3xl mx-3 xl:mx-8">
              <p class = "lexend lg:text-xl xl:text-3xl font-bold px-10 lg:pb-[30%] xl:pb-[25%] pt-10 text-left">
                "Very random, I know sometimes slack might be a bit dead, but given there were 2 other similar communities that popped up at the same time, I find y'all are doing the best job so far, wanted to give some encouragement"
              </p>
              <p class = "text-right lg:absolute bottom-0 lexend text-lg lg:text-2xl px-10 pt-5 pb-10 right-0">
                - Bryce Chee
              </p>
            </div>
            <div class = "my-5 lg-my-0 relative col-span-full lg:col-span-4 bg-light_blue rounded-3xl mx-3 xl:mx-8">
              <p class = "lexend lg:text-xl xl:text-3xl font-bold px-10 pt-10 text-left">
                "Fantastic work team! As someone who moved to Australia myself, I can only attest to the power of community! Keep up the great work"
              </p>
              <p class = "text-right lg:absolute bottom-0 lexend text-lg lg:text-2xl px-10 pt-5 pb-10 right-0">
                - Jasca Zittel
              </p>
            </div>
            <div class = "my-5 lg-my-0 relative col-span-full lg:col-span-4 bg-light_blue rounded-3xl mx-3 xl:mx-8">
              <p class = "lexend lg:text-xl xl:text-3xl font-bold px-10 pt-10 text-left">
                "I reckon what you guys are doing is awesome, cause you are helping a lot of people who sometimes don't even know where to ask for help. Keep doing all the great work guys"
              </p>
              <p class = "text-right lg:absolute bottom-0 lexend text-lg lg:text-2xl px-10 pt-5 pb-10 right-0">
                - Frank Ha
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
  };

export default Testimonials;

