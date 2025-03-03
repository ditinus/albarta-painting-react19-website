import type { BlogPost } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48">
        <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">{post.date}</p>

        <h2 className="text-xl font-bold text-gray-900 mt-2">{post.title}</h2>

        <p className="text-gray-600 mt-3 line-clamp-3">{post.excerpt}</p>

        <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-blue-600 font-medium hover:underline">
          Read More &gt;
        </Link>
      </div>
    </div>
  )
}

