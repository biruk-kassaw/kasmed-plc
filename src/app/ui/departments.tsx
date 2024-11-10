'use client'
import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import machines from "../utils/data"
import machineImg from "../public/hero.jpg"
export default function Departments() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const titleList = machines.map((machine, index )=>
        <li className="nav-item" key={index}>
            <a
                className={`nav-link ${index === 0 ? "active show" : ""}`}
                data-bs-toggle="tab"
                href={"#departments-tab-"+ (index + 1)}
            >
                {machine.name}
            </a>
        </li>
    )

    const bodyList = machines.map((machine, index )=>
        <div className={`tab-pane ${index === 0 ? "active show" : ""}`} id={"departments-tab-"+(index+1)} key={index}>
            <div className="row">
            <div className="col-lg-8 details order-2 order-lg-1">
                <h3>{machine.name}</h3>
                <p className="fst-italic">Product Details</p>
                <p></p>
                <ul className="list-disc">
                    {machine.description.map((dsc, i) => <li key={i}>{dsc}</li>)}
                </ul>
                <p />
                <div>
                <button className="btn btn-secondary mr-1" onClick={handleShow}>
                    INQUIRY
                </button>
                <Link
                    className="btn btn-outline-secondary"
                    href={"/home/detail/"+machine.id}
                >
                    DETAIL
                </Link>
                </div>
            </div>
            <div className="col-lg-4 text-center order-1 order-lg-2">
                <Image
                src={machine.image}
                width={1300}
                height={2057}
                alt=""
                className="img-fluid"
                />
            </div>
            </div>
        </div>
    )


    return (
        <>
        <section id="departments" className="departments section">
        <div className="container section-title" data-aos="fade-up">
            <h2>Products</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row">
            <div className="col-lg-3">
                <ul className="nav nav-tabs flex-column">
                { titleList }
                </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                {bodyList}
                </div>
            </div>
            </div>
        </div>
        </section>

            {showModal && (
            <div className="modal fade show d-block modal-height" tabIndex={-1} role="dialog">
            <div className="modal-dialog department-modal" role="document">
                <div className="modal-content">
                <div className="modal-body">
                <div className="container">
                    <div className="row gy-4">

                    <div className="col-lg-8">
                        <form
                        action="forms/contact.php"
                        method="post"
                        className="php-email-form"
                        >
                        <div className="row gy-4">
                            <div className="col-md-6">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                            />
                            </div>
                            <div className="col-md-6 ">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Your Email"
                            />
                            </div>
                            <div className="col-md-12">
                            <input
                                type="text"
                                className="form-control"
                                name="subject"
                                placeholder="Subject"
                            />
                            </div>
                            <div className="col-md-12">
                            <textarea
                                className="form-control"
                                name="message"
                                rows={6}
                                placeholder="Message"
                                defaultValue={""}
                            />
                            </div>
                            <div className="col-md-12 text-center">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">
                                Your message has been sent. Thank you!
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    {/* End Contact Form */}
                    </div>
                </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={handleClose}>
                    Close
                    </button>
                    <button type="button" className="btn btn-primary">
                    Send
                    </button>
                </div>
                </div>
            </div>
            </div>
        )}
    </>
    );
}