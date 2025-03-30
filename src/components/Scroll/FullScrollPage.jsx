
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from './es'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState  } from 'react'

const FullScrollPage = ({ children }) => {
  const childRef = useRef();
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    // Scroll to the bottom and then back to top after a brief delay
    const scrollToBottom = () => {
      //window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      window.scrollTo({
        top: 50000,
        left: 0,
        behavior: 'instant'
      });
    };

    const scrollToTop = () => {
      //window.scrollTo({ top: 0, behavior: 'smooth' });
      window.scrollTo({
        top:  0,
        left: 0,
        behavior: 'instant'
      });
    };

    const onPageLoad = () => {
      // console.log('page loaded');

      setTimeout(() => {
        scrollToBottom();
        setTimeout(() => {
          scrollToTop();
          setFirstLoad(false);
        }, 700);
      }, 500); // Delay of 2000ms (2 seconds)
  

    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }

    //console.log(document.documentElement.scrollHeight)
    // Trigger the scroll animations on initial load

    
    //Fullpage.goto(4,)
    // console.log('effect')
    // console.log(4 * window.innerHeight);
    
    //scrollToTop();
    //setTimeout(scrollToTop, 1); // Scroll back to the top after 2 seconds
  }, []);

  const isXS = useMediaQuery({ query: '(max-width: 575px)' });
    return (
      <Fullpage
      transitionTiming={firstLoad ? 1: isXS? 550 :  550}
      scrollLockTiming={firstLoad ? 1: isXS? 400:  250}
      ref={childRef}
      desktopForceStep={true}
      >
        <FullpageNavigation  itemStyle={{backgroundColor:"red"}}/>
        <FullPageSections >
          {children}
        </FullPageSections>
      </Fullpage>
    );
  };
  
export default FullScrollPage;