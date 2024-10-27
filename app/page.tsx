"use client";
import * as React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import PeopleIcon from "@/public/people_icon.png";
import CalenderIcon from "@/public/calender.png";
import ArgonyxLogo from "@/public/argonyx_logo.png";
import Image from "next/image";
import { TimelineLayout } from "@/components/HackathonTimeline";
import { timelineData } from "@/components/data";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <div className="p-0 m-0 min-w-screen min-h-screen flex flex-col justify-between **w-full** overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      <FadeInSection>
        <div
          className="min-h-[60vh]  flex flex-col justify-start items-center w-full"
          style={{ backgroundImage: "url('/path-to-your-image.png')" }}
        >
          {/* Logo and Title */}
          <div className="flex flex-wrap justify-between items-center w-full">
            <div className="md:w-2/3 flex p-4 md:p-5 m-5 rounded-lg m-2 md:m-5 space-y-3 justify-center ">
              <Image
                src={ArgonyxLogo}
                width={700}
                height={700}
                alt="Argonyx_logo"
              />
            </div>

            {/* Registration Info */}

            <div className="flex-1 h-min md:w-1/4 flex flex-col p-4 m-5  md:p-5 rounded-lg m-2 md:m-5 space-y-3 bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/70 p-5 rounded-lg m-2 md:m-5 space-y-3">
              <div className="w-full flex justify-evenly items-center pr-3">
                <Image
                  src={PeopleIcon}
                  alt="people_icon"
                  height={40}
                  width={70}
                  style={{ filter: 'invert(50%) brightness(180%)' }}
                />
                <div className="flex flex-col items-start justify-between pl-4">
                  <div>Registered</div>
                  <div className="flex w-full justify-center">100</div>
                </div>
              </div>

              <div className="w-full flex justify-evenly pl-6">
                <Image
                  src={CalenderIcon}
                  alt="calendar"
                  height={40}
                  width={70}
                  style={{ filter: 'invert(50%) brightness(180%)' }}
                />
                <div className="flex flex-col justify-center items-start">
                  <div className="flex flex-nowrap">Registration Deadline</div>
                  <div className="flex w-full justify-center">
                    10th Nov 2024
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-evenly">
                <Image
                  src={CalenderIcon}
                  alt="calendar"
                  height={40}
                  width={70}
                  style={{ filter: 'invert(50%) brightness(180%)' }}
                />
                <div className="flex flex-col justify-center items-start">
                  <div>Event Deadline</div>
                  <div className="flex w-full justify-center">
                    10th Nov 2024
                  </div>
                </div>
              </div>

              <Button>Register</Button>
            </div>
          </div>
        </div>
      </FadeInSection>
      {/* About and Sponsors Section */}
      <FadeInSection>
        <div className="flex flex-wrap justify-between w-full">
          {/* About Section */}
          <div className="md:w-2/3 flex flex-col p-4 md:p-5 m-5 rounded-lg m-2 md:m-5 space-y-3 bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/70">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              About ARGONYX
            </h2>
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
          <div className="flex-1 md:w-1/4 flex flex-col p-4 m-5 md:p-5 rounded-lg m-2 md:m-5 space-y-3 bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/70 min-h-[300px]">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Sponsors
            </h2>
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
      </FadeInSection>
      {/* Schedule Section */}
      <FadeInSection>
        <div className="w-full flex flex-col items-center justify-center p-4 m-5 md:p-5 rounded-lg m-2 md:m-5 space-y-3 bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/70">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Schedule</h2>

          <div className="w-fit">
            <TimelineLayout items={timelineData} />
          </div>
        </div>
      </FadeInSection>

      {/* Prizes Section */}
      <FadeInSection>
        <div className="flex flex-col p-4 m-5 md:p-5 rounded-lg m-2 md:m-5 space-y-3 bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/70">
          <div className="grid grid-cols-1 ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Prizes</h2>
            <ul className="space-y-4 text-center">
              <li className="flex items-center">🥇 Winner: ₹50,000</li>
              <li className="flex items-center">🥈 First Runner Up: ₹20,000</li>
              <li className="flex items-center">
                🥉 Second Runner Up: ₹10,000
              </li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
