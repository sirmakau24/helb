import { HelbSidebar } from "@/components/HelbSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { LoansTable } from "@/components/LoansTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <HelbSidebar />
      
      <div className="flex-1 md:ml-64 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <LoansTable />
          </div>
        </main>
        
        <footer className="border-t border-border p-4 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by: HELB ICT Team
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
