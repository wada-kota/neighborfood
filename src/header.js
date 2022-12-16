import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <div className='headerWrap'>
                <h1 className='headerTitle'>neighbor<span className='headerLogo'>food</span></h1>
            </div>
        )
    }
}

export default Header;