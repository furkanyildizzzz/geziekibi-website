import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import BannerHome1 from "@/components/sections/BannerHome1";
import News2 from "@/components/sections/News2";
import OurFeatured1 from "@/components/sections/OurFeatured1";
import Testimonials2 from "@/components/sections/Testimonials2";
import TopCategory1 from "@/components/sections/TopCategory1";
import TopRated2 from "@/components/sections/TopRated2";
import { getFeaturedTours } from "@/app/api/homepage/getFeaturedTours";
import { getCategories } from "@/app/api/homepage/getCategories";
import { getTopTours } from "@/app/api/homepage/getTopTours";
import { getBlogs } from "@/app/api/homepage/getBlogs";
import { getDestinations } from "@/app/api/homepage/getDestinations";
import { getHomepageSliders } from "@/app/api/homepage/getHomepageSliders";
import {
  CategoryListSuccessResponse,
  FeaturedTourListSuccessResponse,
  GoogleResponse,
  HomepageBlogListSuccessResponse,
  SliderResponse,
  TourDailyPath,
} from "@/types/ApiResponseType";
import { getGoogleApiResponse } from "./api/googleApis/getGoogleApiResponse";

const Home = async () => {
  const featuredToursRequest = getFeaturedTours();
  const categoriesRequest = getCategories();
  const topToursRequest = getTopTours();
  const blogsRequest = getBlogs();
  const destinationsRequest = getDestinations();
  const homepageSlidersRequest = getHomepageSliders();
  const googleApiRequest = getGoogleApiResponse();

  const featuredToursResponse = await featuredToursRequest;
  const categoriesResponse = await categoriesRequest;
  const topToursResponse = await topToursRequest;
  const blogResponse = await blogsRequest;
  const destinationsResponse = await destinationsRequest;
  const homepageSlidersResponse = await homepageSlidersRequest;
  const googleApiResponse = await googleApiRequest;

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

  let blogs: HomepageBlogListSuccessResponse[] = [];
  if ("data" in blogResponse) {
    blogs = blogResponse.data;
  }

  let destinations: TourDailyPath[] = [];
  if ("data" in destinationsResponse) {
    destinations = destinationsResponse.data;
  }

  let sliders: SliderResponse[] = [];
  if ("data" in homepageSlidersResponse) {
    sliders = homepageSlidersResponse.data;
  }

  let googleResponse: GoogleResponse | null;
  if ("errorMessage" in googleApiResponse) {
    googleResponse = null
  } else {
    googleResponse = googleApiResponse;
  }

  return (
    <Layout headerStyle={1} footerStyle={5}>
      <BannerHome1 destinations={destinations} sliders={sliders} />
      <OurFeatured1 tours={featuredTours} />
      <TopCategory1 categories={categories} />
      <Banner />
      <TopRated2 tours={topTours} />
      {googleResponse && <Testimonials2 googleResponse={googleResponse} />}
      <News2 blogs={blogs} />
    </Layout>
  );
}
export default Home