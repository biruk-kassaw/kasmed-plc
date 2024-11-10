
import Image from 'next/image';
import heroImg from '../public/images/Hemodialysis-Machines-With-Tub.jpg'

export default function Hero() {
    return (
        <section id="hero" className="hero section light-background">
            <Image
                src={heroImg}
                alt=""
                data-aos="fade-in"
                width={900}
                height={600}
            />
            <div className="container position-relative">
            <div
                className="welcome position-relative"
                data-aos="fade-down"
                data-aos-delay={100}
            >
                <h2>WELCOME TO KASMED</h2>
                <p>
                We deliver quality medical equipment with expert installation and
                reliable maintenance.
                </p>
            </div>
            {/* End Welcome */}
            <div className="content row gy-4">
                <div className="col-lg-4 d-flex align-items-stretch">
                <div className="why-box" data-aos="zoom-out" data-aos-delay={200}>
                    <h3>Why Choose Kasmed?</h3>
                    <p>
                    Choose us for high-quality medical equipment, professional
                    installation, and reliable maintenance services. With our expertise,
                    we ensure your equipment operates at peak performance, reducing down
                    time and maximizing efficiency. Trust us to provide personalized
                    support and tailored solutions to meet the specific needs of your
                    healthcare facility.
                    </p>
                    <div className="text-center">
                    <a href="#about" className="more-btn">
                        <span>Learn More</span> <i className="bi bi-chevron-right" />
                    </a>
                    </div>
                </div>
                </div>
                {/* End Why Box */}
                <div className="col-lg-8 d-flex align-items-stretch">
                <div className="d-flex flex-column justify-content-center">
                    <div className="row gy-4">
                    <div className="col-xl-4 d-flex align-items-stretch">
                        <div
                        className="icon-box"
                        data-aos="zoom-out"
                        data-aos-delay={300}
                        >
                        <i className="bi bi-clipboard-data" />
                        <h4>Expertise You Can Trust</h4>
                        <p>
                            Our experienced team ensures seamless installation and optimal
                            performance of your medical equipment.
                        </p>
                        </div>
                    </div>
                    {/* End Icon Box */}
                    <div className="col-xl-4 d-flex align-items-stretch">
                        <div
                        className="icon-box"
                        data-aos="zoom-out"
                        data-aos-delay={400}
                        >
                        <i className="bi bi-gem" />
                        <h4>Reliable Maintenance Services</h4>
                        <p>
                            We provide ongoing maintenance to prevent downtime, ensuring
                            your equipment is always ready for use.
                        </p>
                        </div>
                    </div>
                    {/* End Icon Box */}
                    <div className="col-xl-4 d-flex align-items-stretch">
                        <div
                        className="icon-box"
                        data-aos="zoom-out"
                        data-aos-delay={500}
                        >
                        <i className="bi bi-inboxes" />
                        <h4>Tailored Solutions for Your Needs</h4>
                        <p>
                            We offer personalized service plans to fit the unique
                            requirements of your healthcare facility.
                        </p>
                        </div>
                    </div>
                    {/* End Icon Box */}
                    </div>
                </div>
                </div>
            </div>
            {/* End  Content*/}
            </div>
        </section>
    );
  }
  