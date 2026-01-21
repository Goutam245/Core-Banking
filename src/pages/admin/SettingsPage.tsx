import { useParams } from 'react-router-dom';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  const { section } = useParams<{ section: string }>();

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-card-foreground capitalize">{section?.replace('-', ' ') || 'Settings'}</h1>
      <div className="card-premium p-12 text-center">
        <Settings className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Configuration</h2>
        <p className="text-muted-foreground">Configure {section?.replace('-', ' ')} settings here</p>
      </div>
    </div>
  );
}
