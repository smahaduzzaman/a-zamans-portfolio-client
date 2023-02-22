// import components
// import Hero from "./components/Hero";
// import Navbar from "./Layouts/Navbar";
// import Skills from "./components/Skills";
// import Service from "./components/Services";
// import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
// import Hireme from "./components/Hireme";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Router";

const App = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
      {/* <footer className="p-5 text-center">
        <h6 className="mb-3">THANK YOU</h6>
        <p className="text-sm">S M Ahaduzzaman © All CopyRights Reserved 2022</p>
      </footer> */}
    </div>
  );
};

export default App;
