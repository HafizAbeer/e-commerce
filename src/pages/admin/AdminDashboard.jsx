import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetail from "../../components/admin/ProductDetail";
import OrderDetail from "../../components/admin/OrderDetail";
import UserDetail from "../../components/admin/UserDetail";
import { useContext } from "react";
import myContext from "../../context/myContext";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(myContext);

  // Ensure these properties are properly initialized or default to empty arrays.
  const getAllProduct = context?.getAllProduct || [];
  const getAllOrder = context?.getAllOrder || [];
  const getAllUser = context?.getAllUser || [];

  return (
    <div>
      {/* Top */}
      <div className="top mb-5 px-5 mt-5">
        <div
          style={{ backgroundColor: "#1e293b" }}
          className=" py-5 border  rounded-lg"
        >
          <Link to={"/"}>
            <h1 className="text-center text-2xl font-bold text-white">
              Admin Dashboard
            </h1>
          </Link>
        </div>
      </div>

      <div className="px-5">
        {/* Mid */}
        <div className="mid mb-5">
          {/* Main */}
          <div
            style={{ backgroundColor: "#1e293b" }}
            className=" py-5 rounded-xl border"
          >
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt="Admin Avatar"
              />
            </div>
            {/* Text */}
            <div>
              {/* Name */}
              <h1 className="text-center text-lg">
                <span className="font-bold text-white">Name: </span>
                <span className="text-white">{user?.name || "N/A"}</span>
              </h1>
              {/* Email */}
              <h1 className="text-center text-lg">
                <span className="font-bold text-white">Email: </span>
                <span className="text-white">{user?.email || "N/A"}</span>
              </h1>
              {/* Date */}
              <h1 className="text-center text-lg">
                <span className="font-bold text-white">Date: </span>
                <span className="text-white">{user?.date || "N/A"}</span>
              </h1>
              {/* Role */}
              <h1 className="text-center text-lg">
                <span className="font-bold text-white">Role: </span>
                <span className="text-white">{user?.role || "N/A"}</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div>
          <Tabs>
            <TabList className="flex flex-wrap -m-4 text-center justify-center">
              {/* Total Products */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div
                  style={{ backgroundColor: "#1e293b" }}
                  className="border px-4 py-3 rounded-xl"
                >
                  <div className="text-white w-12 h-12 mb-3 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shopping-basket"
                    >
                      <path d="m5 11 4-7" />
                      <path d="m19 11-4-7" />
                      <path d="M2 11h20" />
                      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                      <path d="m9 11 1 9" />
                      <path d="M4.5 15.5h15" />
                      <path d="m15 11-1 9" />
                    </svg>
                  </div>
                  <h2 className="title-font font-medium text-3xl text-white fonts1">
                    {getAllProduct.length}
                  </h2>
                  <p className="text-white font-bold">Total Products</p>
                </div>
              </Tab>

              {/* Total Orders */}
              <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                <div
                  style={{ backgroundColor: "#1e293b" }}
                  className="border  px-4 py-3 rounded-xl"
                >
                  <div className="text-white w-12 h-12 mb-3 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-list-ordered"
                    >
                      <line x1={10} x2={21} y1={6} y2={6} />
                      <line x1={10} x2={21} y1={12} y2={12} />
                      <line x1={10} x2={21} y1={18} y2={18} />
                      <path d="M4 6h1v4" />
                      <path d="M4 10h2" />
                      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                    </svg>
                  </div>
                  <h2 className="title-font font-medium text-3xl text-white fonts1">
                    {getAllOrder.length}
                  </h2>
                  <p className="text-white font-bold">Total Orders</p>
                </div>
              </Tab>

              {/* Total Users */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div
                  style={{ backgroundColor: "#1e293b" }}
                  className="border px-4 py-3 rounded-xl"
                >
                  <div className="text-white w-12 h-12 mb-3 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h2 className="title-font font-medium text-3xl text-white fonts1">
                    {getAllUser.length}
                  </h2>
                  <p className="text-white font-bold">Total Users</p>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <ProductDetail />
            </TabPanel>

            <TabPanel>
              <OrderDetail />
            </TabPanel>

            <TabPanel>
              <UserDetail />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
