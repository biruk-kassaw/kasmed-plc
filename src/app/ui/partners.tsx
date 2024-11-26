'use-client';
import { useState, useEffect } from "react";
import Marquee from "react-marquee-slider";
import Image from "next/image";

import selale from "../public/images/partners/selale.jpg";
import liyana from "../public/images/partners/liyana.png";
import nordic from "../public/images/partners/nordic.jpg";
import werabe from "../public/images/partners/worabe.jpeg";
import lancet from "../public/images/partners/lancet.jpg";
import biolight from "../public/images/partners/biolight.png";
import defence from "../public/images/partners/defence.jpg";
import teklehaymanot from "../public/images/partners/teklehaymanot.png";
import aeomed from "../public/images/partners/aeomed.jpg";
import celitron from "../public/images/partners/celitron.png";
import mediland from "../public/images/partners/mediland.png";
import mindray from "../public/images/partners/mindray.png";
import uzumuku from "../public/images/partners/uzumku.png";

export default function PartnersCarousel() {
  const globalLogos = [
    { img: aeomed, height: 100, width: 183 },
    { img: celitron, height: 100, width: 183 },
    { img: mediland, height: 100, width: 183 },
    { img: mindray, height: 100, width: 183 },
    { img: uzumuku, height: 100, width: 183 },
    { img: biolight, height: 100, width: 183 },
    
  ];

  const localLogos = [
    { img: defence, height: 100, width: 183 },
    { img: nordic, height: 100, width: 183 },
    { img: werabe, height: 100, width: 183 },
    { img: lancet, height: 100, width: 183 },
    { img: selale, height: 100, width: 183 },
    { img: teklehaymanot, height: 100, width: 183 },
  ]

  const [velocity, setVelocity] = useState(40); // Default velocity

  // Adjust velocity based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVelocity(20); // Slow for small screens
      } else if (width < 1024) {
        setVelocity(30); // Moderate for tablets
      } else {
        setVelocity(40); // Default for larger screens
      }
    };

    // Set initial velocity
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <>
      
    //   <div
    //     style={{
    //       width: "100%",
    //       marginTop: 30,
    //       overflow: "hidden",
    //       display: "flex",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Marquee
    //       key={"key"}
    //       velocity={velocity}
    //       scatterRandomly={false}
    //       resetAfterTries={200}
    //       direction={"rtl"}
    //     >
    //       {logos.map((logo, index) => (
    //         <div
    //           key={index}
    //           style={{
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             height: "100%",
    //             marginRight: 100,
    //           }}
    //         >
    //           <Image
    //             src={logo.img}
    //             alt="Partner Logo"
    //             style={{ height: logo.height }}
    //           />
    //         </div>
    //       ))}
    //     </Marquee>
    //   </div>
    // </>
    <>

    <div>
    <h3
      style={{
        fontSize: "2rem",
        fontWeight: 700,
        textAlign: "center",
        marginTop: "30px",
      }}
      >
        Our Partners
      </h3>
      <div style={{ height: 200 }}>
        <Marquee key={"key"} velocity={25}>
          {globalLogos.map((ele,index) => (
            <Image src={ele.img} key={`marquee-example-people-${index}`} alt="" height={ele.height} width={ele.width} style={{ 
              marginLeft: "87px"
            }} />
          ))}
        </Marquee>
      </div>

      <div style={{ height: 50 }} />
      
      <div style={{ height: 200 }}>
        <Marquee key={"key12"} velocity={25}>
          {localLogos.map((ele, index) => (
            <Image alt="" height={ele.height} width={ele.width}
              src={ele.img}
              key={`marquee-example-people-${index + 7}`}
              style={{ 
                marginLeft: "7px",
                marginRight: "80px",
              }}
            />
          ))}
        </Marquee>
      </div>
    </div>
    </>
  );
}
