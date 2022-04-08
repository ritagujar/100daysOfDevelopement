// http://localhost:3000/blog/8/anything/any
// We Can specify anything after /blog

// Catch-all/ Collect-app Routes - [...slug].js
import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();
  console.log(router.query);
  //   The above log - slug: (3) ['8', 'anything', 'any']

  return (
    <div>
      <h1>The Blog Post Page</h1>
    </div>
  );
}

export default BlogPostPage;
