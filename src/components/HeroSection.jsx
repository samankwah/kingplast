import { useState } from "react";
import { PlayCircle, ChevronRight } from "lucide-react";
import Cabbage from "../assets/cabbage.png";
import Hero from "../assets/icons/hero.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-yellow-400 text-white py-16 lg:py-24">
      <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl mb-8 md:text-6xl font-bold leading-snug">
            Sustainable Building with KingPlast
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-white/90 max-w-xl mx-auto lg:mx-0">
            Transforming waste into durable, eco-friendly building materials
            that support a greener future.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/products"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold 
              hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              Explore Materials
              <ChevronRight className="ml-2" />
            </Link>

            <Link
              onClick={() => setIsVideoModalOpen(true)}
              className="bg-transparent border-2 border-white text-white px-6 py-3 
              rounded-lg font-semibold hover:bg-white/20 transition-colors 
              flex items-center justify-center"
            >
              <PlayCircle className="mr-2" />
              Watch Video
            </Link>
          </div>
        </div>

        {/* Visual Section */}
        <div className="hidden lg:block">
          <img
            src={Hero}
            alt="Sustainable Building Materials"
            className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Video Modal (Placeholder) */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Kingplast Overview"
                src="/api/placeholder/video"
                className="w-full h-full"
              />
            </div>
            <Link
              onClick={() => setIsVideoModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
