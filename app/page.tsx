import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import PeopleIcon from "@/public/people_icon.png";
import CalenderIcon from "@/public/calender.png";
import ArgonyxLogo from "@/public/argonyx_logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 flex flex-col min-w-max">
      <Navbar />
      <div className="grid grid-cols-3 gap-4 pt-14">
        <div className="col-span-2 flex justify-center content-end">
          <Image src={ArgonyxLogo} alt="people_icon" height={250} width={700}/>
        </div>
        <div className="flex flex-col justify-center items-center bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-custom-bg/45 p-5 rounded m-5 space-y-3">
          <Button>Register</Button>
          <div className="min-w-full grid grid-cols-2 justify-items-center">
            <div>
              <Image
                src={PeopleIcon}
                alt="people_icon"
                height={40}
                width={70}
              />
            </div>
            <div className="flex flex-col justify-end">
              <div>Registered</div>
              <div className="flex justify-center">100</div>
            </div>
          </div>
          <div className="min-w-full grid grid-cols-2 justify-items-center">
            <Image src={CalenderIcon} alt="calender" height={40} width={70} />
            <div className="flex flex-col justify-end">
              <div>Registration Deadline</div>
              <div className="flex justify-center">10th Nov 2024</div>
            </div>
          </div>
          <div className="min-w-full grid grid-cols-2 justify-items-center">
            <Image src={CalenderIcon} alt="calender" height={40} width={70} />
            <div className="flex flex-col justify-end">
              <div className="flex justify-center">Deadline</div>
              <div className="flex justify-center">10th Nov 2024</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
