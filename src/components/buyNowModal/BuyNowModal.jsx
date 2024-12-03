/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast"; // Import toast for notifications

const BuyNowModal = ({
  addressInfo,
  setAddressInfo,
  buyNowFunction,
  cartItems,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (cartItems.length === 0) {
      // Show toast notification if the cart is empty
      toast.error("Your cart is empty. Please add items to proceed.");
      return;
    }
    setOpen(!open);
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        disabled={cartItems.length === 0} // Disable button if the cart is empty
        style={{
          backgroundColor: cartItems.length === 0 ? "#475569" : "#020617",
          cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
        }}
        className="w-full px-4 py-3 text-center text-gray-100 border border-transparent dark:border-gray-700 rounded-xl"
      >
        Buy now
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        style={{ backgroundColor: "#020617" }}
      >
        <DialogBody className="">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={addressInfo.name}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                });
              }}
              placeholder="Enter your name"
              style={{ backgroundColor: "#1e293b" }}
              className="border px-2 py-2 w-full rounded-md outline-none text-white-600 placeholder-white-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={addressInfo.address}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                });
              }}
              placeholder="Enter your address"
              style={{ backgroundColor: "#1e293b" }}
              className="border px-2 py-2 w-full rounded-md outline-none text-white-600 placeholder-white-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="pincode"
              value={addressInfo.pincode}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value,
                });
              }}
              placeholder="Enter your pincode"
              style={{ backgroundColor: "#1e293b" }}
              className="border px-2 py-2 w-full rounded-md outline-none text-white-600 placeholder-white-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="mobileNumber"
              value={addressInfo.mobileNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                });
              }}
              placeholder="Enter your mobile number"
              style={{ backgroundColor: "#1e293b" }}
              className="border px-2 py-2 w-full rounded-md outline-none text-white placeholder-white-300"
            />
          </div>
          <div className="">
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              style={{ backgroundColor: "#1e293b" }}
              className="w-full px-4 py-3 text-center text-gray-100 border border-transparent dark:border-gray-700 rounded-lg"
            >
              Buy now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModal;
