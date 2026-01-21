import { demoWireSettings } from '@/data/mockData';

export default function FundingPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-card-foreground">Funding Instructions</h1>
      <div className="card-premium p-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: demoWireSettings.instructions }} />
    </div>
  );
}
