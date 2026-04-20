import React from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="sticky bg-[var(--color-secondary)]">
      {/* Breadcrumb bar */}
      <div className=" ">
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center text-xs uppercase tracking-wide">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <div key={index} className="flex items-center">
                {/* Link or current */}
                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className="text-black hover:underline hover:text-black"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-black font-bold">{item.label}</span>
                )}

                {/* Separator */}
                {!isLast && <span className="mx-2 text-black">›</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
