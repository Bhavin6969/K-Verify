import React from 'react';
import { GrNext } from 'react-icons/gr';
import feature from "../../../assets/feature-financial-services.jpg";

const SectionHeader = ({ title }) => {
    return (
        <h1 className='text-2xl mt-5 ml-auto font-bold leading-normal text-[#0B0757] text-left'>
            {title}
        </h1>
    );
};

const FinancialServices = () => {
    return (
        <div>
            <div className='bg-[#F4F4FF] pt-20'>
                <h1 className='font-bold text-3xl text-center text-[#0B0757]'>Financial Services</h1>
                <h1 className='text-xl text-[#0B0757] flex justify-center items-center pb-10 pt-4'>
                    <span>Home</span>
                    <span className='ml-2'><GrNext /></span>
                    <span className='ml-2'>Features</span>
                    <span className='ml-2 mr-2'><GrNext /></span>
                    <span>Financial Services</span>
                </h1>
            </div>
            <div className='w-10/12 mx-auto mt-20'>
                <div className='w-9/12 mx-auto'>
                    <img src={feature} className="" alt="" />
                </div>
                <div className='w-9/12 font-mono mx-auto'>
                    <SectionHeader title="Ensure Anti-Money Laundering Compliance and Integrity" />
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>
                        We can't mention our financial services without talking about our AML solutions that can make your company compliant with the latest AML regulations and laws.
                    </p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>
                        Developing anti-money laundering solutions yourself is tricky. So, why not let us do it for you?
                    </p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>
                        With our new AML product, we can stop fraudulent activity, protect your business, and ensure your company's integrity in a somewhat frail financial climate.
                    </p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>
                        By searching via Core API, DocuPass, or directly onto the AML API, you can quickly investigate your customers to find any fraudulent or criminal activity. Plus, you can ensure that any PEPs are identified to protect your company's protocols and further aid compliance.
                    </p>
                    <h1 className='text-2xl mt-5 ml-auto font-bold leading-normal text-[#0B0757] text-left'>
                        Secure Financial Transactions                  </h1>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>Though it’s a lot more commonplace these days, there are still plenty of folks that are reticent about purchasing things online because of potential fraud and cyber crime.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>Yes, there have been a lot of new innovations that shut down a lot of cybercrime activities that worked well in the past – but there are always new cyber thieves, hackers, and frauds out there looking to separate innocent people from their hard-earned money.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>ID Analyzer uses a variety of proprietary tools and technology to lockdown online environments, to provide detailed and in-depth reports about individuals that are checked through the ID Analyzer system, and to spot potential criminals and thieves before they get a hold of sensitive financial information.</p>
                    <h1 className='text-2xl mt-5 ml-auto font-bold leading-normal text-[#0B0757] text-left'>
                        Protect Personal and Private Information                 </h1>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>On top of that, ID Analyzer also works as a protective solution against cybercrime and cyber criminal activities.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>Individuals and organizations using ID Analyzer to verify identities are going to be able to spot trouble in the distance, are going to be able to proactively lockout those offending or attacking identities, and then red flag those identities so that everyone else using the ID Analyzer platform is protected, too.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>In this way personal, private, and critical pieces of data and information never end up in the wrong hands.</p>
                    <h1 className='text-2xl mt-5 ml-auto font-bold leading-normal text-[#0B0757] text-left'>
                        Reduce Operating Expenses                 </h1>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>One of the best things about using ID Analyzer to help you secure financial transactions and to protect financial information is how much of the “heavy lifting” it handles automatically and behind the scenes.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>The expansive network of partners integrated throughout the ID Analyzer platform help to guarantee faster results that only become more streamlined and more successful as time goes on.</p>
                    <p className='text-md mt-3 leading-7 text-[#8985B1] text-left'>Being able to “piggyback” on all of this data and information is a huge advantage, one that sets modern businesses and organizations up for success in a way that would have been difficult to do on their own.</p>
                </div>
            </div>
        </div>
    );
};

export default FinancialServices;