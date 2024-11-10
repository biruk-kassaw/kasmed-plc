export default function Services() {
    return (
        <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
        </div>
        <div className="container">
            <div className="row gy-4">
            <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className="service-item  position-relative">
                <div className="icon">
                    <i className="fas fa-heartbeat" />
                </div>
                <a className="stretched-link">
                    <h3>Medical Equipment Import</h3>
                </a>
                <p>
                    We source and import high-quality medical equipment from trusted
                    global manufacturers, ensuring compliance with industry standards.
                </p>
                </div>
            </div>
            {/* End Service Item */}
            <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
            >
                <div className="service-item position-relative">
                <div className="icon">
                    <i className="fas fa-pills" />
                </div>
                <a className="stretched-link">
                    <h3>Installation Services</h3>
                </a>
                <p>
                    Our expert technicians handle the full installation of medical
                    devices, ensuring they are set up for optimal performance and
                    safety.
                </p>
                </div>
            </div>
            {/* End Service Item */}
            <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
            >
                <div className="service-item position-relative">
                <div className="icon">
                    <i className="fas fa-hospital-user" />
                </div>
                <a className="stretched-link">
                    <h3>Preventive Maintenance</h3>
                </a>
                <p>
                    We offer scheduled maintenance services to keep your equipment in
                    top condition, preventing breakdowns and extending its lifespan.
                </p>
                </div>
            </div>
            {/* End Service Item */}
            <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
            >
                <div className="service-item position-relative">
                <div className="icon">
                    <i className="fas fa-dna" />
                </div>
                <a className="stretched-link">
                    <h3>Equipment Repairs</h3>
                </a>
                <p>
                    Our team provides timely repair services to minimize downtime and
                    ensure your equipment is functioning when you need it most.
                </p>
                <a className="stretched-link" />
                </div>
            </div>
            {/* End Service Item */}
            <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
            >
                <div className="service-item position-relative">
                <div className="icon">
                    <i className="fas fa-wheelchair" />
                </div>
                <a className="stretched-link">
                    <h3>Consultation and Custom Solutions</h3>
                </a>
                <p>
                    We work closely with healthcare providers to offer customized
                    equipment solutions tailored to meet the specific needs of your
                    facility.
                </p>
                <a className="stretched-link" />
                </div>
            </div>
            {/* End Service Item */}
            <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
            >
                <div className="service-item position-relative">
                <div className="icon">
                    <i className="fas fa-notes-medical" />
                </div>
                <a className="stretched-link">
                    <h3>Training and Support</h3>
                </a>
                <p>
                    We provide thorough training for your staff on how to use and
                    maintain equipment effectively, backed by ongoing technical support.
                </p>
                <a className="stretched-link" />
                </div>
            </div>
            {/* End Service Item */}
            </div>
        </div>
        </section>

    );
}