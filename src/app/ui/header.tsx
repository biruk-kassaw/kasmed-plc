"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../public/images/logo.jpg"
export default function Header() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const initialHash = window.location.hash;
    setActiveHash(initialHash || "#hero");  
    const handleScroll = () => {
      const sections = [
        { id: "hero", href: "/home#hero" },
        { id: "about", href: "/home#about" },
        { id: "services", href: "/home#services" },
        { id: "departments", href: "/home#departments" },
        { id: "contact", href: "/home#contact" }
      ];

      let currentSection = "";
      // for (const section of sections) {
      //   const element = document.getElementById(section.id);
      //   if (element) {
      //     const rect = element.getBoundingClientRect();
      //     if (rect.top < window.innerHeight / 2 && rect.bottom >= 0) {
      //       currentSection = section.href;
      //       break;
      //     }
      //   }
      // }
      setActiveHash(currentSection);
    };

    // Initial setting of activeHash on load and on scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const isActive = (href: string) => pathname + activeHash === href;

  // Handle click to update the activeHash on navigation
  const handleClick = (hash: string) => {
    setActiveHash(hash);
  };

  return (
    <header id="header" className="header sticky-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:kasmedtradingplc1@gmail.com">
                kasmedtradingplc1@gmail.com
              </a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+251991188086</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
      {/* End Top Bar */}
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link href="/home" className="logo d-flex align-items-center me-auto">
            <Image alt="logo" src={logo} width={50} height={50}/>
            <h1 className="sitename">Kasmed</h1>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a
                  href="/home#hero"
                  className={isActive("/home#hero") ? "active" : ""}
                  onClick={() => handleClick("/home#hero")}
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/home#about"
                  className={isActive("/home#about") ? "active" : ""}
                  onClick={() => handleClick("/home#about")}
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/home#services"
                  className={isActive("/home#services") ? "active" : ""}
                  onClick={() => handleClick("/home#services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/home#departments"
                  className={isActive("/home#departments") ? "active" : ""}
                  onClick={() => handleClick("/home#departments")}
                >
                  Products
                </a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <a
            href="/home#contact"
            className={"cta-btn d-none d-sm-block"}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
