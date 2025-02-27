"use client";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../../lib/types";
import { formatDate } from "../../lib/utils";
import { Card, Button } from "react-bootstrap";
import "./blog.css";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="cardBg h-100 shadow-sm border-0">
      <div style={{ position: "relative", height: "240px" }}>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="card-img-top object-fit-cover"
          priority
        />
      </div>
      <Card.Body className="mt-4">
        <small className="text-muted">{formatDate(post.date)}</small>
        <Card.Title
          className="mt-4 mb-3"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.title}
        </Card.Title>
        <Card.Text
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            fontSize: "18px",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.excerpt}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="border-0 mt-3 bg-transparent">
        <Link
          href={`/blog/${post.slug}`}
          className="blog-btn text-decoration-none"
        >
          <Button variant="link" className="p-0 text-dark">
            Read More{" "}
            <svg
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
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
