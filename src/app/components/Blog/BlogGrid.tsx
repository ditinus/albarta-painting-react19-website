import { Container } from "react-bootstrap"
import type { BlogPost } from "../../lib/types"
import BlogCard from "./BlogCard"

interface BlogGridProps {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <Container className="my-5"> 
      <div className=" text-center  my-5 ">
      <h5 className="">Our Blog</h5>
      <h2>Expert Advice, Trends & DIY Tips</h2>
      </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">


      {posts.map((post) => (
        <div key={post.id} className="col">
          <BlogCard post={post} />
        </div>
      ))}
    </div>
    </Container>
  )
}

