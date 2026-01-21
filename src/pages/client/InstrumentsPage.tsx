import { demoInstruments } from '@/data/mockData';
import { formatCurrency, formatDate } from '@/utils/formatters';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function InstrumentsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-card-foreground">Bank Instruments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {demoInstruments.map((inst) => (
          <div key={inst.id} className="card-premium p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{inst.type}</span>
                  <p className="font-mono text-sm text-muted-foreground mt-1">{inst.referenceNumber}</p>
                </div>
              </div>
              <span className={cn("px-2 py-1 rounded-full text-xs font-medium", inst.status === 'active' ? "badge-success" : "badge-warning")}>{inst.status}</span>
            </div>
            <p className="text-2xl font-bold mb-2">{formatCurrency(inst.amount, inst.currency)}</p>
            <p className="text-sm text-muted-foreground">Maturity: {formatDate(inst.maturityDate)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
