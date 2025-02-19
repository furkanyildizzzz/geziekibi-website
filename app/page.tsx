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
import { getReviews } from "@/app/api/googleApis/getReviews";
import {
  CategoryListSuccessResponse,
  FeaturedTourListSuccessResponse,
  GoogleReviewResponse,
  HomepageBlogListSuccessResponse,
  SliderResponse,
  TourDailyPath,
} from "@/types/ApiResponseType";

export default async function Home() {
  const [
    featuredToursResponse,
    categoriesResponse,
    topToursResponse,
    blogResponse,
    destinationsResponse,
    homepageSlidersResponse,
    googleReviewsResponse,
  ] = await Promise.all([
    getFeaturedTours(),
    getCategories(),
    getTopTours(),
    getBlogs(),
    getDestinations(),
    getHomepageSliders(),
    getReviews(),
  ]);

  const featuredTours: FeaturedTourListSuccessResponse[] =
    "data" in featuredToursResponse ? featuredToursResponse.data : [];
  const categories: CategoryListSuccessResponse[] =
    "data" in categoriesResponse ? categoriesResponse.data : [];
  const topTours: FeaturedTourListSuccessResponse[] =
    "data" in topToursResponse ? topToursResponse.data : [];
  const blogs: HomepageBlogListSuccessResponse[] =
    "data" in blogResponse ? blogResponse.data : [];
  const destinations: TourDailyPath[] =
    "data" in destinationsResponse ? destinationsResponse.data : [];
  const sliders: SliderResponse[] =
    "data" in homepageSlidersResponse ? homepageSlidersResponse.data : [];
  const reviews: GoogleReviewResponse[] =
    "errorMessage" in googleReviewsResponse ? [] : googleReviewsResponse;

  return (
    <Layout headerStyle={1} footerStyle={5}>
      <BannerHome1 destinations={destinations} sliders={sliders} />
      <OurFeatured1 tours={featuredTours} />
      <TopCategory1 categories={categories} />
      <Banner />
      <TopRated2 tours={topTours} />
      {reviews.length > 0 && <Testimonials2 reviews={reviews} />}
      <News2 blogs={blogs} />
    </Layout>
  );
}
