import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

function Hero() {

    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP( () => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const para = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from( heroSplit.chars, {
            yPercent: 50,
            duration: 2,
            ease: 'expo',
            stagger: 0.06
        });

        gsap.from( para.lines, {
            opacity: 0,
            yPercent: 50,
            duration: 2,
            ease: 'expo',
            stagger: 0.06,
            delay: 1
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        }).to('.right-leaf', { y: 200 }, 0)
          .to('.left-leaf', { y: -200 }, 0);
        
          const startVal = isMobile ? 'top 50%' : 'center 60%';
          const endVal = isMobile ? '120% top' : 'bottom top';

          const videoTimeline = gsap.timeline( {
            scrollTrigger: {
                trigger: 'video',
                start: startVal,
                end: endVal,
                scrub: true,
                pin: true,
            }
          });

          videoRef.current.onloadedmetadata = () => {
            videoTimeline.to( videoRef.current, {
                currentTime:videoRef.current.duration
            })
          }

    }, []);

  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className='title'>Mojito</h1>

            <img src='/images/hero-left-leaf.png' alt='left-leaf' className='left-leaf'/>
            <img src='/images/hero-right-leaf.png' alt='right-leaf' className='right-leaf'/>

            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 hidden md:block'>
                        <p className='subtitle'>Cool. Crisp. Classic.</p>
                        <p className='subtitle'>Sip the Spirit <br/> of Summer</p>
                    </div>

                    <div className='view-cocktails'>
                        <p className='subtitle'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sunt veritatis officia explicabo numquam et praesentium! Repudiandae neque 
                        </p>
                        <a className='subtitle' href='#cocktails'>View Cocktails</a>
                    </div>

                </div>
            </div>

        </section>

        <div className='video absolute inset-0'>
            <video 
                src='/videos/output.mp4'
                muted 
                ref={videoRef} 
                playsInline 
                preload='auto' />
        </div>
    </>
  )
}

export default Hero