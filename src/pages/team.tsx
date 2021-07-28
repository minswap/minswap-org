import * as React from 'react';
import { GetStaticPropsResult } from 'next';

import { DiscordUser, getTopDiscordUsers } from 'src/api/discord-users';
import abdelImage from 'src/assets/team/abdel.jpeg';
import hieuPhanImage from 'src/assets/team/hieupnh.jpeg';
import richardNguyenImage from 'src/assets/team/hungnv.jpg';
import khanhLeImage from 'src/assets/team/khanhle.jpeg';
import longNguyenImage from 'src/assets/team/longnlv.jpg';
import mattImage from 'src/assets/team/mattcass.jpeg';
import {
  DiscordCommunity,
  Footer,
  Header,
  JoinTheCommunity,
  SectionTitle,
  SeparatorLine,
  TeamMemberItem,
} from 'src/components';

const teamMembers = [
  {
    name: 'Long Nguyen',
    image: longNguyenImage,
    title: 'Team Lead',
    github: 'https://github.com/longngn',
    twitter: 'https://twitter.com/ngnlongl',
    linkedin: 'https://www.linkedin.com/in/ngnlong/',
  },
  {
    name: 'Hieu Phan',
    image: hieuPhanImage,
    title: 'Software Engineer',
    github: 'https://github.com/hieupnh',
    twitter: 'https://twitter.com/sun4123',
    linkedin: 'https://www.linkedin.com/in/phan-nguyen-huy-hieu-831a77152/',
  },
  {
    name: 'Richard Nguyen',
    image: richardNguyenImage,
    title: 'Software Engineer',
    github: 'https://github.com/h2physics',
    twitter: 'https://twitter.com/Richard78244114',
    linkedin: 'https://www.linkedin.com/in/nguy%E1%BB%85n-v%C4%83n-h%C6%B0ng-700739163/',
  },
  {
    name: 'Khanh Le',
    image: khanhLeImage,
    title: 'Software Engineer',
    github: 'https://github.com/lednhatkhanh',
    twitter: 'https://twitter.com/lednhatkhanh',
    linkedin: 'https://www.linkedin.com/in/lednhatkhanh',
  },
  {
    name: 'Matt Cassler',
    image: mattImage,
    title: 'Marketing',
    twitter: 'https://twitter.com/Cassler33',
  },
  {
    name: 'Abdelilah Driouch',
    image: abdelImage,
    title: 'Product Designer',
    linkedin: 'https://www.linkedin.com/in/abdelilahdr/',
    link: 'https://abdel.design/me',
    twitter: 'https://twitter.com/abdelilahDR',
  },
];

type Props = {
  discordUsers: DiscordUser[];
};

export default function TeamPage(props: Props) {
  return (
    <>
      <Header />

      <main>
        <div className="h-24"></div>

        <SectionTitle>The Team</SectionTitle>

        <div className="h-24"></div>

        <div className="grid justify-center gap-x-20 gap-y-20 teamMembers">
          {teamMembers.map((member) => (
            <TeamMemberItem
              github={member.github}
              image={member.image}
              key={member.name}
              link={member.link}
              linkedin={member.linkedin}
              name={member.name}
              title={member.title}
              twitter={member.twitter}
            />
          ))}
        </div>

        <div className="h-20" />

        <JoinTheCommunity />

        <DiscordCommunity users={props.discordUsers} />

        <div className="h-20" />
      </main>

      <SeparatorLine />

      <Footer />

      <style jsx>{`
        .teamMembers {
          grid-template-columns: repeat(3, max-content);
        }
      `}</style>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const discordUsers = await getTopDiscordUsers();

  return {
    props: { discordUsers },
    revalidate: 3600 * 24, // Cache for 1 day
  };
}
