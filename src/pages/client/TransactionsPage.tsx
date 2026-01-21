import { demoTransactions } from '@/data/mockData';
import { formatCurrency, formatDateTime } from '@/utils/formatters';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function TransactionsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-card-foreground">Transactions</h1>
      <div className="card-premium divide-y divide-border">
        {demoTransactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between p-4 hover:bg-muted/30">
            <div className="flex items-center gap-4">
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", t.type === 'credit' ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive")}>
                {t.type === 'credit' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
              </div>
              <div>
                <p className="font-medium">{t.description}</p>
                <p className="text-sm text-muted-foreground">{formatDateTime(t.timestamp)}</p>
              </div>
            </div>
            <p className={cn("font-semibold font-mono", t.type === 'credit' ? "text-success" : "")}>
              {t.type === 'credit' ? '+' : '-'}{formatCurrency(t.amount, t.currency)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
