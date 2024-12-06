// // src/components/Footer.jsx
// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-6">
//       <div className="container mx-auto text-center">
//         <p>© 2024 Kingplast Limited. All rights reserved.</p>
//         <p>
//           Contact us at{" "}
//           <a href="mailto:lydiaamoofo09@gmail.com" className="text-green-400">
//             lydiaamoofo09@gmail.com
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// // src/components/Footer.jsx
// import { Link } from "react-router-dom";
// import { BsFacebook } from "react-icons/bs";
// import { BsTwitterX } from "react-icons/bs";
// import { BsInstagram

//  } from "react-icons/bs";
//  import { FaLinkedin } from "react-icons/fa6";
// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-10">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* About Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">About Kingplast</h3>
//           <p className="text-sm">
//             Kingplast Limited recycles plastic waste into high-quality,
//             affordable building materials. Join us in creating sustainable and
//             eco-friendly solutions for a better future.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li>
//               <Link to="/" className="text-gray-400 hover:text-white">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="text-gray-400 hover:text-white">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/products" className="text-gray-400 hover:text-white">
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link to="/blog" className="text-gray-400 hover:text-white">
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="text-gray-400 hover:text-white">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
//           <p className="text-sm">
//             Contact us for inquiries or collaborations. We'd love to hear from
//             you!
//           </p>
//           <ul className="mt-4 space-y-2">
//             <li>
//               <a
//                 href="mailto:lydiaamoofo09@gmail.com"
//                 className="text-gray-400 hover:text-white"
//               >
//                 📧 lydiaamoofo09@gmail.com
//               </a>
//             </li>
//             <li>📞 +233 54 413 7152</li>
//           </ul>
//           <div className="flex space-x-4 mt-6">
//             <a
//               href={BsFacebook}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a
//               href={BsTwitterX}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a
//               href={BsInstagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a
//               href={}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
//         <p>© 2024 Kingplast Limited. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// import { Link } from "react-router-dom";
// import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
// import { FaLinkedin } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-10">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* About Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">About Kingplast</h3>
//           <p className="text-sm">
//             KingPlast Company Limited recycles plastic waste into high-quality,
//             affordable building materials. Join us in creating sustainable and
//             eco-friendly solutions for a better future.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li>
//               <Link to="/" className="text-gray-400 hover:text-white">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="text-gray-400 hover:text-white">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/products" className="text-gray-400 hover:text-white">
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link to="/blog" className="text-gray-400 hover:text-white">
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="text-gray-400 hover:text-white">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
//           <p className="text-sm">
//             Contact us for inquiries or collaborations. We'd love to hear from
//             you!
//           </p>
//           <ul className="mt-4 space-y-2">
//             <li>
//               <a
//                 href="mailto:lydiaamoofo09@gmail.com"
//                 className="text-gray-400 hover:text-white"
//               >
//                 📧 lydiaamoofo09@gmail.com
//               </a>
//             </li>
//             <li>📞 +233 54 413 7152</li>
//           </ul>
//           <div className="flex space-x-4 mt-6">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <BsFacebook size={24} />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <BsTwitterX size={24} />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <BsInstagram size={24} />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <FaLinkedin size={24} />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
//         <p>© 2024 KingPlast Limited. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { Link } from "react-router-dom";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Kingplast</h3>
          <p className="text-sm">
            KingPlast Company Limited recycles plastic waste into high-quality,
            affordable building materials. Join us in creating sustainable and
            eco-friendly solutions for a better future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-400 hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-400 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm">
            Contact us for inquiries or collaborations. We'd love to hear from
            you!
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="mailto:lydiaamoofo09@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                📧 support@kingplastcl.com
              </a>
            </li>
            <li>📞 +233 54 413 7152</li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <BsFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <BsTwitterX size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <BsInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>© 2024 KingPlast Company Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
