'use-client';
import { ChangeEventHandler, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
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

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
      </div>
      <div className="mb-5" data-aos="fade-up" data-aos-delay={200}>
        <iframe
          style={{ border: 0, width: "100%", height: 270 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.16103720214613!2d38.77642659333224!3d8.88372532940233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b78872d9f6363%3A0x940cffaf89de2a5a!2zU0VMQU0gVE9XRVIgS2FsaXR5IHwg4Yiw4YiL4YidIOGJs-GLiOGIrSDhiYPhiIrhibI!5e0!3m2!1sen!2set!4v1726993795695!5m2!1sen!2set"
          frameBorder={0}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h3>Location</h3>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
              <i className="bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Us</h3>
                <p>+251991188086, +251954085010</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={500}>
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Us</h3>
                <p>kasmedtradingplc1@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <form
            id="form"
              onSubmit={handleSubmit}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay={200}
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
                    </>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
