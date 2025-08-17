import React from "react";
import Link from "next/link";
import { ContactInfo } from "@/types/footer";

interface FooterContactSectionProps {
  contactInfo: ContactInfo[];
}

function FooterContactSection({ contactInfo }: FooterContactSectionProps) {
  const renderContactItem = (contact: ContactInfo) => {
    const IconComponent = contact.icon;
    const content = (
      <span className="flex items-center justify-start gap-2">
        <IconComponent className="w-4 h-4 text-white" />
        <p className="text-[#F2F5F0]">{contact.text}</p>
      </span>
    );

    if (contact.href) {
      return (
        <Link
          key={contact.text}
          href={contact.href}
          className="hover:text-white transition-colors"
        >
          {content}
        </Link>
      );
    }

    return <div key={contact.text}>{content}</div>;
  };

  return (
    <div className="flex flex-col gap-3">
      <b className="font-bold text-white">Location</b>
      <div className="text-white flex flex-col gap-2">
        {contactInfo.map(renderContactItem)}
      </div>
    </div>
  );
}

export default FooterContactSection;
