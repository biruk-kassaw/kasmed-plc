
import Image from 'next/image';
import image from '../public/images/gallery/products-hemodialysis-machine.png'

export default function About() {
    return (
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4 gx-5">
            <div
              className="col-lg-6 position-relative align-self-start"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <Image
                src={image}
                className="img-fluid"
                alt=""
                width={500}
                height={500}
              />
              {/* <a href="" className="glightbox pulsating-play-btn" /> */}
            </div>
            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay={100}>
              <h3>About Us</h3>
              <p>
                Kasmed trading PLC has distinguished itself as one of the leaders in
                medical equipment distribution, installation and service in Ethiopia.
                The ﬁrm currently employs more than 140 people in Ethiopia.
              </p>
              <p>
                Kasmed continues to grow rapidly as it strives to address the growing
                demand for quality medical equipment, supplies and services. With a
                large and undeserved market, the continued growths of the business
                opportunities are very positive.
              </p>
              <p>
                While the countries current micro-economic environment presents
                challenges for business development and growth, positive changes are
                anticipated. We are taking proactive steps to ensure that we will be
                in a position to capitalize and take full advantage of the changes. We
                undertake the most complex turnkey projects in partnership with the
                best medical equipment manufacturers in the world.
              </p>
              <ul>
                <li>
                  <i className="fa-solid fa-eye" />
                  <div>
                    <h5>Vision</h5>
                    <p>
                      To be the premier medical equipment &amp; supplies provider in
                      Ethiopia.
                    </p>
                    <p>
                      To develop unparalleled maintenance and service capabilities
                      that will enable us to provider our services in the East African
                      region.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-bullseye" />
                  <div>
                    <h5>Mission</h5>
                    <p>
                      To provide quality products and services by our talented and
                      motivated members to serve humanity and contribute to the socio
                      economic development of the nation.{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    );
  }
  