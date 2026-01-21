import { demoBeneficiaries } from '@/data/mockData';
import { Users, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BeneficiariesPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-card-foreground">Beneficiaries</h1>
        <Button className="gradient-primary text-white"><Plus className="w-4 h-4 mr-2" />Add Beneficiary</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {demoBeneficiaries.map((b) => (
          <div key={b.id} className="card-premium p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">{b.name}</p>
              <p className="text-sm text-muted-foreground">{b.bankName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
