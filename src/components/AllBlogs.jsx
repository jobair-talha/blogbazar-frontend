import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import allBlogs from "../api/api";
import HomeCard from "./HomeCard";
import Tags from "./Tags";

function AllBlogs() {
  const { data, isLoading } = useQuery("blogs", () => allBlogs());

  return (
    <section>
      <Container>
        <Row>
          <Col lg={8}>
            {isLoading ? (
              <h3>Loading...</h3>
            ) : (
              data.map((blog, index) => <HomeCard blog={blog} key={index} />)
            )}
          </Col>
          <Col lg={4}>
            <div className="mt-4">
              <Tags />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AllBlogs;
