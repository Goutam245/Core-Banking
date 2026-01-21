import { useParams } from 'react-router-dom';
import { demoInstruments } from '@/data/mockData';
import { formatCurrency, formatDate } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { Plus, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const typeLabels: Record<string, string> = {
  cd: 'Certificate of Deposit', sblc: 'Standby Letter of Credit', bg: 'Bank Guarantee',
  skr: 'Safe Keeping Receipt', bcc: 'Bank Certified Check', pof: 'Proof of Funds',
  bf: 'Block Funds', ktt: 'Key Tested Telex', swift: 'SWIFT Instruments'
};

export default function ProductsPage() {
  const { type } = useParams<{ type: string }>();
  const filtered = demoInstruments.filter(i => i.type.toLowerCase() === type?.toUpperCase() || !type);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-card-foreground">{type ? typeLabels[type] || 'Banking Products' : 'Banking Products'}</h1>
        <Button className="gradient-primary text-white"><Plus className="w-4 h-4 mr-2" />Add New</Button>
      </div>
      <div className="card-premium">
        <table className="table-premium">
          <thead><tr><th>Reference</th><th>Customer</th><th>Type</th><th>Amount</th><th>Issue Date</th><th>Maturity</th><th>Status</th></tr></thead>
          <tbody>
            {filtered.length > 0 ? filtered.map((i) => (
              <tr key={i.id}>
                <td className="font-mono">{i.referenceNumber}</td>
                <td>{i.customerName}</td>
                <td>{i.type}</td>
                <td className="font-mono">{formatCurrency(i.amount, i.currency)}</td>
                <td>{formatDate(i.issueDate)}</td>
                <td>{formatDate(i.maturityDate)}</td>
                <td><span className={cn("px-2 py-1 rounded-full text-xs font-medium capitalize", i.status === 'active' ? "badge-success" : "badge-warning")}>{i.status}</span></td>
              </tr>
            )) : (
              <tr><td colSpan={7} className="text-center py-12 text-muted-foreground"><FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />No records found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
