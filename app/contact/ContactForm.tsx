"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "../../public/phone.svg";
import email from "../../public/email.svg";
import location from "../../public/location.svg";
import { toast } from "sonner";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .nullable(),
  message: Yup.string().required("Message is required"),
});


const ContactForm = () => {
  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    const { name, email, phone, message } = values;
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
  
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
  
      const result = await response.text();
  
      // Show success message
      toast.success("Your message has been sent successfully!", {
        description: "We will get back to you shortly.",
      });
  
      // Reset form after success
      resetForm(); // This will clear the form fields
  
      setSubmitting(false);
    } catch (error: any) {
      toast.error("There was an issue sending your message. Please try again.", {
        description: "Please check your information and try again.",
      });
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto lg:px-0 px-4">
      <p className="text-center text-[36px] leading-[46.34px] text-[#0D378D] font-medium lg:pt-[70px] md:pt-[40px] pt-[30px] pb-[46px]">
        GET IN TOUCH
      </p>
      <div className="grid md:grid-cols-2 gap-12 text-center" style={{ textAlign: "left" }}>
        {/* Contact Info Section */}
        <div className="w-full md:w-full lg:w-[60%] lg:ml-[5em]">
          <h2 className="text-[#0D378D] lg:text-5xl text-2xl font-semibold tracking-normal">
            HAVE A PROJECT IN MIND OR NEED A QUOTE?
          </h2>
          <h3 className="text-lg mt-12 mb-12 font-medium mb-6 text-[#000000]">
            Get in touch with our expert painters in Calgary. We’d be happy to help bring your vision to life!
          </h3>
          <p className="text-[16px] mb-6 text-[#000000] flex flex-row items-center" style={{ fontWeight: "500" }}>
            <span className="mr-2">
              <Link href="tel:+1 587-966-6547">
                <Image src={phone} alt="phone" />
              </Link>
            </span>
            <Link href="tel:+1 587-966-6547">+1 587-966-6547</Link>
          </p>
          <p className="text-base mb-6 text-black flex flex-row items-center" style={{ fontWeight: "500" }}>
            <span className="mr-2">
              <Link href="mailto:example@example.com">
                <Image src={email} alt="email" />
              </Link>
            </span>
            <Link href="mailto:info@albertacolourpainting.com">
            info@albertacolourpainting.com
            </Link>
          </p>
          <p className="text-base mb-6 text-black flex flex-row items-center" style={{ fontWeight: "500" }}>
            <span className="mr-2">
              <Image src={location} alt="location" />
            </span>
            370 Brightonstone Green SE, Calgary, AB T2Z 0H1, Canada
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form lg:w-[80%] md:w-full sm:w-full" style={{ boxShadow: "rgba(0, 0, 0, 0.11) 5px 17px 56.7px 0px",marginBottom:"45px" }} >
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mt-5">
                <div className="mb-5 " >
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-[90%] ml-[30px] p-2  text-black bg-[#F3F3F3]    "
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-2 ml-[33px]" />
                </div>

                <div className="mb-5">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-[90%] ml-[30px] p-2  text-black bg-[#F3F3F3]     "
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-2 ml-[33px]" />
                </div>

                <div className="mb-5">
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-[90%] ml-[30px] p-2  text-black bg-[#F3F3F3]     "
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-2 ml-[33px]" />
                </div>

                <div className="mb-5">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-[90%] ml-[30px] p-2  text-black bg-[#F3F3F3]    "
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-2 ml-[33px]" />
                </div>

                <button
                  type="submit"
                  className="w-[90%] ml-[30px] py-2 mt-2 mb-2 bg-[#0D378D] text-white font-semibold rounded-md hover:bg-primary/90 cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                   "Sending..."
                  ) : (
                    "Get a Quote"
                  )}
                  
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
