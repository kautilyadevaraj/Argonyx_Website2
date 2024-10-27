// components/FadeInSection.tsx

import React, { ReactNode, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

interface FadeInSectionProps {
  children: ReactNode; // Define the type for children prop
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null); // Specify the type for domRef

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    // Cleanup function to unobserve
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`w-full fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

// Optional: Prop types for runtime checking
FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeInSection;
