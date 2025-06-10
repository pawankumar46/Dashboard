import { useState } from 'react';
import {
  ShoppingCartIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';
import Layout from './Layout';

const Purchases = () => {
  const purchasesData = {
    total: 85000,
    change: -5.2,
    trend: 'down',
    recent: [
      { id: 1, supplier: 'Tech Supplies Inc', amount: 1500, date: '2024-03-15' },
      { id: 2, supplier: 'Office Depot', amount: 800, date: '2024-03-14' },
      { id: 3, supplier: 'Global Electronics', amount: 2500, date: '2024-03-13' },
    ]
  };

  return (
    <Layout>
      {/* Purchases Content */}
      <main className="p-6 bg-[#f0f4f8]">
        {/* Overview Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[#425664]">Purchases Overview</h3>
            <ShoppingCartIcon className="w-6 h-6 text-[#425664]" />
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-[#425664]">${purchasesData.total.toLocaleString()}</p>
              <div className="flex items-center mt-2">
                {purchasesData.trend === 'up' ? (
                  <ArrowTrendingUpIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowTrendingDownIcon className="w-5 h-5 text-red-500" />
                )}
                <span className={`ml-1 text-sm ${purchasesData.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {Math.abs(purchasesData.change)}%
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500">vs last month</div>
          </div>
        </div>

        {/* Recent Purchases Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-[#425664] mb-4">Recent Purchases</h3>
          <div className="space-y-4">
            {purchasesData.recent.map((purchase) => (
              <div key={purchase.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#425664]">{purchase.supplier}</p>
                  <p className="text-xs text-gray-500">{purchase.date}</p>
                </div>
                <p className="text-sm font-medium text-[#425664]">${purchase.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Purchases; 