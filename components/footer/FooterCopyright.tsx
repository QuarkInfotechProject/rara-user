import React from "react";
import { Copyright } from "@/types/footer";

interface FooterCopyrightProps {
  copyright: Copyright;
}

function FooterCopyright({ copyright }: FooterCopyrightProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-1 text-white pt-6">
      <p>
        © {copyright.year} {copyright.companyName} - All Rights Reserved
      </p>
      <p>Design and Developed by {copyright.developer}</p>
    </div>
  );
}

export default FooterCopyright;
