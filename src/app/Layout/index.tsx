import { ReactNode } from "react";
import HomeNavbar from "../components/Home/HomeNavbar";
import Footer from "./Footer";
import Top from "../components/top/Top";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
     <Top />
      <HomeNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
