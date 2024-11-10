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

export default function PartnersCarousel() {
  const logos = [
    { img: liyana, height: 180 },
    { img: biolight, height: 160 },
    { img: defence, height: 180 },
    { img: teklehaymanot, height: 180 },
    { img: lancet, height: 180 },
    { img: nordic, height: 180 },
    { img: selale, height: 180 },
    { img: werabe, height: 180 },
  ];

  return (
    <>
        <h3 style={{fontSize: "2rem", fontWeight: 700, textAlign: "center", marginTop: "30px"}}>Our Partners</h3>
        <div style={{ width: "100%", marginTop: 30, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <Marquee key={"key"} velocity={40} scatterRandomly={false} resetAfterTries={200} direction={"rtl"}>
            {logos.map((logo, index) => (
            <div
                key={index}
                style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                marginRight: 100,
                }}
            >
                <Image
                src={logo.img}
                alt="Partner Logo"
                style={{ height: logo.height }}
                />
            </div>
            ))}
        </Marquee>
        </div>
    </>
  );
}
