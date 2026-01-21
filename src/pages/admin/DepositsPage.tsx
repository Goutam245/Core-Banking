import { demoDeposits } from '@/data/mockData';
import { formatCurrency } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DepositsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-card-foreground">Deposits</h1>
        <Button className="gradient-primary text-white"><Plus className="w-4 h-4 mr-2" />Add Deposit</Button>
      </div>
      <div className="card-premium">
        <table className="table-premium">
          <thead><tr><th>Account</th><th>Customer</th><th>Type</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {demoDeposits.map((d) => (
              <tr key={d.id}>
                <td className="font-mono">{d.accountNumber}</td>
                <td>{d.customerName}</td>
                <td className="capitalize">{d.type}</td>
                <td className="font-mono">{formatCurrency(d.amount, d.currency)}</td>
                <td><span className={cn("px-2 py-1 rounded-full text-xs font-medium capitalize", d.status === 'released' ? "badge-success" : "badge-warning")}>{d.status}</span></td>
                <td>{d.status === 'hold' && <Button size="sm" variant="outline">Release</Button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
