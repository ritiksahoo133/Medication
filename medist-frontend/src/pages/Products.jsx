import { useEffect, useState } from "react";
import { categoryOptions } from "../config/products-config";
import { useSelector } from "react-redux";
import AllProductsWrapper from "../components/AllProductsWrapper";
import { filterProducts, searchProduct } from "../helpers";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [category, setCategory] = useState("ALL");
  const [searchValue, setSearchValue] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const searchParams = useSearchParams()[0];

  const products = useSelector((state) => state?.products);

  // Effect to set the category from search params
  useEffect(() => {
    console.log("Effect...");
    const categoryFromParams = searchParams.get("category");
    if (categoryFromParams) {
      setCategory(categoryFromParams);
      setAllProducts(
        filterProducts(products, { category: categoryFromParams })
      );
    } else {
      setCategory("ALL");
    }
  }, [searchParams]);

  // Effect to filter products when category or products change
  useEffect(() => {
    const filteredProducts =
      category === "ALL" ? products : filterProducts(products, { category });

    setAllProducts(filteredProducts);
  }, [category]);

  // Effect to set all products when user searches a product
  useEffect(() => {
    let timeout;
    if (searchValue !== null) {
      timeout = setTimeout(() => {
        if (searchValue?.trim().length === 0 && category !== "ALL") {
          setAllProducts(filterProducts(products, { category }));
        } else {
          setAllProducts(searchProduct(searchValue?.trim()));
        }
      }, 300);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [searchValue]);

  console.log(allProducts);

  return (
    <div className="container py-4">
      {!searchParams.get("category") && (
        <div className="mb-8 flex flex-col justify-between gap-2 xs:flex-row sm:mb-12">
          {/* Filter Select Box */}
          <div className="w-40">
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              autoComplete="category"
              className="block w-full rounded-md border-0 bg-gray-100 px-2 py-2 text-sm text-gray-500 outline-none xs:text-base sm:text-sm sm:leading-6"
            >
              {categoryOptions.map((category, index) => (
                <option
                  className="bg-white"
                  key={index}
                  value={category?.value}
                >
                  {category?.key}
                </option>
              ))}
            </select>
          </div>

          {/* Search Box */}
          <div className="max-w-md">
            <div className="relative flex w-full items-center overflow-hidden rounded-md bg-gray-100 px-1 py-2">
              <div className="grid h-full w-12 place-items-center text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full bg-gray-100 pr-2 text-sm text-gray-700 outline-none xs:text-base"
                type="text"
                id="search"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search a product..."
              />
            </div>
          </div>
        </div>
      )}

      {/* Products Wrapper */}
      <AllProductsWrapper products={allProducts} />
    </div>
  );
};

export default Products;
