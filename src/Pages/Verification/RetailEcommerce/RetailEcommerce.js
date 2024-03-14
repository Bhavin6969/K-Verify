import React from 'react';
import { GrNext } from 'react-icons/gr';
import feature from "../../../assets/feature-retail-ecommerce.jpg"
const RetailEcommerce = () => {
    return (
        <div>
            <div className='bg-[#F4F4FF] pt-20'><h1 className=' font-bold text-3xl text-center text-[#0B0757]'>Retail & Ecommercer</h1>
                <h1 className='text-xl text-[#0B0757] flex justify-center items-center pb-10 pt-4'><span>Home</span>
                    <span className='ml-2'> <GrNext /></span>
                    <span className='ml-2'>Features</span>
                    <span className='ml-2 mr-2'> <GrNext /></span>
                    <span>Retail & Ecommerce</span></h1>
            </div>
            <div className='w-10/12 mx-auto mt-20'>
                <div className='w-9/12 mx-auto'>
                    <img src={feature} className="" alt="" />
                </div>
                <div className='w-9/12 font-mono mx-auto'>
                    <h1 className='text-2xl ml-auto font-bold leading-normal text-[#0B0757] text-left'>
                        Effortless Integration with e-Commerce Platforms                    </h1>
                    <p className='text-md mt-3 text-[#8985B1] text-left leading-7'>Another huge vantage of the ID Analyzer platform is that it gives you all the tools you need to prevent costly chargebacks and potential fraud issues that e-commerce businesses are plagued with these days.</p>

                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>Eliminating a lot of the tedious components of confirming transactions and securing information, you’ll be able to verify IDs, confirm payment information, and red flag potential issues well in advance.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>This gives you the kind of security and peace of mind you need to run your business at scale, something that would have been physically impossible to do if you were cross-referencing ID information manually.</p>

                    <h1 className='text-2xl mt-5 ml-auto font-bold leading-normal text-[#0B0757] text-left'>
                        Prevent Costly Chargebacks and Fraud Issues                    </h1>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>Another huge vantage of the ID Analyzer platform is that it gives you all the tools you need to prevent costly chargebacks and potential fraud issues that e-commerce businesses are plagued with these days.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>Unfortunately, money laundering is more prevalent than ever. Thankfully, there are brand-new regulations and policies in place that businesses need to abide by. All of that can be done in a matter of moments with our AML solution.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>By searching via Core API, DocuPass, or directly onto the AML API, you can quickly investigate your customers to find any fraudulent or criminal activity. Plus, you can ensure that any PEPs are identified to protect your company's protocols and further aid compliance.</p>
                    <h1 className='text-2xl mt-5 ml-auto font-bold leading-normal text-[#0B0757] text-left'>
                        Immediately Improve Confidence, Credibility, and Security                   </h1>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>All of the ID Analyzer solutions come together to help you build a better, smarter e-commerce business that enjoys more confidence, more credibility, and more security in this very modern industry.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>Not only that, but it also shows your customers just how serious you are about taking care of them as well.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>When they see that you are using ID Analyzer and cutting-edge tools to protect their personal, private, and payment information that they are going to feel a lot more comfortable shopping with you compared to competitors that aren’t.</p>
                </div>
            </div>
        </div>
    );
};

export default RetailEcommerce;