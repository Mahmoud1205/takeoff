import { useEffect } from 'react';

export function useAutomove() {
  useEffect(() => {
    let animationFrameId;
    
    // Target the root document element directly
    const element = document.documentElement;
    
    // Keep a precise tracking variable to defeat sub-pixel rounding
    let currentScroll = element.scrollTop;

    const autoScroll = () => {
      // 1. Increment our precise tracker
      currentScroll += 0.5; 
      
      // 2. Assign it to the element (handles decimals perfectly)
      element.scrollTop = currentScroll;

      // 3. Calculate the maximum available scroll height
      const maxScroll = element.scrollHeight - window.innerHeight;

      // 4. If we hit the bottom, reset smoothly back to 0
      if (currentScroll >= maxScroll - 1) {
        currentScroll = 0;
        element.scrollTop = 0;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
}