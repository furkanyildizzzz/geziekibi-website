import Link from "next/link";
import CurrencyDropdown from "@/components/elements/CurrencyDropdown";
import LanguageDropdown from "@/components/elements/LanguageDropdown";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function Sidebar({ isSidebar, handleSidebar }: any) {
  return (
    <>
      <div
        className={`sidebar-canvas-wrapper perfect-scrollbar button-bg-2 ${
          isSidebar ? "sidebar-canvas-visible" : ""
        }`}
      >
        <PerfectScrollbar className="sidebar-canvas-container">
          <div className="sidebar-canvas-head">
            <div className="sidebar-canvas-logo">
              {" "}
              <Link className="d-flex" href="/">
                <img
                  className="light-mode"
                  alt="Gezielibi"
                  src="/assets/imgs/logo-80.png"
                />
                <img
                  className="dark-mode"
                  alt="Gezielibi"
                  src="/assets/imgs/logo-80.png"
                />
              </Link>
            </div>
            <div className="sidebar-canvas-lang">
              <a className="close-canvas" onClick={handleSidebar}>
                {" "}
                <img
                  alt="Gezielibi"
                  src="/assets/imgs/template/icons/close.png"
                />
              </a>
            </div>
          </div>
          <div className="sidebar-canvas-content">
            <div className="box-author-profile">
              <div className="card-author">
                <div className="card-image">
                  {" "}
                  <img
                    src="/assets/imgs/page/homepage1/author2.png"
                    alt="Gezielibi"
                  />
                </div>
                <div className="card-info">
                  <p className="text-md-bold neutral-1000">Alice Roses</p>
                  <p className="text-xs neutral-1000">London, England</p>
                </div>
              </div>
              <Link className="btn btn-black" href="#">
                Çıkış Yap
              </Link>
            </div>
            <div className="box-quicklinks">
              <h6 className="title-quicklinks neutral-1000">Hızlı Erişim</h6>
              <div className="box-list-quicklinks">
                <div className="item-quicklinks">
                  <div className="item-icon">
                    {" "}
                    <img
                      src="/assets/imgs/template/icons/notify.svg"
                      alt="Gezielibi"
                    />
                  </div>
                  <div className="item-info">
                    {" "}
                    <Link href="#">
                      <h6 className="text-md-bold neutral-1000">Bildirimler</h6>
                    </Link>
                    <p className="text-xs neutral-500 online">2 new messages</p>
                  </div>
                </div>
                <div className="item-quicklinks">
                  <div className="item-icon">
                    {" "}
                    <img
                      src="/assets/imgs/template/icons/bookmark.svg"
                      alt="Gezielibi"
                    />
                  </div>
                  <div className="item-info">
                    {" "}
                    <Link href="#">
                      <h6 className="text-md-bold neutral-1000">
                        Yer İşaretleri
                      </h6>
                    </Link>
                    <p className="text-xs neutral-500">7 tours, 2 rooms</p>
                  </div>
                </div>

                <div className="item-quicklinks">
                  <div className="item-icon">
                    {" "}
                    <img
                      src="/assets/imgs/template/icons/friends.svg"
                      alt="Gezielibi"
                    />
                  </div>
                  <div className="item-info">
                    {" "}
                    <Link href="#">
                      <h6 className="text-md-bold neutral-1000">Arkadaşlar</h6>
                    </Link>
                  </div>
                </div>
                <div className="item-quicklinks">
                  <div className="item-icon">
                    {" "}
                    <img
                      src="/assets/imgs/template/icons/tickets.svg"
                      alt="Gezielibi"
                    />
                  </div>
                  <div className="item-info">
                    {" "}
                    <Link href="#">
                      <h6 className="text-md-bold neutral-1000">Biletler</h6>
                    </Link>
                    <p className="text-xs neutral-500 resolved">
                      3 resolved tickets
                    </p>
                  </div>
                </div>
                <div className="item-quicklinks">
                  <div className="item-icon">
                    {" "}
                    <img
                      src="/assets/imgs/template/icons/settings.svg"
                      alt="Gezielibi"
                    />
                  </div>
                  <div className="item-info">
                    {" "}
                    <Link href="#">
                      <h6 className="text-md-bold neutral-1000">Ayarlar</h6>
                    </Link>
                    <p className="text-xs neutral-500">Hesabınız</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-savedplaces">
              <h6 className="title-savedplaces neutral-1000">
                Kaydedilmiş Turlar
              </h6>
              <div className="box-list-places">
                <div className="card-place">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/page/homepage1/place.png"
                      alt="Gezielibi"
                    />
                  </div>
                  <div className="card-info background-card">
                    <div className="card-info-top">
                      <h6 className="text-xl-bold">
                        {" "}
                        <Link className="neutral-1000" href="#">
                          Machu Picchu
                        </Link>
                      </h6>
                      <p className="text-xs card-rate">
                        {" "}
                        <img
                          src="/assets/imgs/template/icons/star.svg"
                          alt="Gezielibi"
                        />
                        4/5
                      </p>
                    </div>
                    <div className="card-info-bottom">
                      <p className="text-xs-medium neutral-500">
                        Carved by the Colorado River in Arizona, United States
                      </p>
                      <Link href="#">
                        <svg
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-place">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/page/homepage1/place2.png"
                      alt="Gezielibi"
                    />
                  </div>
                  <div className="card-info background-card">
                    <div className="card-info-top">
                      <h6 className="text-xl-bold">
                        {" "}
                        <Link className="neutral-1000" href="#">
                          Machu Picchu
                        </Link>
                      </h6>
                      <p className="text-xs card-rate">
                        {" "}
                        <img
                          src="/assets/imgs/template/icons/star.svg"
                          alt="Gezielibi"
                        />
                        4/5
                      </p>
                    </div>
                    <div className="card-info-bottom">
                      <p className="text-xs-medium neutral-500">
                        Carved by the Colorado River in Arizona, United States
                      </p>
                      <Link href="#">
                        <svg
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-place">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/page/homepage1/place3.png"
                      alt="Gezielibi"
                    />
                  </div>
                  <div className="card-info background-card">
                    <div className="card-info-top">
                      <h6 className="text-xl-bold">
                        {" "}
                        <Link className="neutral-1000" href="#">
                          Machu Picchu
                        </Link>
                      </h6>
                      <p className="text-xs card-rate">
                        {" "}
                        <img
                          src="/assets/imgs/template/icons/star.svg"
                          alt="Gezielibi"
                        />
                        4/5
                      </p>
                    </div>
                    <div className="card-info-bottom">
                      <p className="text-xs-medium neutral-500">
                        Carved by the Colorado River in Arizona, United States
                      </p>
                      <Link href="#">
                        <svg
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-contactus">
              <h6 className="title-contactus neutral-1000">Bize Ulaşın</h6>
              <div className="contact-info">
                <p className="address-2 text-md-medium neutral-1000">
                  4517 Washington Ave. <br />
                  Manchester, Kentucky 39495
                </p>
                <p className="hour-work-2 text-md-medium neutral-1000">
                  Hours: 8:00 - 17:00, Mon - Sat
                </p>
                <p className="email-2 text-md-medium neutral-1000">
                  support@travila.com
                </p>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
}
