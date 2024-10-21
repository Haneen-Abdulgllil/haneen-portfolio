import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  // Truncate testimonial if it's longer than 100 characters
  const isLongTestimonial = testimonial.length > 100;
  const truncatedTestimonial = isLongTestimonial ? `${testimonial.slice(0, 100)}...` : testimonial;

  // Function to handle the Read More action
  const handleReadMore = () => {
    // Open the URL in a new tab (customize this URL as needed)
    window.open('https://www.linkedin.com/in/haneen-abdulglil-762601241/#recommendations', '_blank');
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-tertiary p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='mt-1'
      >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className='mt-1'>
          <p className='text-white tracking-wider text-[18px]'>
            {truncatedTestimonial}
          </p>

          {isLongTestimonial && (
            <button onClick={handleReadMore} className='text-primary underline mt-2'>
              Read More on linkedin
            </button>
          )}

          <div className='mt-7 flex justify-between items-center gap-1'>
            <div className='flex-1 flex flex-col'>
              <p className='text-white font-medium text-[16px]'>
                <span className='text-primary'>@</span> {name}
              </p>
              <p className='mt-1 text-secondary text-[12px]'>
                {designation} of {company}
              </p>
            </div>

            <img
              src={image}
              alt={`feedback_by-${name}`}
              className='w-10 h-10 rounded-full object-cover'
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};


const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-secondary rounded-[20px]`}>
      <div className={`bg-primary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");