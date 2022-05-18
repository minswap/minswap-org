import * as React from 'react';

import { DiscordCommunity, Footer, Header, JoinTheCommunity, ScrollToTopButton, SeparatorLine } from 'src/components';

type Props = {
  children: React.ReactNode;
  hideCommunity?: boolean;
};

export function MainLayout({ children, hideCommunity }: Props) {
  const [isScroll, setIsScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScrollY = () => {
      const value = window.scrollY;
      if (value > 0 && isScroll === false) {
        setIsScroll(true);
      } else if (value === 0) {
        setIsScroll(false);
      }
    };
    handleScrollY();

    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  });

  return (
    <>
      <Header isScroll={isScroll} />

      <main>
        {children}
        {!hideCommunity && (
          <>
            <JoinTheCommunity />
            <DiscordCommunity />
          </>
        )}
      </main>

      <SeparatorLine />

      <Footer />

      <ScrollToTopButton />
    </>
  );
}
