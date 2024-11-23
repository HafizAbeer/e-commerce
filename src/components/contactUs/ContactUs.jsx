import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing data from localStorage or initialize an empty array
    const existingData =
      JSON.parse(localStorage.getItem("contactFormData")) || [];

    // Append new form data
    existingData.push(formData);

    // Save updated data to localStorage
    localStorage.setItem("contactFormData", JSON.stringify(existingData));

    // Reset form state
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
    });

    // Show success notification
    toast.success("Submitted Successfully");
  };

  return (
    <main style={{ backgroundColor: "#1e293b" }} className="py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl bg-white border-2 rounded-3xl p-6 shadow-lg">
            <form id="form" className="text-black" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* First Name Input */}
                <div>
                  <label htmlFor="firstName" className="block mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="text"
                    onChange={handleChange}
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    required
                  />
                </div>

                {/* Last Name Input */}
                <div>
                  <label htmlFor="lastName" className="block mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="text"
                    onChange={handleChange}
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    id="email"
                    value={formData.email}
                    required
                  />
                </div>

                {/* Query Type Radio Buttons */}
                <div className="sm:col-span-2">
                  <label htmlFor="queryType" className="block mb-1">
                    Query Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="queryType"
                        value="generalEnquiry"
                        autoComplete="off"
                        onChange={handleChange}
                        checked={formData.queryType === "generalEnquiry"}
                        required
                        className="form-radio"
                      />
                      <span>General Enquiry</span>
                    </label>

                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="queryType"
                        value="supportRequest"
                        autoComplete="off"
                        onChange={handleChange}
                        checked={formData.queryType === "supportRequest"}
                        required
                        className="form-radio"
                      />
                      <span>Support Request</span>
                    </label>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="sm:col-span-2 flex items-center">
                  <input
                    type="checkbox"
                    className="form-check-input mr-2"
                    id="agreeCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="agreeCheck">
                    I consent to being contacted by the team{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    style={{ backgroundColor: "#020617" }}
                    className="w-full py-3 px-6 text-white font-bold rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-600 focus:outline-none"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
