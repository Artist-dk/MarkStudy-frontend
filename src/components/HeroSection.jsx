import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learn Smarter with MarkStudy
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Access structured courses powered by Markdown and GitHub. Study at your own pace.
        </p>
        <Link
          to="/courses"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-gray-200 transition"
        >
          Explore Courses
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
