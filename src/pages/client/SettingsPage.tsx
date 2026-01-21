import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-card-foreground">Settings</h1>
      <div className="card-premium p-12 text-center">
        <Settings className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
        <p className="text-muted-foreground">Manage your profile, security, and preferences</p>
      </div>
    </div>
  );
}
