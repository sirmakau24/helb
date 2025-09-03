import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  FileText,
  Calendar,
  DollarSign,
  Hash
} from "lucide-react";

interface LoanDetail {
  id: string;
  action: string;
  dateProcessed: string;
  amount: number;
  admissionNumber: string;
  batch: string;
  description: string;
}

interface LoanDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  loanDetails?: LoanDetail[];
}

export function LoanDetailsModal({ isOpen, onClose, loanDetails = [] }: LoanDetailsModalProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("status");
  
  const defaultLoanDetails: LoanDetail[] = [
    {
      id: "1",
      action: "Sem 1 Upkeep loan issue to the mobile wallet",
      dateProcessed: "21/08/2023",
      amount: 15000,
      admissionNumber: "HB0212-2502/2014",
      batch: "HEL",
      description: "Semester 1 upkeep allowance disbursement"
    },
    {
      id: "2", 
      action: "Sem 2 Tuition Fee Payment",
      dateProcessed: "15/01/2024",
      amount: 30000,
      admissionNumber: "HB0212-2502/2014", 
      batch: "HEL",
      description: "Semester 2 tuition fee payment to institution"
    }
  ];

  const displayDetails = loanDetails.length > 0 ? loanDetails : defaultLoanDetails;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-foreground">
            Loan Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Tabs */}
          <div className="flex gap-2">
            <Button 
              variant={activeTab === "status" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("status")}
              className="bg-helb text-white hover:bg-helb-dark"
            >
              Loan Status
            </Button>
            <Button 
              variant={activeTab === "history" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("history")}
              className="bg-helb text-white hover:bg-helb-dark"
            >
              Loan History
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-4">
            <Button variant="destructive" size="sm" className="bg-red-500 hover:bg-red-600">
              <FileText className="h-4 w-4 mr-2" />
              Print Disbursement Report
            </Button>
            <Button variant="destructive" size="sm" className="bg-red-500 hover:bg-red-600">
              <FileText className="h-4 w-4 mr-2" />
              Print Award Letter
            </Button>
          </div>

          {/* Table */}
          <div className="border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-medium text-sm">Action</th>
                    <th className="text-left p-3 font-medium text-sm">Date Processed</th>
                    <th className="text-left p-3 font-medium text-sm">Amount (KShs)</th>
                    <th className="text-left p-3 font-medium text-sm">Admission Number</th>
                    <th className="text-left p-3 font-medium text-sm">Batch</th>
                  </tr>
                </thead>
                <tbody>
                  {displayDetails.map((detail, index) => (
                    <tr key={detail.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3">
                        <div className="max-w-xs">
                          <p className="text-sm font-medium">{detail.action}</p>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{detail.dateProcessed}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-helb" />
                          <span className="text-sm font-medium">{detail.amount.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{detail.admissionNumber}</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <Badge variant="secondary" className="bg-helb-light text-helb">
                          {detail.batch}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex-1 bg-gray-200 rounded-full h-2 mx-4">
              <div 
                className="bg-helb h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(currentPage / 3) * 100}%` }}
              />
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
              disabled={currentPage === 3}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}