"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BREADCRUMB_ROUTE_LABEL } from "@/utils/constant";

// Handle dynamic routes
const getDynamicLabel = (pathname) => {
    if (/^\/accounts\/[^/]+$/.test(pathname)) {
        return "Account Profile";
    }
    return null;
};

export default function Breadcrumbs() {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);

    const breadcrumbs = [{ label: "Dashboard", path: "/" }];
    let currentPath = "";

    pathSegments.forEach((segment) => {
        currentPath += `/${segment}`;

        const dynamicLabel = getDynamicLabel(currentPath);
        const label =
            dynamicLabel ||
            BREADCRUMB_ROUTE_LABEL[currentPath] ||
            segment.charAt(0).toUpperCase() + segment.slice(1);

        breadcrumbs.push({ label, path: currentPath });
    });

    return (
        <nav className="flex items-center space-x-2 text-base text-muted-foreground mb-8 py-2">
            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                const isHome = index === 0;

                return (
                    <div key={crumb.path} className="flex items-center">
                        {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}

                        {isLast ? (
                            <span className="font-semibold text-foreground flex items-center">
                                {isHome && <Home className="h-5 w-5 mr-2" />}
                                {crumb.label}
                            </span>
                        ) : (
                            <Link
                                href={crumb.path}
                                className={cn(
                                    "hover:text-foreground transition-colors flex items-center font-medium",
                                    isHome && "flex items-center"
                                )}
                            >
                                {isHome && <Home className="h-5 w-5 mr-2" />}
                                {crumb.label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
