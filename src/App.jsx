import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurServices from "./pages/OurServices";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import { MdErrorOutline } from "react-icons/md";
import { Helmet } from "react-helmet";

const App = () => {
  const title = "Web Company";
  const description =
    "A company engaged in technology for web and software development.";
  const keywords = "web, software, services, app, react";
  const author = "Kelompok 4";
  const datePublished = "2024-11-14";
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://slicing-kelompok-4.vercel.app/",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://slicing-kelompok-4.vercel.app/portfolio",
            },
            headline: title,
            description: description,
            keywords: keywords,
            author: {
              "@type": "Person",
              name: author,
            },
            datePublished: datePublished,
            publisher: {
              "@type": "Organization",
              name: "Kelompok 4",
              logo: {
                "@type": "ImageObject",
                url: "https://www.example.com/logo.png",
              },
            },
          })}
        </script>
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="*"
            element={
              <div className="flex justify-center items-center w-full h-96 bg-peachred/[.05]">
                <h1 className="flex gap-2 font-raleway text-4xl">
                  <MdErrorOutline /> Oops..! Page not Found
                </h1>
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
