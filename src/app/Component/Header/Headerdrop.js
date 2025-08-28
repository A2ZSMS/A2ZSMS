"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./Header";
import "./Header.css";

const HeaderDrop = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [navClass, setNavClass] = useState(
    isHomePage
      ? "navbar navbar-expand-lg navbar-dark bg-transparent position-fixed w-100"
      : "navbar navbar-expand-lg navbar-dark bg-light shadow-sm w-100 color"
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const updateNavClass = () => {
      if (isHomePage) {
        if (window.scrollY > 50) {
          setNavClass(
            "navbar navbar-expand-lg navbar-dark bg-light position-fixed w-100 shadow-sm top-0 color text-white"
          );
          setIsScrolled(true);
        } else {
          setNavClass(
            "navbar navbar-expand-lg navbar-dark bg-transparent position-fixed w-100 text-dark"
          );
          setIsScrolled(false);
        }
      } else {
        // For non-home pages, still respond to scroll but maintain the light background
        if (window.scrollY > 50) {
          setNavClass(
            "navbar navbar-expand-lg navbar-dark bg-light position-fixed w-100 shadow-sm top-0 color"
          );
        } else {
          setNavClass(
            "navbar navbar-expand-lg navbar-dark bg-light shadow-sm w-100 color"
          );
        }
        setIsScrolled(true);
      }
    };

    updateNavClass();

    // Always add the scroll listener, regardless of page
    window.addEventListener("scroll", updateNavClass);
    return () => window.removeEventListener("scroll", updateNavClass);
  }, [isHomePage, pathname]);

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const getLinkClass = () => {
    if (isHomePage && !isScrolled) {
      return "nav-link dropdown-toggle fw-bold text-white poda";
    }
    return "nav-link dropdown-toggle fw-bold text-dark poda";
  };

  return (
    <>
      <Header />
      <header>
        <nav className={navClass} style={{ zIndex: 1000 }}>
          <div className="container w-100">
            <Link className="navbar-brand" href="/">
              <img
                src="/image/logo1.png"
                alt="logo"
                height={60}
                className={isScrolled ? "scrolled-logo" : ""}
              />
            </Link>

            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Off-canvas Navigation */}
            <div
              className="offcanvas offcanvas-start bg-light w-75"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link className="navbar-brand" href="/">
                  <img src="../image/logo1.png" alt="logo" height={60} />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <div className="navbar-nav ms-4">
                  <ul className="nav d-flex gap-3">
                    {/* Your existing navigation items */}
                    <li
                      className={`nav-item dropdown ${
                        dropdownOpen ? "show" : ""
                      }`}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <a className={getLinkClass()} href="#">
                        Products
                      </a>
                      <ul className="dropdown-menu" id="line-space">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/whatsapp-api/"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            💬 WhatsApp
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/rcs-service/"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            📱 RCS Service
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/bulk-sms/"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            ✉️ Bulk SMS
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/voice-call"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            📞 Bulk Voice Call
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/design-developement/"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            💻 Web Design & Development
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Solutions Dropdown */}
                    <li className="nav-item dropdown ">
                      <a
                        className={getLinkClass()}
                        href="#"
                        id="solutionsDropdown"
                        role="button"
                      >
                        Solutions
                      </a>
                      <div className="dropdown-menu dropdown-large p-2 shadow border-0 rounded">
                        <div className="row">
                          <div className="col-md-6">
                            <p className="m-2 ps-2 fw-bold">By Industry</p>
                            <ul className="list-unstyled" id="line-space">
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/real-estate/"
                                  onClick={() => {
                                    closeDropdown();
                                    document
                                      .querySelector(
                                        '[data-bs-dismiss="offcanvas"]'
                                      )
                                      .click();
                                  }}
                                >
                                  {" "}
                                  <span className="me-2">🏠</span> Real Estate
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/tours-travel/"
                                  onClick={() => {
                                    closeDropdown();
                                    document
                                      .querySelector(
                                        '[data-bs-dismiss="offcanvas"]'
                                      )
                                      .click();
                                  }}
                                >
                                  {" "}
                                  <span className="me-2">🏨</span> Tours &
                                  Travels
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/gaming/"
                                  onClick={() => {
                                    closeDropdown();
                                    document
                                      .querySelector(
                                        '[data-bs-dismiss="offcanvas"]'
                                      )
                                      .click();
                                  }}
                                >
                                  {" "}
                                  <span className="me-2">🎮</span> Gaming
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/health-care/"
                                  onClick={() => {
                                    closeDropdown();
                                    document
                                      .querySelector(
                                        '[data-bs-dismiss="offcanvas"]'
                                      )
                                      .click();
                                  }}
                                >
                                  {" "}
                                  <span className="me-2">🩺</span> Healthcare
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="list-unstyled" id="line-space">
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/food-beverage/"
                                  onClick={() => {
                                    closeDropdown();
                                    document
                                      .querySelector(
                                        '[data-bs-dismiss="offcanvas"]'
                                      )
                                      .click();
                                  }}
                                >
                                  {" "}
                                  <span className="me-2">🍔</span> Food &
                                  Beverage
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/retail-ecommerce/"
                                  onClick={() => {
                                    closeDropdown();
                                    document
                                      .querySelector(
                                        '[data-bs-dismiss="offcanvas"]'
                                      )
                                      .click();
                                  }}
                                >
                                  {" "}
                                  <span className="me-2">🛍️</span> Retail and
                                  eCommerce
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/media-entertainment/"
                                  onClick={() => {
                                    closeDropdown();
                                    document
                                      .querySelector(
                                        '[data-bs-dismiss="offcanvas"]'
                                      )
                                      .click();
                                  }}
                                >
                                  {" "}
                                  <span className="me-2">🎥</span> Media &
                                  Entertainment
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/government/"
                                  onClick={() => {
                                    closeDropdown();
                                    document
                                      .querySelector(
                                        '[data-bs-dismiss="offcanvas"]'
                                      )
                                      .click();
                                  }}
                                >
                                  {" "}
                                  <span className="me-2">🏛️</span> Government
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/education/"
                                  onClick={() => {
                                    closeDropdown();
                                    document
                                      .querySelector(
                                        '[data-bs-dismiss="offcanvas"]'
                                      )
                                      .click();
                                  }}
                                >
                                  {" "}
                                  <span className="me-2">📚</span> Education
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Resources Dropdown */}
                    <li className="nav-item dropdown">
                      <a className={getLinkClass()} href="#">
                        Resources
                      </a>
                      <ul className="dropdown-menu" id="line-space">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/services"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            🛠️ Service
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/faq"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            ❓ FAQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/blogs/"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            📰 Blog
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Company Dropdown */}
                    <li className="nav-item dropdown">
                      <a className={getLinkClass()} href="#">
                        Company
                      </a>
                      <ul className="dropdown-menu" id="line-space">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/about/"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            🏢 About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/contact/"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            📞 Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/career/"
                            onClick={() => {
                              closeDropdown();
                              document
                                .querySelector('[data-bs-dismiss="offcanvas"]')
                                .click();
                            }}
                          >
                            💼 Career
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="btn-header ms-auto gap-3">
                  <Link
                    href="/try-for-free"
                    className="action btn btn-primary px-4 buton fw-bold pt-2"
                    onClick={() => {
                      closeDropdown();
                      document
                        .querySelector('[data-bs-dismiss="offcanvas"]')
                        .click();
                    }}
                  >
                    Try For Free
                  </Link>
                  <Link
                    href="/request-demo"
                    className="action btn btn-outline-primary px-4 buton fw-bold pt-2"
                    onClick={() => {
                      closeDropdown();
                      document
                        .querySelector('[data-bs-dismiss="offcanvas"]')
                        .click();
                    }}
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderDrop;
