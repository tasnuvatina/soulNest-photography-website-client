import React from "react";
import "./VedioPage.css";
import blueBride from "./blue-bride.mp4";

const VedioPage = () => {
  return (
    <div className="mt-5 mb-5 py-5  vedio-page-main">
      <h5 className="text-center text-dark w-50 mx-auto cormorant-font">
        LIVE YOUR MAGIC AND SAVE YOUR PRECIOUS LOVE MEMORIES! OUR TEAM OF
        PROFESSIONAL PHOTOGRAPHERS IS HERE TO HELP YOU.
      </h5>
      <div className='container mt-5'>
      <iframe
      width='100%'
      height='500px'
      src="https://www.youtube.com/embed/PWbSLgZWBhU"
    ></iframe>
      </div>
    </div>
  );
};

export default VedioPage;
