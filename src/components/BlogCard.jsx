import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Clock,
  Calendar,
  User,
  Bookmark,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Recycle from "../assets/icons/recycle-bricks.png";
import Hero from "../assets/icons/hero.png";
import Featured from "../assets/icons/featured.png";
const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs.json");
        setBlogs(response.data);
        setFeaturedBlog(response.data[0]); // Set first blog as featured
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-blue-50 rounded-lg p-8 mb-12 flex items-center">
        <div className="w-2/3">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Sustainable Living Insights
          </h1>
          <p className="text-gray-600 mb-6">
            Discover innovative approaches to eco-friendly construction and
            sustainable living.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 flex items-center">
            Explore Insights <ArrowRight className="ml-2" />
          </button>
        </div>
        <div className="w-1/3 pl-8">
          <img
            src={Hero}
            alt="Sustainable Living"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Featured Blog */}
      {featuredBlog && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Featured Article
          </h2>
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Featured}
              alt={featuredBlog.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-gray-600 mb-4 space-x-4">
                <div className="flex items-center">
                  <User className="mr-2 text-blue-900" size={20} />
                  {featuredBlog.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 text-blue-900" size={20} />
                  {featuredBlog.date}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{featuredBlog.title}</h3>
              <p className="text-gray-700 mb-6">{featuredBlog.excerpt}</p>
              <button className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-200 flex items-center">
                Read More <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog List */}
      <div>
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {console.log("Blogs:", blogs)}
          {Array.isArray(blogs) &&
            blogs.length > 1 &&
            blogs.slice(1, 4).map((blog) => (
              <div
                key={blog.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={Recycle}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <div className="flex items-center">
                      <Clock className="mr-2 text-blues-600" size={16} />
                      {blog.readTime} min read
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="mr-2 text-blue-600" size={16} />
                      {blog.comments} comments
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    Continue Reading <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
