import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excert:
      "NextJs is a framework for production - it makes building fullstack React apps and sited a breeze and ships with built-in SSR.",
    data: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excert:
      "NextJs is a framework for production - it makes building fullstack React apps and sited a breeze and ships with built-in SSR.",
    data: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excert:
      "NextJs is a framework for production - it makes building fullstack React apps and sited a breeze and ships with built-in SSR.",
    data: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excert:
      "NextJs is a framework for production - it makes building fullstack React apps and sited a breeze and ships with built-in SSR.",
    data: "2022-02-10",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
