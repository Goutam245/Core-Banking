import { demoAccounts } from '@/data/mockData';
import { formatCurrency } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { Plus, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AccountsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-card-foreground">Accounts</h1>
        <Button className="gradient-primary text-white"><Plus className="w-4 h-4 mr-2" />Create Account</Button>
      </div>
      <div className="card-premium">
        <table className="table-premium">
          <thead><tr><th>Account #</th><th>Customer</th><th>Type</th><th>Currency</th><th>Available</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {demoAccounts.map((a) => (
              <tr key={a.id}>
                <td className="font-mono">{a.accountNumber}</td>
                <td>{a.customerName}</td>
                <td className="capitalize">{a.type}</td>
                <td>{a.currency}</td>
                <td className="font-mono">{formatCurrency(a.availableBalance, a.currency)}</td>
                <td><span className={cn("px-2 py-1 rounded-full text-xs font-medium capitalize", a.status === 'active' ? "badge-success" : "badge-warning")}>{a.status}</span></td>
                <td><Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
