import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={course.image || "/default-course.jpg"}
        alt={course.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
          {course.description}
        </p>
        <Link
          to={`/courses/${course.id}`}
          className="block mt-4 bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
