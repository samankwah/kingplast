import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Recycle, Globe, Factory } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import partner logos
import Stripe from "../assets/icons/stripe.png";
import Spotify from "../assets/icons/spotify.png";
import microsoft from "../assets/icons/microsoft.png";
import grab from "../assets/icons/grab.png";
import uber from "../assets/icons/uber.png";
import google from "../assets/icons/google.png";
import medium from "../assets/icons/medium.png";
import zoom from "../assets/icons/zoom.png";

const AboutPage = () => {
  const [achievements, setAchievements] = useState([
    { number: 0, target: 10000, label: "Tons of Plastic Recycled" },
    { number: 0, target: 500, label: "Construction Projects" },
    {
      number: 0,
      target: 95,
      label: "Customer Satisfaction",
      isPercentage: true,
    },
  ]);

  const values = [
    {
      icon: Recycle,
      title: "Sustainability",
      description:
        "Transforming plastic waste into valuable building materials",
    },
    {
      icon: Globe,
      title: "Environmental Impact",
      description: "Reducing landfill waste and promoting circular economy",
    },
    {
      icon: Factory,
      title: "Innovation",
      description: "Developing cutting-edge recycling technologies",
    },
  ];

  useEffect(() => {
    const animationDuration = 2000; // Total animation time in ms
    const updateInterval = 50; // Interval for updating numbers
    const stepFactor = updateInterval / animationDuration;

    const timers = achievements.map((achievement, index) => {
      return setInterval(() => {
        setAchievements((prev) => {
          const newAchievements = [...prev];
          const currentAchievement = newAchievements[index];

          const increment = currentAchievement.target * stepFactor;
          const newNumber = Math.min(
            currentAchievement.number + increment,
            currentAchievement.target
          );

          newAchievements[index] = {
            ...currentAchievement,
            number: newNumber,
          };

          return newAchievements;
        });
      }, updateInterval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  // Carousel Settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
            <span className="text-blue-900">About</span>
            <span className="text-yellow-500"> KingPlast </span>
            <span className="text-blue-900"> Limited Company</span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              We're pioneering sustainable construction by transforming plastic
              waste into high-quality, affordable building materials. Our
              mission is to provide innovative solutions that address
              environmental challenges while delivering exceptional value.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="text-blue-900 w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-600">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-blue-900 text-white py-16 rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="text-5xl font-extrabold mb-4">
                    {achievement.isPercentage
                      ? `${Math.round(achievement.number)}%`
                      : `${Math.round(achievement.number).toLocaleString()}+`}
                  </div>
                  <div className="text-xl opacity-90">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Carousel */}
        <section className="mt-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
            Our Partners
          </h2>
          <Slider {...sliderSettings}>
            {[Stripe, google, microsoft, grab, uber, medium, Spotify, zoom].map(
              (partner, index) => (
                <div key={index} className="p-4">
                  <img
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    className="mx-auto w-20 sm:w-24 md:w-28 h-8 sm:h-10 object-contain"
                  />
                </div>
              )
            )}
          </Slider>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
