import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';

const JobBoard = () => {
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
        <iframe class="airtable-embed md:rounded-lg w-full h-[50rem]" src="https://airtable.com/embed/shrpADk88tc9bm46a?backgroundColor=cyanLight&layout=card&viewControls=on" frameborder="0" onmousewheel=""></iframe>
      </div>
      <Footer></Footer>
    </div>
    );
  };

export default JobBoard;