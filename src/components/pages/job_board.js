import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';
import React, { useEffect, useState } from "react";
import { format } from 'react-string-format';
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/tailwind-light/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";          

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
    {label: "PR Requierments", code:"PR", items: prOptions},
    {label: "Employment Types", code:"EMP", items: employemntOptions}
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
  const [requirementsDisplay, setReqDisp] = React.useState('');

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
  };
  
  const handleIndustry = (event) => {
    setIndustry(event.value);
  };

  const handleLocation = (event) => {
    setLocation(event.value);
  };

  const handleReq = (event) => {
    let arrayPush = []
    const PR_OPTIONS = ["No", "Maybe", "Yes"]
    for (let i = 0 ; i < event.value.length; i++){
    let appendItem 
      if (PR_OPTIONS.includes(event.value[i])){
        appendItem = {group: "PR", value: event.value[i]}
      }
      else{
        appendItem = {group: "EmploymentType", value: event.value[i]}
      }
      arrayPush.push(appendItem)
    }
    setReq(arrayPush);
    setReqDisp(event.value)
  };

  function isValidIndustry (record, selected){
    let valid = false
    for (let i = 0; i < record.length; i++){
      for (let j =0; j < selected.length; j++){
        if (record[i] === selected[j]){
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
        if (record[i] === selected[j]){
          valid = true
        }
      }
    }
    return valid
  }

  function isValidLocationSearch(record, search){
    let valid = false
    for (let i = 0; i < record.length; i++){
        if (record[i].toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          valid = true
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
          if (prInfo[j] === selected[i]["value"]){
            valid1 = true
          }
        }
      }
      else if (selected[i]["group"] === "EmploymentType"){
        employmentCount++
        //Check that selected is part of the current job
        for (let j =0; j < employmentInfo.length; j++){
          if (employmentInfo[j] === selected[i]["value"]){
            valid2 = true
          }
        }
      }
    }
    let validOverall = (valid1 || prCount === 0)&&(valid2 || employmentCount === 0)
    return validOverall
  }


  const industryPanelFooter = () => {
    const selectedItems = industry;
    const length = selectedItems ? selectedItems.length : 0;
    return (
        <div className="py-2 px-3">
            <b>{length}</b> item{length > 1 ? 's' : ''} selected.
        </div>
    );
  }

  const locationPanelFooter = () => {
    const selectedItems = location;
    const length = selectedItems ? selectedItems.length : 0;
    return (
        <div className="py-2 px-3">
            <b>{length}</b> item{length > 1 ? 's' : ''} selected.
        </div>
    );
  }

  const requirementsPanelFooter = () => {
    const selectedItems = requirements;
    const length = selectedItems ? selectedItems.length : 0;
    return (
        <div className="py-2 px-3">
            <b>{length}</b> item{length > 1 ? 's' : ''} selected.
        </div>
    );
  }

    return (
    <div>
    {jobsData.length > 0 ? (
      <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "md:px-10 px-10 lg:px-20 bg-gradient-to-b from-light_blue to-white pt-5 pb-10 lg:pt-28 w-full md:px-10 lg:px-20">
        <p class = "lexend text-3xl lg:text-5xl font-bold text-left text-black lg:mr-48 pt-5">
          Welcome to Stint’s Job Board Catered Exclusively for International Students! 
        </p>
        <p class = "lexend text-md lg:text-lg text-left text-black lg:mr-64 pt-7">
          Whether you’re a recent graduate or you’ve just started your degree, Stint’s job board has it all. Filter jobs by industry, location and PR requirements to find the job that suits you best!
        </p>
        <p class = "lexend text-xl lg:text-3xl text-left text-black lg:mr-48 lg:pt-20 pt-5 lg:pb-10">
          Updates are posted every Monday at 12PM
        </p>
      </div>
      <div class = "pb-16 bg-white pb-30 md:px-10 lg:px-4 xl:px-16">
        <div class = "mx-4 grid gap-y-5 grid-cols-12 mb-10">
            <div class="col-span-12">
              <div class="xl:w-full">
                <div class="flex items-center w-full h-12 rounded-lg mb-2 shadow-sm border-[2px] border-[#BFBCBC] bg-white">
                  <div class="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                  class="h-full w-full text-sm border-none rounded-lg focus:ring-0 focus:ring-offset-0 text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search..."
                  onChange = {handleSearch}/> 
                </div>
              </div>
            </div>
            <div class = "col-span-12">
              <div class = "grid gap-x-3 grid-cols-12">
                <div class = "col-span-4">
                  <MultiSelect options = {industryPopulate}
                    id = "dropdowns"
                    filter = {true}
                    value = {industry}
                    optionValue="value"
                    onChange={handleIndustry}
                    display="chip"
                    placeholder = "Industry"
                    className="industry-multiselect"
                    panelFooterTemplate={industryPanelFooter}/>
                </div>
                <div class = "col-span-4">
                  <MultiSelect options = {locationPopulate}
                    filter = {true}
                    id = "dropdowns"
                    value = {location}
                    onChange={handleLocation} 
                    optionValue="value"
                    display="chip"
                    placeholder = "Location"
                    className="location-multiselect"
                    panelFooterTemplate={locationPanelFooter}/>
                </div>
                <div class = "col-span-4">
                  <MultiSelect options = {multiOptions}
                    showSelectAll = {false}
                    id = "dropdowns"
                    optionValue="value"
                    optionLabel = "label"
                    display="chip"
                    placeholder = "Requirements"
                    optionGroupLabel="label" optionGroupChildren="items"
                    value = {requirementsDisplay}
                    onChange={handleReq}
                    className="req-multiselect"
                    panelFooterTemplate={requirementsPanelFooter}/>
                </div>
              </div>
            </div>
          </div>
        <div class = "z-40 grid gap-y-5 items-stretch grid-cols-12 mx-2 gap-x-5">
            {jobsData.length > 0 ? (
              jobsData.map((record) => (
                (search.length === 0 || 
                (typeof(record.fields["Company Name"]) === 'string'? record.fields["Company Name"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) && search.length !== 0: false) ||
                (typeof(record.fields["Job Description"]) === 'string'? record.fields["Job Description"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) && search.length !== 0: false) ||
                (typeof(record.fields["Location"]) === 'object'? isValidLocationSearch(record.fields["Location"], search) && search.length !== 0: false) ||
                (typeof(record.fields["Job Role"]) === 'string'? record.fields["Job Role"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) && search.length !== 0: false)) 
                &&
                (industry.length === 0 ||
                (typeof(record.fields["Industry"]) === 'object'? isValidIndustry(record.fields["Industry"], industry) : false)) 
                &&
                (location.length === 0 ||
                (typeof(record.fields["Location"]) === 'object'? isValidLocation(record.fields["Location"], location) : false)) 
                &&
                (requirements.length === 0 ||
                  ((typeof(record.fields["Job Type"]) === 'object' && typeof(record.fields["PR Requirement"]) === 'object')? isValidRequirements(record.fields["Job Type"], record.fields["PR Requirement"], requirements) : false)) 
                ? 
                <div class = "z-40 col-span-12 lg:col-span-4 mx-auto w-[93%]">
                  <a href={format('/job-description?company={0}&job={1}', record.fields["Company Name"], record.fields["Job Role"])}>
                  <div class="h-[100%] hover:bg-zinc-50 relative w-full bg-white pt-5 rounded-lg border-[1px] border-stone-100 shadow-lg">
                    <div class = "grid grid-cols-12 min-h-32 gap-x-8">
                      <div class = "col-span-5 items-center flex">
                        <img class = "max-h-32 p-2 ml-5" alt = "Logo Error" src = {record.fields["Company Logo"][0].url}/>
                      </div>
                      <div class = "relative h-[100%] mt-[25%] col-span-7">
                        <div class = "min-h-[0rem]">
                          <h5 class="mb-2 text-lg pr-10 text-left lexend font-bold tracking-tight text-gray-900 dark:text-white">{record.fields["Job Role"]}</h5>
                        </div>
                        <div class = "relative min-h-[6rem] mb-2">
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
                            <span class = "inline py-1 leading-[2.5] pr-3 pl-2 mx-2 rounded-3xl bg-emerald-200"> {prLabel} </span>
                          ))}
                        </div>
                        <div class = "mt-3 text-left">
                          <span class = "lexend">Employment Type:</span>
                          {record.fields["Job Type"].map((jobTypeLabel) => (
                            <span class = "py-1 pl-2 pr-3 mx-2 leading-[2.5] rounded-3xl bg-emerald-200"> {jobTypeLabel} </span>
                          ))}
                        </div>
                        <div class = "mt-3 text-left mb-20">
                          <span class = "lexend">Location:</span>
                          {record.fields["Location"].map((locationLabel) => (
                            <span class = "py-1 pl-2 pr-3 mx-2 leading-[2.5] rounded-3xl bg-orange-200"> {locationLabel} </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <a href={format('/job-description?company={0}&job={1}', record.fields["Company Name"], record.fields["Job Role"])} class="right-5 absolute bottom-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-transparent rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Learn more
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
        <Footer></Footer></>):(
           (
            <>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
            </style>
            <Navbar></Navbar>
            <div class = "md:px-10 px-10 lg:px-20 bg-gradient-to-b from-light_blue to-white pt-5 pb-10 lg:pt-28 w-full md:px-10 lg:px-20">
              <p class = "lexend text-3xl lg:text-5xl font-bold text-left text-black lg:mr-48 pt-5">
                Welcome to Stint’s Job Board Catered Exclusively for International Students! 
              </p>
              <p class = "lexend text-md lg:text-lg text-left text-black lg:mr-64 pt-7">
                Whether you’re a recent graduate or you’ve just started your degree, Stint’s job board has it all. Filter jobs by industry, location and PR requirements to find the job that suits you best!
              </p>
              <p class = "lexend text-xl lg:text-3xl text-left text-black lg:mr-48 lg:pt-20 pt-5 lg:pb-10">
                Updates are posted every Monday at 12PM
              </p>
            </div>
            <div class = "pb-16 bg-white pb-30 md:px-10 lg:px-4 xl:px-16">
              <div class = "mx-4 grid gap-y-5 grid-cols-12 mb-10">
                  <div class="col-span-12">
                    <div class="xl:w-full">
                      <div class="flex items-center w-full h-12 rounded-lg mb-2 shadow-sm border-[2px] border-[#BFBCBC] bg-white">
                        <div class="grid place-items-center h-full w-12 text-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <input
                        class="h-full w-full text-sm border-none rounded-lg focus:ring-0 focus:ring-offset-0 text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search..."
                        onChange = {handleSearch}/> 
                      </div>
                    </div>
                  </div>
                  <div class = "col-span-12">
                    <div class = "grid gap-x-3 grid-cols-12">
                      <div class = "col-span-4">
                        <MultiSelect options = {industryPopulate}
                          id = "dropdowns"
                          filter = {true}
                          value = {industry}
                          optionValue="value"
                          onChange={handleIndustry}
                          display="chip"
                          placeholder = "Industry"
                          className="industry-multiselect"
                          panelFooterTemplate={industryPanelFooter}/>
                      </div>
                      <div class = "col-span-4">
                        <MultiSelect options = {locationPopulate}
                          filter = {true}
                          id = "dropdowns"
                          value = {location}
                          onChange={handleLocation} 
                          optionValue="value"
                          display="chip"
                          placeholder = "Location"
                          className="location-multiselect"
                          panelFooterTemplate={locationPanelFooter}/>
                      </div>
                      <div class = "col-span-4">
                        <MultiSelect options = {multiOptions}
                          showSelectAll = {false}
                          id = "dropdowns"
                          optionValue="value"
                          optionLabel = "label"
                          display="chip"
                          placeholder = "Requirements"
                          optionGroupLabel="label" optionGroupChildren="items"
                          value = {requirementsDisplay}
                          onChange={handleReq}
                          className="req-multiselect"
                          panelFooterTemplate={requirementsPanelFooter}/>
                      </div>
                    </div>
                  </div>
                </div>
              <div class = "z-40 grid gap-y-5 items-stretch grid-cols-12 mx-4 gap-x-5">
                  {jobsData.length > 0 ? (
                    jobsData.map((record) => (
                      (search.length === 0 || 
                      (typeof(record.fields["Company Name"]) === 'string'? record.fields["Company Name"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) && search.length !== 0: false) ||
                      (typeof(record.fields["Job Description"]) === 'string'? record.fields["Job Description"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) && search.length !== 0: false) ||
                      (typeof(record.fields["Location"]) === 'object'? isValidLocationSearch(record.fields["Location"], search) && search.length !== 0: false) ||
                      (typeof(record.fields["Job Role"]) === 'string'? record.fields["Job Role"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) && search.length !== 0: false)) 
                      &&
                      (industry.length === 0 ||
                      (typeof(record.fields["Industry"]) === 'object'? isValidIndustry(record.fields["Industry"], industry) : false)) 
                      &&
                      (location.length === 0 ||
                      (typeof(record.fields["Location"]) === 'object'? isValidLocation(record.fields["Location"], location) : false)) 
                      &&
                      (requirements.length === 0 ||
                        ((typeof(record.fields["Job Type"]) === 'object' && typeof(record.fields["PR Requirement"]) === 'object')? isValidRequirements(record.fields["Job Type"], record.fields["PR Requirement"], requirements) : false)) 
                      ? 
                      <div class = "z-40 col-span-12 lg:col-span-4 mx-auto w-[93%]">
                        <a href={format('/job-description?company={0}&job={1}', record.fields["Company Name"], record.fields["Job Role"])}>
                        <div class="h-[100%] hover:bg-zinc-50 relative w-full bg-white pt-5 rounded-lg border-[1px] border-stone-100 shadow-lg">
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
                                  <span class = "inline py-1 leading-[2.5] pr-3 pl-2 mx-2 rounded-3xl bg-emerald-200"> {prLabel} </span>
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
                          <a href={format('/job-description?company={0}&job={1}', record.fields["Company Name"], record.fields["Job Role"])} class="right-5 absolute bottom-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-transparent rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Learn more
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                        </div>
                        </a>
                      </div>
                      :
                        <></>
                    ))
                  ) : (
                    <div class = "col-span-12 pt-8">
                      <span class = "pt-5 lexend 3xl">Loading Jobs</span>
                      <div class="text-center pt-5 w-full">
                          <div role="status">
                              <svg class="inline mr-2 w-8 h-8 text-white animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                              </svg>
                              <span class="sr-only">Loading...</span>
                          </div>
                      </div>
                    </div>
                  )}     
              </div>
            </div>
              <Footer></Footer></>
        ))}
    </div>
    );
  };

export default JobBoard;