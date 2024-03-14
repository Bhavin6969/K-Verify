import React from "react";
import Banner from "./Banner/Banner";
import VerifiyDetails from "./verifyDetails/VerifiyDetails";
import Footer from "../Shared/Footer/Footer";
import Docupass from "./Docupass/Docupass";
import VerifyCards from "./VerifyCards/VerifyCards";
import IDScannerDetails from "./IDScannerDetails/IDScannerDetails";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner />
      <VerifiyDetails />
      <Docupass />
      <VerifyCards />
      <IDScannerDetails />
      <Footer />
    </div>
  );
};

export default Home;
