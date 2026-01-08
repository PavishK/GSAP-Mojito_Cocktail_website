import React from 'react';
import { navLinks } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function NavBar() {

  useGSAP( () => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    });

    navTween.fromTo( 'nav', {
      backgroundColor: 'transparent'
    }, {
      backgroundColor: '#00000050',
      backgroundFilter: 'blur(10px',
      duration: 1,
      ease: 'power1.inOut'
    })
  })
  return (
    <nav>
      <div>
        <a href='#home' className='flex items-center gap-2'>
        <img src={"/images/logo.png"} alt='Logo'/>
          <p>Velvet Pour</p>
        </a>

        <ul>
          { navLinks.map((v,i) => (
            <li key={i}>
             <a href={`#${v.title}`}>{v.title}</a> 
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}

export default NavBar