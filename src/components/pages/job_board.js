import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';
import React, { useEffect, useState } from "react";
import { format } from 'react-string-format';
import Select from 'react-select'

const JobBoard = () => {
  const prOptions = [
    {group: "PR", value: "No",label: "No"},
    {group: "PR", value: "Maybe",label: "Maybe"},
    {group: "PR", value: "Yes",label: "Yes"}]
  const employemntOptions = [
      {group: "EmploymentType", value: "Internship",label: "Internship"},
      {group: "EmploymentType", value: "Graduate",label: "Graduate"},
      {group: "EmploymentType", value: "Full Time",label: "Full Time"},
      {group: "EmploymentType", value: "Part Time",label: "Part Time"}]
  const multiOptions = [
    {label: "PR Requirments", options: prOptions},
    {label: "Employment Type", options: employemntOptions}
  ]

  //Location Info
  let LOCATION_SET = []
  const locationObject = []
  const [locationPopulate, setLocationPopulate] = React.useState('');
  const [location, setLocation] = React.useState('');

  //Industry Info
  let INDUSTRY_SET = []
  const industryObject = []
  const [industryPopulate, setIndustryPopulate] = React.useState('');
  const [industry, setIndustry] = React.useState('');

  //Employment Info
  const [requirements, setReq] = React.useState('');

  const READ_ONLY_WEBSITE = "https://api.airtable.com/v0/app6ZljkOOxLsFad8/Stint%20Job%20Board?api_key=keyH7ZOsHYmLzFr3z&sort%5B0%5D%5Bfield%5D=Date+Created&sort%5B0%5D%5Bdirection%5D=desc"
  const [jobsData, setData] = useState({});
  const [search, setSearch] = React.useState('');

  function setLocations(data){
    for (let i = 0; i < data.length; i++){
      for (let j = 0; j < data[i].fields["Location"].length; j++){
        if (!LOCATION_SET.includes(data[i].fields["Location"][j])){
          LOCATION_SET.push(data[i].fields["Location"][j])
        }
      }
    }
    for (let i = 0; i < LOCATION_SET.length; i ++){
      locationObject.push({
        value: LOCATION_SET[i], label: LOCATION_SET[i]
      })
    }
    console.log(locationObject)
    setLocationPopulate(prevLocations => locationObject)
  }

  function setIndustries(data){
    for (let i = 0; i < data.length; i++){
      for (let j = 0; j < data[i].fields["Industry"].length; j++){
        if (!INDUSTRY_SET.includes(data[i].fields["Industry"][j])){
          INDUSTRY_SET.push(data[i].fields["Industry"][j])
        }
      }
    }
    for (let i = 0; i < INDUSTRY_SET.length; i ++){
      industryObject.push({
        value: INDUSTRY_SET[i], label: INDUSTRY_SET[i]
      })
    }
    console.log(industryObject)
    setIndustryPopulate(prevLocations => industryObject)
  }

  useEffect(() => {
    fetch(READ_ONLY_WEBSITE)
      .then((res) => res.json())
      .then((data) => {
        setData(data.records);
        setLocations(data.records)
        setIndustries(data.records)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search.length)
  };
  
  const handleIndustry = (event) => {
    setIndustry(event);
    console.log(event)
  };

  const handleLocation = (event) => {
    setLocation(event);
    console.log(event)
  };

  const handleReq = (event) => {
    setReq(event);
    console.log(event)
  };

  function isValidIndustry (record, selected){
    let valid = false
    for (let i = 0; i < record.length; i++){
      for (let j =0; j < selected.length; j++){
        if (record[i] == selected[j]["value"]){
          valid = true
        }
      }
    }
    return valid
  }

  function isValidLocation (record, selected){
    let valid = false
    for (let i = 0; i < record.length; i++){
      for (let j =0; j < selected.length; j++){
        if (record[i] == selected[j]["value"]){
          valid = true
        }
      }
    }
    return valid
  }

  function isValidRequirements (employmentInfo, prInfo, selected){
    let employmentCount = 0
    let prCount = 0
    let valid1 = false
    let valid2 = false

    //Loop through selected
    for (let i = 0; i < selected.length; i++){
      //If selected belongs to pr group
      if (selected[i]["group"] === "PR"){
        prCount++
        //Check that selected is part of the current job
        for (let j =0; j < prInfo.length; j++){
          if (prInfo[j] == selected[i]["value"]){
            valid1 = true
          }
        }
      }
      else if (selected[i]["group"] === "EmploymentType"){
        employmentCount++
        //Check that selected is part of the current job
        for (let j =0; j < employmentInfo.length; j++){
          if (employmentInfo[j] == selected[i]["value"]){
            valid2 = true
          }
        }
      }
    }
    console.log(employmentCount, prCount, valid1, valid2)
    let validOverall = (valid1 || prCount === 0)&&(valid2 || employmentCount === 0)
    return validOverall
  }

    return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "bg-light_blue pt-5 lg:pt-32 pb-5 w-full md:px-10 lg:px-16">
        <div class = "mx-6 grid grid-cols-12 mb-0">
        <div class="col-span-4">
            <div class="xl:w-full">
              <div class="input-group relative flex flex-wrap items-stretch w-full rounded">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
                <input type="search" onChange = {handleSearch} class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"></input>
                <span class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                </span>
              </div>
            </div>
          </div>
          <div class = "col-span-8">
            <div class = "grid gap-x-3 grid-cols-12">
              <div class = "col-span-4">
                <Select isSearchable={false} options = {industryPopulate}
                  placeholder="Industries"
                  onChange={handleIndustry} isMulti 
                  id="countries" class="bg-mid_blue border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <div class = "col-span-4">
                <Select isSearchable={false} options = {locationPopulate}
                  placeholder="Location"
                  onChange={handleLocation} isMulti 
                  id="countries" class="bg-mid_blue border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <div class = "col-span-4">
                <Select isSearchable={false} options = {multiOptions}
                  placeholder="Requirements"
                  onChange={handleReq} isMulti 
                  id="countries" class="bg-mid_blue border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class = "bg-zinc-50 pb-10 pt-10 md:px-10 lg:px-20">
        <div class = "grid gap-y-5 items-stretch grid-cols-12 gap-x-5">
            {jobsData.length > 0 ? (
              jobsData.map((record) => (
                (search.length === 0 || 
                (typeof(record.fields["Company Name"]) === 'string'? record.fields["Company Name"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) && search.length !== 0: false) ||
                (typeof(record.fields["Job Description"]) === 'string'? record.fields["Job Description"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) && search.length !== 0: false) ||
                (typeof(record.fields["Location"]) === 'object'? record.fields["Location"].map((locationInfo) => (locationInfo.toLocaleLowerCase())).includes(search.toLocaleLowerCase()) && search.length !== 0: false) ||
                (typeof(record.fields["Job Role"]) === 'string'? record.fields["Job Role"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) && search.length !== 0: false)) 
                &&
                (industry.length === 0 ||
                (typeof(record.fields["Industry"]) === 'object'? isValidIndustry(record.fields["Industry"],industry) : false)) 
                &&
                (location.length === 0 ||
                (typeof(record.fields["Location"]) === 'object'? isValidLocation(record.fields["Location"],location) : false)) 
                &&
                (requirements.length === 0 ||
                  ((typeof(record.fields["Job Type"]) === 'object' && typeof(record.fields["PR Requirement"]) === 'object')? isValidRequirements(record.fields["Job Type"], record.fields["PR Requirement"], requirements) : false)) 
                ? 
                <div class = "col-span-12 lg:col-span-4 mx-auto w-[93%]">
                  <a href={format('/job-description?job={0}_{1}', record.fields["Company Name"], record.fields["Job Role"])}>
                  <div class="h-[100%] relative w-full bg-white rounded-lg shadow-lg">
                    <span class = "text-transparent">hi</span>
                    <div class = "grid grid-cols-12 gap-x-8">
                      <div class = "col-span-5 items-center flex">
                        <img class = "h-24 p-3 ml-10 mb-10" alt = "Logo Error" src = {record.fields["Company Logo"][0].url}/>
                      </div>
                      <div class = "relative h-[100%] col-span-7">
                        <div class = "min-h-[0rem]">
                          <h5 class="mb-2 text-lg pr-10 text-left lexend font-bold tracking-tight text-gray-900 dark:text-white">{record.fields["Job Role"]}</h5>
                        </div>
                        <div class = "relative min-h-[0rem]">
                          <div class = "text-left bottom-4 mt-3 mr-2 block ml-0">
                            {record.fields["Industry"].map((industryLabel) => (
                              <span class = "py-1 leading-[2.5] px-2 mr-3 rounded-3xl bg-indigo-200"> {industryLabel} </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="mb-4 h-px border-light_blue border-solid"></hr>
                    <div class = "mx-8">
                      <div class="text-left">
                        <div class = "mt-5">
                          <span class = "lexend">PR Requirement:</span>
                          {record.fields["PR Requirement"].map((prLabel) => (
                            <span class = "inline py-1 leading-[2.5] pr-3 pl-2 mx-2 rounded-3xl bg-teal-200"> {prLabel} </span>
                          ))}
                        </div>
                        <div class = "mt-3 text-left">
                          <span class = "lexend">Employment Type:</span>
                          {record.fields["Job Type"].map((jobTypeLabel) => (
                            <span class = "py-1 pl-2 pr-3 mx-2 leading-[2.5] rounded-3xl bg-emerald-200"> {jobTypeLabel} </span>
                          ))}
                        </div>
                        <div class = "mt-3 text-left">
                          <span class = "lexend">Location:</span>
                          {record.fields["Location"].map((locationLabel) => (
                            <span class = "py-1 pl-2 pr-3 mx-2 leading-[2.5] rounded-3xl bg-orange-200"> {locationLabel} </span>
                          ))}
                        </div>
                        <div class = "mt-8 text-left mb-20">
                          <p class = "lexend mb-1 font-bold">What do I do in this role?</p>
                          <span class = "lexend py-1 text-left rounded-3xl"> {record.fields["Job Description"].substring(0,100)}... </span>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="-translate-x-1/2 absolute bottom-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-mid_blue rounded-lg hover:bg-dark_blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      More Info
                      <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                  </a>
                </div>
                 :
                  <></>
              ))
            ) : (
                <div>
                  Fetching Data...
                </div>
            )}     
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
  };

export default JobBoard;