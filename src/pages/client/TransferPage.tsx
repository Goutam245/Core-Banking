import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function TransferPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-card-foreground">Transfer Funds</h1>
      <div className="card-premium p-8 text-center">
        <Send className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Transfer Money</h2>
        <p className="text-muted-foreground mb-6">Send money between accounts or to beneficiaries</p>
        <Button className="gradient-primary text-white">Start Transfer</Button>
      </div>
    </div>
  );
}
