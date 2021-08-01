import * as React from 'react';

import { DiscordUser } from 'src/api/discord-users';
import { DiscordCommunity, Footer, Header, JoinTheCommunity, ScrollToTopButton, SeparatorLine } from 'src/components';

type Props = {
  children: React.ReactNode;
  isScroll: boolean;
  discordUsers: DiscordUser[];
};

export function MainLayout({ children, isScroll, discordUsers }: Props) {
  return (
    <>
      <Header isScroll={isScroll} />

      <main>
        {children}

        <div className="h-10 lg:h-20" />

        <JoinTheCommunity />

        <DiscordCommunity users={discordUsers} />

        <div className="h-10 lg:h-20" />
      </main>

      <SeparatorLine />

      <Footer />

      <ScrollToTopButton />
    </>
  );
}
