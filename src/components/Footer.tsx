import * as React from 'react';
import Link from 'next/link';

const resourcesLinksProps: LinksColumnProps = {
  title: 'Resources',
  links: [
    { text: 'Whitepaper', href: 'https://docs.minswap.org/whitepaper' },
    { text: 'FAQ', href: 'https://docs.minswap.org/faq/general' },
    { text: 'Brand Assets', href: '/minswap-branding.zip' },
  ],
};

const productsLinksProps: LinksColumnProps = {
  title: 'Products',
  links: [
    { text: 'Governance', href: 'https://forum.minswap.org' },
    { text: 'Merch', href: 'https://minswap.creator-spring.com/' },
  ],
};

const documentationLinksProps: LinksColumnProps = {
  title: 'Documentation',
  links: [{ text: 'Privacy policy', href: '/privacy' }],
};

const foundationLinksProps: LinksColumnProps = {
  title: 'Partnership',
  links: [{ text: 'Contact us', href: 'mailto:contact@minswap.org' }],
};

export function Footer() {
  return (
    <footer className="bg-trueGray-50 p-7 lg:flex lg:justify-center lg:pt-20 lg:pb-16 lg:gap-y-2">
      <div>
        <div className="grid grid-cols-2 gap-7 lg:grid-cols-4 lg:gap-x-32">
          <LinksColumn links={resourcesLinksProps.links} title={resourcesLinksProps.title} />

          <LinksColumn links={productsLinksProps.links} title={productsLinksProps.title} />

          <LinksColumn links={documentationLinksProps.links} title={documentationLinksProps.title} />

          <LinksColumn links={foundationLinksProps.links} title={foundationLinksProps.title} />
        </div>

        <div className="h-10" />

        <div className="flex flex-col text-sm gap-y-2">
          <div className="font-bold">Minswap</div>
          <div className="text-trueGray-500">© 2021 Minswap Team. All rights reserved.</div>
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
            <a className="text-trueGray-500 hover:text-black">{link.text}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
