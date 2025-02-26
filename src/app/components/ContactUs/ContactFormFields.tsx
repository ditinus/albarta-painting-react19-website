import React from "react";
import type { FormData, Errors, ContactFormFieldsProps } from "../../lib/types";
import "./ContactForm.css";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// interface Errors {
//   name?: string;
//   email?: string;
//   phone?: string;
//   message?: string;
// }



const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  formData,
  handleChange,
  errors,
}) => {
  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      <div className="mb-3">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={4}
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
        />
        {errors.message && (
          <div className="error invalid-feedback">{errors.message}</div>
        )}
      </div>
    </>
  );
};

export default ContactFormFields;
