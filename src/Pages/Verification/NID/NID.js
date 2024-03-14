import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { useForm } from "react-hook-form";
import Footer from "../../Shared/Footer/Footer";

const NID = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const [texts, setTexts] = useState("");
  const [progress, setProgress] = useState(0);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setImage(data.img[0]);
    Tesseract.recognize(data.img[0], "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        setTexts(result.data.text);
        setIsLoading(false);
        const nameRegex = /Name:\s+([^\n]+)/;
        const dobRegex = /Date of Birth:\s+([^\n]+)/;
        const nidPattern = /ID\s*(?:NO)?:\s*([^\s]+)/;

        const nameMatch = result.data.text.match(nameRegex);
        const dobMatch = result.data.text.match(dobRegex);
        const nidMatch = result.data.text.match(nidPattern);

        const names = nameMatch ? nameMatch[1] : null;
        const dob = dobMatch ? dobMatch[1] : null;
        const nid = nidMatch ? nidMatch[1] : "not found";
        console.log(names);
        console.log(dob);
        console.log(nid);
      });
      
  };
  

  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-cyan-900 rounded-md shadow-md mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          NID VERIFICATION
        </h1>
        <form className="text-start" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="username"
              >
                Your Name
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                placeholder="Your Name"
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Father Name
              </label>
              <input
                {...register("FatherName", {
                  required: {
                    value: true,
                    message: "Father's Name is Required",
                  },
                })}
                placeholder="Father's Name"
                id="name"
                type="name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              <label className="label">
                {errors.FatherName?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.FatherName.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="name">
                Mother Name
              </label>
              <input
                {...register("MotherName", {
                  required: {
                    value: true,
                    message: "Mother's Name is Required",
                  },
                })}
                placeholder="Mother's Name"
                id="name"
                type="name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              <label className="label">
                {errors.MotherName?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.MotherName.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                NID Number
              </label>
              <input
                {...register("NID", {
                  required: {
                    value: true,
                    message: "NID is Required",
                  },
                  minLength: {
                    value: 10,
                    message: "NID must be 10 digits",
                  },
                  maxLength: {
                    value: 10,
                    message: "NID must be 10 digits",
                  },
                })}
                placeholder="ex: 0088811222"
                id="number"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              <label className="label">
                {(errors.NID?.type === "required" ||
                  errors.NID?.type === "minLength" ||
                  errors.NID?.type === "maxLength") && (
                  <span className="label-text-alt text-red-500">
                    {errors.NID.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Date Of Birth
              </label>
              <input
                {...register("DOB", {
                  required: {
                    value: true,
                    message: "Date of Birth is Required",
                  },
                })}
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              <label className="label">
                {errors.DOB?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.DOB.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Address
              </label>
              <textarea
                {...register("Address", {
                  required: {
                    value: true,
                    message: "Address is Required",
                  },
                })}
                id="address"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                rows="2"
                cols="4"
                placeholder="Your Address"
              ></textarea>
              <label className="label">
                {errors.Address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.Address.message}
                  </span>
                )}
              </label>
            </div>

            <div>
  <label className="block text-sm font-medium text-white">
    Upload NID Image
  </label>
  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
    <div className="space-y-1 text-center">
      <svg
        className="mx-auto h-12 w-12 text-white"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex text-sm text-gray-600">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer bg-white px-2 py-1 justify-center items-center rounded font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <span>Upload a file</span>
          <input
            {...register("img", {
              required: {
                value: true,
                message: "NID img is Required",
              },
            })}
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </label>
        <p className="pl-1 text-white">or drag and drop</p>
      </div>
      <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
      <label className="label">
        {errors.img?.type === "required" && (
          <span className="label-text-alt text-red-500">
            {errors.img.message}
          </span>
        )}
      </label>
    </div>
  </div>
</div>
          </div>

          <div className="flex justify-center mt-6">
            <input
              type="submit"
              className="px-6 py-3 leading-5 text-center text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              value="Verify"
            />
          </div>
        </form>
      </section>
    
      <Footer />
    </div>
  );
};

export default NID;
