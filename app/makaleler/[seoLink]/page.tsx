import {
  BlogSuccessResponse,
  HomepageBlogListSuccessResponse,
} from "@/types/ApiResponseType";
import { notFound } from "next/navigation";
import { getBlogDetail } from "@/app/api/blog/blogDetail";
import BlogDetail from "@/components/sections/BlogDetail";
import { getBlogs } from "@/app/api/homepage/getBlogs";

export default async function Blog({
  params: { seoLink },
}: {
  params: { seoLink: string };
}) {
  const blogsRequest = getBlogs();
  const blogDetailRequest = getBlogDetail(seoLink);

  const blogsResponse = await blogsRequest;
  const blogDetailResponse = await blogDetailRequest;

  let blogData = {} as BlogSuccessResponse;
  if ("data" in blogDetailResponse) {
    blogData = blogDetailResponse.data;
  } else if (blogDetailResponse.errorType === "NOT FOUND") {
    notFound();
  }

  let blogs = [] as HomepageBlogListSuccessResponse[];
  if ("data" in blogsResponse) {
    blogs = blogsResponse.data.filter((b) => b.id != blogData.id);
  }

  return <BlogDetail blog={blogData} blogs={blogs} />;
}
