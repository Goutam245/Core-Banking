import { demoTransactions } from '@/data/mockData';
import { formatCurrency, formatDateTime } from '@/utils/formatters';
import { cn } from '@/lib/utils';

export default function TransactionsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-card-foreground">Transactions</h1>
      <div className="card-premium">
        <table className="table-premium">
          <thead><tr><th>Reference</th><th>Description</th><th>Type</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            {demoTransactions.map((t) => (
              <tr key={t.id}>
                <td className="font-mono text-sm">{t.reference}</td>
                <td>{t.description}</td>
                <td className="capitalize">{t.type}</td>
                <td className="font-mono">{formatCurrency(t.amount, t.currency)}</td>
                <td><span className={cn("px-2 py-1 rounded-full text-xs font-medium capitalize", t.status === 'completed' ? "badge-success" : t.status === 'pending' ? "badge-warning" : "badge-danger")}>{t.status}</span></td>
                <td className="text-muted-foreground">{formatDateTime(t.timestamp)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
