import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Category() {
  const { cat } = useParams();

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getCategoryMeals(category) {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMeals(data.meals);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCategoryMeals(cat);
  }, [cat]);

  return (
    <div className="px-10">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 gap-y-16 my-10">
        {isLoading
          ? [...Array(8)].map((_, index) => (
              <div
                key={index}
                className="group bg-white p-5 rounded-4xl text-center transition-all duration-600"
              >
                <div className="animate-pulse">
                  <div className="rounded-full shadow-2xl w-3/4 h-40 bg-gray-200 mx-auto relative -top-15"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mt-4 mb-2"></div>
                  <div className="h-10 bg-gray-200 rounded-full w-1/2 mx-auto"></div>
                </div>
              </div>
            ))
          : meals?.map((meal) => (
              <div
                key={meal.idMeal}
                className="group bg-white p-5 rounded-4xl text-center transition-all duration-600 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  className="group-hover:rotate-360 transition-all duration-600 rounded-full shadow-2xl w-3/4 mx-auto relative -top-15"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />

                <h5 className="text-2xl font-semibold -mt-10 mb-6">
                  {meal.strMeal.split(" ").slice(0, 2).join(" ")}
                </h5>

                <Link
                  className="bg-secondary rounded-full text-white py-2 max-w-2/3 mx-auto block hover:scale-105 hover:shadow-xl hover:bg-[#059669] transition-all duration-300"
                  to={`/mealdetails/${meal.idMeal}`}
                >
                  View Recipe
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
