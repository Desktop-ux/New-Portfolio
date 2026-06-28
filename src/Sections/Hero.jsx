import './Hero.css'
import { useMemo } from 'react'
import heroImg from '../assets/background.png'
import profileImg from '../assets/profile_img.jpg'

const Hero = () => {

    const dots = useMemo(
        () =>
            Array.from({ length: 40 }, () => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            })),
        []
    );

    return <section className="hero">
        <div className="hero-image">
            <img src={heroImg} alt="hero" className='heroimg' />
        </div>
        <div className="dots">
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="dot"
                    style={{
                        left: dot.left,
                        top: dot.top,
                    }}
                />
            ))}
        </div>


        <div className="hero_content">
            <div className="left_content">
                <span className='badge'>• MERN Stack Developer : React Specialist</span>

                <div className="tag_line">
                    <h1>Creating <span className='text1'>Pixel-Perfect</span> Frontend. Rock-solid <span className='text2'> Backend </span></h1>
                </div>
                <p className='intro'>Hi, I'm Mohammad Ayaan. I’m a Full-Stack Developer dedicated to building fast, scalable, and user-centric web applications. Specializing in the MERN stack, I love turning complex backend logic into seamless, beautiful frontend experiences.</p>
                <div className="contact_btns">
                    <button className="contact_btn">
                        Contect Me    <i class="fa-solid fa-arrow-down"></i>
                    </button>
                    <button className="resume_btn"><i class="fa-solid fa-download"></i> Download DV </button>
                </div>
            </div>
            <div className="right_content">
                <div className="profile">
                    <img src={profileImg}/>
                </div>
                <div className="box_1"><span>15+</span> <br />Projects</div>
                <div className="box_2"> <span></span> Available for work</div>
            </div>
        </div>
    </section>

}

export default Hero