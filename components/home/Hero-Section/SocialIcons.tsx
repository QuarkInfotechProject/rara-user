import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Github,
} from "lucide-react";
import { SocialMedia, IconProps } from "./types";

interface SocialIconsProps {
  socialMedia: SocialMedia[];
}

export const SocialIcons = ({
  socialMedia,
}: SocialIconsProps) => {
  const getSocialIcon = (iconName: SocialMedia["icon"]): JSX.Element => {
    const iconProps: IconProps = {
      className: "w-6 h-6 cursor-pointer transition-colors",
      size: 24,
    };

    switch (iconName) {
      case "Facebook":
        return (
          <Facebook
            {...iconProps}
            className={`${iconProps.className} hover:text-blue-400`}
          />
        );
      case "Instagram":
        return (
          <Instagram
            {...iconProps}
            className={`${iconProps.className} hover:text-pink-400`}
          />
        );
      case "Twitter":
        return (
          <Twitter
            {...iconProps}
            className={`${iconProps.className} hover:text-blue-300`}
          />
        );
      case "Youtube":
        return (
          <Youtube
            {...iconProps}
            className={`${iconProps.className} hover:text-red-400`}
          />
        );
      case "Linkedin":
        return (
          <Linkedin
            {...iconProps}
            className={`${iconProps.className} hover:text-blue-600`}
          />
        );
      case "Github":
        return (
          <Github
            {...iconProps}
            className={`${iconProps.className} hover:text-gray-400`}
          />
        );
      default:
        return <Facebook {...iconProps} />;
    }
  };

  return (
    <div className="w-[24.4px] absolute top-[calc(50%_-_36px)] left-[60px] hidden lg:flex flex-col items-center justify-center gap-[18px] z-[2]">
      {socialMedia.map((social: SocialMedia, index: number) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform"
          aria-label={`Visit our ${social.icon} page`}
        >
          {getSocialIcon(social.icon)}
        </Link>
      ))}
    </div>
  );
};
