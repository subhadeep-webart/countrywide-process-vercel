"use client"

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  HelpCircle,
  LogOut,
  Settings,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export function NavUser({
  user
}) {
  const { isMobile, isCollapsed } = useSidebar()
  console.log("is iiii=====>",isCollapsed);

  return (
    <SidebarMenu key={"234"}>
      <SidebarMenuItem>
        <div>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              isMobile && "justify-center px-2"
            )}
          >
            <HelpCircle className="h-5 w-5 shrink-0" />
            {!isCollapsed && <span>Help</span>}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              isMobile && "justify-center px-2"
            )}
          >
            <Settings className="h-5 w-5 shrink-0" />
            {!isCollapsed && <span>Settings</span>}
          </Button>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
