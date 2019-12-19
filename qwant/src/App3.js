import React, { useState } from 'react';
import './App3.scss';

const App3 = () => {
  const [show, setShow] = useState(false)
  return (
    <a target='_blank' href='test.com' onMouseOver={() => setShow(!show)} onMouseOut={() => setShow(!show)} className='test'>
    <div className='thumbnail'/>
    <div className='text-container'>
      { show && <p className="img-content">Description kdmkmkfsd</p>}
    </div>
    </a>
  )
}

export default App3;
