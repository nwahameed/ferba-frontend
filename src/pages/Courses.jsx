import React, { useState } from "react";
import { courses } from "../courses.js";
import { useCart } from "react-use-cart";
import "./courses.css";

const ProductCatalog = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((product) => product.category === selectedCategory);

  return (
    <div className="product-catalog">
      <h1 className="product-catalog__title">Product Catalog</h1>
      <div className="product-catalog__filter">
        <label htmlFor="category" className="product-catalog__filter-label">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="product-catalog__filter-dropdown"
        >
          <option value="All">All</option>
          <option value="coding">Coding</option>
          <option value="graphic-design">Graphic Design</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>
      <div>
        <div>
          <div className="courses-display">
            {filteredCourses.map((courses) => (
              <div key={courses.id} className="single__course__item">
                <img
                  src={courses.imgUrl}
                  alt={courses.title}
                  className="course__img"
                />
                <div className="course__details">
                  <h6 className="course__title">{courses.title}</h6>
                  <div className=" d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                      <i class="ri-book-open-line"></i> {courses.lesson} Lessons
                    </p>

                    <p className="students d-flex align-items-center gap-1">
                      <i class="ri-star-fill"></i> {courses.rating}
                    </p>
                  </div>
                  <div className=" d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                      <p className="product-catalog__item-price">
                        ${courses.price}
                      </p>{" "}
                    </p>

                    <p className="enroll d-flex align-items-center gap-1">
                      <button
                        onClick={() => addItem(courses)}
                        className="product-catalog__item-button"
                      >
                        Add to Cart
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
