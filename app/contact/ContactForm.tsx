
"use client"
import React, { useState } from "react";
// import "tailwindcss/tailwind.css";
import Image from "next/image";

// import type { FormData, Errors } from "../../lib/types";
import phone from "../../public/phone.svg";
import email from "../../public/email.svg";
import location from "../../public/location.svg";
import ContactFormFields from "./ContactFormFields";


export interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  
  export interface Errors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }
  

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (
      !formData.email.trim() ||
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    )
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim() || !/^\+?\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Valid phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
         <p className="text-center text-[36px] leading-[46.34px] text-[#0D378D] font-medium pt-[86px] pb-[86px] ">
  GET IN TOUCH
</p>
      <div className="grid md:grid-cols-2 gap-12 text-center" style={{
        textAlign:"left",
        
      }}>
       
        {/* Contact Info Section */}
        <div className=" w-full  md:w-full lg:w-[60%] lg:ml-[5em]">
          <h2 className="text-2xl text-[#0D378D] text-[30px] lg:[45px] font-bold tracking-normal ">HAVE A PROJECT IN MIND OR NEED A QUOTE?</h2>
          <h3 className="text-lg mt-8 mb-6 text-[#000000] font-bold  ">
            Get in touch with our expert painters in Calgary. We’d be happy to help bring your vision to life!
          </h3>
          <p className="text-[16px] mb-6 font-bold text-[#000000] flex flex-row items-center">
            <span className="mr-2">
              <Image src={phone} alt="phone" />
            </span>
            +1 587-966-6547
          </p>
          <p className="text-base mb-6 text-black font-bold flex flex-row items-center">
            <span className="mr-2">
              <Image src={email} alt="email" />
            </span>
            info@albertacolourpainting.com
          </p>
          <p className="text-base mb-6 text-black font-bold flex flex-row items-center">
            <span className="mr-2">
              <Image src={location} alt="location" />
            </span>
            370 Brightonstone Green SE, Calgary, AB T2Z 0H1, Canada
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form lg:w-[80%] md:w-full sm:w-full" style={{
            boxShadow:" rgba(0, 0, 0, 0.11) 5px 17px 56.7px 0px",
            // backgroundColor:"beige"
      }}>
          <form onSubmit={handleSubmit} noValidate className="">
            {/* <ContactFormFields
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            /> */}
            <ContactFormFields
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            />
            <button
              type="submit"
              className="w-[90%] ml-[2em] py-2 mt-3 mb-4 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Get a Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
