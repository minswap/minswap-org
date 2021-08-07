import * as React from 'react';

import { DiscordUser } from 'src/api/discord-users';
import { DiscordCommunity, Footer, Header, JoinTheCommunity, ScrollToTopButton, SeparatorLine } from 'src/components';

type Props = {
  children: React.ReactNode;
  discordUsers: DiscordUser[];
};

export function MainLayout({ children, discordUsers }: Props) {
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

        <DiscordCommunity users={discordUsers} />
      </main>

      <SeparatorLine />

      <Footer />

      <ScrollToTopButton />
    </>
  );
}
