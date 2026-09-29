import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'expo-router';

interface SubscriptionContextProps {
  isPremium: boolean;
  planType: 'annual' | 'monthly' | null;
  renewalDate: string | null;
  subscribe: (plan: 'annual' | 'monthly') => void;
  cancelSubscription: () => void;
  restorePurchases: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextProps | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isPremium, setIsPremium] = useState(false);
  const [planType, setPlanType] = useState<'annual' | 'monthly' | null>(null);
  const [renewalDate, setRenewalDate] = useState<string | null>(null);

  const subscribe = (plan: 'annual' | 'monthly') => {
    setIsPremium(true);
    setPlanType(plan);
    const date = new Date();
    if (plan === 'annual') {
      date.setFullYear(date.getFullYear() + 1);
    } else {
      date.setMonth(date.getMonth() + 1);
    }
    setRenewalDate(date.toLocaleDateString());
    router.push('/subscription/purchase-confirm' as any);
  };

  const cancelSubscription = () => {
    setIsPremium(false);
    setPlanType(null);
    setRenewalDate(null);
  };

  const restorePurchases = () => {
    router.push('/subscription/restore' as any);
  };

  return (
    <SubscriptionContext.Provider value={{ isPremium, planType, renewalDate, subscribe, cancelSubscription, restorePurchases }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};
