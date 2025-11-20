"use client"

import { Bell, Calendar, Search, Building2, Building, Users2, Briefcase, FolderKanban, Layers, Recycle, FileCheck, BarChart3, CalendarDays, User, UsersRound, Settings, LogOut, Database } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ThemeToggle } from "./theme-switcher";
import { useTheme } from "next-themes";

export function SiteHeader() {
  const { theme } = useTheme();
  const { toggleSidebar } = useSidebar()
  const isPlatformAdmin = true;

  const adminMenuItems = [
    { icon: Building2, label: "Accounts", path: "/users/accounts" },
    { icon: Users2, label: "Vendors", path: "/vendors" },
    { icon: User, label: "Admin Users", path: "/users/admin" },
    { icon: Building, label: "Offices", path: "/offices" },
    { icon: Briefcase, label: "Portfolios", path: "/portfolios" },
    { icon: FolderKanban, label: "Programs", path: "/programs" },
    { icon: Layers, label: "Projects", path: "/projects" },
    { icon: Recycle, label: "Resourcing", path: "/resourcing" },
    { icon: FileCheck, label: "Requests", path: "/requests" },
    { icon: BarChart3, label: "Reports", path: "/reports" },
    { icon: CalendarDays, label: "Calendars", path: "/calendars" },
    { icon: UsersRound, label: "Teams", path: "/teams" },
    { icon: Database, label: "Import ZIP Codes", path: "/admin/zip-code-import" },
  ];

  // Base menu items for all users
  const baseMenuItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <header
      className="bg-card sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4 justify-between">
        <div className="flex items-center w-72 shrink-0">
          <img src={isDark ? "/images/logo-full-dark.png" : "/images/logo-full.png"} alt="CountrywideProcess - An Attorney Support Service Company" className="h-10 w-auto max-w-full object-contain" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search now"
              className="pl-9"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-xs font-medium">DUE IN</span>
            <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center">
              3
            </Badge>
          </Button>

          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-xs font-medium">DUE IN</span>
            <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center">
              5
            </Badge>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge
              variant="destructive"
              className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              16
            </Badge>
          </Button>

          {/* <ThemeToggle /> */}
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={"/images/logo-small.jpg"} alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 z-[100]" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Admin 1</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admin@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              {isPlatformAdmin && (
                <>
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    Quick Jump
                  </DropdownMenuLabel>
                  <div className="grid grid-cols-3 gap-1 p-2">
                    {adminMenuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <DropdownMenuItem
                          key={item.path}
                          onClick={() => navigate(item.path)}
                          className="cursor-pointer flex flex-col items-center gap-2 py-3 hover:bg-muted"
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-xs text-center">{item.label}</span>
                        </DropdownMenuItem>
                      );
                    })}
                  </div>
                  <DropdownMenuSeparator />
                </>
              )}

              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Account
              </DropdownMenuLabel>
              {baseMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownMenuItem
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className="cursor-pointer"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                );
              })}

              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
