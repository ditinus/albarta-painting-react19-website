import { Container, Row, Col } from "react-bootstrap";
import type { BlogPost } from "../../lib/types";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <Container className="my-5">
      <div className="text-center my-5">
        <h5>Our Blog</h5>
        <h2>Expert Advice, Trends & DIY Tips</h2>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((post) => (
          <Col key={post.id}>
            <BlogCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
