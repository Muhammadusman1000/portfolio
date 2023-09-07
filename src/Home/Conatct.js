import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { Link } from "react-router-dom";
import { SiMinutemailer } from "react-icons/si";
// import { RxHamburgerMenu } from "react-icons/rx";
import { BsTelephoneFill } from "react-icons/bs";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission here, e.g., send data to an API
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className="bg-gray-900 h-screen">
      <div className="w-[80%] mx-auto pt-44 flex justify-between">
        <div className="w-[20%]">
          <p className="text-white mt-6 text-5xl font-poppins">Contact Me</p>
          <div className="text-white flex mt-10 justify-between items-center w-[270px]">
            <SiMinutemailer className="text-[#E41E8F]" size={20} />

            <p className="font-poppins">usmanidees100@gmail.com</p>
          </div>

          <div className="text-white flex mt-10 justify-between items-center w-[160px]">
            <BsTelephoneFill className="text-[#E41E8F]" size={20} />

            <p className="font-poppins"> 0307-4500077</p>
          </div>
          <div className=""></div>
        </div>
        <form onSubmit={formik.handleSubmit} className="px-24 w-[80%]">
          <div className="mb-4 ">
            <label htmlFor="name" className="block mb-2 text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-[70%] px-4 py-2 rounded border focus:outline-none focus:border-blue-500 bg-gray-400"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-600">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-[70%] px-4 py-2 rounded border focus:outline-none focus:border-blue-500 bg-gray-400"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="w-[70%] px-4 py-2 rounded border focus:outline-none focus:border-blue-500 bg-gray-400"
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600">{formik.errors.message}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-[#E41E8F] rounded hover:bg-[#da4c9d] focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
