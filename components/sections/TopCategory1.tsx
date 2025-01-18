import { CategoryListSuccessResponse } from "@/types/ApiResponseType";
import imageFunctions from "@/util/imageFunctions";
import Link from "next/link";

interface TopCategory1Props {
  categories: CategoryListSuccessResponse[];
}

const TopCategory1: React.FC<TopCategory1Props> = ({ categories }) => {
  return (
    <>
      <section className="section-box box-top-category background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-8">
              <h2 className="neutral-1000">Kategoriler</h2>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-end">
                <Link className="btn btn-black-lg" href="/turlar">
                  Daha Fazla
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15L15 8L8 1M15 8L1 8"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="box-list-populars">
            <div className="row">
              {categories.map((c) => (
                <div className="col-lg-3 col-sm-6">
                  <div className="card-popular background-card hover-up">
                    <div className="card-image">
                      {" "}
                      <img
                        // src={
                        //   c.uploadedPrimaryImages[0].url ||
                        //   "/assets/imgs/kategoriler/ankara-turu-262-117.jpg"
                        // }
                        src={imageFunctions.resizeImage(
                          c.uploadedPrimaryImages[0]?.url ||
                            "/assets/imgs/kategoriler/ankara-turu-262-117.jpg",
                          262,
                          117
                        )}
                        alt={c.name}
                      />
                    </div>
                    <div className="card-info">
                      {" "}
                      <Link
                        className="card-title"
                        href={"/kategoriler/" + c.seoLink}
                      >
                        {c.name}
                      </Link>
                      <div className="card-meta">
                        <div className="meta-links">
                          {" "}
                          <Link href="#">{c.tourCount} Tur </Link>
                        </div>
                        <div className="card-button">
                          {" "}
                          <Link href={"/kategoriler/" + c.seoLink}>
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
              ))}
              {/* <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/kategoriler/bartın-turu-262-117.jpg"
                      alt="Travila"
                    />
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" href="/destination-2">
                      Bartın Turu
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link href="#">356 Tur, </Link>
                        <Link href="#">2488 Katılımcı</Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link href="/destination-2">
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
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/kategoriler/dogu-ekpresi-turu-262-117.jpg"
                      alt="Travila"
                    />
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" href="/destination-2">
                      Doğu Ekspresi
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link href="#">356 Tur, </Link>
                        <Link href="#">2488 Katılımcı</Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link href="/destination-2">
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
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/kategoriler/ege-akdeniz-turu-262-117.webp"
                      alt="Travila"
                    />
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" href="/destination-2">
                      Ege Akdeniz Turu
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link href="#">356 Tur, </Link>
                        <Link href="#">2488 Katılımcı</Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link href="/destination-2">
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
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/kategoriler/eskisehir-turu-262-117.jpg"
                      alt="Travila"
                    />
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" href="/destination-2">
                      Eskişehir Turu
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link href="#">356 Tur, </Link>
                        <Link href="#">2488 Katılımcı</Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link href="/destination-2">
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
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/kategoriler/gap-turu-262-117.jpg"
                      alt="Travila"
                    />
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" href="/destination-2">
                      Gap Turu
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link href="#">356 Tur, </Link>
                        <Link href="#">2488 Katılımcı</Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link href="/destination-2">
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
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/kategoriler/kapadokya-turu-262-117.jpg"
                      alt="Travila"
                    />
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" href="/destination-2">
                      Kapadokya Turu
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link href="#">356 Tur, </Link>
                        <Link href="#">2488 Katılımcı</Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link href="/destination-2">
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
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/kategoriler/karadeniz-turu-262-117.jpg"
                      alt="Travila"
                    />
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" href="/destination-2">
                      Karadeniz Turu
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link href="#">356 Tur, </Link>
                        <Link href="#">2488 Katılımcı</Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link href="/destination-2">
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
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/kategoriler/nemrut-turu-262-117.jpg"
                      alt="Travila"
                    />
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" href="/destination-2">
                      Nemrut Turu
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link href="#">356 Tur, </Link>
                        <Link href="#">2488 Katılımcı</Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link href="/destination-2">
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
              <div className="col-lg-3 col-sm-6">
                <div className="card-popular background-card hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="/assets/imgs/kategoriler/van-turu-262-117.jpg"
                      alt="Travila"
                    />
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link className="card-title" href="/destination-2">
                      Van Turu
                    </Link>
                    <div className="card-meta">
                      <div className="meta-links">
                        {" "}
                        <Link href="#">356 Tur, </Link>
                        <Link href="#">2488 Katılımcı</Link>
                      </div>
                      <div className="card-button">
                        {" "}
                        <Link href="/destination-2">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCategory1;
