import { demoAccounts } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';
import AccountCard from '@/components/ui/AccountCard';

export default function AccountsPage() {
  const { user } = useAuth();
  const accounts = demoAccounts.filter(a => a.customerName === user?.name);

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-card-foreground">Your Accounts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}
