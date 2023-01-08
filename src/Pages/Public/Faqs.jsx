import React, { useEffect } from "react";

import { motion } from "framer-motion";

const Faqs = () => {
  useEffect(() => { window.scrollTo(0, 0); }, [])

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-8">
        <h2 className="text-3xl font-medium leading-9 border-b-4 border-gray-900 text-teal-600 mb-12">
          FAQs
        </h2>
        {/* <p className="text-justify text-base leading-6 text-gray-500 my-5">
          You can visit full guide here 👉{" "}
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://jervx.github.io/Astig0316OnlineOrdering/#/"
            className="text-blue-500 underline font-normal"
          >
            Tios RoadHouse 16 Manual & Documentation
          </a>
        </p> */}
        <motion.ul
          className="bg-gray-100 rounded-2xl px-4 md:px-16 py-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <li className="w-full my-8 shadow-xl">
            <div className="rounded-lg border-gray-400 border-4 p-8">
              <p className="text-xl font-medium leading-6 text-teal-800 mb-4">
                What data do Tios RoadHouse collect?
              </p>
              <div className="mt-2">
                <p className="text-justify text-base leading-6 text-gray-500">
                  Tios RoadHouse only collects your profile picture, address, email
                  address, and contact number. We don't collect birthdate or
                  other personal information to lessen the risk of hackers
                  obtaining full information about you incase our system get
                  attacked.
                </p>
              </div>
            </div>
          </li>
          <li className="w-full my-8 shadow-xl">
            <div className="rounded-lg border-gray-400 border-4 p-8">
              <p className="text-xl font-medium leading-6 text-teal-800 mb-4">
                What are the mode of payments that Tios RoadHouse offers?
              </p>
              <div className="mt-2">
                <p className="text-justify text-base leading-6 text-gray-500">
                  Currently our website only offers Cash On Delivery (COD) and GCash online payment.
                </p>
              </div>
            </div>
          </li>
          <li className="w-full my-8 shadow-xl">
            <div className="rounded-lg border-gray-400 border-4 p-8">
              <p className="text-xl font-medium leading-6 text-teal-800 mb-4">
                Does Tios RoadHouse have a physical store?
              </p>
              <div className="text-gray-500">
                <ul>
                  <li className="my-4">
                    <span className="font-inter text-gray-700">- Diamond Drive Cor. Camarin Ave. Daimond Village 1117 Quezon City, Philippines</span>
                  </li>
                </ul>
                <p>We are open on;</p>
                <ul>
                  <li className="my-2">Location : (<span className="font-inter text-gray-700">Quezon city</span>) <span className=" font-inter text-gray-700">[ Monday - Sunday ] 2 PM to 2 AM</span></li>
                </ul>
                <p className="mt-4">We are looking to build more branches in the future to further serve our dear customer.</p>
              </div>
            </div>
          </li>
          <li className="w-full my-8 shadow-xl">
            <div className="rounded-lg border-gray-400 border-4 p-8">
              <p className="text-xl font-medium leading-6 text-teal-800 mb-4">
                How can you contact us?
              </p>
              <div className="mt-2">
                <p className="text-justify text-base leading-6 text-gray-500">
                  You can send us a direct message on our Facebook Page, or
                  contact us at <span className="font-inter text-gray-700">092 7156 1217</span>{" "}
                  <span className="italic font-inter text-gray-700"></span>. If
                  you have an account here, you can chat us directly. On{" "}
                  <span className="italic font-inter text-gray-700">
                    {"navigation > your profile picture dropdown > Chat admin "}
                  </span>
                </p>
              </div>
            </div>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Faqs;
