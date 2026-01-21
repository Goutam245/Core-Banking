import { demoCustomers, demoAccounts, demoTransactions, demoDeposits } from '@/data/mockData';
import { formatCurrency, formatDateTime, getInitials } from '@/utils/formatters';
import StatCard from '@/components/ui/StatCard';
import { 
  Users, 
  Wallet, 
  ArrowLeftRight, 
  Clock,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const areaChartData = [
  { name: 'Jan', balance: 2400000 },
  { name: 'Feb', balance: 2100000 },
  { name: 'Mar', balance: 2800000 },
  { name: 'Apr', balance: 3200000 },
  { name: 'May', balance: 2900000 },
  { name: 'Jun', balance: 3500000 },
  { name: 'Jul', balance: 4100000 },
];

const barChartData = [
  { name: 'Wire', incoming: 125, outgoing: 98 },
  { name: 'Internal', incoming: 89, outgoing: 75 },
  { name: 'Deposit', incoming: 156, outgoing: 0 },
  { name: 'Fee', incoming: 0, outgoing: 45 },
];

const pieChartData = [
  { name: 'USD', value: 45, color: 'hsl(221, 83%, 53%)' },
  { name: 'EUR', value: 30, color: 'hsl(160, 84%, 39%)' },
  { name: 'GBP', value: 15, color: 'hsl(38, 92%, 50%)' },
  { name: 'Other', value: 10, color: 'hsl(215, 16%, 47%)' },
];

export default function AdminDashboard() {
  // Calculate totals
  const totalCustomers = demoCustomers.length;
  const totalAccounts = demoAccounts.length;
  const totalBalance = demoAccounts.reduce((sum, a) => sum + a.availableBalance + a.inTransitBalance, 0);
  const pendingTransfers = demoTransactions.filter(t => t.status === 'pending').length;
  const pendingAmount = demoTransactions.filter(t => t.status === 'pending').reduce((sum, t) => sum + t.amount, 0);
  const pendingDeposits = demoDeposits.filter(d => d.status === 'hold').length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-card-foreground">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Overview of bank operations and metrics
          </p>
        </div>
        
        <div className="flex gap-3">
          <Link to="/admin/customers/new">
            <Button className="gradient-primary text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Customer
            </Button>
          </Link>
          <Link to="/admin/accounts/new">
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              New Account
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Customers"
          value={totalCustomers}
          icon={<Users className="w-6 h-6" />}
          trend={{ value: 8.2, positive: true }}
        />
        <StatCard
          title="Total Accounts"
          value={totalAccounts}
          icon={<Wallet className="w-6 h-6" />}
          trend={{ value: 12.5, positive: true }}
          variant="success"
        />
        <StatCard
          title="Total Balance"
          value={formatCurrency(totalBalance)}
          icon={<TrendingUp className="w-6 h-6" />}
          trend={{ value: 15.3, positive: true }}
        />
        <StatCard
          title="Pending Transfers"
          value={pendingTransfers}
          subtitle={`${formatCurrency(pendingAmount)} total`}
          icon={<Clock className="w-6 h-6" />}
          variant="warning"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Trend Chart */}
        <div className="lg:col-span-2 card-premium p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Balance Trend</h3>
              <p className="text-sm text-muted-foreground">Last 7 months performance</p>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaChartData}>
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
              <XAxis dataKey="name" stroke="hsl(215, 16%, 47%)" fontSize={12} />
              <YAxis 
                stroke="hsl(215, 16%, 47%)" 
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip 
                formatter={(value: number) => [`$${(value / 1000000).toFixed(2)}M`, 'Balance']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid hsl(214, 32%, 91%)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="balance" 
                stroke="hsl(221, 83%, 53%)" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorBalance)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Currency Distribution */}
        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Currency Mix</h3>
              <p className="text-sm text-muted-foreground">Account distribution</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {pieChartData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name} {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transaction Volume & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transaction Volume */}
        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Transaction Volume</h3>
              <p className="text-sm text-muted-foreground">By type this month</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
              <XAxis dataKey="name" stroke="hsl(215, 16%, 47%)" fontSize={12} />
              <YAxis stroke="hsl(215, 16%, 47%)" fontSize={12} />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid hsl(214, 32%, 91%)',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="incoming" fill="hsl(160, 84%, 39%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="outgoing" fill="hsl(0, 84%, 60%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-sm text-muted-foreground">Incoming</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <span className="text-sm text-muted-foreground">Outgoing</span>
            </div>
          </div>
        </div>

        {/* Recent Customers */}
        <div className="card-premium">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Recent Customers</h3>
              <p className="text-sm text-muted-foreground">Latest registrations</p>
            </div>
            <Link to="/admin/customers">
              <Button variant="ghost" size="sm" className="text-primary">
                View All
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="divide-y divide-border">
            {demoCustomers.slice(0, 4).map((customer) => (
              <div 
                key={customer.id} 
                className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {getInitials(customer.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-card-foreground">{customer.name}</p>
                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                  </div>
                </div>
                <div className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium capitalize",
                  customer.status === 'active' && "badge-success",
                  customer.status === 'suspended' && "badge-warning",
                  customer.status === 'frozen' && "badge-danger"
                )}>
                  {customer.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Actions */}
      {(pendingTransfers > 0 || pendingDeposits > 0) && (
        <div className="card-premium p-6 border-l-4 border-warning">
          <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-warning" />
            Pending Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pendingTransfers > 0 && (
              <Link 
                to="/admin/transfers"
                className="flex items-center justify-between p-4 rounded-xl bg-warning/10 border border-warning/20 hover:bg-warning/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ArrowLeftRight className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-card-foreground">{pendingTransfers} Pending Transfers</p>
                    <p className="text-sm text-muted-foreground">Require review and approval</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-warning" />
              </Link>
            )}
            {pendingDeposits > 0 && (
              <Link 
                to="/admin/deposits"
                className="flex items-center justify-between p-4 rounded-xl bg-warning/10 border border-warning/20 hover:bg-warning/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Wallet className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-card-foreground">{pendingDeposits} Deposits on Hold</p>
                    <p className="text-sm text-muted-foreground">Awaiting release or rejection</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-warning" />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
