import { useEffect, useState } from 'react';

const useScrollListener = () => {
  const [disableScroll, setDisableScroll] = useState(false);
  
  useEffect(() => {
    if (disableScroll) {
      window.addEventListener('scroll', e => e.preventDefault());
    } else {
      window.removeEventListener('scroll', e => e.preventDefault());
    }
    return () => {
      window.removeEventListener('scroll', e => e.preventDefault());
    };
  }, [disableScroll]);
  return { disableScroll, setDisableScroll }
}

export default useScrollListener