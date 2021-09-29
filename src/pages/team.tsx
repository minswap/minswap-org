import * as React from 'react';

import abdelImage from 'src/assets/team/abdel.jpeg';
import dungPhamImage from 'src/assets/team/dungph.jpeg';
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
    title: 'Lead Engineer',
    github: 'https://github.com/longngn',
    twitter: 'https://twitter.com/ngnlong',
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
    twitter: 'https://twitter.com/richard_ng_42',
    linkedin: 'https://www.linkedin.com/in/richard-nguyen-700739163/',
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
    title: 'Marketing Lead',
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
  {
    name: 'Qayyum Yazid',
    image: qayyumImage,
    title: 'Product Designer',
    linkedin: 'https://www.linkedin.com/in/qayyum-yazid',
    link: 'https://creary.net/@smolpadok',
    twitter: 'https://twitter.com/smolpadok',
  },
  {
    name: 'Ethan Protas',
    image: ethanImage,
    title: 'Operations Lead',
    linkedin: 'https://www.linkedin.com/in/ethan-protas-b0b724214/',
  },
  {
    name: 'Dung Pham',
    image: dungPhamImage,
    title: 'Software Engineer',
    github: 'https://github.com/ljttl3q04t',
    twitter: 'https://twitter.com/DzungPhamMins',
    linkedin: 'https://www.linkedin.com/in/dung-pham-7b21a2197/',
  },
];

export default function TeamPage() {
  return (
    <MainLayout>
      <div className="h-12 lg:h-24"></div>

      <SectionTitle>The Team</SectionTitle>

      <div className="h-12 lg:h-24"></div>

      <div className="flex justify-center w-full px-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-20 md:gap-15 w-max teamMembers">
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
      </div>
    </MainLayout>
  );
}
