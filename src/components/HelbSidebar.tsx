import { useState } from "react";
import { 
  Home, 
  FileText, 
  GraduationCap, 
  User, 
  DollarSign, 
  MessageSquare,
  Phone,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "My Account", url: "/account", icon: User, hasSubmenu: true },
  { title: "Messages", url: "/messages", icon: MessageSquare, badge: "3" },
];

const helbMenuItems = [
  { title: "Loan Application", url: "/loan-application", icon: FileText },
  { title: "My Profile", url: "/profile", icon: User },
  { title: "Funds Appeal", url: "/funds-appeal", icon: DollarSign },
  { title: "Postgrad Scholarships", url: "/scholarships", icon: GraduationCap },
  { title: "My Loans", url: "/loans", icon: DollarSign, active: true },
  { title: "Self Serve", url: "/self-serve", icon: User },
];

const helpMenuItems = [
  { title: "Contact Us", url: "/contact", icon: Phone },
];

export function HelbSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden fixed top-4 left-4 z-50 bg-helb text-white hover:bg-helb-dark"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-screen bg-gradient-sidebar border-r border-helb-sidebar transition-all duration-300 z-40",
        isCollapsed ? "w-16" : "w-64",
        isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-helb-sidebar-hover">
            <div className="flex items-center justify-between">
              {!isCollapsed && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-helb" />
                  </div>
                  <span className="text-white font-semibold text-sm">STUDENTS PORTAL</span>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-white hover:bg-helb-sidebar-hover"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            {/* Common Section */}
            <div className="p-2">
              {!isCollapsed && (
                <h3 className="px-3 py-2 text-xs font-semibold text-green-300 uppercase tracking-wider">
                  Common
                </h3>
              )}
              {menuItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-helb-sidebar-hover transition-colors",
                      isActive && "bg-helb-sidebar-hover"
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && (
                    <div className="flex items-center justify-between flex-1">
                      <span className="text-sm">{item.title}</span>
                      {item.badge && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.hasSubmenu && <ChevronDown className="h-4 w-4" />}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* HELB Menu Section */}
            <div className="p-2">
              {!isCollapsed && (
                <h3 className="px-3 py-2 text-xs font-semibold text-green-300 uppercase tracking-wider">
                  HELB Menu
                </h3>
              )}
              {helbMenuItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-helb-sidebar-hover transition-colors",
                      (isActive || item.active) && "bg-helb-sidebar-hover"
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && <span className="text-sm">{item.title}</span>}
                </NavLink>
              ))}
            </div>

            {/* HELB Desk Section */}
            <div className="p-2">
              {!isCollapsed && (
                <h3 className="px-3 py-2 text-xs font-semibold text-green-300 uppercase tracking-wider">
                  HELB Desk
                </h3>
              )}
              {helpMenuItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-helb-sidebar-hover transition-colors",
                      isActive && "bg-helb-sidebar-hover"
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && <span className="text-sm">{item.title}</span>}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-helb-sidebar-hover">
            {!isCollapsed && (
              <p className="text-xs text-green-300 text-center">
                Copyright © 2025 HELB. All rights reserved.
              </p>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}