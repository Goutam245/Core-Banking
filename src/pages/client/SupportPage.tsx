import { MessageSquare, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SupportPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-card-foreground">Support & Claims</h1>
        <Button className="gradient-primary text-white"><Plus className="w-4 h-4 mr-2" />New Ticket</Button>
      </div>
      <div className="card-premium p-12 text-center">
        <MessageSquare className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
        <p className="text-muted-foreground">Create a support ticket and our team will assist you</p>
      </div>
    </div>
  );
}
