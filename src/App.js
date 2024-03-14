import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import Home from "./Pages/Home/Home";
import NID from "./Pages/Verification/NID/NID";
// import VerificationInfo from "./Pages/Verification/VerificationInfo";
import DocumentScanner from "./Pages/Verification/DocumentScanner/DocumentScanner";
import SignIN from "./Pages/Shared/Login/SignIN";
import IdentityVerification from "./Pages/Verification/IdentityVerification/IdentityVerification";
import RetailEcommerce from "./Pages/Verification/RetailEcommerce/RetailEcommerce";
import FinancialServices from "./Pages/Verification/FinancialServices/FinancialServices";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignUP from "./Pages/Shared/Login/SignUP";
import Contact from "./Pages/Shared/contact/Contact";
import BiometricVerification from "./Pages/Verification/BiometricVerification/BiometricVerification";
import PaymentSuccess from "./components/PaymentSuccess";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Home",
          element: <Home />,
        },
        {
          path: "/DOCUMENT-ORC-SCANNER",
          element: <DocumentScanner />,
        },
        {
          path: "/IDENTITY-VERIFICATION",
          element: <IdentityVerification />,
        },
        {
          path: "/BIOMETRIC-VERIFICATION",
          element: <BiometricVerification />,
        },
        {
          path: "/Retail-Ecommerce",
          element: <RetailEcommerce />,
        },
        {
          path: "/Financial-Services",
          element: <FinancialServices />,
        },
        {
          path: "/Accounts",
          element: <SignIN />,
        },
        {
          path: "/signUp",
          element: <SignUP />,
        },
        {
          path: "/CONTACT",
          element: <Contact />,
        },
        {
          path: "/nid-verify",
          element: <NID />,
        },
        {
          path: "/payment/success/:tranId",
          element: <PaymentSuccess />,
        },
      ],
    },
  ]);
  return (
    <div className="App bg-white font-mono">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
