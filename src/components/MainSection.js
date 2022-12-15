import '../css/mainSection.css'
const MainSection = () => {
    return (
        <main>
            <div className="intro-area">
                <div className="title title-left">
                    <ul>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">Git</a></li>
                        <li><a href="http://" target="_blank" rel="noopener noreferrer">ln</a></li>
                    </ul>
                    <span></span>
                    <p>Fllow Me</p>
                </div>
                <div className="main-continer">
                    <div className="intro">
                        <div className="intro-text">
                            <p>Hello! I am</p>
                            <h1>Nazmul Hossain</h1>
                            <h3>Full Stack Developer</h3>
                            <ul>
                                <li>Web Developer</li>
                                <li>Programmer</li>
                                <li>Software Engineer</li>
                            </ul>
                            
                            <div className="action">
                                <a href="https://github.com/nazmul-rdo/" target="_blank" rel="noopener noreferrer" className='btn'>Get Resume</a>
                                <a href="#about" target="_blank" rel="noopener noreferrer" className='btn'>About Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default MainSection