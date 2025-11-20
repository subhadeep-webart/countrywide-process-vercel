"use client"

import { ChevronDown, ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import SidebarNavigationMenuContainer from "./common/SidebarComponent/SidebarNavigationMenuContainer";

export function NavMain({
  items
}) {
  // const isChildActive = item.children?.some(child => location.pathname === child.path) || false;
  // const [isOpen, setIsOpen] = useState(isChildActive);
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item, length) => (
          // <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
          //   <SidebarMenuItem>
          //     <SidebarMenuButton asChild tooltip={item.title}>
          //       <a href={item.url}>
          //         <item.icon />
          //         <span>{item.title}</span>
          //       </a>
          //     </SidebarMenuButton>
          //     {item.items?.length ? (
          //       <>
          //         <CollapsibleTrigger asChild>
          //           <SidebarMenuAction className="data-[state=open]:rotate-90">
          //             <ChevronRight />
          //             <span className="sr-only">Toggle</span>
          //           </SidebarMenuAction>
          //         </CollapsibleTrigger>
          //         <CollapsibleContent>
          //           <SidebarMenuSub>
          //             {item.items?.map((subItem) => (
          //               <SidebarMenuSubItem key={subItem.title}>
          //                 <SidebarMenuSubButton asChild>
          //                   <a href={subItem.url}>
          //                     <span>{subItem.title}</span>
          //                   </a>
          //                 </SidebarMenuSubButton>
          //               </SidebarMenuSubItem>
          //             ))}
          //           </SidebarMenuSub>
          //         </CollapsibleContent>
          //       </>
          //     ) : null}
          //   </SidebarMenuItem>
          // </Collapsible>
          // <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          //   <CollapsibleTrigger asChild>
          //     <button
          //       className={cn(
          //         "flex w-full flex-row items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          //       )}
          //     >
          //       <item.icon className="h-5 w-5 shrink-0 flex-shrink-0" />
          //       <span className="flex-1 min-w-0 text-left">{item.label}</span>
          //       <ChevronDown
          //         className={cn(
          //           "h-4 w-4 shrink-0 flex-shrink-0 transition-transform",
          //           isOpen && "transform rotate-180"
          //         )}
          //       />
          //     </button>
          //   </CollapsibleTrigger>
          //   <CollapsibleContent className="pl-4 space-y-1">
          //     {item.children.map((child) => (
          //       <Link
          //         key={child.path}
          //         href={child.path!}
          //         className={({ isActive }) =>
          //           cn(
          //             "flex flex-row items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
          //             isActive
          //               ? "bg-sidebar-primary text-sidebar-primary-foreground"
          //               : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          //           )
          //         }
          //       >
          //         <child.icon className="h-4 w-4 shrink-0 flex-shrink-0" />
          //         <span className="flex-1 min-w-0">{child.label}</span>
          //       </Link>
          //     ))}
          //   </CollapsibleContent>
          // </Collapsible>
          <SidebarNavigationMenuContainer item={item} key={`item-${length + 1}`} />
        ))}

      </SidebarMenu>
    </SidebarGroup>
  );
}
