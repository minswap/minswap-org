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
      className="fixed flex items-center justify-center w-20 h-20 text-white transition duration-300 border border-transparent rounded-full right-10 bottom-10 bg-primaryMain hover:bg-white hover:text-primaryMain hover:border-primaryMain"
      onClick={handleClick}
    >
      <ScrollUpIcon />
    </button>
  );
}
