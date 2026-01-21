import { demoHolds } from '@/data/mockData';
import { formatCurrency } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HoldsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-card-foreground">Holds Management</h1>
        <Button className="gradient-primary text-white"><Plus className="w-4 h-4 mr-2" />Add Hold</Button>
      </div>
      <div className="card-premium">
        <table className="table-premium">
          <thead><tr><th>Account</th><th>Customer</th><th>Type</th><th>Amount</th><th>Description</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {demoHolds.map((h) => (
              <tr key={h.id}>
                <td className="font-mono">{h.accountNumber}</td>
                <td>{h.customerName}</td>
                <td className="capitalize">{h.type}</td>
                <td className="font-mono">{formatCurrency(h.amount, h.currency)}</td>
                <td className="max-w-xs truncate">{h.description}</td>
                <td><span className={cn("px-2 py-1 rounded-full text-xs font-medium capitalize", h.status === 'released' ? "badge-success" : "badge-warning")}>{h.status}</span></td>
                <td>{h.status === 'active' && <Button size="sm" variant="outline">Release</Button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
