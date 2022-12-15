import React from 'react';
import ProfileImg from '../../resources/img/profile.png'
import '../../css/about.css'

const About = () => {
    return (
        <section id='about'>
            <div className="about">           
                <div className="about-continer">
                    <div className='about-details'>
                        <p>Hello! I'm Md Nazmul Hossain, a passionate software engineer. I develop web applications,
                            mobile applications, and desktop applications. My core skill is based on JavaScript and
                            I love to do most of the things using JavaScript. I love to make the web more open to the world.
                            Currently I am a final year student and pursuing my bachelor's degree in Computer Science Engineering
                            from Bangladesh Open University at Gazipur, Bangladesh. I am available for any kind of
                            job opportunity that suits my interests.
                        </p>
                        <div className="about-action">
                            <a href="#">Get Resume</a>
                            <a href="#">My Skills</a>
                        </div>

                    </div>
                    <div className='about-image'>
                        <div className="image">
                            <img src={ProfileImg} alt="no img" />
                        </div>
                    </div>
                </div>
                <div className="title title-right">
                    <p>About Me</p>
                    <span></span>
                </div>
            </div>
        </section>
    )
}

export default About