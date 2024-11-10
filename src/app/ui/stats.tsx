'use client';
import CountUp from 'react-countup';

export default function Stats() {
    return(
        <section id="stats" className="stats section light-background">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="fa fa-stethoscope" />
                <div className="stats-item">
                <CountUp start={0} end={50} duration={5} />
                <p>Successful Installations</p>
                </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="fa-regular fa-hospital" />
                <div className="stats-item">
                <CountUp start={0} end={10} duration={5} />
                <p>Partnered Hospitals</p>
                </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="fa-solid fa-user-doctor" />
                <div className="stats-item">
                <CountUp start={0} end={9} duration={5} />
                <p>Expert Technicians</p>
                </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="fas fa-award" />
                <div className="stats-item">
                <CountUp start={0} end={8} duration={5} />
                <p>Awards</p>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}