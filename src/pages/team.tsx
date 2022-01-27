import * as React from 'react';

import abdelImage from 'src/assets/team/abdel.png';
import adrianImage from 'src/assets/team/adrian.png';
import badrImage from 'src/assets/team/badr.png';
import duyImage from 'src/assets/team/duy.png';
import dzungImage from 'src/assets/team/dzung.png';
import ethanImage from 'src/assets/team/ethan.png';
import hieuPhanImage from 'src/assets/team/hieu.png';
import jamesImage from 'src/assets/team/james.png';
import khanhLeImage from 'src/assets/team/khanh.png';
import longNguyenImage from 'src/assets/team/long.png';
import parichayImage from 'src/assets/team/parichay.png';
import richardNguyenImage from 'src/assets/team/richard.png';
import smolpadokImage from 'src/assets/team/smolpadok.png';
import { SectionTitle, TeamMemberItem } from 'src/components';
import { MainLayout } from 'src/layouts';

const teamMembers = [
  {
    name: 'Long',
    image: longNguyenImage,
    title: 'Founder / Lead Engineer',
    github: 'https://github.com/longngn',
    twitter: 'https://twitter.com/ngnlong',
  },
  {
    name: 'Hieu Phan',
    image: hieuPhanImage,
    title: 'Co-Founder',
    github: 'https://github.com/hieupnh',
    twitter: 'https://twitter.com/hieupnh',
  },
  {
    name: 'Richard',
    image: richardNguyenImage,
    title: 'Co-Founder',
    github: 'https://github.com/h2physics',
    twitter: 'https://twitter.com/richard_ng_42',
  },
  {
    name: 'Khanh',
    image: khanhLeImage,
    title: 'Software Engineer',
    github: 'https://github.com/lednhatkhanh',
    twitter: 'https://twitter.com/lednhatkhanh',
  },
  {
    name: 'Abdelilah',
    image: abdelImage,
    title: 'Product Designer',
    github: 'https://github.com/abdelilahDR',
    twitter: 'https://twitter.com/abdelilahDR',
  },
  {
    name: 'Smolpadok',
    image: smolpadokImage,
    title: 'Product Designer',
    link: 'https://creary.net/@smolpadok',
    twitter: 'https://twitter.com/smolpadok',
  },
  {
    name: 'Dzung',
    image: dzungImage,
    title: 'Software Engineer',
    github: 'https://github.com/ljttl3q04t',
    twitter: 'https://twitter.com/DzungPhamMins',
  },
  {
    name: 'Thai Bao',
    image: jamesImage,
    title: 'Software Engineer',
    github: 'https://github.com/theuranus',
    twitter: 'https://twitter.com/james_ng_th',
  },
  {
    name: 'Parichay',
    image: parichayImage,
    title: 'Software Engineer',
    github: 'https://github.com/baymac',
  },
  {
    name: 'Duy Tran',
    image: duyImage,
    title: 'Software Quality Assurance',
    twitter: 'https://twitter.com/DuyTrn41315594',
  },
  {
    name: 'PurritoGeneral',
    image: adrianImage,
    title: 'Growth',
    twitter: 'https://twitter.com/PurritoGeneral',
  },
  {
    name: 'Badr',
    image: badrImage,
    title: 'Growth',
    twitter: 'https://twitter.com/elfahimbadr',
  },
];

const advisors = [
  {
    name: 'Ethan Protas',
    image: ethanImage,
    title: 'Strategy Advisor',
    linkedin: 'https://www.linkedin.com/in/ethan-protas-b0b724214/',
  },
];

export default function TeamPage() {
  return (
    <MainLayout>
      <div className="h-12 lg:h-24"></div>

      <SectionTitle>The Team</SectionTitle>

      <div className="h-12 lg:h-24"></div>

      <div className="flex justify-center w-full px-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-28 md:gap-15 w-max teamMembers">
          {teamMembers.map((member) => (
            <TeamMemberItem
              github={member.github}
              image={member.image}
              key={member.name}
              link={member.link}
              name={member.name}
              title={member.title}
              twitter={member.twitter}
            />
          ))}
        </div>
      </div>

      <div className="h-12 lg:h-24"></div>

      <SectionTitle>Advisors</SectionTitle>

      <div className="h-12 lg:h-24"></div>

      <div className="flex justify-center w-full px-5">
        <div className="text-center w-max teamMembers">
          {advisors.map((member) => (
            <TeamMemberItem
              image={member.image}
              key={member.name}
              linkedin={member.linkedin}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
