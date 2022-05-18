import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";

const BlogAuthor = (props) => {
  const { name, avatar, id } = props;
  return (
    <Row>
      <Col xs={2}>
        <Image className="blog-author" src={avatar} roundedCircle />
      </Col>
      <Col>
        <div>by</div>
        <h6>{name}</h6>
      </Col>

      <a href={`http://localhost:3001/authorFile/${props.id}/pdf`}>
        Download PDF
      </a>
    </Row>
  );
};

export default BlogAuthor;
