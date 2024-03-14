import React from "react";
import verify from "../../../assets/primescreenshowcase.png";
const IDScannerDetails = () => {
  return (
    <div>
      <section className="bg-cyan-900 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={verify}
              alt="axy"
              className="z-10 object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-xl font-bold leadi">
              DESKTOP SOFTWARE SOLUTIONS
            </h1>
            <span className="text-violet-400 text-4xl font-bold">
              PRIME ID SCANNER
            </span>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Turn your PC or Mac into an ID scanning and verification
              workstation, connect your camera or scanner for real-time
              on-premise identity check. Suitable for hotels, banks, rentals,
              clubs, government agencies, border controls and more!
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
              >
                ID SCANNER FEATURES
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IDScannerDetails;
