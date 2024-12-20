import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaTiktok } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We’d love to hear from you! Whether you have a question about our
          products, need support, or just want to share your thoughts, we’re
          here for you.
        </p>

        {/* Contact Form and Info Section */}
        <div className="bg-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 p-4 lg:p-0">
          {/* Contact Form */}
          <div className="shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block font-medium text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700"
                  rows="4"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-200">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-6 pt-6 sm:pt-12">
              Contact Information
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <FaPhone className="text-blue-900 w-6 h-6" />
                <span className="text-gray-600">+233 54 413 7152</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-900 w-6 h-6" />
                <span className="text-gray-600">
                  <a
                    href="mailto:lydiaamoofo09@gmail.com"
                    className="hover:text-gray-800"
                  >
                    support@kingplastlc.com
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-900 w-6 h-6" />
                <span className="text-gray-600">Obuasi, Ghana</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://web.facebook.com/profile.php?id=61569529484943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition"
                >
                  <BsFacebook size={24} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition"
                >
                  <BsTwitterX size={24} />
                </a>
                <a
                  href="https://www.instagram.com/kingplastlimitedcompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition"
                >
                  <BsInstagram size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://vm.tiktok.com/ZMkL54C5R/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                What materials do you recycle?
              </h3>
              <p className="text-gray-600">
                We focus on recycling plastic waste into durable and
                eco-friendly building materials.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Where are your products available?
              </h3>
              <p className="text-gray-600">
                Our products are available across Ghana and other African
                regions. Contact us for more details.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Can I collaborate with KingPlast?
              </h3>
              <p className="text-gray-600">
                Absolutely! We welcome partnerships with individuals and
                organizations promoting sustainability.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                How do I place an order?
              </h3>
              <p className="text-gray-600">
                Simply fill out the contact form or email us directly, and our
                team will get back to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
