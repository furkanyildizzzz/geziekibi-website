import { FeaturedTourListSuccessResponse } from "@/types/ApiResponseType";
import { getTours } from "../api/tour/getTours";
import TourList from "@/components/sections/TourList";

const TourGrid = async () => {
  const toursResponse = await getTours();

  let tourList: FeaturedTourListSuccessResponse[] = [];
  if ("data" in toursResponse) {
    tourList = toursResponse.data;
  }

  return <TourList tourList={tourList} category={null}/>

}

export default TourGrid