import React, { Component } from 'react';
import './navbar.css';
import 'font-awesome/css/font-awesome.css';

const FirstArrow = props => {
  return (
    <div className='relative1'>
      <div>
        <div className='arrow_First'></div>
      </div>
      <div className='arrow_Second'></div>
    </div>
  );
};

const Arrows = props => {
  return (
    <div className='relative2'>
      <div className='arrow'>
        <div className='icon-position'> {props.children} </div>
      </div>

      <div className='arrow1'></div>
    </div>
  );
};

class FooterBar extends Component {
  render() {
    return (
      <div className='fbar-container'>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', position: 'relative' }}
        >
          <FirstArrow></FirstArrow>
          <Arrows>
            <span className='fa fa-facebook icons icnStyl'></span>{' '}
          </Arrows>
          <Arrows>
            <span className='fa fa-google-plus icnStyl'></span>{' '}
          </Arrows>
          <Arrows>
            <span className='fa fa-twitter icnStyl'></span>{' '}
          </Arrows>
          <Arrows>
            <span className='fa fa-youtube-play icnStyl'></span>{' '}
          </Arrows>
        </div>
      </div>
    );
  }
}
export default FooterBar;
