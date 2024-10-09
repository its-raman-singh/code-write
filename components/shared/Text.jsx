"use client"
import { TypeAnimation } from 'react-type-animation';

 const Text = () => {
  return (
    <TypeAnimation
      sequence={[
        
        'Websites',
        1000,
        'Design',
        1000,
        'Smart Contracts',
        1000,
        'Products',
        1000,
        'friends',
        1000,
        'coffee',
        1000,
        'maggie',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default Text;