import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = await fetch(`${apiUrl}/authors`);

    const data = await response.json();
    setAuthors(data);
    console.log(data);
  };

  return (
    <Row>
      {authors.map((author) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem author={author} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;

// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import posts from "../../../data/posts.json";
// import BlogItem from "../blog-item/BlogItem";

// const BlogList = (props) => {
//   return (
//     <Row>
//       {posts.map((post) => (
//         <Col
//           md={4}
//           style={{
//             marginBottom: 50,
//           }}
//         >
//           <BlogItem key={post.title} {...post} />
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default BlogList;
