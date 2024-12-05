import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import BannerHome1 from "@/components/sections/BannerHome1";
import News2 from "@/components/sections/News2";
import OurFeatured1 from "@/components/sections/OurFeatured1";
import Testimonials2 from "@/components/sections/Testimonials2";
import TopCategory1 from "@/components/sections/TopCategory1";
import TopRated2 from "@/components/sections/TopRated2";
import WhyTravelUs from "@/components/sections/WhyTravelUs";
import { getFeaturedTours } from "./api/homepage/getFeaturedTours";
import {
  CategoryListSuccessResponse,
  FeaturedTourListSuccessResponse,
} from "@/types/ApiResponseType";
import { getCategories } from "./api/homepage/getCategories";
import { getTopTours } from "./api/homepage/getTopTours";

const Home = async () => {
  const featuredToursRequest = getFeaturedTours();
  const categoriesRequest = getCategories();
  const topToursRequest = getTopTours();

  const featuredToursResponse = await featuredToursRequest;
  const categoriesResponse = await categoriesRequest;
  const topToursResponse = await topToursRequest;

  let featuredTours: FeaturedTourListSuccessResponse[] = [];
  if ("data" in featuredToursResponse) {
    featuredTours = featuredToursResponse.data;
  }

  let categories: CategoryListSuccessResponse[] = [];
  if ("data" in categoriesResponse) {
    categories = categoriesResponse.data;
  }

  let topTours: FeaturedTourListSuccessResponse[] = [];
  if ("data" in topToursResponse) {
    topTours = topToursResponse.data;
  }
  return (
    <>
      <Layout headerStyle={1} footerStyle={5}>
        <BannerHome1 />
        <OurFeatured1 tours={featuredTours} />
        <TopCategory1 categories={categories} />
        <Banner />
        <TopRated2 tours={topTours} />
        <WhyTravelUs />
        <Testimonials2 />
        <News2 />
      </Layout>
    </>
  );
};

export default Home;
