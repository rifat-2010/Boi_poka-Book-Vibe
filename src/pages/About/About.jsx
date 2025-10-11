import { FaBook, FaBookReader, FaClipboardList } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Boi Poka
        </h1>
        <p className="text-xl text-gray-600">Your Digital Reading Companion</p>
      </div>

      {/* Image Section */}
      <div className="mb-16">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3"
          alt="Library Interior"
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FaBook className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Extensive Collection</h3>
          <p className="text-gray-600">
            Access to a vast library of books across various genres and
            categories.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FaBookReader className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personal Reading Lists</h3>
          <p className="text-gray-600">
            Create and manage your personalized reading lists effortlessly.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FaClipboardList className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Book Details</h3>
          <p className="text-gray-600">
            Comprehensive information about each book including reviews and
            ratings.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-3xl mx-auto">
        <div className="prose lg:prose-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Boi Poka is dedicated to creating a vibrant community of book
            lovers. We believe in making literature accessible to everyone while
            providing a modern, user-friendly platform for discovering and
            tracking your reading journey.
          </p>
          <p className="text-gray-700 mb-6">
            Our platform offers features like personalized reading lists,
            detailed book information, and an intuitive interface that makes
            managing your reading experience a pleasure. Whether you're a casual
            reader or a devoted bookworm, Boi Poka is designed to enhance your
            reading experience.
          </p>
          <p className="text-gray-700">
            Join us in our mission to promote the joy of reading and build a
            community where book lovers can discover, share, and celebrate their
            passion for literature.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
        <p className="text-gray-600">
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
