"use client";
import * as React from "react"
import { Home,Users,Wifi, Settings } from "lucide-react";

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
   
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      items: [
        {
          title: "Dashboard",
          url: "/admin/dashboard",
          icon: <Home />,
          isActive: true,
        },
        {
          title: "Affiliate",
          url: "affiliate",
          icon: <Users />,

        },
        {
          title: "Marketplace",
          url: "marketplace",
          icon: <Wifi />,
        },
      ],
    },
    {
      title: "Getting Started",
      url: "campaign-settings",
      items: [
        {
          title: "Settings",
          url: "campaign-settings",
          icon: <Settings />,
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState("Dashboard");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedActiveItem = sessionStorage.getItem("activeItem") || "Dashboard";
      setActiveItem(storedActiveItem);
    } 
  }, []);

  const handleItemClick = (title) => {
    setActiveItem(title);
    sessionStorage.setItem("activeItem", title);
  };
  if (activeItem === null) {
    return null; // or a loading spinner
  }
  return (
    (<Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title} onClick={() => handleItemClick(item.title)}>
                    <SidebarMenuButton asChild isActive={activeItem === item.title? true : false} >
                    <div className="flex items-center">
                      <span className="">
                        {item?.icon}
                        </span>
                      <a className="text-black font-bold hover:no-underline no-underline" href={item.url}>{item.title}</a>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>)
  );
}
