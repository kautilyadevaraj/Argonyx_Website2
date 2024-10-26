import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import PeopleIcon from "@/public/people_icon.png";
import CalenderIcon from "@/public/calender.png";
import ArgonyxLogo from "@/public/argonyx_logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-0 m-0 min-w-full min-h-screen">
      {/* Navbar */}
      <Navbar />

      
      <div
        className="min-h-[70vh] bg-cover bg-center flex flex-col justify-between"
        style={{ backgroundImage: "url('/path-to-your-image.png')" }}
      >
        {/* Logo and Title */}
        <div className="grid grid-cols-3 gap-4 p-8">
          <div className="col-span-2 flex justify-center items-center relative">
           
            {/* <Image src={ArgonyxLogo} alt="logo" height={250} width={700} className="w-full h-auto" /> */}
            <h1
              className="absolute text-8xl font-extrabold text-center text-white"
              style={{ fontFamily: "'Playfair Display', serif", bottom: '4%' }}
            >
              ARGONYX
            </h1>
            <h2
             className="absolute text-2xl text-right text-white"
             style={{ fontFamily: "'Playfair Display', serif", bottom: '-3%', left:'62%' }}>Hackathon @ RVU</h2>
          </div>

          {/* Registration Info */}
          <div className="flex flex-col justify-center items-center bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/45 p-5 rounded m-5 space-y-3">
          <div className="min-w-full grid grid-cols-2 justify-items-center">
              <Image src={PeopleIcon} alt="people_icon" height={40} width={70} />
              <div className="flex flex-col items-center">
                <div>Registered</div>
                <div>100</div>
              </div>
            </div>

            <div className="min-w-full grid grid-cols-2 justify-items-center">
              <Image src={CalenderIcon} alt="calendar" height={40} width={70} />
              <div className="flex flex-col items-center">
                <div>Registration Deadline</div>
                <div>10th Nov 2024</div>
              </div>
            </div>

            <div className="min-w-full grid grid-cols-2 justify-items-center">
              <Image src={CalenderIcon} alt="calendar" height={40} width={70} />
              <div className="flex flex-col items-center">
                <div>Event Deadline</div>
                <div>10th Nov 2024</div>
              </div>
            </div>

            <Button>Register</Button>
          </div>
        </div>
      </div>


   
        
        {/* About and Sponsors Section */}
        <div className="flex justify-between w-full">
          {/* About Section */}
          <div className="w-3/4 flex flex-col p-5 rounded m-5 space-y-3 bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/45">
    <h2 className="text-3xl font-semibold mb-4">About ARGONYX</h2>
    <div className="flex-grow flex flex-col justify-center items-center">
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        vulputate tortor non diam posuere convallis. Praesent ut metus
        interdum sapien.<br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        vulputate tortor non diam posuere convallis. Praesent ut metus
        interdum sapien.<br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        vulputate tortor non diam posuere convallis. Praesent ut metus
        interdum sapien.<br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        vulputate tortor non diam posuere convallis. Praesent ut metus
        interdum sapien.<br></br>
      </p>
    </div>
  </div>


          {/* Sponsors Section */}
          <div className="w-1/4 flex flex-col p-5 rounded m-5 space-y-3 bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/45 min-h-[300px]">
    <h2 className="text-3xl font-semibold mb-4">Sponsors</h2>
    <div className="flex-grow flex flex-col ">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <span>Sponsor Name</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <span>Sponsor Name</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <span>Sponsor Name</span>
        </div>
      </div>
    </div>
  </div>
</div>

     {/* Schedule Section */}
     <div style={{ width: `calc(75% - 60px)` }} 
     className="flex flex-col p-5 rounded m-5 space-y-3 bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/45">
  <h2 className="text-3xl font-semibold mb-6">Schedule</h2>
  
  <div className="relative flex flex-col space-y-8 pl-8"> 
  <div className="absolute left-5 top-4 h-[95%] w-0.5 bg-gray-300"></div>
      <div className="flex items-center space-x-4">
      <div className="w-3.5 h-3.5 bg-gray-500 rounded-full"></div> 
      <p className="text-lg"> Registration</p>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-3.5 h-3.5 bg-gray-500 rounded-full"></div>
      <p className="text-lg"> Round 1 (Online)</p>
    </div>

    <div className="flex items-center space-x-4">
      <div className="w-3.5 h-3.5 bg-gray-500 rounded-full"></div>
      <p className="text-lg"> Round 2 (Offline)</p>
    </div>
  </div>
</div>



{/* Prizes Section */}
<div style={{ width: `calc(75% - 60px)` }} className="flex flex-col p-5 rounded m-5 space-y-3 bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/45 ">
<h2 className="text-3xl font-semibold mb-4">Prizes</h2>
  <div className="flex-grow flex flex-col "> 
    <ul className="space-y-4 text-center"> 
      <li className="flex items-center">🥇 Winner: ₹50,000</li>
      <li className="flex items-center">🥈 First Runner Up: ₹20,000</li>
      <li className="flex items-center">🥉 Second Runner Up: ₹10,000</li>
    </ul>
  </div>
</div>
</div>

  );
}
