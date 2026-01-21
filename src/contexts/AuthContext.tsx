import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User, Customer } from '@/types/banking';
import { demoUsers, demoCustomers } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  customer: Customer | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials
const DEMO_CREDENTIALS: Record<string, string> = {
  'admin@prominencebank.com': 'admin123',
  'john.doe@example.com': 'client123',
  'jane.smith@example.com': 'client456',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem('prominence_user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      
      // Find associated customer if client
      if (parsedUser.role === 'client') {
        const foundCustomer = demoCustomers.find(c => c.email === parsedUser.email);
        setCustomer(foundCustomer || null);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const correctPassword = DEMO_CREDENTIALS[email];
    
    if (!correctPassword) {
      setIsLoading(false);
      return { success: false, error: 'Account not found. Please check your email.' };
    }
    
    if (password !== correctPassword) {
      setIsLoading(false);
      return { success: false, error: 'Incorrect password. Please try again.' };
    }
    
    const foundUser = demoUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('prominence_user', JSON.stringify(foundUser));
      
      if (foundUser.role === 'client') {
        const foundCustomer = demoCustomers.find(c => c.email === email);
        setCustomer(foundCustomer || null);
      }
      
      setIsLoading(false);
      return { success: true };
    }
    
    setIsLoading(false);
    return { success: false, error: 'An error occurred. Please try again.' };
  };

  const loginWithGoogle = async (): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate Google OAuth delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo, log in as John Doe (client)
    const googleUser = demoUsers.find(u => u.email === 'john.doe@example.com');
    if (googleUser) {
      setUser(googleUser);
      localStorage.setItem('prominence_user', JSON.stringify(googleUser));
      
      const foundCustomer = demoCustomers.find(c => c.email === googleUser.email);
      setCustomer(foundCustomer || null);
      
      setIsLoading(false);
      return { success: true };
    }
    
    setIsLoading(false);
    return { success: false, error: 'Google sign-in failed. Please try again.' };
  };

  const logout = () => {
    setUser(null);
    setCustomer(null);
    localStorage.removeItem('prominence_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        customer,
        isLoading,
        isAuthenticated: !!user,
        login,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
