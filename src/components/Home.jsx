
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/boy.jpg";
import { delay, motion } from "framer-motion";
import ParticlesComponent from './Particles';
const container =(delay) => ({
    hidden:{x:-100,opacity:0},
    visible:{
        x: 0,
        opacity : 1,
        transition:{ duration :0.5,delay:delay },
    },

})

const Home = () => {
  return (
    <div name="home" className='pt-28 md:pt-28 border-b border-cyan-300 pb-5 lg:mb-40'>
      <ParticlesComponent/>
        <div className='flex flex-wrap    '>
            <div className="w-full lg:w-1/2" >
                <div className="flex flex-col items-center max-w-screen-lg mx-auto lg:items-start" >
                    <motion.h1 
                    variants={container(0)}
                    initial='hidden'
                    animate="visible"
                    className='pb-5 text-5xl  tracking-tighter font-bold lg:mt-16 lg:text-8xl' > I'm Manudev</motion.h1>   
                    <motion.span variants={container(0.5)}
                    initial='hidden'
                    animate="visible" className='bg-gradient-to-r from-violet-900 via-pink-500 to-violet-900 bg-clip-text text-4xl tracking-tight text-transparent font-medium '>
                    front end developer
                    </motion.span> 
                    < motion.p
                    variants={container(1)}
                    initial='hidden'
                    animate="visible"
                    className=' pt-10 text-justify max-w-xl font-semibold '>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="rounded-full size-96  border-4 border-gray-300 shadow-lg"
                  src={profilePic}
                  alt="Manu"
                />
              </div>
            </div>

        </div>

    </div>
  );
}

export default Home