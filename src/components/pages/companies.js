import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';

const Companies = () => {
    return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "bg-light_blue pt-5 lg:pt-28 pb-20 lg:pb-36 w-full min-h-[500px]">
        <div class = "bg-transparent pb-0 w-full lg:w-6/12 lg:float-right lg:mr-16">
         <div class = "inline-grid items-center justify-items-center lg:pt-0">
          <img class = "z-40 object-center col-span-full row-span-full lg:py-0 py-10 lg:w-[80rem] w-8/12 align-middle" src={require('./../Images/meeting.png')}/>
          {/* <div className="mx-auto rounded-full bg-outer_circle_blue z-0 col-span-full row-span-full align-middle object-center w-6/12 lg:w-[20rem] lg:h-[20rem]">
          <div className="mx-auto rounded-full bg-black z-1 object-center col-span-full row-span-full align-middle w-5/12 lg:w-[15rem] lg:h-[15rem]">
           
          </div>
          </div> */}
         </div>
        </div>
        <div class = "bg-transparent w-full lg:pt-5 lg:w-7/12 px-12 lg:mr-80 lg:px-0 lg:pl-20">
        <p class = "text-xl lg:text-left text-left lexend lg:pt-6 text-sm text-dark_blue font-bold md:text-xl pb-5 lg:mr-80">
          Businesses
          </p>
          <p class = "lg:text-left lexend text-left text-4xl lg:w-8/12 lg:text-6xl lg:leading-[1.3] font-bold">
            Hire your next game-changer
          </p>
          <p class = "text-xl lg:text-left text-left lexend pt-6 text-sm md:text-xl xl:mr-80">
          Australia’s largest community of international students, connecting you with talented students from institutions all across Australia. 
          </p>
          <div class = "lg:mr-36 lg:pt-16 lg:w-5/12">
            <button class="bg-dark_blue text-white w-full font-bold mt-8 py-3 rounded-lg lg:hover:bg-dark_blue">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqLfNYlye_7GkQLjPpUe77VilHvIdjz9FmBhq0I1hzhII2Yw/viewform" class="text-xl lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                  Hire Now
              </a>
            </button>
          </div>
        </div>
      </div>
      <div class = "pt-8 lg:pt-16 bg-white min-h-[400px]">
        <div class = "bg-transparent pb-0 w-full lg:w-5/12 lg:float-right lg:mr-24">
         <div class = "inline-grid items-center justify-items-center lg:pt-0">
          <img class = "z-40 object-center col-span-full row-span-full lg:py-0 py-10 lg:w-[25rem] w-8/12 align-middle" src={require('./../Images/Diversity.png')}/>
         </div>
        </div>
        <div class = "bg-transparent w-full lg:pt-10 lg:w-7/12 px-12 lg:mr-0 lg:px-0 lg:pl-20">
          <p class = "lg:text-left lexend text-left text-4xl lg:w-8/12 lg:text-5xl lg:leading-[1.3] font-bold">
            Why Hire International Students?
          </p>
          <p class = "lg:text-left text-left lexend pt-10 text-xl text-sm md:text-xl lg:mr-40">
          Ethnically diverse teams are more likely to outperform their competitors by 35% (McKinsey & Co, 2016)
          </p>
        </div>
      </div>
      <div class = "grid px-5 lg:px-0 grid-cols-12 pb-24 bg-white">
          <div class = "bg-transparent col-span-12 xl:col-span-4 mx-auto">
            <div class="align-top p-6 max-w-screen-md xl:max-w-[400px] bg-white rounded-lg shadow-xl">
                <img class = "mb-2 w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" fill-rule="evenodd" viewBox="0 0 20 20" src={require('./../Images/Globe.png')}/>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-left text-gray-900 dark:text-white">
                    Knowledge of International Markets
                </h5>
                <p class="mb-3 font-normal text-left text-gray-500 dark:text-gray-400">
                    Having staff that can bring new skills, attitudes and ideas can boost innovation in the workplace, thus exposing current staff to different cultures and working methods. This is a must in today’s globalised labour market.
                </p>
            </div>
          </div>
          <div class = "bg-transparent col-span-12 py-10 xl:py-0 xl:col-span-4 mx-auto">
            <div class="align-top p-6 max-w-screen-md xl:max-w-[400px] bg-white rounded-lg shadow-xl">
                <img class = "mb-2 w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" fill-rule="evenodd" viewBox="0 0 20 20" src={require('./../Images/Globe.png')}/>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-left text-gray-900 dark:text-white">
                    Global/Intercultural Fluency
                </h5>
                <p class="mb-3 font-normal text-left text-gray-500 dark:text-gray-400">
                    Racially diverse companies demonstrates openness, inclusiveness, and sensitivity, which can lead to teams gaining new perspectives on existing problems.
                </p>
            </div>
          </div>
          <div class = "bg-transparent col-span-12 xl:col-span-4 mx-auto">
            <div class="align-top p-6 max-w-screen-md xl:max-w-[400px] bg-white rounded-lg shadow-xl">
                <img class = "mb-2 w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" fill-rule="evenodd" viewBox="0 0 20 20" src={require('./../Images/Globe.png')}/>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-left text-gray-900 dark:text-white">
                    Acculturated Candidates
                </h5>
                <p class="mb-3 font-normal text-left text-gray-500 dark:text-gray-400">
                    Candidates of our Stint community are students at Australia's top tertiary institutions and are well accustomed to the Australian work life.
                </p>
            </div>
          </div>
      </div>
      <div class = "bg-light_blue">
        <p class = "lexend font-bold text-5xl pt-16">
          Hire Through Stint
        </p>
        <p class = "lexend font-bold text-xl md:text-3xl px-[15%] pt-10">
          Reap the benefits of diversity by hiring from our community of ambitious and eager international students
        </p>
        <div class = "grid lg:gap-x-10 grid-cols-12">
          <div class = "col-span-12 lg:col-span-6">
            <div class="p-6 h-[90%] my-10 lg:px-10 mx-auto lg:mx-0 lg:float-right w-11/12 lg:w-7/12 bg-white rounded-xl shadow-md">
              <p class = "text-left  lexend pb-6 pt-2 text-3xl md:text-5xl text-dark_blue">
                Premium 
              </p>
              <p class = "lexend text-sm md:text-lg font-bold text-left py-5">
                Gain exclusive features that will boost your chance of finding the perfet candidate
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Weekly reminder on the job
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Shared in Slack community
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Posting on job board
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Shown in search results
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Featured listing in job board
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Providing tailored recommendations
              </p> 
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Sharing to mailing list
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Countdown to apply for the job
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Social media posting
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Job preview
              </p>
              <p class = "lexend text-2xl pb-10 pt-16 text-dark_blue">
                <span class = 'text-5xl'>$30</span> / Listing
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqLfNYlye_7GkQLjPpUe77VilHvIdjz9FmBhq0I1hzhII2Yw/viewform" class="mb-7 px-10 inline-flex c py-2 px-3 text-2xl font-medium text-center text-white bg-mid_blue rounded-2xl hover:bg-dark_blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Get Started
              </a>
            </div>
          </div>
          <div class = "col-span-12 lg:col-span-6">
          <div class="mx-auto lg:mx-0 p-6 mb-10 lg:my-10 lg:px-10 w-11/12 lg:w-7/12 h-[90%] bg-white rounded-xl shadow-md">
              <p class = "lexend text-left pb-6 pt-2 text-5xl text-dark_blue">
                Starter 
              </p>
              <p class = "lexend text-lg font-bold text-left py-5">
                Get your openings noticed among the international student community 
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Weekly reminder on the job
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Shared in Slack community
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Posting on job board
              </p>
              <p class = "lexend text-lg py-1 text-left">
                <span class = "text-teal-500">&#10004;</span> Shown in search results
              </p>
              <p class = "lexend text-lg hidden lg:flex py-1 text-transparent text-left">
                Job preview
              </p>
              <p class = "lexend text-lg py-1 hidden lg:flex text-transparent text-left">
                Job preview
              </p>
              <p class = "lexend text-lg py-1 hidden lg:flex text-transparent text-left">
                Job preview
              </p>
              <p class = "lexend text-lg py-1 hidden lg:flex text-transparent text-left">
                Job preview
              </p>
              <p class = "lexend text-lg py-1 hidden lg:flex text-transparent text-left">
                Job preview
              </p>
              <p class = "lexend text-lg py-1 hidden lg:flex text-transparent text-left">
                Job preview
              </p>
              <p class = "lexend text-2xl pb-10 pt-16 text-dark_blue">
                <span class = 'text-5xl'>Free</span> / Listing
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdedYuEZyr6ljimDukPdSXIOEKZi8x5j_u8XZHVIw26OMuHPw/viewform" class="mb-7 px-10 inline-flex items-center py-2 px-3 text-2xl font-medium text-center text-white bg-mid_blue rounded-2xl hover:bg-dark_blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class = "bg-light_blue pb-16 pt-8">
        <div class = "m-5 lg:border-white border-0 rounded-xl lg:border-4 lg:shadow-2xl">
          <p class = "text-left leading-[1.3] lexend font-bold px-16 lg:pt-5 text-5xl">
            Event Management Platform 
          </p>
          <div class = "grid grid-cols-12 pt-6 px-16">
            <div class = "col-span-12 lg:col-span-9">
              <div class="h-full w-full flex flex-col justify-center pt-3 h-[100%] text-left my-auto lexend font-bold text-xl md:text-3xl pb-5">
                <span> Running an event, conference or program for international students? </span>
              </div>
            </div>
            <div class = "col-span-12 lg:col-span-3">
              <button class="bg-mid_blue text-white w-full lg:w-10/12 float-left lg:float-right font-bold py-3 rounded-lg md:hover:bg-dark_blue">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqLfNYlye_7GkQLjPpUe77VilHvIdjz9FmBhq0I1hzhII2Yw/viewform" class="text-xl lg:text-xl lexend text-base block py-2 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                    Get Started
                </a>
              </button>
            </div>
          </div>
          <div class = "px-16 pt-4">
            <div class="my-5 align-top p-2 py-5 md:py-2 w-full mx-auto bg-white rounded-lg shadow-xl">
              <div class = "grid grid-cols-12">
              <div class = "rounded-lg col-span-2 hidden md:flex  lg:col-span-1">
                  <img class = "bg-light_blue w-full h-fit rounded-lg" src={require('./../Images/Resources.png')}/>
                </div>
                <div class = "h-full pl-5 lg:col-span-10 col-span-11 md:col-span-9">
                  <p class = "lexend font-bold text-xl text-left">
                    Community Management Expertise
                  </p>
                  <p class = "lexend pt-6 text-lg text-left">
                    With extensive experience managing a community of international students, we know how to build and engage an audience, creating a safe space where everyone feels comfortable.
                  </p>
                </div>
              </div>
            </div>
            <div class="my-5 align-top p-2 py-5 md:py-2 w-full mx-auto bg-white rounded-lg shadow-xl">
              <div class = "grid grid-cols-12">
              <div class = "rounded-lg col-span-2 hidden md:flex lg:col-span-1">
                  <img class = "bg-light_blue w-full h-fit rounded-lg" src={require('./../Images/Community.png')}/>
                </div>
                <div class = "h-full pl-5 lg:col-span-10 col-span-11 md:col-span-9">
                  <p class = "lexend font-bold text-xl text-left">
                    Private Slack Channel
                  </p>
                  <p class = "lexend pt-6 text-lg text-left">
                  You will be provided with your very own Slack channel, within the Stint Slack Community, to communicate both during and beyond the life of the event.  
                  </p>
                </div>
              </div>
            </div>
            <div class="my-5 align-top p-2 py-5 md:py-2 w-full mx-auto bg-white rounded-lg shadow-xl">
              <div class = "grid grid-cols-12">
                <div class = "rounded-lg hidden md:flex col-span-2 lg:col-span-1">
                  <img class = "bg-light_blue w-full h-fit rounded-lg" src={require('./../Images/Events.png')}/>
                </div>
                <div class = "h-full pl-5 lg:col-span-10 col-span-11 md:col-span-9">
                  <p class = "lexend font-bold text-xl text-left">
                    Promote to the Stint Community
                  </p>
                  <p class = "lexend pt-6 text-lg text-left">
                    Spread the word about any events, conferences or programs to our community of international students eager to learn and develop their skills. 
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 mb-10 align-top p-2 py-5 md:py-2 w-full mx-auto bg-white rounded-lg shadow-xl">
              <div class = "grid grid-cols-12">
              <div class = "rounded-lg hidden md:flex col-span-2 lg:col-span-1">
                  <img class = "bg-light_blue w-full h-fit rounded-lg" src={require('./../Images/Notice Board.png')}/>
                </div>
                <div class = "h-full pl-5 lg:col-span-10 col-span-11 md:col-span-9">
                  <p class = "lexend font-bold text-xl text-left">
                    Moderated for You
                  </p>
                  <p class = "lexend pt-6 text-lg text-left">
                  With the support of our team of dedicated moderators, you can fully focus on running your event. Simply let us know what you want!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
  };

export default Companies;