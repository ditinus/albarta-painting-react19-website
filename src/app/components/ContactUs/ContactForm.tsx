import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import ContactFormFields from "./ContactFormFields";
import type { FormData, Errors } from "../../lib/types";
import phone from "../../../../public/assets/phone.svg";
import email from "../../../../public/assets/email.svg";
import location from "../../../../public/assets/location.svg";
import "./ContactForm.css";


const ContactForm = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

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
    <div className="container py-5">
      <div className="row">
        <div className="contact-form-info col-md-6 mb-4">
          <h2>HAVE A PROJECT IN MIND OR NEED A QUOTE?</h2>
          <h3>
            Get in touch with our expert painters in Calgary. We’d be happy to
            help bring your vision to life!
          </h3>
          <p>
            <span>
              <Image src={phone} alt="phone" />
            </span>
            +1 587-966-6547
          </p>
          <p>
            <span>
              <Image src={email} alt="email" />
            </span>
            info@albertacolourpainting.com
          </p>
          <p>
            <span>
              <Image src={location} alt="location" />
            </span>
            370 Brightonstone Green SE, Calgary, AB T2Z 0H1, Canada
          </p>
        </div>
        <div className="contact-form col-md-6">
          <form onSubmit={handleSubmit} noValidate>
            <ContactFormFields
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
            <button type="submit" className="btn btn-primary mt-3">
              Get a Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
