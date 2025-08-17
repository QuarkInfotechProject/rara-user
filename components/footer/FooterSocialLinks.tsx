import React from "react";
import Link from "next/link";
import { SocialLink } from "@/types/footer";

interface FooterSocialLinksProps {
  socialLinks: SocialLink[];
}

function FooterSocialLinks({ socialLinks }: FooterSocialLinksProps) {
  const renderSocialLink = (social: SocialLink) => {
    const IconComponent = social.icon;
    return (
      <Link
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300 transition-colors"
        aria-label={social.label}
      >
        <IconComponent className="w-6 h-6" />
      </Link>
    );
  };

  return (
    <div className="flex items-center gap-12 md:gap-6 text-white">
      {socialLinks.map(renderSocialLink)}
    </div>
  );
}

export default FooterSocialLinks;
