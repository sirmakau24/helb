import { Bell, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">My Loans and Scholarships</h1>
          <nav className="flex items-center gap-2 mt-1">
            <span className="text-sm text-muted-foreground">Dashboard</span>
            <span className="text-sm text-muted-foreground">{'>'}</span>
            <span className="text-sm text-muted-foreground">Loans and Scholarships</span>
            <span className="text-sm text-muted-foreground">{'>'}</span>
            <span className="text-sm text-helb font-medium">My Loans and Scholarships</span>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="relative">
            <Mail className="h-5 w-5 text-muted-foreground" />
          </Button>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 bg-red-500 text-white text-xs flex items-center justify-center">
              1
            </Badge>
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Hello, BRIAN MAKAU</p>
              <p className="text-xs text-muted-foreground">Student Portal</p>
            </div>
            <div className="w-8 h-8 bg-helb rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}