import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';

const Companies = () => {
    return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "bg-light_blue pt-5 lg:pt-28 pb-36 w-full min-h-[500px]">
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
        <p class = "text-xl lg:text-left text-left lexend lg:pt-6 text-sm text-dark_blue font-bold md:text-xl pb-10 lg:mr-80">
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
      <div class = "pt-16 bg-white min-h-[400px]">
        <div class = "bg-transparent pb-0 w-full lg:w-5/12 lg:float-right lg:mr-24">
         <div class = "inline-grid items-center justify-items-center lg:pt-0">
          <img class = "z-40 object-center col-span-full row-span-full lg:py-0 py-10 lg:w-[25rem] w-8/12 align-middle" src={require('./../Images/Diversity.png')}/>
          {/* <div className="mx-auto rounded-full bg-outer_circle_blue z-0 col-span-full row-span-full align-middle object-center w-6/12 lg:w-[20rem] lg:h-[20rem]">
          <div className="mx-auto rounded-full bg-black z-1 object-center col-span-full row-span-full align-middle w-5/12 lg:w-[15rem] lg:h-[15rem]">
           
          </div>
          </div> */}
         </div>
        </div>
        <div class = "bg-transparent w-full lg:pt-5 lg:w-7/12 px-12 lg:mr-0 lg:px-0 lg:pl-20">
          <p class = "lg:text-left lexend text-left text-4xl lg:w-8/12 lg:text-5xl lg:leading-[1.3] font-bold">
            Why Hire International Students?
          </p>
          <p class = "lg:text-left text-left lexend pt-10 text-xl text-sm md:text-xl lg:mr-40">
          Ethnically diverse teams are more likely to outperform their competitors by 35% (McKinsey & Co, 2016)
          </p>
        </div>
      </div>
      <div class = "grid px-5 lg:px-0 grid-cols-12 pb-10 bg-white">
          <div class = "bg-transparent col-span-12 xl:col-span-4 mx-auto">
            <div class="align-top p-6 max-w-screen-md xl:max-w-[400px] bg-white rounded-lg shadow-xl dark:bg-gray-800">
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
            <div class="align-top p-6 max-w-screen-md xl:max-w-[400px] bg-white rounded-lg shadow-xl dark:bg-gray-800">
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
            <div class="align-top p-6 max-w-screen-md xl:max-w-[400px] bg-white rounded-lg shadow-xl dark:bg-gray-800">
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
      <Footer></Footer>
    </div>
    );
  };

export default Companies;