"use client";
import CurrencyDropdown from "@/components/elements/CurrencyDropdown";
import LanguageDropdown from "@/components/elements/LanguageDropdown";
import dynamic from "next/dynamic";
import Link from "next/link";
const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
  ssr: false,
});
export default function Header1({
  scroll,
  handleLogin,
  handleMobileMenu,
  handleRegister,
  handleSidebar,
}: any) {
  return (
    <>
      <header className={`header sticky-bar ${scroll ? "stick" : ""}`}>
        <div className="container-fluid background-body">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <img
                    className="light-mode"
                    alt="Geziekibi"
                    src="/assets/imgs/logo-80.png"
                  />
                  <img
                    className="dark-mode"
                    alt="Geziekibi"
                    src="/assets/imgs/logo-80.png"
                  />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu">
                  <ul className="main-menu">
                    <li className="mega-li">
                      <Link className="active" href="/">
                        Anasayfa
                      </Link>
                    </li>
                    <li className="mega-li-small">
                      <Link href="/turlar">Turlar</Link>
                    </li>

                    <li className="">
                      <Link href="/makaleler">Makaleler</Link>
                    </li>
                    {/* <li className="">
                      <Link href="/biletler">Biletler</Link>
                    </li> */}
                    <li className="">
                      <Link href="/hakkimizda">Hakkımızda</Link>
                    </li>
                    <li>
                      <Link href="/iletisim">İletişim</Link>
                    </li>
                    <li>
                      <Link href="/sikcasorulansorular">SSS</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              {/* <LanguageDropdown />
              <CurrencyDropdown /> */}
              <div className="d-none d-xxl-inline-block align-middle mr-15">
                <Link className="btn change-mode mr-15" href="/">
                  <img
                    className="light-mode"
                    alt="Geziekibi"
                    src="/assets/imgs/ari-80.png"
                  />
                  <img
                    className="dark-mode"
                    alt="Geziekibi"
                    src="/assets/imgs/ari-80.png"
                  />
                </Link>
                <ThemeSwitch />
                {/* <a className="btn btn-default btn-signin" onClick={handleLogin}>
                  Giriş Yap
                </a> */}
              </div>
              {/* <div
                  className="burger-icon-2 burger-icon-white"
                  onClick={handleSidebar}
                >
                  <img
                    src="/assets/imgs/template/icons/menu.svg"
                    alt="Geziekibi"
                  />
                </div> */}
              <div
                className="burger-icon burger-icon-white"
                onClick={handleMobileMenu}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
