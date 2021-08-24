import * as React from 'react';

import { DiscordCommunity, Footer, Header, JoinTheCommunity, ScrollToTopButton, SeparatorLine } from 'src/components';

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const [isScroll, setIsScroll] = React.useState(false);

  React.useEffect(() => {
    const handlScrollY = () => {
      const value = window.scrollY;
      if (value > 0 && isScroll === false) {
        setIsScroll(true);
      } else if (value === 0) {
        setIsScroll(false);
      }
    };
    handlScrollY();

    window.addEventListener('scroll', handlScrollY);
    return () => {
      window.removeEventListener('scroll', handlScrollY);
    };
  });

  return (
    <>
      <Header isScroll={isScroll} />

      <main>
        {children}
        <JoinTheCommunity />
        <DiscordCommunity />
      </main>

      <SeparatorLine />

      <Footer />

      <ScrollToTopButton />
    </>
  );
}
