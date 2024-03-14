import React from 'react';
import features from "../../../assets/feature-extraction.jpg"
import dataRec from "../../../assets/data-extraction-sample.jpg"
import emrz from "../../../assets/mrz-support.jpg"
import barcode from "../../../assets/barcode-support.jpg"
import { GrNext } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const DocumentScanner = () => {
    return (
        <div>
            <div className='bg-[#F4F4FF] pt-20'>
                <h1 className='font-bold text-3xl text-center text-[#0B0757]'>Document OCR Scanner</h1>
                <h1 className='text-xl text-[#0B0757] flex justify-center items-center pb-10 pt-4'>
                    <span>Home</span>
                    <span className='ml-2'><GrNext /></span>
                    <span className='ml-2'>Features</span>
                    <span className='ml-2 mr-2'><GrNext /></span>
                    <span>Document OCRScanner</span>
                </h1>
            </div>
            <div className='w-10/12 mx-auto mt-20'>
                <div className='w-9/12 mx-auto'>
                    <img src={features} className="w-full" alt="" />
                </div>
                <div className='w-9/12 font-mono mx-auto'>
                    <h1 className='text-2xl font-bold leading-normal text-[#0B0757] text-left'>
                        OCR Visual Data Scanning
                    </h1>
                    <p className='text-md mt-3 text-[#B7B5CF] text-left leading-7'>
                        ID Analyzer Core API is able to automatically scan and capture all the data available on world-wide documents through computer vision technology combined with A.I., which includes all key information generally found on identity documents: document number, family names, given names, date of birth, issue date, expiry date, address, genders and more. Our OCR technology works even without MRZ or barcode.
                    </p>
                    <div className='w-full mt-4 mx-auto'>
                        <img src={dataRec} className="w-full" alt="" />
                    </div>
                    <p className='text-md mt-3 leading-7 text-[#B7B5CF] text-left'>
                        We have compared our data extraction results with every other services we can find and we are confident to tell our customers that we have the top accuracy amongst competitors. ID Analyzer was able to recognize defected documents that are out of focus, cropped or has very low resolution that no other competitor is able to do.
                    </p>
                    <h1 className='text-2xl mt-5 font-bold leading-normal text-[#0B0757] text-left'>
                        MRZ Scan
                    </h1>
                    <p className='text-md mt-3 text-[#B7B5CF] text-left leading-7'>
                        MRZ stands for Machine Readable Zone, which is found on all passport biodata page and some ID cards. If MRZ code are present on a document, ID Analyzer Core API will automatically capture all the data within MRZ code.
                    </p>
                    <div className='w-full my-7 mx-auto'>
                        <img src={emrz} className="w-full" alt="" />
                    </div>
                    <h1 className='text-2xl font-bold leading-normal text-[#0B0757] text-left'>
                        Barcode Scanner
                    </h1>
                    <p className='text-md mt-3 text-[#B7B5CF] text-left leading-7'>
                        Many of the identity documents contain 1D or 2D PDF417 barcodes, examples of such barcode can be found on the back of most North American IDs and driver licenses (AAMVA). ID Analyzer is capable of scanning barcodes and extracting personal data contained within the barcode.
                    </p>
                    <div className='w-full mt-7 mx-auto'>
                        <img src={barcode} className="w-full" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h1 className='mt-28'>Step 1 Verify </h1>
                <h2 className='text-black font-bold '> NID Verification </h2>
                <Link to='/nid-verify' className='mt-5 inline-block bg-rose-600 text-white px-6 py-3 rounded-md hover:bg-rose-700 transition-colors duration-300 ease-in-out mb-10'>Click here</Link>

            </div>
        </div>
    );
};

export default DocumentScanner;
