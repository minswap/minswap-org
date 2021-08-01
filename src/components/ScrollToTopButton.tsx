import * as React from 'react';

import { ScrollUpIcon } from './icons';

const OFFSET = 300;

export function ScrollToTopButton() {
  const [shouldShow, setShouldShow] = React.useState(false);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  React.useEffect(() => {
    function handleScroll() {
      setShouldShow(window.scrollY > OFFSET);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!shouldShow) {
    return null;
  }

  return (
    <button
      className="fixed flex items-center justify-center text-white transition duration-300 border border-transparent rounded-full lg:w-20 lg:h-20 w-14 h-14 lg:right-10 lg:bottom-10 right-6 bottom-6 bg-primaryMain hover:bg-white hover:text-primaryMain hover:border-primaryMain"
      onClick={handleClick}
    >
      <ScrollUpIcon />
    </button>
  );
}
