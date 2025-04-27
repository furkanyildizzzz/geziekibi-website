"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import ButtonClick from "../elements/ButtonClick";
import ItemCollapse from "../elements/ItemCollapse";
import TestimonialBlock from "../elements/TestimonialBlock";
import Breadcrumb from "./Breadcrumb";
import MobileMenu from "./MobileMenu";
import PopupSignin from "./PopupSignin";
import PopupSignup from "./PopupSignup";
import Sidebar from "./Sidebar";
import Footer3 from "./footer/Footer3";
import Header1 from "./header/Header1";
import { WOW } from "wowjs";
import WhatsappWidget from "./WhatsappWidget";

interface LayoutProps {
  headerStyle?: number;
  footerStyle?: number;
  children?: React.ReactNode;
  breadcrumbTitle?: string;
}

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
}: LayoutProps) {
  const [scroll, setScroll] = useState<boolean>(false);
  // MobileMenu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
  const handleMobileMenu = (): void => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-active")
      : document.body.classList.remove("mobile-menu-active");
  };
  // Sidebar
  const [isSidebar, setSidebar] = useState<boolean>(false);
  const handleSidebar = (): void => {
    setSidebar(!isSidebar);
    !isSidebar
      ? document.body.classList.add("canvas-menu-active")
      : document.body.classList.remove("canvas-menu-active");
  };
  // Login
  const [isLogin, setLogin] = useState<boolean>(false);
  const handleLogin = (): void => setLogin(!isLogin);
  // Register
  const [isRegister, setRegister] = useState<boolean>(false);
  const handleRegister = (): void => setRegister(!isRegister);

  useEffect(() => {
    // if (typeof window === "undefined") return;

    // // Initialize WOW.js with proper typing
    // const wowInstance = new WOW({
    //   live: false,
    // });
    // wowInstance.init();

    const handleScroll = (): void => {
      const scrollCheck: boolean = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <>
      <div id="top" />
      <ItemCollapse />
      <ButtonClick />
      <TestimonialBlock />
      {isMobileMenu && (
        <div className="body-overlay-1" onClick={handleMobileMenu} />
      )}
      {isSidebar && <div className="body-overlay-1" onClick={handleSidebar} />}

      {headerStyle == 1 ? (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSidebar={isSidebar}
          handleSidebar={handleSidebar}
          isLogin={isLogin}
          handleLogin={handleLogin}
          isRegister={isRegister}
          handleRegister={handleRegister}
        />
      ) : null}

      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />

      <main className="main">
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {children}
      </main>

      <Footer3 />

      {/* <PopupFirstLoad /> */}
      <PopupSignin
        isLogin={isLogin}
        handleLogin={handleLogin}
        isRegister={isRegister}
        handleRegister={handleRegister}
      />
      <PopupSignup
        isRegister={isRegister}
        handleRegister={handleRegister}
        isLogin={isLogin}
        handleLogin={handleLogin}
      />

      {/* WhatsApp Widget */}
      <WhatsappWidget isMobileMenu={isMobileMenu} />

      <BackToTop target="top" />
    </>
  );
}
