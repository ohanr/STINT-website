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

    return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');
      </style>
      <Navbar></Navbar>
      <div class = "bg-light_blue pt-5 lg:pt-36 md:pb-8 w-full min-h-[500px] md:px-10 lg:px-20">
        <p class = "lexend text-lg md:text-5xl md:pb-7 pb-3 pl-2 md:pl-5 text-left">
          Jobs, Jobs, Jobs...
        </p>
        <div>
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
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
  };

export default JobBoard;