import * as React from 'react';
import { GetStaticPropsResult } from 'next';

import { DiscordUser, getTopDiscordUsers } from 'src/api/discord-users';
import abdelImage from 'src/assets/team/abdel.jpeg';
import ethanImage from 'src/assets/team/ethan.jpg';
import hieuPhanImage from 'src/assets/team/hieupnh.jpeg';
import richardNguyenImage from 'src/assets/team/hungnv.jpg';
import khanhLeImage from 'src/assets/team/khanhle.jpeg';
import longNguyenImage from 'src/assets/team/longnlv.jpg';
import mattImage from 'src/assets/team/mattcass.jpeg';
import qayyumImage from 'src/assets/team/qayyum.png';
import { SectionTitle, TeamMemberItem } from 'src/components';
import { MainLayout } from 'src/layouts';

const teamMembers = [
  {
    name: 'Long Nguyen',
    image: longNguyenImage,
    title: 'Shadowy Super-Coder Lead',
    github: 'https://github.com/longngn',
    twitter: 'https://twitter.com/ngnlongl',
    linkedin: 'https://www.linkedin.com/in/ngnlong/',
  },
  {
    name: 'Hieu Phan',
    image: hieuPhanImage,
    title: 'Shadowy Super-Coder',
    github: 'https://github.com/hieupnh',
    twitter: 'https://twitter.com/sun4123',
    linkedin: 'https://www.linkedin.com/in/phan-nguyen-huy-hieu-831a77152/',
  },
  {
    name: 'Richard Nguyen',
    image: richardNguyenImage,
    title: 'Shadowy Super-Coder',
    github: 'https://github.com/h2physics',
    twitter: 'https://twitter.com/Richard78244114',
    linkedin: 'https://www.linkedin.com/in/richard-nguyen-700739163/',
  },
  {
    name: 'Khanh Le',
    image: khanhLeImage,
    title: 'Shadowy Super-Coder',
    github: 'https://github.com/lednhatkhanh',
    twitter: 'https://twitter.com/lednhatkhanh',
    linkedin: 'https://www.linkedin.com/in/lednhatkhanh',
  },
  {
    name: 'Matt Cassler',
    image: mattImage,
    title: 'Shadowy Super-Marketer',
    twitter: 'https://twitter.com/Cassler33',
  },
  {
    name: 'Abdelilah Driouch',
    image: abdelImage,
    title: 'Shadowy Super-Designer',
    linkedin: 'https://www.linkedin.com/in/abdelilahdr/',
    link: 'https://abdel.design/me',
    twitter: 'https://twitter.com/abdelilahDR',
  },
  {
    name: 'Qayyum Yazid',
    image: qayyumImage,
    title: 'Shadowy Super-Designer',
    linkedin: 'https://www.linkedin.com/in/qayyum-yazid',
    link: 'https://creary.net/@smolpadok',
    twitter: 'https://twitter.com/smolpadok',
  },
  {
    name: 'Ethan Protas',
    image: ethanImage,
    title: 'Shadowy Super-Operations Lead',
    linkedin: 'https://www.linkedin.com/in/ethan-protas-b0b724214/',
  },
];

type Props = {
  discordUsers: DiscordUser[];
};

export default function TeamPage(props: Props) {
  return (
    <MainLayout discordUsers={props.discordUsers} isScroll={true}>
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

      <style jsx>{`
        .teamMembers {
          grid-template-columns: repeat(3, max-content);
        }
      `}</style>
    </MainLayout>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const discordUsers = await getTopDiscordUsers();

  return {
    props: { discordUsers },
    revalidate: 3600 * 24, // Cache for 1 day
  };
}
