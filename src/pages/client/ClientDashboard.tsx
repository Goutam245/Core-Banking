import { useAuth } from '@/contexts/AuthContext';
import { demoAccounts, demoTransactions, demoInstruments, demoBeneficiaries } from '@/data/mockData';
import { formatCurrency, formatDateTime, getTimeGreeting } from '@/utils/formatters';
import PremiumAccountCard from '@/components/ui/PremiumAccountCard';
import PremiumStatCard from '@/components/ui/PremiumStatCard';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  FileText, 
  Send, 
  Users, 
  TrendingUp,
  Plus,
  Clock,
  Bell,
  Download,
  BarChart3,
  Calendar,
  ChevronRight,
  Zap,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function ClientDashboard() {
  const { user } = useAuth();
  
  const accounts = demoAccounts.filter(a => a.customerName === user?.name);
  const totalAvailableBalance = accounts.reduce((sum, a) => sum + a.availableBalance, 0);
  const totalInTransit = accounts.reduce((sum, a) => sum + a.inTransitBalance, 0);
  
  const recentTransactions = demoTransactions
    .filter(t => accounts.some(a => a.id === t.accountId))
    .slice(0, 6);
  
  const instruments = demoInstruments.filter(i => i.customerName === user?.name);
  const beneficiaries = demoBeneficiaries.slice(0, 4);

  const quickActions = [
    { title: 'Transfer', subtitle: 'Send money', icon: Send, href: '/transfer', gradient: 'from-royal to-electric' },
    { title: 'Beneficiary', subtitle: 'Add new', icon: Users, href: '/beneficiaries', gradient: 'from-emerald-500 to-teal-400' },
    { title: 'Statement', subtitle: 'Download', icon: Download, href: '/transactions', gradient: 'from-amber-500 to-orange-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome Hero Banner */}
      <motion.div 
        className="relative overflow-hidden rounded-3xl p-8 lg:p-10"
        style={{
          background: 'linear-gradient(135deg, #0A1628 0%, #1E40AF 50%, #3B82F6 100%)',
        }}
        variants={itemVariants}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-electric/10 rounded-full blur-3xl" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Welcome Text */}
          <div className="text-white">
            <motion.div 
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-white/70">{getTimeGreeting()}</span>
            </motion.div>
            <motion.h1 
              className="text-3xl lg:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome back, {user?.name?.split(' ')[0]}!
            </motion.h1>
            <motion.p 
              className="text-white/70 text-lg max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Here's an overview of your financial portfolio
            </motion.p>
            
            {/* Current Date */}
            <motion.div 
              className="flex items-center gap-2 mt-4 text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </motion.div>
          </div>

          {/* Quick Action Buttons */}
          <motion.div 
            className="flex gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {quickActions.map((action, index) => (
              <Link key={action.title} to={action.href}>
                <motion.div
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-2xl cursor-pointer",
                    "bg-white/10 backdrop-blur-sm border border-white/10",
                    "hover:bg-white/20 hover:border-white/20 transition-all duration-300"
                  )}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
                    action.gradient
                  )}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-white">{action.title}</p>
                    <p className="text-xs text-white/60">{action.subtitle}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <PremiumStatCard
          title="Total Balance"
          value={formatCurrency(totalAvailableBalance)}
          icon={Wallet}
          trend={{ value: 12.5, positive: true }}
          index={0}
        />
        <PremiumStatCard
          title="In Transit"
          value={formatCurrency(totalInTransit)}
          icon={TrendingUp}
          variant="warning"
          index={1}
        />
        <PremiumStatCard
          title="Active Accounts"
          value={accounts.length}
          subtitle="Across multiple currencies"
          icon={BarChart3}
          variant="success"
          index={2}
        />
        <PremiumStatCard
          title="Active Instruments"
          value={instruments.length}
          subtitle="CD, SBLC, KTT"
          icon={FileText}
          variant="info"
          index={3}
        />
      </div>

      {/* Account Cards */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-card-foreground">Your Accounts</h2>
            <p className="text-sm text-muted-foreground mt-1">Manage your finances across multiple accounts</p>
          </div>
          <Link to="/accounts">
            <Button variant="ghost" size="sm" className="text-primary gap-1 hover:gap-2 transition-all">
              View All
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {accounts.map((account, index) => (
            <PremiumAccountCard key={account.id} account={account} index={index} />
          ))}
          {accounts.length === 0 && (
            <div className="col-span-full card-premium p-12 text-center">
              <Wallet className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold text-card-foreground text-xl mb-2">No Accounts Yet</h3>
              <p className="text-muted-foreground mb-6">Contact support to open your first account</p>
              <Button className="gradient-primary text-white">
                <Plus className="w-4 h-4 mr-2" />
                Request New Account
              </Button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <motion.div 
          className="xl:col-span-2 bg-white rounded-3xl border border-border/50 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] overflow-hidden"
          variants={itemVariants}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h2 className="text-lg font-bold text-card-foreground">Recent Activity</h2>
              <p className="text-sm text-muted-foreground">Your latest transactions</p>
            </div>
            <Link to="/transactions">
              <Button variant="ghost" size="sm" className="text-primary gap-1">
                View All
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="divide-y divide-border">
            {recentTransactions.map((transaction, index) => (
              <motion.div 
                key={transaction.id} 
                className="flex items-center justify-between p-5 hover:bg-muted/30 transition-colors cursor-pointer group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
                    transaction.type === 'credit' || transaction.type === 'interest'
                      ? "bg-success/10 text-success"
                      : "bg-destructive/10 text-destructive"
                  )}>
                    {transaction.type === 'credit' || transaction.type === 'interest' ? (
                      <ArrowDownRight className="w-6 h-6" />
                    ) : (
                      <ArrowUpRight className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{formatDateTime(transaction.timestamp)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={cn(
                    "font-bold font-mono text-lg",
                    transaction.type === 'credit' || transaction.type === 'interest'
                      ? "text-success"
                      : "text-card-foreground"
                  )}>
                    {transaction.type === 'credit' || transaction.type === 'interest' ? '+' : '-'}
                    {formatCurrency(transaction.amount, transaction.currency)}
                  </p>
                  <div className={cn(
                    "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold capitalize",
                    transaction.status === 'completed' && "bg-success/10 text-success",
                    transaction.status === 'pending' && "bg-warning/10 text-warning",
                    transaction.status === 'rejected' && "bg-destructive/10 text-destructive"
                  )}>
                    {transaction.status}
                  </div>
                </div>
              </motion.div>
            ))}
            {recentTransactions.length === 0 && (
              <div className="p-12 text-center text-muted-foreground">
                <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No recent transactions</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right Sidebar */}
        <motion.div className="space-y-6" variants={itemVariants}>
          {/* Quick Transfer */}
          <div className="bg-white rounded-3xl border border-border/50 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal to-electric flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground">Quick Transfer</h3>
                <p className="text-xs text-muted-foreground">Send money instantly</p>
              </div>
            </div>
            
            {/* Recent Beneficiaries */}
            <div className="space-y-3 mb-6">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Recent Recipients</p>
              <div className="flex gap-3">
                {beneficiaries.slice(0, 4).map((ben, index) => (
                  <motion.div
                    key={ben.id}
                    className="flex flex-col items-center gap-1 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center font-semibold text-muted-foreground group-hover:from-primary/20 group-hover:to-primary/10 group-hover:text-primary transition-colors">
                      {ben.name.charAt(0)}
                    </div>
                    <span className="text-xs text-muted-foreground truncate max-w-[60px]">
                      {ben.name.split(' ')[0]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <Link to="/transfer">
              <Button className="w-full gradient-primary text-white rounded-xl h-12">
                <Send className="w-4 h-4 mr-2" />
                New Transfer
              </Button>
            </Link>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-3xl border border-border/50 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center relative">
                  <Bell className="w-5 h-5 text-white" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] text-white font-bold flex items-center justify-center">
                    3
                  </span>
                </div>
                <h3 className="font-bold text-card-foreground">Notifications</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { text: 'Transfer completed', time: '2 min ago', type: 'success' },
                { text: 'New instrument issued', time: '1 hour ago', type: 'info' },
                { text: 'Statement ready', time: '3 hours ago', type: 'default' },
              ].map((notif, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    notif.type === 'success' && "bg-success",
                    notif.type === 'info' && "bg-primary",
                    notif.type === 'default' && "bg-muted-foreground"
                  )} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-card-foreground">{notif.text}</p>
                    <p className="text-xs text-muted-foreground">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
