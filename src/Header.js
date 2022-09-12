import React from 'react'

function Header() {
  return (
    <div className='header'>
        <h1>this is a header</h1>

        <div className="header__left">
            <img src="" alt="" />
            <div className="header__search">
                {/* search icon */}
                <input type="text" />
            </div>
        </div>
        <div className="header__right"></div>
    </div>
  )
}

export default Header