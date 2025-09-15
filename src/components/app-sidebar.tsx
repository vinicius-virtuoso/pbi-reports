"use client";

import { BadgeDollarSign, Building2, Store } from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "Vinicius Eduardo Virtuoso",
    email: "vinicius.virtuoso",
  },
  navMain: [
    {
      title: "Marketing",
      url: "#",
      icon: Store,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#",
        },
      ],
    },
    {
      title: "Vendas",
      url: "#",
      icon: BadgeDollarSign,
      isActive: false,
      items: [
        {
          title: "Ford",
          url: "#",
        },
        {
          title: "Volvo",
          url: "#",
        },
        {
          title: "GWM",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <Link href="/">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                variant="default"
                size="lg"
                className="text-blue-800 pointer-events-none"
              >
                <div className="shadow-2xl bg-blue-800 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Building2 className="size-4 text-b" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none  items-center justify-center">
                  <span className="font-bold text-2xl">Dimas</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      </Link>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
