// lib/dynamicImport.js
import dynamic from 'next/dynamic';

// This function will dynamically import any component with SSR turned off
export const dynamicImport = (component) =>
  dynamic(() => import(component), { ssr: false });