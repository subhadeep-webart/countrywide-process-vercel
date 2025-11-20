"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SidebarNavigationMenuContainer = ({ item }) => {
  const pathname = usePathname();

  // true if ANY child matches current route
  const isChildActive = item?.children?.some(
    (child) => pathname === child.path
  );

  // auto-open if child is active
  const [isOpen, setIsOpen] = useState(isChildActive);

  const isActive = pathname === item.path;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      {/* Parent Link */}
      <CollapsibleTrigger asChild>
        <Link
          href={item.path}
          className={cn(
            "flex w-full flex-row items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            isActive && "bg-sidebar-primary text-sidebar-primary-foreground"
          )}
        >
          <item.icon className="h-5 w-5 shrink-0 flex-shrink-0" />

          <span className="flex-1 min-w-0 text-left">{item.label}</span>

          {item.children?.length > 0 && (
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 flex-shrink-0 transition-transform",
                isOpen && "rotate-180"
              )}
            />
          )}
        </Link>
      </CollapsibleTrigger>

      {/* Child Links */}
      <CollapsibleContent className="pl-4 space-y-1">
        {item?.children?.map((child) => {
          const isChildRouteActive = pathname === child.path;

          return (
            <Link
              key={child.path}
              href={child.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isChildRouteActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <child.icon className="h-4 w-4 shrink-0 flex-shrink-0" />
              <span className="min-w-0">{child.label}</span>
            </Link>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarNavigationMenuContainer;
