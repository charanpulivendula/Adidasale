import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiUser } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "5 Tips for Effective Product Display in Retail Stores",
      author: "John Doe",
      date: "April 15, 2023",
      image: "https://picsum.photos/id/237/500/300",
      excerpt:
        "Product displays are one of the most important aspects of a retail store's merchandising strategy. In this post, we will share 5 tips for effective product display in retail stores.",
    },
    {
      id: 2,
      title: "The Importance of Customer Service in Retail",
      author: "Jane Smith",
      date: "April 10, 2023",
      image: "https://picsum.photos/id/238/500/300",
      excerpt:
        "Customer service is a critical part of any retail business. In this post, we will discuss the importance of customer service in retail and how it can impact your bottom line.",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Welcome to Adidasale</h1>
      <div className="posts justify-items-center">
        {posts.map((post) => (
          <Link key={post.id} to={'/dashboard'}>
            <div className="post">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span className="post-author">
                    <FiUser /> {post.author}
                  </span>
                  <span className="post-date">
                    <FiCalendar /> {post.date}
                  </span>
                  <span className="post-comments">
                    <MdShoppingCart /> 10
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;