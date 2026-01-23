import React from "react";
import { Formik } from "formik";
const FormikSigninForm = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Create an Account to Play
        </h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            gender: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            subscription: "",
          }}
          validate={(values) => {
            const errors = {};
            if(!values.firstName) {
              errors.firstName = "Required";
              return errors;
            }
            if(!values.email) {
              errors.email = "Required";
              return errors;
            }else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ){
              errors.email = "Invalid email address";
              return errors;
            }
            if(values.password !== values.confirmPassword) {
              errors.confirmPassword = "Passwords must match";
              return errors;
            }
          }}
          onSubmit={(values) => {
            console.log("Form Data submitted:", values);
            alert("Signup Successful!");
          }}
        >
          {(formiK) => (
            <form onSubmit={formiK.handleSubmit}>
              {/* {console.log(formiK)} */}

              {/* UserName*/}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="firstName"
                    onChange={formiK.handleChange}
                    onBlur={formiK.handleBlur}
                    value={formiK.values.firstName}
                  />
                  {formiK.touched.firstName && formiK.errors.firstName ? (
                    <div className="text-red-500 text-xs mt-1">{formiK.errors.firstName}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="lastName"
                    onChange={formiK.handleChange}
                    onBlur={formiK.handleBlur}
                    value={formiK.values.lastName}
                  />
                </div>
              </div>

              {/* Gender Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <div className="flex space-x-4">
                  {["male", "female", "other"].map((g) => (
                    <div key={g} className="flex items-center">
                      <input
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        type="radio"
                        name="gender"
                        id={g}
                        value={g}
                        onChange={formiK.handleChange}
                        onBlur={formiK.handleBlur}
                        checked={formiK.values.gender === g}
                      />
                      <label
                        className="ml-2 text-sm text-gray-600 capitalize"
                        htmlFor={g}
                      >
                        {g}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="email"
                  onChange={formiK.handleChange}
                  onBlur={formiK.handleBlur}
                  value={formiK.values.email}
                />
                {formiK.touched.email && formiK.errors.email && (
                  <div className="text-red-500 text-xs mt-1">{formiK.errors.email}</div>
                )}
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="phone"
                  onChange={formiK.handleChange}
                  onBlur={formiK.handleBlur}
                  value={formiK.values.phone}
                />
              </div>

              {/* Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="password"
                    onChange={formiK.handleChange}
                    onBlur={formiK.handleBlur}
                    value={formiK.values.password}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="confirmPassword"
                    onChange={formiK.handleChange}
                    onBlur={formiK.handleBlur}
                    value={formiK.values.confirmPassword}
                  />
                  {formiK.touched.confirmPassword && formiK.errors.confirmPassword && (
                    <div className="text-red-500 text-xs mt-1">{formiK.errors.confirmPassword}</div>
                  )}
                </div>
              </div>

              {/* Subscription */}
              <div className="mb-4">
                <label
                  htmlFor="subscription"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subscription
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  name="subscription"
                  onChange={formiK.handleChange}
                  onBlur={formiK.handleBlur}
                  value={formiK.values.subscription}
                >
                  <option value="">Select</option>
                  <option value="subscription-1">Free</option>
                  <option value="subscription-2">Pro</option>
                  <option value="subscription-3">Enterprise</option>
                </select>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    type="checkbox"
                    id="termsAndConditions"
                    // onChange={formiK.handleChange}
                    // onBlur={formiK.handleBlur}
                    // value={formiK.values.firstName}
                  />
                  <label
                    className="ml-2 text-sm text-gray-600"
                    htmlFor="termsAndConditions"
                  >
                    Accept terms and conditions.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold shadow-sm"
              >
                Sign Up
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormikSigninForm;
