export default function Footer() {
    return (<>
            <footer id="footer" className="footer light-background">
          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span className="sitename">Kasmed</span>
                </a>
                <div className="footer-contact pt-3">
                  <p>Kality Selam Tower</p>
                  <p>Addis Ababa, Ethiopia</p>
                  <p className="mt-3">
                    <strong>Phone:</strong> <span>+251991188086, +251954085010</span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span>kasmedtradingplc1@gmail.com</span>
                  </p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href="">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href="#">Medical Equipment Import</a>
                  </li>
                  <li>
                    <a href="#">Installation Service</a>
                  </li>
                  <li>
                    <a href="#">Preventative Maintenance</a>
                  </li>
                  <li>
                    <a href="#">Equipment Repairs</a>
                  </li>
                  <li>
                    <a href="#">Consultation and Custom Solutions</a>
                  </li>
                </ul>
              </div>
              {/* <div className="col-lg-2 col-md-3 footer-links">
                <h4>Hic solutasetp</h4>
                <ul>
                  <li>
                    <a href="#">Molestiae accusamus iure</a>
                  </li>
                  <li>
                    <a href="#">Excepturi dignissimos</a>
                  </li>
                  <li>
                    <a href="#">Suscipit distinctio</a>
                  </li>
                  <li>
                    <a href="#">Dilecta</a>
                  </li>
                  <li>
                    <a href="#">Sit quas consectetur</a>
                  </li>
                </ul>
              </div> */}
              <div className="col-lg-2 col-md-3 footer-links">
                {/* <h4>Nobis illum</h4>
                <ul>
                  <li>
                    <a href="#">Ipsam</a>
                  </li>
                  <li>
                    <a href="#">Laudantium dolorum</a>
                  </li>
                  <li>
                    <a href="#">Dinera</a>
                  </li>
                  <li>
                    <a href="#">Trodelas</a>
                  </li>
                  <li>
                    <a href="#">Flexo</a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="container copyright text-center mt-4">
            <p>
              © <span>Copyright</span> <strong className="px-1 sitename">Kasmed</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
            <div className="credits">
            </div>
          </div>
        </footer>
    </>);
}