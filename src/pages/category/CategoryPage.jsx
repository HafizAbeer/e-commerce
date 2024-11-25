import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryPage = () => {
  const { categoryname } = useParams();

  const { loading, getAllProduct } = useContext(myContext);

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Add to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const filterProduct = getAllProduct
    ? getAllProduct.filter((obj) => obj.category.includes(categoryname))
    : [];

  return (
    <Layout>
      <div className="mt-10">
        <div className="">
          <h1 className="text-center mb-5 text-2xl font-semibold first-letter:uppercase">
            {categoryname}
          </h1>
        </div>
        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-wrap -m-4 justify-center">
                {filterProduct.length > 0 ? (
                  filterProduct.map((item) => {
                    const { id, title, price, productImageUrl } = item;
                    return (
                      <div key={id} className="p-4 w-full md:w-1/4">
                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                          <img
                            onClick={() => navigate(`/productinfo/${id}`)}
                            className="lg:h-80 h-96 w-full object-cover"
                            src={productImageUrl}
                            alt={title}
                          />
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              Abeer's Store
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              {title.substring(0, 25)}
                            </h1>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              ${price}
                            </h1>
                            <div className="flex justify-center">
                              {cartItems.some((p) => p.id === item.id) ? (
                                <button
                                  onClick={() => deleteCart(item)}
                                  style={{ backgroundColor: "#020617" }}
                                  className=" w-full text-white py-[4px] rounded-lg font-bold"
                                >
                                  Remove from Cart
                                </button>
                              ) : (
                                <button
                                  onClick={() => addCart(item)}
                                  style={{ backgroundColor: "#020617" }}
                                  className="  w-full text-white py-[4px] rounded-lg font-bold"
                                >
                                  Add to Cart
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center">
                    <img
                      className="mb-2"
                      src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                      alt="No products found"
                    />
                    <h1 className="text-black text-xl">
                      No {categoryname} product found
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
