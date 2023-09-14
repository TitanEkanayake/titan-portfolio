import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import SkillsImage from "../assets/skills-image.png";
import companyLogo from "../assets/lseg-logo.png"
import Skills from "../assets/Skills.png"
import Skills1 from "../assets/Skills1.png"

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
        <div className="md:flex md:justify-between md:gap-16 mt-32">
            <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2,duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-red">EXPERIENCE , EDUCATION</span> AND <span className="text-red">SKILLS</span>
                </p>
                <LineGradient width="w-1/3" />
                <p className="mt-10 mb-7">
                    Skills And Experience that i gained through this years.
                </p>
            </motion.div>

            <div className="mt-16 md:mt-0">
                {isAboveMediumScreens ? (
                    <div
                    className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                    before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                        alt="skills"
                        className="z-10"
                        src={SkillsImage}
                        />
                  </div>
                ):(
                    <img alt="skills" className="z-10" src={SkillsImage} />
                )}
            </div>
        </div>
        {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
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
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-4xl">01</p> */}
              <p className="font-playfair font-semibold text-3xl mt-1">
              EXPERIENCE
              </p>
            </div>
            <div className="w-5/12  h-32 bg-white absolute top-0 z-[-1] flex justify-center items-center rounded-lg right-0">
                <img
                    alt="skills"
                    className="z-10 "
                    src={companyLogo}
                />
            </div>
          </div>
          <p className="font-playfair font-semibold text-1xl mt-1">
              INTERN ENGINEER,<br/> 
              LSEG
              </p>
              <p className="font-playfair font-semibold text-1xl mt-1">
              AUGUST 2022 –AUGUST 2023
              </p>
          <p className="mt-5">Worked in Foreign Exchange Surveillance project aimed at developing market manipulations.</p>
          <p className="mt-5 text-sm">
            <li className="mt-5" >Developed and implemented new client-required features for market manipulation detection algorithms
            using Scala and C++.</li>
            <li className="mt-5" >Developed automation scripts using Python.</li>
            <li className="mt-5" >Conducted testing on market manipulation algorithm performance with production rates.</li>
            <li className="mt-5" >Developed unit test implementations for market manipulation algorithms.</li>
          </p>
        </motion.div>
        {/* Skills */}
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-1">
              EDUCATION
              </p>
            </div>
            <div className="w-7/12 md:w-12/12 h-32 absolute right-0 top-0 z-[-1] flex justify-center items-center rounded-lg">
            <img
                alt="skills"
                className="z-10 rounded-lg w-6/12 md:w-8/12 "
                src={Skills}
            />
            </div>
          </div>
          <p className="font-playfair font-semibold text-1xl mt-5">
              BSC (HONS) IN SOFTWARE ENGINEERING
            </p>
            <p className="font-playfair font-semibold text-1xl mt-2">
              University of Plymouth UK Affiliated <br/>with NSBM Green University
            </p>
          <p className="mt-5">
          <li>Awarded Second Class Honours (Upper Division)</li>
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
            <p className="font-playfair font-semibold text-3xl mt-5">Skills <br/>And<br/>Frameworks</p>
            </div>
            <div className="w-5/12 md:w-6/12 h-32 bg-white absolute right-0 top-0 z-[-1] flex justify-center items-center rounded-lg">
            <img
                alt="skills"
                className="z-10 rounded-lg w-4/12"
                src={Skills1}
            />
            </div>
          </div>
            <div className="flex justify-between">
                <div className="w-1/3 p-4">
                    <h2 className="text-xl font-playfair font-semibold">Languages</h2>
                    <li className="mt-5">Python</li>
                    <li>Scala</li>
                    <li>Java</li>
                    <li>HTML/CSS</li>
                    <li>TypeScript</li>
                    <li>SQL</li>
                    <li>C++</li>
                </div>
                <div className="w-1/3 p-4">
                    <h2 className="text-xl font-playfair font-semibold">Libraries<br/>/Frameworks</h2>
                    <li className="mt-5">QT</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>ASP.NET Core</li>
                </div>
                <div className="w-1/3 p-4">
                    <h2 className="text-xl font-playfair font-semibold">Tools</h2>
                    <li className="mt-5">Linux</li>
                    <li >Git</li>
                    <li>JIRA</li>
                </div>
            </div>
        </motion.div>
        </div>
    </section>
  )
}

export default MySkills