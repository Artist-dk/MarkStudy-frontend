const API_URL = import.meta.env.VITE_API_URL;

console.log("API_URL:", API_URL); // Debugging - Check if it's defined

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error fetching courses");
  }
};
