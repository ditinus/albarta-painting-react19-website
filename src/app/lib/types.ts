import { StaticImageData } from "next/image"; 

export interface BlogPost {
  id: string;
  title: string;

  slug: string;
  date: string;
  image: string | StaticImageData; 
  excerpt: string;
  content: string;
}
  
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

export interface ContactFormFieldsProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  errors: Errors;
}