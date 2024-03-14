import React from 'react';
import features from "../../../assets/feature-identity-verifcation2.jpg"
import dataRec from "../../../assets/docupassliveflow.jpg"
import emrz from "../../../assets/identityverification.jpg"
import { GrNext } from 'react-icons/gr';
const IdentityVerification = () => {
    return (
        <div>
            <div>
                <div className='bg-[#F4F4FF] pt-20'><h1 className=' font-bold text-3xl text-center text-[#0B0757]'>Identity Verification</h1>
                    <h1 className='text-xl text-[#0B0757] flex justify-center items-center pb-10 pt-4'><span>Home</span>
                        <span className='ml-2'> <GrNext /></span>
                        <span className='ml-2'>Features</span>
                        <span className='ml-2 mr-2'> <GrNext /></span>
                        <span>Identity Verification</span></h1>
                </div>
                <div className='w-10/12 mx-auto mt-20'>
                    <div className='w-9/12 mx-auto'>
                        <img src={features} className="" alt="" />
                        <p className='text-md mt-3 text-[#B7B5CF] text-left leading-7'>At ID Analyzer, we have several products to help your business verify onsite or remote user identities. Depending our your requirement and current setup, it is crucial choose the best product suited for your business. You can read on to find out more about our identity verification solutions, or contact us with your current setup and requirements to get an expert advice.</p>
                    </div>
                    <div className='w-9/12 font-mono mx-auto'>
                        <h1 className='text-2xl ml-auto font-bold leading-normal text-[#0B0757] mt-3 text-left'>
                            Verify customer identity within 30 seconds
                        </h1>
                        <p className='text-md mt-3 text-[#B7B5CF] text-left leading-7'>ID Analyzer <span className='text-[#0B0757] font-bold'>DocuPass Rapid Verification System</span> is designed to simplify your customer onboarding process by asking your users to verify their own identity using a government-issued photo identification, and a selfie photo or video. DocuPass Live Mobile Module also features realtime ID and face scanning technology that allows your user to verify themselves by simply opening a web page on their mobile phone, no app install required!
                        </p>
                        <p className='mt-4 text-left'> DocuPass comes with 4 modules which allows you to simply embed the verification process into your own website or native mobile app. You don't need to worry about designing a UI or writing codes to handle ID document or selfie photo upload.</p>
                        <div className='w-full mt-4 mx-auto'>
                            <img src={dataRec} className="" alt="" />
                        </div>
                        <button className='flex justify-start btn bg-blue-700 text-white my-6 border-none'>learn More About Docu Pass</button>
                        <h1 className='text-2xl mt-8 ml-auto font-bold leading-normal text-[#0B0757] text-left'>
                            Easily create your own verification process                        </h1>
                        <p className='text-md mt-3 text-[#B7B5CF] text-left leading-7'>In case the DocuPass identity verification solution doesn't fit into your use case, it is always easy to build your own verification system using ID Analyzer Core API. To start, you can create a form on your website for your customers to upload their ID, once you receive the ID photo from your customer, submit them to ID Analyzer Core API for data extraction and verification. Core API is capable of extracting all the information on the document, you can then use the information to prefill your customer details or confirm your customer identity. Core API's excelling flexibility allows you to further confirm the identity of your customers as part of your own verification and KYC process.</p>
                        <button className='flex justify-start btn bg-blue-700 text-white my-6 border-none'>learn More About Core Api</button>
                        <h1 className='text-2xl mt-8 ml-auto font-bold leading-normal text-[#0B0757] text-left'>
                            Verify user information against document                    </h1>
                        <p className='text-md mt-3 text-[#B7B5CF] text-left leading-7'>If you already have details about your user, you can verify the details on your record against their photo ID. ID Analyzer Core API and DocuPass API have built-in functions to check identity information against existing information without any extra programming, simply supply our API with information about your customer along with their document, our API will let you know whether the information matches the one presented on document. Currently, our APIs supports instant verification of document number, full name, age, date of birth, address, postcode and expiry.</p>
                        <div className='w-full my-7 mx-auto'>
                            <img src={emrz} className="" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default IdentityVerification;