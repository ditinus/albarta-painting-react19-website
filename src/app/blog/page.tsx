import { Container } from "react-bootstrap"
import BlogGrid from "../components/Blog/BlogGrid"
import { blogPosts } from "../lib/data"

export default function Blog() {
  return (

     <>
       <BlogGrid posts={blogPosts} />
  
       </>
  )
}

