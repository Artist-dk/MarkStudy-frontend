import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${API_URL}/courses`);
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [API_URL]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Explore Courses</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="text-center col-span-full">No courses available</p>
            )}
          </div>
        )}
        <div className="text-center mt-6">
          <Link
            to="/courses"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            View All Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
