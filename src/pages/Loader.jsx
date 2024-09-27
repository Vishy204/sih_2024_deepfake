import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

function Loader() {
  return (
    <>
      <Navbar />
      <div className="flex content-center justify-center min-h-[90vh] w-full">
        <div className="flex ">
          <h1 className="self-center mx-2 text-white">Uploading Video...</h1>
          <span class="loader self-center mx-2"></span>
          <h1 className="self-center mx-2 text-white">Unmasking: Deep fakes</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Loader;
