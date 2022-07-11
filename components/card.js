import React from 'react';
import Image from 'next/image';

export default function Index() {
    return (
      <div className='card'>
        <div className='card-img'>
          <Image src='/vercel.svg' width='300px' height='100%' />
        </div>
        <hr />
        <div className='card-title'>
          <h1>Vercel</h1>
        </div>
        <div className='card-desc'>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        </div>
        <div className='card-btn'>
          <a href='#'>Button</a>
        </div>
      </div>
    );
  }