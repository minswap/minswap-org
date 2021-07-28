import * as React from 'react';
import Image from 'next/image';

import githubIcon from 'src/assets/icons/github.svg';
import linkIcon from 'src/assets/icons/link.svg';
import linkedinIcon from 'src/assets/icons/linkedin.svg';
import twitterIcon from 'src/assets/icons/twitter.svg';

type Props = {
  image: StaticImageData;
  github?: string;
  linkedin?: string;
  twitter?: string;
  link?: string;
  title: string;
  name: string;
};

export function TeamMemberItem({ image, github, link, linkedin, twitter, name, title }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[12.5rem] h-[12.5rem]">
        <Image
          alt={name}
          className="rounded-full"
          height="200"
          objectFit="cover"
          placeholder="blur"
          src={image}
          width="200"
          priority
        />
      </div>

      <div className="h-8"></div>

      <div className="text-3xl font-bold">{name}</div>

      <div className="h-2"></div>

      <div>{title}</div>

      <div className="h-4"></div>

      <div className="flex items-center gap-x-2">
        {github ? (
          <a className="leading-none" href={github} rel="noreferrer noopener" target="_blank">
            <Image alt="Github link" src={githubIcon} />
          </a>
        ) : null}

        {linkedin ? (
          <a className="leading-none" href={linkedin} rel="noreferrer noopener" target="_blank">
            <Image alt="Linkedin link" src={linkedinIcon} />
          </a>
        ) : null}

        {twitter ? (
          <a className="leading-none" href={twitter} rel="noreferrer noopener" target="_blank">
            <Image alt="Twitter link" src={twitterIcon} />
          </a>
        ) : null}

        {link ? (
          <a className="leading-none" href={link} rel="noreferrer noopener" target="_blank">
            <Image alt="Link" src={linkIcon} />
          </a>
        ) : null}
      </div>
    </div>
  );
}
