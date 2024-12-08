"use client";
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
  const [isAccordion, setIsAccordion] = useState(0);

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner">
          <div className="mobile-header-logo">
            {" "}
            <Link className="d-flex" href="/">
              <img
                className="light-mode"
                alt="Travila"
                src="/assets/imgs/logo-80.png"
              />
              <img
                className="dark-mode"
                alt="Travila"
                src="/assets/imgs/logo-80.png"
              />
            </Link>
            <div
              className="burger-icon burger-icon-white"
              onClick={handleMobileMenu}
            />
          </div>
          <div className="mobile-header-top">
            <div className="box-author-profile">
              <div className="card-author">
                <div className="card-image">
                  {" "}
                  <img
                    src="/assets/imgs/page/homepage1/author2.png"
                    alt="Travila"
                  />
                </div>
                <div className="card-info">
                  <p className="text-md-bold neutral-1000">Alice Roses</p>
                  <p className="text-xs neutral-1000">London, England</p>
                </div>
              </div>
              <Link className="btn btn-black" href="#">
                Logout
              </Link>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link className="active" href="/">
                        Anasayfa
                      </Link>
                    </li>
                    <li>
                      <Link href="/turlar">Turlar</Link>
                    </li>
                    <li>
                      <Link href="/makaleler">Makaleler</Link>
                    </li>
                    <li>
                      <Link href="/makaleler">Biletler</Link>
                    </li>
                    <li>
                      <Link href="/hakkimizda">Hakkımızda</Link>
                    </li>
                    <li>
                      <Link href="/iletisim">İletişim</Link>
                    </li>
                    <li>
                      <Link href="/sss">SSS</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
}
