// import React from "react";
// import {
//   FaRecycle,
//   FaHandHoldingHeart,
//   FaBuilding,
//   FaLeaf,
// } from "react-icons/fa";

// const Features = () => {
//   const featureData = [
//     {
//       icon: <FaRecycle size={30} />,
//       title: "Sustainable Materials",
//       description:
//         "We recycle plastic waste into durable, eco-friendly building materials that help reduce environmental impact.",
//     },
//     {
//       icon: <FaBuilding size={30} />,
//       title: "Affordable Solutions",
//       description:
//         "Our products are cost-effective, providing a cheaper option for construction without compromising quality.",
//     },
//     {
//       icon: <FaLeaf size={30} />,
//       title: "Eco-Friendly Design",
//       description:
//         "Our process ensures minimal environmental harm, contributing to a greener planet with every brick.",
//     },
//     {
//       icon: <FaHandHoldingHeart size={30} />,
//       title: "Community Impact",
//       description:
//         "We empower marginalized communities by offering accessible building materials and promoting sustainability.",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
//           Why Choose Kingplast?
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featureData.map((feature, index) => (
//             <div
//               key={index}
//               className="p-6 bg-white shadow rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="mb-4 text-green-600">{feature.icon}</div>
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                 {feature.title}
//               </h2>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

// import {
//   FaRecycle,
//   FaHandHoldingHeart,
//   FaBuilding,
//   FaLeaf,
//   FaGlobe,
//   FaRocket,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Features = () => {
//   const featureData = [
//     {
//       icon: <FaRecycle size={40} />,
//       title: "Sustainable Materials",
//       description:
//         "We recycle plastic waste into durable, eco-friendly building materials that help reduce environmental impact.",
//     },
//     {
//       icon: <FaBuilding size={40} />,
//       title: "Affordable Solutions",
//       description:
//         "Our products are cost-effective, providing a cheaper option for construction without compromising quality.",
//     },
//     {
//       icon: <FaLeaf size={40} />,
//       title: "Eco-Friendly Design",
//       description:
//         "Our process ensures minimal environmental harm, contributing to a greener planet with every brick.",
//     },
//     {
//       icon: <FaHandHoldingHeart size={40} />,
//       title: "Community Impact",
//       description:
//         "We empower marginalized communities by offering accessible building materials and promoting sustainability.",
//     },
//     {
//       icon: <FaGlobe size={40} />,
//       title: "Global Reach",
//       description:
//         "Our mission spans borders, contributing to sustainable building practices worldwide.",
//     },
//     {
//       icon: <FaRocket size={40} />,
//       title: "Innovative Technology",
//       description:
//         "We leverage cutting-edge technology to turn waste into quality building materials.",
//     },
//   ];

//   return (
//     <section className="relative py-16 bg-gray-100 to-gray-50 text-black">
//       <div className="container max-w-7xl mx-auto text-center">
//         {/* Title Section */}
//         <h1 className="text-5xl font-extrabold mb-8">
//           <span className="text-blue-900">Why Choose </span>{" "}
//           <span className="text-yellow-500">KingPlast?</span>
//         </h1>
//         <p className="text-lg mb-12 max-w-3xl mx-auto">
//           Discover the unique advantages of partnering with Kingplast Limited.
//           From sustainability to affordability, we provide innovative solutions
//           for eco-friendly construction.
//         </p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featureData.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="p-6 bg-white text-yellow-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className="flex items-center justify-center mb-4 text-blue-900">
//                 {feature.icon}
//               </div>
//               <h2 className="text-xl font-bold text-center mb-2">
//                 {feature.title}
//               </h2>
//               <p className="text-gray-600 text-center">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Call-to-Action */}
//         <div className="mt-12">
//           <button className="px-8 py-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all">
//             Get Started Now
//           </button>
//         </div>
//       </div>

//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-10 left-0 w-64 h-64 bg-green-300 opacity-20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 opacity-20 rounded-full blur-3xl"></div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import {
  FaRecycle,
  FaHandHoldingHeart,
  FaBuilding,
  FaLeaf,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Features = () => {
  const featureData = [
    {
      icon: <FaRecycle size={40} />,
      title: "Sustainable Materials",
      description:
        "We recycle plastic waste into durable, eco-friendly building materials that help reduce environmental impact.",
    },
    {
      icon: <FaBuilding size={40} />,
      title: "Affordable Solutions",
      description:
        "Our products are cost-effective, providing a cheaper option for construction without compromising quality.",
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Eco-Friendly Design",
      description:
        "Our process ensures minimal environmental harm, contributing to a greener planet with every brick.",
    },
    {
      icon: <FaHandHoldingHeart size={40} />,
      title: "Community Impact",
      description:
        "We empower marginalized communities by offering accessible building materials and promoting sustainability.",
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Global Reach",
      description:
        "Our mission spans borders, contributing to sustainable building practices worldwide.",
    },
    {
      icon: <FaRocket size={40} />,
      title: "Innovative Technology",
      description:
        "We leverage cutting-edge technology to turn waste into quality building materials.",
    },
  ];

  return (
    <section className="relative py-16 bg-gray-100 to-gray-50 text-black">
      <div className="container max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
          <span className="text-blue-900">Why Choose </span>{" "}
          <span className="text-yellow-500">KingPlast?</span>
        </h1>
        <p className="text-base sm:text-lg mb-12 max-w-3xl mx-auto">
          Discover the unique advantages of partnering with Kingplast Limited.
          From sustainability to affordability, we provide innovative solutions
          for eco-friendly construction.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white text-yellow-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center mb-4 text-blue-900">
                {feature.icon}
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-center mb-2">
                {feature.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-12">
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-green-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-purple-300 opacity-20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Features;
