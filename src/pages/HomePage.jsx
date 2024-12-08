// src/pages/HomePage.jsx
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";
// import Features from "./Features";
import Contact from "./ContactPage";
import Recycled from "../assets/icons/recycle-bricks.png";
import Production from "../assets/icons/production.png";
import PlasticPavement from "../assets/icons/plastic-pavement.png";
import Slider from "./AboutPage";
function HomePage() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <section className="py-12 max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <ProductCard
            imageUrl={Recycled}
            title="Recycled Bricks"
            description="Affordable and eco-friendly bricks made from recycled plastics."
          />
          <ProductCard
            imageUrl={Production}
            title="Plastic Pavements"
            description="Durable and weather-resistant pavement blocks."
          />
          <ProductCard
            imageUrl={PlasticPavement}
            title="Plastic Pavements"
            description="Durable and weather-resistant pavement blocks."
          />
        </div>
      </section>
      <section className="py-12 bg-gray-100 max-w-full">
        <h2 className="text-3xl font-bold text-center mb-6">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <BlogCard
            title="Sustainability in Building"
            summary="How Kingplast is transforming the construction industry."
          />
          {/* <Features
            title="Benefits of Recycled Materials"
            summary="Eco-friendly solutions for a better tomorrow."
          /> */}
          <Slider
            title="Benefits of Recycled Materials"
            summary="Eco-friendly solutions for a better tomorrow."
          />
          <Contact
            title="Benefits of Recycled Materials"
            summary="Eco-friendly solutions for a better tomorrow."
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
