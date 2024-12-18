import React from "react";
import Profile1 from "../../assets/images/profile1.svg"; // Placeholder SVG for Person 1
import Profile2 from "../../assets/images/profile2.svg"; // Placeholder SVG for Person 2
import Profile3 from "../../assets/images/profile3.svg"; // Placeholder SVG for Person 3

/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* Main */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading */}
          <h1 className="text-center text-3xl font-bold text-black">
            Testimonials
          </h1>
          {/* Subheading */}
          <h2 className="text-center text-2xl font-semibold mb-10">
            What our <span style={{ color: "#020617" }}>customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={Profile1}
                />
                <p className="leading-relaxed">
                  "The ordering process was so smooth, and the delivery was
                  faster than I expected. I absolutely loved the quality of the
                  product. The customer service team was also very kind and
                  responsive. I’ll definitely shop here again!"
                </p>
                <span
                  style={{ backgroundColor: "#020617" }}
                  className="inline-block h-1 w-10 rounded mt-6 mb-4"
                />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Johnson
                </h2>
                <p className="text-gray-500">Verified Buyer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={Profile2}
                />
                <p className="leading-relaxed">
                  "I’ve never been happier with an online shopping experience.
                  The variety of products available is amazing, and the prices
                  are competitive. My favorite part is their quick delivery. A
                  must-visit store for everyone!"
                </p>
                <span
                  style={{ backgroundColor: "#020617" }}
                  className="inline-block h-1 w-10 rounded mt-6 mb-4"
                />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Michael Roberts
                </h2>
                <p className="text-gray-500">Verified Buyer</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={Profile3}
                />
                <p className="leading-relaxed">
                  "I purchased a smartwatch from this store, and it works
                  perfectly. The product was packaged securely and arrived in
                  pristine condition. Their customer support was amazing when I
                  needed assistance tracking my order."
                </p>
                <span
                  style={{ backgroundColor: "#020617" }}
                  className="inline-block h-1 w-10 rounded mt-6 mb-4"
                />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Davis
                </h2>
                <p className="text-gray-500">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

// import React from "react";
// import Profile from "../../assets/images/profile.jpg";
// import Mashhood from "../../assets/images/Mashhood.jpeg";
// import Abdullah from "../../assets/images/Abdullah.jpeg";

// /* eslint-disable react/no-unescaped-entities */

// const Testimonial = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font mb-10">
//         {/* main  */}
//         <div className="container px-5 py-10 mx-auto">
//           {/* Heading  */}
//           <h1 className=" text-center text-3xl font-bold text-black">
//             Testimonial
//           </h1>
//           {/* para  */}
//           <h2 className=" text-center text-2xl font-semibold mb-10">
//             What our <span style={{ color: "#020617" }}>customers</span> are
//             saying
//           </h2>

//           <div className="flex flex-wrap -m-4">
//             {/* Testimonial 1 */}
//             <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
//               <div className="h-full text-center">
//                 <img
//                   alt="testimonial"
//                   className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//                   src={Profile}
//                 />
//                 <p className="leading-relaxed">
//                   Edison bulb retro cloud bread echo park, helvetica stumptown
//                   taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
//                   ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
//                   adaptogen squid fanny pack vaporware.
//                 </p>
//                 <span
//                   style={{ backgroundColor: "#020617" }}
//                   className="inline-block h-1 w-10 rounded  mt-6 mb-4"
//                 />
//                 <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
//                   Hafiz Abeer Ahmed
//                 </h2>
//                 <p className="text-gray-500">Mern Stack Developer</p>
//               </div>
//             </div>

//             {/* Testimonial 2 */}
//             <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
//               <div className="h-full text-center">
//                 <img
//                   alt="testimonial"
//                   className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//                   src={Mashhood}
//                 />
//                 <p className="leading-relaxed">
//                   Edison bulb retro cloud bread echo park, helvetica stumptown
//                   taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
//                   ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
//                   adaptogen squid fanny pack vaporware.
//                 </p>
//                 <span
//                   style={{ backgroundColor: "#020617" }}
//                   className="inline-block h-1 w-10 rounded mt-6 mb-4"
//                 />
//                 <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
//                   Mashhood Jutt
//                 </h2>
//                 <p className="text-gray-500">Mern Stack Developer</p>
//               </div>
//             </div>

//             {/* Testimonial 3 */}
//             <div className="lg:w-1/3 lg:mb-0 p-4">
//               <div className="h-full text-center">
//                 <img
//                   alt="testimonial"
//                   className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//                   src={Abdullah}
//                 />
//                 <p className="leading-relaxed">
//                   Edison bulb retro cloud bread echo park, helvetica stumptown
//                   taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
//                   ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
//                   adaptogen squid fanny pack vaporware.
//                 </p>
//                 <span
//                   style={{ backgroundColor: "#020617" }}
//                   className="inline-block h-1 w-10 rounded mt-6 mb-4"
//                 />
//                 <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
//                   Hafiz Abdullah
//                 </h2>
//                 <p className="text-gray-500">Mern Stack Developer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Testimonial;
