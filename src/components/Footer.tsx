import * as React from 'react';
import Link from 'next/link';

const resourcesLinksProps: LinksColumnProps = {
  title: 'Resources',
  links: [
    { text: 'Whitepaper', href: 'https://docs.minswap.org/whitepaper' },
    { text: 'FAQ', href: 'https://docs.minswap.org/faq' },
    { text: 'Brand Assets', href: '/minswap-branding.zip' },
  ],
};

const productsLinksProps: LinksColumnProps = {
  title: 'Products',
  links: [{ text: 'Governance', href: 'https://docs.minswap.org/proposals/governance' }],
};

const documentationLinksProps: LinksColumnProps = {
  title: 'Documentation',
  links: [{ text: 'Oracle', href: 'https://docs.minswap.org/oracle' }],
};

const foundationLinksProps: LinksColumnProps = {
  title: 'Partnership',
  links: [{ text: 'Contact', href: 'contact@minswap.org' }],
};

export function Footer() {
  return (
    <footer className="flex justify-center pt-20 pb-16 bg-trueGray-50 gap-y-2">
      <div>
        <div className="flex gap-x-32">
          <LinksColumn links={resourcesLinksProps.links} title={resourcesLinksProps.title} />

          <LinksColumn links={productsLinksProps.links} title={productsLinksProps.title} />

          <LinksColumn links={documentationLinksProps.links} title={documentationLinksProps.title} />

          <LinksColumn links={foundationLinksProps.links} title={foundationLinksProps.title} />
        </div>

        <div className="h-10"></div>

        <div className="flex flex-col text-sm gap-y-2">
          <div className="font-bold">Minswap</div>
          <div className="text-trueGray-500">Copyright © 2021 Minswap Labs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

type LinksColumnProps = {
  title: string;
  links: Array<{ text: string; href: string; isExternal?: boolean }>;
};

function LinksColumn({ links, title }: LinksColumnProps) {
  return (
    <div className="flex flex-col text-sm">
      <div>{title}</div>

      <div className="h-4"></div>

      <div className="flex flex-col gap-y-2">
        {links.map((link) => (
          <Link href={link.href} key={link.text}>
            <a className="text-trueGray-500">{link.text}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
