import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "../../lib/types"
import { formatDate } from "../../lib/utils"
import './blog.css'


interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="card cardBg  h-100 shadow-sm">
      <div style={{ position: "relative", height: "240px" }}>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="card-img-top object-fit-cover"
          priority
        />
      </div>
      <div className="card-body  mt-4">
        <small className="text-muted   ">{formatDate(post.date)}</small>
        <h5
          className="card-title mt-4 mb-3"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.title}
        </h5>
        <p
          className="card-text"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            fontSize: "18px",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.excerpt}
        </p>
      </div>
      <div className=" border-0 ">
        <Link href={`/blog/${post.slug}`} className="btn   p-0">
          Read More
        </Link>
      </div>
    </div>
  )
}

