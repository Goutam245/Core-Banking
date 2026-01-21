import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

// Layouts
import ClientLayout from "@/components/layout/ClientLayout";
import AdminLayout from "@/components/layout/AdminLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Pages
import LoginPage from "@/pages/LoginPage";
import ClientDashboard from "@/pages/client/ClientDashboard";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import NotFound from "@/pages/NotFound";

// Placeholder pages for client portal
import AccountsPage from "@/pages/client/AccountsPage";
import TransactionsPage from "@/pages/client/TransactionsPage";
import TransferPage from "@/pages/client/TransferPage";
import BeneficiariesPage from "@/pages/client/BeneficiariesPage";
import InstrumentsPage from "@/pages/client/InstrumentsPage";
import SupportPage from "@/pages/client/SupportPage";
import FundingPage from "@/pages/client/FundingPage";
import SettingsPage from "@/pages/client/SettingsPage";

// Placeholder pages for admin portal
import AdminCustomersPage from "@/pages/admin/CustomersPage";
import AdminAccountsPage from "@/pages/admin/AccountsPage";
import AdminTransactionsPage from "@/pages/admin/TransactionsPage";
import AdminDepositsPage from "@/pages/admin/DepositsPage";
import AdminHoldsPage from "@/pages/admin/HoldsPage";
import AdminProductsPage from "@/pages/admin/ProductsPage";
import AdminSettingsPage from "@/pages/admin/SettingsPage";

const queryClient = new QueryClient();

function AppRoutes() {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      {/* Public Route - Login */}
      <Route 
        path="/" 
        element={
          isAuthenticated 
            ? <Navigate to={user?.role === 'admin' ? '/admin' : '/dashboard'} replace />
            : <LoginPage />
        } 
      />

      {/* Client Portal Routes */}
      <Route 
        element={
          <ProtectedRoute requiredRole="client">
            <ClientLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/accounts/:id" element={<AccountsPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/beneficiaries" element={<BeneficiariesPage />} />
        <Route path="/instruments" element={<InstrumentsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/funding" element={<FundingPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      {/* Admin Portal Routes */}
      <Route 
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/customers" element={<AdminCustomersPage />} />
        <Route path="/admin/customers/new" element={<AdminCustomersPage />} />
        <Route path="/admin/customers/:id" element={<AdminCustomersPage />} />
        <Route path="/admin/accounts" element={<AdminAccountsPage />} />
        <Route path="/admin/accounts/new" element={<AdminAccountsPage />} />
        <Route path="/admin/accounts/:id" element={<AdminAccountsPage />} />
        <Route path="/admin/transactions" element={<AdminTransactionsPage />} />
        <Route path="/admin/transfers" element={<AdminTransactionsPage />} />
        <Route path="/admin/deposits" element={<AdminDepositsPage />} />
        <Route path="/admin/holds" element={<AdminHoldsPage />} />
        <Route path="/admin/products/:type" element={<AdminProductsPage />} />
        <Route path="/admin/settings/:section" element={<AdminSettingsPage />} />
        <Route path="/admin/reports/:type" element={<AdminSettingsPage />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
