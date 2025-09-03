import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, User, Bell } from "lucide-react";
import { LoanDetailsModal } from "./LoanDetailsModal";

interface Loan {
  id: string;
  status: string;
  upkeepAmount: number;
  productName: string;
  statusColor: "disbursed" | "progress" | "pending" | "rejected";
}

const loans: Loan[] = [
  {
    id: "1",
    status: "Disbursement in Progress",
    upkeepAmount: 30000,
    productName: "Undergraduate Studies",
    statusColor: "progress"
  },
  {
    id: "2", 
    status: "Fully Disbursed",
    upkeepAmount: 30000,
    productName: "Undergraduate Studies",
    statusColor: "disbursed"
  }
];

const getStatusBadgeClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "disbursement in progress":
      return "bg-status-progress text-white";
    case "fully disbursed":
      return "bg-status-disbursed text-white";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function LoansTable() {
  const [selectedLoanId, setSelectedLoanId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (loanId: string) => {
    setSelectedLoanId(loanId);
    setIsModalOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-foreground">My Loans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Loan Status</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Upkeep Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Product Name</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">View Details</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan) => (
                  <tr key={loan.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4">
                      <Badge className={getStatusBadgeClass(loan.status)}>
                        {loan.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-medium text-foreground">
                        KSh {loan.upkeepAmount.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-foreground">{loan.productName}</span>
                    </td>
                    <td className="py-4 px-4">
                      <Button 
                        variant="destructive"
                        size="sm"
                        onClick={() => handleViewDetails(loan.id)}
                        className="bg-red-500 hover:bg-red-600 text-white"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <LoanDetailsModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedLoanId(null);
        }}
      />
    </>
  );
}