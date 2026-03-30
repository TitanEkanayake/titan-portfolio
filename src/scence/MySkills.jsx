import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import SkillsImage from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-10 pb-24 ">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">EDUCATION,EXPERIENCE</span> AND{" "}
            <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Explore my journey, qualifications, and skills—a glimpse into my
            professional growth and capabilities.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                    before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src={SkillsImage} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={SkillsImage} />
          )}
        </div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EDUCATION */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-3xl mt-1">EDUCATION</p>
          <LineGradient width="w-1/3" />
          <p className="font-playfair font-semibold text-sm mt-4">
            BSC (HONS) IN SOFTWARE ENGINEERING
            <br />
            University of Plymouth UK Affiliated
            <br />
            with NSBM Green University
          </p>
          <p className="font-playfair font-semibold text-sm mt-2">
            Awarded Second Class Honours (Upper Division)
          </p>
          <p className="font-playfair font-semibold text-sm mt-1">
            [MARCH 2019 - DECEMBER 2022]
          </p>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-3xl mt-1">
            EXPERIENCE
          </p>
          <LineGradient width="w-1/3" />

          {/* Axcenze */}
          <p className="font-playfair font-semibold text-sm mt-4">
            ASSOCIATE SOFTWARE ENGINEER,
            <br />
            AXCENZE, SRI LANKA | APR 2024 – PRESENT
          </p>
          <ul className="mt-3 text-sm list-disc pl-4 space-y-2">
            <li>
              Develop and maintain dynamic web applications using .NET Blazor
              (frontend & backend).
            </li>
            <li>
              Integrate APIs to enhance functionality and user experience.
            </li>
            <li>
              Contribute to IFS FSM solutions, including workflow optimization,
              automated scheduling, and real-time system improvements.
            </li>
          </ul>

          {/* LSEG */}
          <p className="font-playfair font-semibold text-sm mt-6">
            INTERN ENGINEER,
            <br />
            LSEG | AUG 2022 – AUG 2023
          </p>
          <p className="mt-2 text-sm">
            Worked in Foreign Exchange Surveillance project aimed at developing
            market manipulations.
          </p>
          <ul className="mt-2 text-sm list-disc pl-4 space-y-2">
            <li>
              Worked on a Foreign Exchange Surveillance project focused on
              detecting market manipulation.
            </li>
            <li>
              Developed and optimized algorithms in Scala, including performance
              testing and unit testing.
            </li>
            <li>
              Built automation scripts to streamline database updates and
              algorithm deployment.
            </li>
          </ul>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-3xl mt-1">
            CERTIFICATIONS
          </p>
          <LineGradient width="w-1/3" />
          <ul className="mt-4 text-sm list-disc pl-4 space-y-4">
            <li className="font-playfair font-semibold">
              Open Day Exhibition under the theme of 'Smart Sri Lanka'
              <br />
              Won 1st place for the project we implemented, The 'Choon Paan
              Application,' which serves online bakery sellers User Interface
              using ReactJs.
            </li>
            <li className="font-playfair font-semibold">
              Complete JavaScript Course Offered by Udemy
              <br />
              [August/2023 - November/2023]
            </li>
            <li className="font-playfair font-semibold">
              Introduction to Python Programming Offered by Coursera
              <br />
              [December/2023 - January/2024]
            </li>
            <li className="font-playfair font-semibold">
              Data Analysis Using Python Offered by University of Pennsylvania.
              <br />
              [2024 January – 2024 February]
            </li>
            <li className="font-playfair font-semibold">
              Database Structures and Management with MySQL
              <br />
              [2024 February – April]
            </li>
            <li className="font-playfair font-semibold">
              IBM AI Developer
              <br />
              [2025 February – Present]
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
