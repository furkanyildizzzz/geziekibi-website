import Link from "next/link";

export default function Banner() {
  return (
    <>
      <section className="section-box box-2-banner background-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="card-banner">
                <div className="card-image">
                  {" "}
                  <img src="/assets/imgs/tursab-600-306.jpg" alt="Travila" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="card-banner">
                <div className="card-image">
                  {" "}
                  <img src="/assets/imgs/turkiye-600-306.jpg" alt="Travila" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
