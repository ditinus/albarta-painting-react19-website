import BlogGrid from "@/components/blog-grid"
import { getBlogPosts } from "@/lib/blog-data"

export default function blogs() {
  const posts = getBlogPosts()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Interior Design Blog</h1>
      <BlogGrid posts={posts} />
    </main>
  )
}

