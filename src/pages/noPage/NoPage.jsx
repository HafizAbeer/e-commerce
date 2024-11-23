import React from "react";
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const NotFound = () => {
  return (
    <div
      style={{ backgroundColor: "#1e293b" }}
      className="flex flex-col justify-center items-center h-screen text-center text-white p-5"
    >
      <div className="max-w-[600px] w-full">
        <h1 className="text-[10rem] font-extrabold m-0">404</h1>
        <h2 className="text-4xl my-5">Oops! Page Not Found</h2>
        <p className="text-lg my-5">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          type="primary"
          size="large"
          icon={<HomeOutlined />}
          className=" p-3 text-xl"
          style={{ backgroundColor: "#020617" }}
          onClick={() => (window.location.href = "/")}
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
