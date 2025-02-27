"use client";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import "./blog.css";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
   
    <div className="card " style={{backgroundColor:'#E2E7F1 ' , border: "none"}}>
      <div style={{ position: "relative", height: "240px" }}>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="card-img-top object-fit-cover"
          priority
        />
      </div>
      <div className="card-body">
        <small className="text-muted cardB " style={{color: "#0D378D !important"}}>{formatDate(post.date)}</small>
        <h5
          className="card-title mt-4 mb-3"
          style={{
            color: '#0D378D'
          }}
        >
          {post.title}
        </h5>
        <p
          className="blogD "
        >
          {post.excerpt}
        </p>

        <div className=" border-0  " >
   
   <Link href={`/blog/${post.slug}`} className=" text-decoration-none fw-bold" style={{color: '#0D378D'}}>


     Read More{" "}

     <svg
       className="mr-2"
       width="9"
       height="15"
       viewBox="0 0 9 15"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M1.625 13.4336L7.625 7.43359L1.625 1.43359"
         stroke="#0D378D"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
     </svg>
   </Link>

</div>
      </div>
    
    </div>
  
  );
}
