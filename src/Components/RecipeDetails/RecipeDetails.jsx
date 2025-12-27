import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function fetchMealDetails() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(({ data }) => {
        setMeal(data.meals[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchMealDetails();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="animate-pulse p-10 ">
          <div className="h-12 w-2/3 bg-gray-200 rounded mb-8"></div>
          <div className="grid lg:grid-cols-3 gap-5">
            <div>
              <div className="rounded-2xl bg-gray-200 w-full h-64"></div>
              <div className="flex gap-5 mt-5">
                <div className="bg-gray-200 w-32 h-10 rounded-xl"></div>
                <div className="bg-gray-200 w-32 h-10 rounded-xl"></div>
              </div>
            </div>
            <div className="space-y-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="bg-white p-5 rounded-2xl">
              <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex justify-between py-2">
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : meal ? (
        <div className="p-10 ">
          <h2 className="text-5xl font-bold mb-8">{meal.strMeal}</h2>

          <div className="grid lg:grid-cols-3 gap-5">
            <div>
              <img
                className="rounded-2xl w-full"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <div className="flex gap-5 mt-5">
                {meal.strYoutube && (
                  <a
                    href={meal.strYoutube}
                    target="_blank"
                    className="bg-red-600/80 text-white px-4 py-2 rounded-xl hover:bg-red-600 duration-500"
                  >
                    <i className="fa-brands fa-youtube"></i> Youtube
                  </a>
                )}
                {meal.strSource && (
                  <a
                    href={meal.strSource}
                    target="_blank"
                    className="bg-green-600/80 text-white px-4 py-2 rounded-xl hover:bg-green-600 duration-500"
                  >
                    <i className="fa-solid fa-globe"></i> Source
                  </a>
                )}
              </div>
            </div>

            <div>{meal.strInstructions}</div>

            <div className="bg-white p-5 rounded-2xl">
              <h5 className="text-3xl font-bold mb-4">Ingredients</h5>
              <ul>
                {[...Array(20)].map((_, i) => {
                  const ingredient = meal[`strIngredient${i + 1}`];
                  const measure = meal[`strMeasure${i + 1}`];

                  return ingredient?.trim() ? (
                    <li
                      key={i}
                      className="flex justify-between py-1 border-b last:border-0 border-gray-400"
                    >
                      <span>{ingredient}</span>
                      <span className="text-gray-600">{measure}</span>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
