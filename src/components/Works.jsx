import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { internet } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   live_demo_link, 
//   }) => {
//     return (
//       <motion.div 
//         variants={fadeIn("up", "spring", index * 0.5, 0.75)}
//          className=""
//       >
//         <Tilt
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className="p-5 rounded-2xl sm:w-[360px] w-full h-[480px]" // Set a fixed height here
//         >
//           <div className="relative w-full h-[230px]">
//             <img
//               src={image}
//               alt="project_image"
//               className="w-full h-full object-cover rounded-2xl border-2 border-purple-text-gradient "
//             />
      
//             <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//               {/* <div
//                 onClick={() => window.open(source_code_link, "_blank")}
//                 className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//               >
//                 <img
//                   src={github}
//                   alt="source code"
//                   className="w-1/2 h-1/2 object-contain"
//                 />
//               </div> */}
//               {source_code_link ? (
//                 <div
//                   onClick={() => window.open(source_code_link, "_blank")}
//                   className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//                 >
//                   <img
//                     src={github} // Replace with your GitHub icon path
//                     alt="source code"
//                     className="w-1/2 h-1/2 object-contain"
//                   />
//                 </div>
//               ) : (
//                 <div
//                   onClick={() => window.open(live_demo_link, "_blank")} // Open live demo link
//                   className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//                 >
//                   <img
//                     src={liveDemoIcon} // Replace with your Live Demo icon path
//                     alt="live demo"
//                     className="w-1/2 h-1/2 object-contain"
//                   />
//                 </div>
//               </div>
//           // </div>
      
//           <div className="mt-5">
//             <h3 className="text-white font-bold text-[24px]">{name}</h3>
//             <p className="mt-2 text-secondary text-[14px] line-clamp-3">
//               {description}
//             </p> {/* Restrict description to 3 lines */}
//           </div>
      
//           <div className="mt-4 flex flex-wrap gap-2">
//             {tags.map((tag) => (
//               <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
//                 #{tag.name}
//               </p>
//             ))}
//           </div>
//         </Tilt>
//       </motion.div>
    
//     );
// };

// const ProjectCard = ({
//     index,
//     name,
//     description,
//     tags,
//     image,
//     source_code_link,
//     live_demo_link, // Add live demo link as a prop
//   }) => {
//   return (
//     <motion.div 
//       variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
//       className=""
//     >
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="p-5 rounded-2xl sm:w-[360px] w-full h-[480px]" // Set a fixed height here
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt="project_image"
//             className="w-full h-full object-cover rounded-2xl border-2 border-purple-text-gradient"
//           />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             {/* Conditionally render GitHub icon or Live Demo icon */}
//             {source_code_link ? (
//               <div
//                 onClick={() => window.open(source_code_link, "_blank")}
//                 className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//               >
//                 <img
//                   src={github} // Replace with your GitHub icon path
//                   alt="source code"
//                   className="w-1/2 h-1/2 object-contain"
//                 />
//               </div>
//             ) : (
//               <div
//                 onClick={() => window.open(live_demo_link, "_blank")} // Open live demo link
//                 className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//               >
//                 <img
//                   src={internet} // Replace with your Live Demo icon path
//                   alt="live demo"
//                   className="w-1/2 h-1/2 object-contain"
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px] line-clamp-3">
//             {description}
//           </p> {/* Restrict description to 3 lines */}
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_demo_link, // Keep the live demo link prop
  }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      className=""
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="p-5 rounded-2xl sm:w-[360px] w-full h-[480px]" // Set a fixed height here
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl border-2 border-purple-text-gradient"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* GitHub icon */}
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2" // Add margin for spacing
              >
                <img
                  src={github} // Replace with your GitHub icon path
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {/* Live Demo icon */}
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={internet} // Replace with your Live Demo icon path
                  alt="live demo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3">
            {description}
          </p> {/* Restrict description to 3 lines */}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* <div className='mt-20 flex flex-wrap'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {projects.map((project, index) => (
            
              <SwiperSlide>
                  <ProjectCard key={`project-${index}`} index={index} {...project} />
              </SwiperSlide>
          
            ))}
          </Swiper>
      </div> */}
      <div className='mt-20 flex flex-wrap'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            // When the window width is >= 640px
            640: {
              slidesPerView: 1, // 1 card on small screens (mobile)
            },
            // When the window width is >= 768px
            768: {
              slidesPerView: 2, // 2 cards on medium screens (tablet)
            },
            // When the window width is >= 1024px
            1024: {
              slidesPerView: 3, // 3 cards on large screens (desktop)
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`}>
              <ProjectCard index={index} {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  );
};

export default SectionWrapper(Works, "projects");