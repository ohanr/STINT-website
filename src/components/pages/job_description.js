import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';
import React, { useEffect, useState } from "react";
import "primereact/resources/themes/tailwind-light/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import { format } from 'react-string-format';
import "primeicons/primeicons.css";          
import { useSearchParams } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const JobDescription = () => {
    let jobIdentifier = []
    const [searchParams] = useSearchParams();
    const [jobInfo, setJobInfo] = useState();
    for (const entry of searchParams.entries()) {
        jobIdentifier.push(entry[1])
      }
    const [jobsData, setData] = useState({});
    const READ_ONLY_WEBSITE = "https://api.airtable.com/v0/app6ZljkOOxLsFad8/Stint%20Job%20Board?api_key=keyH7ZOsHYmLzFr3z&sort%5B0%5D%5Bfield%5D=Date+Created&sort%5B0%5D%5Bdirection%5D=desc"
    
    function getJobInfo(jobsDataLocal){
        //Loop all jobs
        for (let i = 0; i < jobsDataLocal.length; i++){
            if (jobsDataLocal[i].fields["Company Name"] === jobIdentifier[0] && (jobsDataLocal[i].fields["Job Role"] === format('{0} ',jobIdentifier[1]) || jobsDataLocal[i].fields["Job Role"] === jobIdentifier[1])){
                setJobInfo(jobsDataLocal[i].fields)
                console.log(jobsDataLocal[i].fields)
                break;
            }
        }
    }

    useEffect(() => {
        fetch(READ_ONLY_WEBSITE)
        .then((res) => res.json())
        .then((data) => {
            setData(data.records);
            getJobInfo(data.records)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

        return (
        jobsData.length > 0 ?
        (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
            </style>
            <div class = "bg-white min-h-screen">
                <Navbar></Navbar>
                <div class = "bg-gradient-to-b from-light_blue to-white min-h-[8rem]"></div>
                {jobsData.length > 0 ? 
                (<>
                <div class = "pt-5 lg:pt-16 mb-20 h-40">
                    <img class = "h-28 ml-5 lg:ml-24 mb-10" alt = "Logo Error" src = {jobInfo["Company Logo"][0].url}/>
                </div>
                <div class = "mx-5 lg:mx-24 mt-3 lg:mt-8 grid grid-cols-12">
                    <div class = "text-left col-span-12 lg:col-span-8 lg:border-r-2 pr-10 mb-10 border-stone-400">
                    <p class = 'lexend text-5xl'>{jobInfo["Company Name"]}</p>
                        <p class = 'lexend text-3xl mt-5'>{jobInfo["Job Role"]}</p>
                        <p class = "lexend mt-10 text-xl">{jobInfo["Job Description"]}</p>
                    </div>
                    <div class = "col-span-12 lg:col-span-4 text-left lg:pl-10 pt-8 mb-10">
                        <div class = 'lexend text-lg'>
                            <span class = 'lexend text-lg font-bold'>PR Requirements:</span><span class = "inline py-1 leading-[2.5] pr-3 pl-2 mx-2 rounded-3xl bg-emerald-200"> {jobInfo["PR Requirement"]} </span>
                        </div>
                        <div class = 'lexend text-lg mt-10'>
                            <span class = 'lexend text-lg font-bold'>Job Type:</span> {jobInfo["Job Type"].map((jobTypeLabel) => (
                                <span class = "py-1 pl-2 pr-2 mx-2 leading-[2.5] rounded-3xl bg-emerald-200"> {jobTypeLabel} </span>
                            ))}
                        </div>
                        {/* <div class = 'lexend text-lg mt-10'>
                            <span class = 'lexend text-lg font-bold'>Industry:</span> {jobInfo["Industry"].map((industryLabel) => (
                                <span class = "py-1 pl-2 pr-2 mx-2 leading-[2.5] rounded-3xl bg-indigo-200"> {industryLabel} </span>
                            ))}
                        </div> */}
                        <div class = 'lexend text-lg mt-10'>
                            <span class = 'lexend text-lg font-bold'>Location:</span> {jobInfo["Location"].map((locationLabel) => (
                                <span class = "py-1 pl-2 pr-2 mx-2 leading-[2.5] rounded-3xl bg-orange-200"> {locationLabel} </span>
                            ))}
                        </div>
                        <div class = 'lexend text-lg mt-10'>
                            <span class = 'lexend text-lg font-bold'>Deadline: </span>{jobInfo["Application Deadline"]}
                        </div>
                    </div>
                </div>
                <div class = "pb-36 lg:pt-24 lg:px-24">
                    <button class="lg:float-left bg-light_blue py-3 px-10 rounded-lg lg:hover:bg-mid_blue">
                    <a href={jobInfo["application link"]} class="text-sm lg:text-xl lexend text-base block py-2 text-black bg-transparent rounded md:p-0">
                        Apply Now!
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    </button>
                </div>
                </>)
                : 
                (<div>Loading</div>)}
            </div>
            <Footer></Footer>
        </div>):
        (<></>)
    )}

    export default JobDescription;