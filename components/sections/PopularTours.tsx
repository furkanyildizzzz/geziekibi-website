import { getTopTours } from "@/app/api/homepage/getTopTours";
import { CurrencyDisplayNames } from "@/lib/enums";
import { FeaturedTourListSuccessResponse } from "@/types/ApiResponseType";
import imageFunctions from "@/util/imageFunctions";
import Link from "next/link";
import { useEffect, useState } from "react";

const PopularTours = () => {
  const [tours, setTours] = useState<FeaturedTourListSuccessResponse[]>([]);

  const fetchTours = async () => {
    const response = await getTopTours();
    if ("data" in response) {
      setTours(response.data);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      <h6 className="text-lg-bold neutral-1000">Populer Turlar</h6>
      <div className="box-popular-posts box-popular-posts-md">
        <ul>
          {tours.length > 0 &&
            tours.map((tour) => (
              <li key={tour.id}>
                <div className="card-post">
                  <div className="card-image">
                    {" "}
                    <Link href={"/turlar/" + tour.seoLink}>
                      {" "}
                      <img
                        src={imageFunctions.resizeImage(
                          tour.uploadedPrimaryImages[0]?.url ||
                            "/assets/imgs/turlar/ege-turu-806-646.webp",
                          806,
                          646
                        )}
                        alt={tour.title}
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    {" "}
                    <Link
                      className="text-xs-bold"
                      href={"/turlar/" + tour.seoLink}
                    >
                      {tour.title}
                    </Link>
                    <span className="price text-sm-bold neutral-1000">
                      {tour.pricePerPerson}
                      {CurrencyDisplayNames[tour.currency]}{" "}
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
export default PopularTours;
