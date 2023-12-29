import React from 'react';
import "./hero.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings flexCenter innerWidth hero-container">
            <div className="hero-left">
                <div className="hero-title">
                    <div className="orange-circle" />
                    <motion.h1 initial={{y: "2rem", opacity: 0}}
                    animate={{y:0, opacity: 1}}
                    transition= {{
                        duration: 2,
                        type: "spring"
                    }}>
                        Discover <br />Most Suitable <br />Property</motion.h1>
                </div>
                <div className="hero-dis">
                    <span className='secondaryText'>Find a Variety of properties that suit you very easilty</span><br />
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25} />
                    <input type="text" />
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Porducts</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={28} end={30} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winnings</span>
                    </div>
                </div>
            </div>
            <div className="flexCenter hero-right">
                {/* <h1>This is a right section</h1> */}
                <motion.div 
                initial={{x:"7rem", opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{
                    duration: 2,
                    type:"spring"
                }}
                className="img-container">
                    <img src="./hero-image.png" alt="Hero_image" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero