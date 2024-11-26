'use client'
import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import machines from "../utils/data"
import emailjs from "emailjs-com";

export default function Departments() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    
      const [isFormValid, setIsFormValid] = useState(false);
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [message, setMessage] = useState("");
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        validateForm();
      };
    
      const validateForm = () => {
        const isValid =
          formData.name.trim() &&
          formData.email.trim() &&
          formData.subject.trim() &&
          formData.message.trim();
        
        setIsFormValid(isValid ? true: false);
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid) return;
        setIsSubmitting(true);
        try {
          const form = document.getElementById("form") as HTMLFormElement;
          emailjs.init('PkltkyiZua82kAfKA')
    
          emailjs.sendForm("service_86wbd8e","template_xtwc4ab", form).then((response) => {
              setIsSubmitting(false);
              setMessage("We have received your message. Thank you!");
              setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
              })
            })
            .catch((err) => {
              setIsSubmitting(false);
              alert("There was an error sending your message. Please check your internet connection and try again later.");
            });
        } catch (error) {
          alert("There was an error sending your message. Please check your internet connection and try again later.");
        }
      };

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
                            id="form"
                            onSubmit={handleSubmit}
                            className="php-email-form"
                        >
                        <div className="row gy-4">
                            <div className="col-md-6">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            </div>
                            <div className="col-md-6">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            </div>
                            <div className="col-md-12">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                            </div>
                            <div className="col-md-12">
                            <textarea
                                className="form-control"
                                name="message"
                                rows={6}
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                            </div>
                            <div className="col-md-12 text-center">
                                <>
                                {message && <div className="sent-message">{message}</div>}
                                
                                </>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={handleClose}>
                    Close
                    </button>
                    <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!isFormValid || isSubmitting} // Disable during form submission
                                >
                                {isSubmitting ? (
                                    <>
                                    <span
                                        className="spinner-border spinner-border-sm me-2"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                                </button>
                </div>
                </div>
            </div>
            </div>
        )}
    </>
    );
}