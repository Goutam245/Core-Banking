import { demoCustomers } from '@/data/mockData';
import { getInitials } from '@/utils/formatters';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus, Search, MoreHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function CustomersPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-card-foreground">Customers</h1>
        <Button className="gradient-primary text-white"><Plus className="w-4 h-4 mr-2" />Add Customer</Button>
      </div>
      <div className="card-premium">
        <div className="p-4 border-b border-border flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search customers..." className="pl-10" />
          </div>
        </div>
        <table className="table-premium">
          <thead><tr><th>Customer</th><th>Email</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {demoCustomers.map((c) => (
              <tr key={c.id}>
                <td className="flex items-center gap-3">
                  <Avatar><AvatarFallback className="bg-primary/10 text-primary">{getInitials(c.name)}</AvatarFallback></Avatar>
                  <span className="font-medium">{c.name}</span>
                </td>
                <td>{c.email}</td>
                <td className="capitalize">{c.type}</td>
                <td><span className={cn("px-2 py-1 rounded-full text-xs font-medium capitalize", c.status === 'active' ? "badge-success" : "badge-warning")}>{c.status}</span></td>
                <td><Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
