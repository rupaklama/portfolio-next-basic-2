import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  render() {
    return (
      <div>

        <p className="customClass">I am styled P element</p>
        <p className="mainClass">I am styled P element</p>

        <Link href='/'>
          <a style={{ fontSize: '1.5rem' }}>Home</a>
        </Link>
        <Link href='/about'>
          <a> About </a>
        </Link>
        <Link href='/portfolios'>
          <a> Portfolios </a>
        </Link>
        <Link href='/blogs'>
          <a> Blogs </a>
        </Link>
        <Link href='/cv'>
          <a> cv </a>
        </Link>

        <style jsx>
          {`
            .customClass {
              color: red;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Header;
