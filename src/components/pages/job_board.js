import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';
import React, { useEffect, useState } from "react";

const JobBoard = () => {
  const READ_ONLY_API = "keyH7ZOsHYmLzFr3z"
  const READ_ONLY_WEBSITE = "https://api.airtable.com/v0/app6ZljkOOxLsFad8/Stint%20Job%20Board?api_key=keyH7ZOsHYmLzFr3z&sort%5B0%5D%5Bfield%5D=Date+Created&sort%5B0%5D%5Bdirection%5D=desc"

  const [jobsData, setData] = useState({});

  useEffect(() => {
    fetch(READ_ONLY_WEBSITE)
      .then((res) => res.json())
      .then((data) => {
        setData(data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (jobsData.length > 0) {
    for (let i = 0; i < jobsData.length; i++){
      console.log(jobsData[i].fields)
    }
  }
  
  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };



    return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "bg-light_blue pt-5 lg:pt-36 md:pb-8 w-full min-h-[500px] md:px-10 lg:px-20">
        <p class = "lexend text-dark_blue text-lg md:text-5xl md:pb-7 pb-3 pl-2 md:pl-5 text-left">
          Current Openings | Updated every Sunday!
        </p>
        <label htmlFor="search">
        Search by Task:
        <input id="search" type="text" onChange={handleSearch} />
        </label>
        {/* <div>
          {jobsData.length > 0 ? (
            jobsData.map((record) => (
              <a href={record.fields.url} key={record.id}>
                <img src = {record.fields["Company Logo"][0].url}/>
                <p>{record.fields["Company Name"]}</p>
              </a>
            ))
          ) : (
            <p>Fetching Data...</p>
          )}
        </div> */}
        <div>
          <table class = "w-full bg-white">
            <tr>
              <th>
                Company Name
              </th>
              <th>
                Company Logo
              </th>
              <th>
                Job Role
              </th>
              <th class = "w-[50%]">
                Job Description
              </th>
            </tr>
            {jobsData.length > 0 ? (
              jobsData.map((record) => (
                search.length === 0 || 
                (typeof(record.fields["Company Name"]) === 'string'? record.fields["Company Name"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) : false) ||
                (typeof(record.fields["Job Description"]) === 'string'? record.fields["Job Description"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) : false) ||
                (typeof(record.fields["Job Role"]) === 'string'? record.fields["Job Role"].toLocaleLowerCase().includes(search.toLocaleLowerCase()) : false) 
                ? 
                  <tr class = "border-t-2">
                    <td class = "h-10 w-10 m-3">
                      <img src = {record.fields["Company Logo"][0].url}/>
                    </td>
                    <td class = "">
                      <p>{record.fields["Company Name"]}</p>
                    </td>
                    <td class = "">
                      <p>{record.fields["Job Role"]}</p>
                    </td>
                    <td class = "text-left">
                      <p>{record.fields["Job Description"]}</p>
                    </td>
                  </tr>:
                  <span></span>
              ))
            ) : (
              <tr>
                <td colspan = "3">
                  Fetching Data...
                </td>
              </tr>
            )}     
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
  };

export default JobBoard;