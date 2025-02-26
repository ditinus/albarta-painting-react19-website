import Image from "next/image"
import { notFound } from "next/navigation"
import { blogPosts } from "../../lib/data"
import { formatDate } from "../../lib/utils"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="container py-5">
      <article className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">
          <div className="mb-4">
            <div style={{ position: "relative", height: "400px" }} className="mb-4">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="rounded object-fit-cover"
                priority
              />
            </div>
            <div className="mb-4">
              <h1 className="display-4 fw-bold mb-2">{post.title}</h1>
              <div className="text-muted">{formatDate(post.date)}</div>
            </div>
          </div>
          <div className="lead mb-4">{post.excerpt}</div>
          <div style={{ whiteSpace: "pre-wrap" }} className="fs-5">
            {post.content}
          </div>
        </div>
      </article>
    </main>
  )
}

