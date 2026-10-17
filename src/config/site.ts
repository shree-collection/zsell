
export type SocialLink = {
  name: string;
  handle: string;
  url: string;
  active: boolean;
  icon: string;
  description: string;
};

export const siteConfig = {
  name: "ZSell",
  tagline: "SELL SMART. GROW FAST.",
  website: "https://www.zsell.in",
  email: "info@zsell.in",
  whatsappNumber: "918796780766",
  whatsappDisplay: "+91 8796780766",
  instagram: "https://www.instagram.com/zsell.in/",

  socialLinks: [
    {
      name: "Instagram",
      handle: "@zsell.in",
      url: "https://www.instagram.com/zsell.in/",
      active: true,
      icon: "instagram",
      description:
        "Follow ZSell for practical e-commerce tips, business guidance, and ideas to grow online.",
    },
    {
      name: "LinkedIn",
      handle: "ZSell",
      url: "",
      active: false,
      icon: "linkedin",
      description:
        "Connect with ZSell for business insights, e-commerce guidance, and professional updates.",
    },
    {
      name: "Facebook",
      handle: "ZSell",
      url: "",
      active: false,
      icon: "facebook",
      description:
        "Discover ZSell updates, helpful resources, and tips for online sellers.",
    },
    {
      name: "YouTube",
      handle: "ZSell",
      url: "",
      active: false,
      icon: "youtube",
      description:
        "Explore tutorials and practical guidance for starting and growing an online business.",
    },
  ] satisfies SocialLink[],
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export const emailUrl = `mailto:${siteConfig.email}`;

export function getActiveSocialLinks(): SocialLink[] {
  return siteConfig.socialLinks.filter(
    (social) => social.active && social.url.trim() !== ""
  );
}
