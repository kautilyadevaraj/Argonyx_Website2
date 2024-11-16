"use client";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import HyperText from "@/components/ui/hyper-text";
import AIMLImage from "@/public/ai_ml.png";
import WebDevImage from "@/public/web dev.png";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import First from "@/public/first.png";
import Second from "@/public/second.png";
import Third from "@/public/third.png";

export default function Winners(): JSX.Element {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger confetti on mount
    const duration = 5 * 1000; // 5 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number): number =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Cleanup confetti interval on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Delay showing content until HyperText animation finishes
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 1 * 1000); // 10 seconds for the HyperText animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center p-10">
      <HyperText
        className="text-lg md:text-4xl font-bold text-black dark:text-white"
        text="Argonyx Hackathon 2024 - Winners"
        duration={10}
      />
      {!showContent ? (
        <p className="text-sm italic text-center mt-4"></p>
      ) : (
        <>
          <FadeInSection>
            <p className="text-sm font-serif md:text-lg italic text-center mt-4">
              Congratulations to the brilliant minds who showcased innovation
              and excellence!
            </p>
          </FadeInSection>
          <FadeInSection>
            <div className="flex flex-col items-center pt-3">
              <Image src={AIMLImage} alt="ai_logo" height={120} width={120} />
              <h2 className="text-xl font-semibold text-primary pb-2">
                AI / ML
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={First} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      Team Name
                    </h1>
                    <ul className="pt-2">
                      <div className="flex space-x-3">
                        <li>Member 1</li>
                        <li>Member 2</li>
                      </div>
                      <div className="flex space-x-3">
                        <li>Member 3</li>
                        <li>Member 4</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={Second} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      Team Name
                    </h1>
                    <ul className="pt-2">
                      <div className="flex space-x-3">
                        <li>Member 1</li>
                        <li>Member 2</li>
                      </div>
                      <div className="flex space-x-3">
                        <li>Member 3</li>
                        <li>Member 4</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={Third} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      Team Name
                    </h1>
                    <ul className="pt-2">
                      <div className="flex space-x-3">
                        <li>Member 1</li>
                        <li>Member 2</li>
                      </div>
                      <div className="flex space-x-3">
                        <li>Member 3</li>
                        <li>Member 4</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="flex flex-col items-center pt-10">
              <Image src={WebDevImage} alt="ai_logo" height={110} width={110} />
              <h2 className="text-xl font-semibold text-primary pb-2">
                Web Development
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={First} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      Team Name
                    </h1>
                    <ul className="pt-2">
                      <div className="flex space-x-3">
                        <li>Member 1</li>
                        <li>Member 2</li>
                      </div>
                      <div className="flex space-x-3">
                        <li>Member 3</li>
                        <li>Member 4</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={Second} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      Team Name
                    </h1>
                    <ul className="pt-2">
                      <div className="flex space-x-3">
                        <li>Member 1</li>
                        <li>Member 2</li>
                      </div>
                      <div className="flex space-x-3">
                        <li>Member 3</li>
                        <li>Member 4</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
                <NeonGradientCard className="w-full items-center justify-center text-center">
                  <div className="flex flex-col items-center">
                    <Image src={Third} alt="ai_logo" height={60} width={60} />

                    <h1 className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                      Team Name
                    </h1>
                    <ul className="pt-2">
                      <div className="flex space-x-3">
                        <li>Member 1</li>
                        <li>Member 2</li>
                      </div>
                      <div className="flex space-x-3">
                        <li>Member 3</li>
                        <li>Member 4</li>
                      </div>
                    </ul>
                  </div>
                </NeonGradientCard>
              </div>
            </div>
          </FadeInSection>
        </>
      )}
    </div>
  );
}
