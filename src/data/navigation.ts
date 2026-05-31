export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Our Service', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Projects', href: '#projects' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Walk in Closet', href: '#closet' },
      { label: 'Wardrobe Closet', href: '#wardrobe' },
      { label: 'U-Shape Kitchen', href: '#u-kitchen' },
      { label: 'Pantry Kitchen', href: '#pantry' },
      { label: 'Doors', href: '#doors' },
    ],
  },
];

export const CONTACT_INFO = {
  website: 'www.idealhome.ae',
  email: 'info@idealhome.com',
  phones: ['+971-000-00-000', '971 (0)50 312 2300'],
};