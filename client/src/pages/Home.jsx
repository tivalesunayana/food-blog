import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-100 p-8">
      <section className="hero my-8">
        <div className="relative">
          <img
            src="https://source.unsplash.com/random/1200x600?food"
            alt="Delicious Food"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-4xl text-white font-bold">
              Discover Delicious Recipes
            </h2>
          </div>
        </div>
      </section>
      <div>
        <Link to="/projects">
          <h2 className="text-blue-500 text-lg">View All Blogs</h2>
        </Link>
      </div>
      <section className="food-specialties my-12">
        <h2 className="text-3xl font-bold mb-4">Our Food Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://source.unsplash.com/random/400x300?dish"
              alt="Delicious Dish"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Gourmet Pasta</h3>
            <p className="text-gray-700">
              Experience the authentic taste of Italy with our gourmet pasta
              dishes.
            </p>
          </article>

          <article className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://source.unsplash.com/random/400x300?salad"
              alt="Healthy Salad"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Healthy Salads</h3>
            <p className="text-gray-700">
              Fresh and healthy salads made with organic ingredients.
            </p>
          </article>

          <article className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://source.unsplash.com/random/400x300?dessert"
              alt="Decadent Desserts"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Decadent Desserts</h3>
            <p className="text-gray-700">
              Indulge in our rich and decadent desserts, perfect for any sweet
              tooth.
            </p>
          </article>

          <article className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://source.unsplash.com/random/400x300?burger"
              alt="Gourmet Burger"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Gourmet Burgers</h3>
            <p className="text-gray-700">
              Juicy and flavorful gourmet burgers with a variety of toppings.
            </p>
          </article>

          <article className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://source.unsplash.com/random/400x300?sushi"
              alt="Sushi"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Sushi</h3>
            <p className="text-gray-700">
              Delicious and fresh sushi rolls, made to order.
            </p>
          </article>

          <article className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://source.unsplash.com/random/400x300?pizza"
              alt="Pizza"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Wood-fired Pizza</h3>
            <p className="text-gray-700">
              Authentic wood-fired pizza with a crispy crust and savory
              toppings.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
