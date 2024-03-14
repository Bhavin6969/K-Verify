import React from "react";
import videoBanner from "../../../assets/verifyVideoBanner.mp4";
const Banner = () => {
  return (
    <div>
      <div className="relative -mt-8">
        <video
          className="h-screen w-screen opacity-70"
          src={videoBanner}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-52 text-white left-16 text-start w-1/2">
          <h1 className="text-4xl font-bold">IDENTITY VERIFICATION WEB </h1>
          <p className="text-lg">
            ID scan technology to extract and verify data from global ID
            documents including passport, driver license and identification
            card, verify remote user age and identity with our digital
            onboarding solutions.
          </p>
          <button
            type="button"
            className="text-white mt-3 bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
