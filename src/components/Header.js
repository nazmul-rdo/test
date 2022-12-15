import '../css/header.css'
function Header(){
    return(
        <header id='header'>
        <div className="continer">
          <div className="header">
            <div className='logo'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="No Logo"
              />
            </div>
            <div className='menubar'>
              <a href="http://localhost:3000/">ABOUT</a>
              <a href="http://localhost:3000/">SKILL</a>
              <a href="http://localhost:3000/">PROTFOLIO</a>
              <a href="http://localhost:3000/">CONTACT</a>
              <a href="http://localhost:3000/">RESUME</a>
            </div>
          </div>
        </div>

      </header>

    )
}
export default Header;