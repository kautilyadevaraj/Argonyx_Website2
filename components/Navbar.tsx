"use client";
import Image from "next/image";

import VikshaIcon from "@/public/viksha_logo.png";
import NeuralNexusIcon from "@/public/neural_nexus_logo.png";

import IEEELogo from "@/public/ieee_logo.png";

import * as React from "react";

function Navbar() {
  return (
    <div className="container flex h-14 max-w-screen-2xl items-center pt-2">
      <div className="flex justify-evenly md:justify-start items-center space-x-2 w-full">
        <a href="#" className="px-3">
          <Image src={VikshaIcon} alt="viksha_icon" height={50} width={80} />
        </a>
        <a href="#" className="px-3">
          <Image
            src={IEEELogo}
            alt="neural_nexus_icon"
            height={60}
            width={90}
          />
        </a>
        <a href="#" className="px-3">
          <Image
            src={NeuralNexusIcon}
            alt="neural_nexus_icon"
            height={45}
            width={75}
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
