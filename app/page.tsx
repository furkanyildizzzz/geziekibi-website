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
  GoogleReviewResponse,
  HomepageBlogListSuccessResponse,
  SliderResponse,
  TourDailyPath,
} from "@/types/ApiResponseType";
import { getCategories } from "./api/homepage/getCategories";
import { getTopTours } from "./api/homepage/getTopTours";
import { getBlogs } from "./api/homepage/getBlogs";
import { getDestinations } from "./api/homepage/getDestinations";
import { getHomepageSliders } from "./api/homepage/getHomepageSliders";
import { getReviews } from "./api/googleApis/getReviews";

const Home = async () => {
  const featuredToursRequest = getFeaturedTours();
  const categoriesRequest = getCategories();
  const topToursRequest = getTopTours();
  const blogsRequest = getBlogs();
  const destinationsRequest = getDestinations();
  const homepageSlidersRequest = getHomepageSliders();
  // const googleReviews = getReviews();

  const featuredToursResponse = await featuredToursRequest;
  const categoriesResponse = await categoriesRequest;
  const topToursResponse = await topToursRequest;
  const blogResponse = await blogsRequest;
  const destinationsResponse = await destinationsRequest;
  const homepageSlidersResponse = await homepageSlidersRequest;
  // const googleReviewsResponse = await googleReviews;

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

  let reviews: GoogleReviewResponse[] = [];
  // if ("errorMessage" in googleReviewsResponse) {
  //   reviews = [];
  // } else {
  //   reviews = googleReviewsResponse;
  // }

  return (
    <>
      <Layout headerStyle={1} footerStyle={5}>
        <BannerHome1 destinations={destinations} sliders={sliders} />
        <OurFeatured1 tours={featuredTours} />
        <TopCategory1 categories={categories} />
        <Banner />
        <TopRated2 tours={topTours} />
        <WhyTravelUs />
        {reviews.length && <Testimonials2 reviews={reviews} />}
        <News2 blogs={blogs} />
      </Layout>
    </>
  );
};

export default Home;
