"use client";
import CurrencyDropdown from "@/components/elements/CurrencyDropdown";
import LanguageDropdown from "@/components/elements/LanguageDropdown";
import { popupCenter } from "@/util/popupCenter";
import { signIn, useSession } from "next-auth/react";
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
  const { data: _, status } = useSession();
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
                        Home
                      </Link>
                    </li>
                    <li className="mega-li-small">
                      <Link href="/turlar">Turlar</Link>
                    </li>

                    <li className="">
                      <Link href="/Biletler">Makaleler</Link>
                    </li>
                    <li className="">
                      <Link href="/Biletler">Biletler</Link>
                    </li>
                    <li className="">
                      <Link href="/hakkimizda">Hakkımızda</Link>
                    </li>
                    <li>
                      <Link href="/iletisim">İletişim</Link>
                    </li>
                    <li>
                      <Link href="/iletisim">SSS</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              {/* <LanguageDropdown />
              <CurrencyDropdown /> */}
              <div className="d-none d-xxl-inline-block align-middle mr-15">
                <ThemeSwitch />
                <a
                  className="btn btn-default btn-signin"
                  // onClick={handleLogin}
                  onClick={() =>
                    // signIn("apple", { redirect: false }).then(handleLogin())
                    popupCenter("/google-signin", "Google ile giriş yap")
                  }
                  // hidden={!(status === "unauthenticated")}
                >
                  Giriş Yap
                </a>
              </div>
              <div
                className="burger-icon-2 burger-icon-white"
                onClick={handleSidebar}
              >
                <img
                  src="/assets/imgs/template/icons/menu.svg"
                  alt="Geziekibi"
                />
              </div>
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
