import Link from "next/link";
export default function Footer3() {
  return (
    <>
      <footer className="footer footer-white background-body">
        <div className="container-fluid">
          <div className="container-footer">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <div className="mt-20 mb-20">
                  <Link className="d-inline-block mb-20" href="/">
                    <img
                      className="dark-mode"
                      alt="Travila"
                      src="/assets/imgs/geziekibi-logo-vektorel.svg"
                      //   src="/assets/imgs/template/logo-footer.svg"
                      style={{ width: "120px", height: "auto" }}
                    />
                    <img
                      className="light-mode"
                      alt="Travila"
                      src="/assets/imgs/geziekibi-logo-vektorel.svg"
                      //   src="/assets/imgs/template/logo-footer-w.svg"
                      style={{ width: "120px", height: "auto" }}
                    />
                  </Link>
                  <div className="box-info-contact mt-0">
                    <p className="text-md neutral-1000">
                      Keyfinizin kahyasıyız
                    </p>
                  </div>
                  <div className="box-need-help">
                    <p className="need-help text-md-medium mb-5 neutral-1000">
                      Yardım için bizi arayın
                    </p>
                    <br />
                    <Link
                      className="heading-6 phone-support"
                      href="/tel:05422924444"
                    >
                      0542 292 44 44
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <h6 className="neutral-1000">Şirket</h6>
                    <ul className="menu-footer">
                      <li>
                        <Link href="/hakkimizda">Hakkımızda</Link>
                      </li>
                      <li>
                        <Link href="/iletisim">Bizimle İetişime Geçin</Link>
                      </li>
                      {/* <li>
                        <Link href="/odullerimiz">Ödüllerimiz</Link>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <h6 className="neutral-1000">Hizmetler</h6>
                    <ul className="menu-footer">
                      {/* <li>
                        <Link href="/turlar/rehber">Tur Rehberlerimiz</Link>
                      </li> */}
                      <li>
                        <Link href="/turlar">Turlarımız</Link>
                      </li>
                      {/* <li>
                        <Link href="/biletler">Uçak Bileti</Link>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <h6 className="neutral-1000">Yasal</h6>
                    <ul className="menu-footer">
                      <li>
                        <Link href="/kvkk">KVKK</Link>
                      </li>
                      <li>
                        <Link href="/gizlilik-politikasi">
                          Gizlilik Politikası
                        </Link>
                      </li>
                      <li>
                        <Link href="/kullanim-politikasi">
                          Kullanım Politikası
                        </Link>
                      </li>
                      <li>
                        <Link href="/bilgi-guvenligi-politikasi">
                          Bilgi Güvenliği Politikası
                        </Link>
                      </li>
                      <li>
                        <Link href="/cerez-politikasi">Çerez Politikası</Link>
                      </li>
                      <li>
                        <Link href="/uyelik-sozlesmesi">
                          Üyelik Sözleşmesi Politikası
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/insan-kaynaklari">İnsan Kaynakları</Link>
                      </li>
                      <li>
                        <Link href="/tur-paket-sozlesmesi">
                          Paket Tur Sözleşmesi
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <h6 className="neutral-1000">Destek</h6>
                    <ul className="menu-footer">
                      <li>
                        <Link href="/iletisim">Yardım Merkezi</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3">
                <p className="text-lg neutral-1000 mb-15">Newsletter</p>
                <div className="d-flex align-items-center">
                  <form
                    className="form-newsletter form-newsletter-2"
                    action="#"
                  >
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <input
                      className="btn btn-brand-secondary"
                      type="submit"
                      defaultValue="Subscribe"
                    />
                  </form>
                </div>
              </div> */}
            </div>
            <div className="footer-bottom mt-50">
              <div className="row align-items-center">
                <div className="col-md-6 text-md-start text-center mb-20">
                  <p className="text-sm neutral-1000">
                    © {new Date().getFullYear()} Geziekibi - Tüm hakları
                    saklıdır
                  </p>
                </div>
                <div className="col-md-6 text-md-end text-center mb-20">
                  <div className="d-flex align-items-center justify-content-center justify-content-md-end box-socials-footer-cover">
                    <p className="text-lg-bold neutral-1000 d-inline-block mr-10">
                      Bizi Takip Edin
                    </p>
                    <div className="box-socials-footer d-inline-block">
                      <Link
                        className="icon-socials icon-instagram"
                        href="https://www.instagram.com/geziekibi/"
                        target="_blank"
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.4915 1.6665H6.50817C3.47484 1.6665 1.6665 3.47484 1.6665 6.50817V13.4832C1.6665 16.5248 3.47484 18.3332 6.50817 18.3332H13.4832C16.5165 18.3332 18.3248 16.5248 18.3248 13.4915V6.50817C18.3332 3.47484 16.5248 1.6665 13.4915 1.6665ZM9.99984 13.2332C8.2165 13.2332 6.7665 11.7832 6.7665 9.99984C6.7665 8.2165 8.2165 6.7665 9.99984 6.7665C11.7832 6.7665 13.2332 8.2165 13.2332 9.99984C13.2332 11.7832 11.7832 13.2332 9.99984 13.2332ZM14.9332 5.73317C14.8915 5.83317 14.8332 5.92484 14.7582 6.00817C14.6748 6.08317 14.5832 6.1415 14.4832 6.18317C14.3832 6.22484 14.2748 6.24984 14.1665 6.24984C13.9415 6.24984 13.7332 6.1665 13.5748 6.00817C13.4998 5.92484 13.4415 5.83317 13.3998 5.73317C13.3582 5.63317 13.3332 5.52484 13.3332 5.4165C13.3332 5.30817 13.3582 5.19984 13.3998 5.09984C13.4415 4.9915 13.4998 4.90817 13.5748 4.82484C13.7665 4.63317 14.0582 4.5415 14.3248 4.59984C14.3832 4.60817 14.4332 4.62484 14.4832 4.64984C14.5332 4.6665 14.5832 4.6915 14.6332 4.72484C14.6748 4.74984 14.7165 4.7915 14.7582 4.82484C14.8332 4.90817 14.8915 4.9915 14.9332 5.09984C14.9748 5.19984 14.9998 5.30817 14.9998 5.4165C14.9998 5.52484 14.9748 5.63317 14.9332 5.73317Z" />
                        </svg>
                      </Link>
                      <Link
                        className="icon-socials icon-facebook"
                        href="https://www.facebook.com/Geziekibiseyahatacentesi/?locale=tr_TR"
                        target="_blank"
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.3334 13.4915C18.3334 16.5248 16.5251 18.3332 13.4917 18.3332H12.5001C12.0417 18.3332 11.6667 17.9582 11.6667 17.4998V12.6915C11.6667 12.4665 11.8501 12.2748 12.0751 12.2748L13.5417 12.2498C13.6584 12.2415 13.7584 12.1582 13.7834 12.0415L14.0751 10.4498C14.1001 10.2998 13.9834 10.1582 13.8251 10.1582L12.0501 10.1832C11.8167 10.1832 11.6334 9.99985 11.6251 9.77485L11.5918 7.73317C11.5918 7.59984 11.7001 7.48318 11.8417 7.48318L13.8417 7.44984C13.9834 7.44984 14.0918 7.34152 14.0918 7.19985L14.0584 5.19983C14.0584 5.05816 13.9501 4.94984 13.8084 4.94984L11.5584 4.98318C10.1751 5.00818 9.07509 6.1415 9.10009 7.52484L9.14175 9.8165C9.15008 10.0498 8.96676 10.2332 8.73342 10.2415L7.73341 10.2582C7.59175 10.2582 7.48342 10.3665 7.48342 10.5082L7.50842 12.0915C7.50842 12.2332 7.61675 12.3415 7.75841 12.3415L8.75842 12.3248C8.99176 12.3248 9.17507 12.5082 9.18341 12.7332L9.2584 17.4832C9.26674 17.9498 8.89174 18.3332 8.42507 18.3332H6.50841C3.47508 18.3332 1.66675 16.5248 1.66675 13.4832V6.50817C1.66675 3.47484 3.47508 1.6665 6.50841 1.6665H13.4917C16.5251 1.6665 18.3334 3.47484 18.3334 6.50817V13.4915V13.4915Z" />
                        </svg>
                      </Link>
                      <Link
                        className="icon-socials icon-twitter"
                        href="https://x.com/geziekibi"
                        target="_blank"
                      >
                        <svg
                          width={21}
                          height={20}
                          viewBox="0 0 21 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.2845 8.46864L19.5698 0H17.8434L11.5176 7.3532L6.4651 0H0.637695L8.278 11.1193L0.637695 20H2.36419L9.04447 12.2348L14.3802 20H20.2076L12.284 8.46864H12.2845ZM9.9198 11.2173L9.14568 10.1101L2.98627 1.29967H5.63806L10.6088 8.40994L11.3829 9.51718L17.8442 18.7594H15.1925L9.9198 11.2177V11.2173Z" />
                        </svg>
                      </Link>
                      <Link
                        className="icon-socials icon-be"
                        href="https://www.youtube.com/user/GEZIEKIBI"
                        target="_blank"
                      >
                        <svg
                          width={21}
                          height={15}
                          viewBox="0 0 21 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.82393 10.736L13.9225 7.78881L8.82393 4.84165V10.736ZM20.1803 3.04389C20.308 3.50561 20.3964 4.12451 20.4554 4.91042C20.5242 5.69633 20.5536 6.37418 20.5536 6.96361L20.6126 7.78881C20.6126 9.94024 20.4554 11.5219 20.1803 12.5337C19.9347 13.4179 19.3649 13.9877 18.4808 14.2333C18.0191 14.361 17.1742 14.4494 15.8775 14.5083C14.6004 14.5771 13.4313 14.6066 12.3507 14.6066L10.7887 14.6655C6.67251 14.6655 4.10848 14.5083 3.09662 14.2333C2.21247 13.9877 1.64269 13.4179 1.39709 12.5337C1.26938 12.072 1.18097 11.4531 1.12203 10.6672C1.05326 9.8813 1.02379 9.20345 1.02379 8.61402L0.964844 7.78881C0.964844 5.63739 1.12203 4.05575 1.39709 3.04389C1.64269 2.15974 2.21247 1.58996 3.09662 1.34436C3.55834 1.21665 4.4032 1.12823 5.69995 1.06929C6.97705 1.00052 8.14609 0.971052 9.22671 0.971052L10.7887 0.912109C14.9049 0.912109 17.4689 1.06929 18.4808 1.34436C19.3649 1.58996 19.9347 2.15974 20.1803 3.04389Z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
