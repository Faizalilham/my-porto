import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../constants/styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain imgs" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`mt-3 ${styles.sectionSubText}`}>Perkenalan</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Tentang saya</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] font-poppins"
      >
        Mahasiswa Jurusan Teknik Informatika Politeknik Harapan Bersama.
        Tertarik pada bidang pengembangan aplikasi mobile dan industri perangkat lunak.
        Antusias dalam mempelajari tren terbaru, memiliki komunikasi yang baik dan mampu bekerja secara tim maupun individu.
        Menguasai bahasa pemrograman dan tools pengembangan aplikasi mobile seperti seperti Java, Kotlin, Dart, Android Studio, dan Visual Studio Code.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center font-poppins">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
