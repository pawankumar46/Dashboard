import { useState } from 'react';
import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';
import Layout from './Layout';

const Sales = () => {
  const salesData = {
    total: 125000,
    change: 12.5,
    trend: 'up',
    recent: [
      { id: 1, customer: 'John Smith', amount: 2500, date: '2024-03-15' },
      { id: 2, customer: 'Sarah Johnson', amount: 1800, date: '2024-03-14' },
      { id: 3, customer: 'Mike Brown', amount: 3200, date: '2024-03-14' },
    ]
  };

  return (
    <Layout>
      <main className="p-6 bg-[#f0f4f8]">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[#425664]">Sales Overview</h3>
            <CurrencyDollarIcon className="w-6 h-6 text-[#425664]" />
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-[#425664]">${salesData.total.toLocaleString()}</p>
              <div className="flex items-center mt-2">
                {salesData.trend === 'up' ? (
                  <ArrowTrendingUpIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowTrendingDownIcon className="w-5 h-5 text-red-500" />
                )}
                <span className={`ml-1 text-sm ${salesData.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {Math.abs(salesData.change)}%
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500">vs last month</div>
          </div>
        </div>

        {/* Recent Sales Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-[#425664] mb-4">Recent Sales</h3>
          <div className="space-y-4">
            {salesData.recent.map((sale) => (
              <div key={sale.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#425664]">{sale.customer}</p>
                  <p className="text-xs text-gray-500">{sale.date}</p>
                </div>
                <p className="text-sm font-medium text-[#425664]">${sale.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Sales; 