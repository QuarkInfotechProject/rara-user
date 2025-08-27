import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { BreadcrumbsProps } from "./type";

const Breadcrumbs = ({ data }: BreadcrumbsProps) => {
  const type = data?.type;
  const title = data?.title;

  // Create breadcrumb segments based on API data
  const segments = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: type, 
      href: `/${type}`,
    },
    {
      label: title,
      isCurrentPage: true,
    },
  ];

  return (
    <div className="flex w-full items-center">
      <Breadcrumb>
        <BreadcrumbList>
          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1;
            const isCurrentPage = segment.isCurrentPage || isLast;

            return (
              <div
                key={`${segment.label}-${index}`}
                className="flex items-center"
              >
                <BreadcrumbItem>
                  {isCurrentPage ? (
                    <BreadcrumbPage>{segment.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={segment.href!}>{segment.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {!isLast && <BreadcrumbSeparator />}
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
