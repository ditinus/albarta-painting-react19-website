import { getBlogPosts } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts()
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to all posts
      </Link>

      <article className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-80 w-full">
          <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="p-6">
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">{post.date}</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h1>

          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">{post.excerpt}</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Why Color Matters</h2>
            <p className="text-gray-700 mb-4">
              The colors you choose for your home can significantly impact your mood, the perceived size of your rooms,
              and even your energy levels. Selecting the right interior paint color is one of the most important
              decisions you'll make during your home renovation project.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Our 7 Tips for Choosing the Perfect Paint Color</h2>

            <ol className="list-decimal pl-5 space-y-4 mt-4">
              <li className="text-gray-700">
                <strong>Consider the room's purpose:</strong> Different rooms serve different functions and may require
                different color schemes. Bedrooms often benefit from calming colors, while living areas might use more
                vibrant tones.
              </li>
              <li className="text-gray-700">
                <strong>Think about lighting:</strong> Natural and artificial lighting can dramatically affect how a
                paint color appears. Test colors under different lighting conditions before making a final decision.
              </li>
              <li className="text-gray-700">
                <strong>Start with color theory:</strong> Understanding basic color theory can help you create
                harmonious color schemes that flow well throughout your home.
              </li>
              <li className="text-gray-700">
                <strong>Use the 60-30-10 rule:</strong> In any space, consider using 60% of a dominant color, 30% of a
                secondary color, and 10% of an accent color for balance.
              </li>
              <li className="text-gray-700">
                <strong>Test before committing:</strong> Always test paint samples on your walls before painting the
                entire room. Colors can look different on your walls than they do on paint chips.
              </li>
              <li className="text-gray-700">
                <strong>Consider the existing elements:</strong> Take into account your flooring, furniture, and
                fixtures when selecting paint colors.
              </li>
              <li className="text-gray-700">
                <strong>Don't rush the decision:</strong> Take your time with color selection. It's better to spend
                extra time choosing the right color than to repaint later.
              </li>
            </ol>

            <h2 className="text-xl font-semibold mt-6 mb-3">Conclusion</h2>
            <p className="text-gray-700">
              Choosing the right interior paint color doesn't have to be overwhelming. By following these seven tips and
              taking your time with the decision, you can select colors that will make your home both beautiful and
              comfortable for years to come.
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}

