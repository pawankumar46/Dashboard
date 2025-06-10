import { useState } from 'react';
import { CubeIcon } from '@heroicons/react/24/outline';
import Layout from './Layout';

const Inventory = () => {
  const inventoryData = {
    totalItems: 1250,
    lowStock: 15,
    outOfStock: 3,
    recent: [
      { id: 1, item: 'Laptop Pro', stock: 25, threshold: 10 },
      { id: 2, item: 'Wireless Mouse', stock: 8, threshold: 15 },
      { id: 3, item: 'Keyboard', stock: 0, threshold: 5 },
    ]
  };

  return (
    <Layout>
      <main className="p-6 bg-[#f0f4f8]">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[#425664]">Inventory Overview</h3>
            <CubeIcon className="w-6 h-6 text-[#425664]" />
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-[#425664]">{inventoryData.totalItems}</p>
              <div className="flex items-center mt-2">
                <span className="text-sm text-red-500">
                  {inventoryData.lowStock} low stock
                </span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-red-500">
                  {inventoryData.outOfStock} out of stock
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500">total items</div>
          </div>
        </div>

        {/* Inventory Alerts Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-[#425664] mb-4">Inventory Alerts</h3>
          <div className="space-y-4">
            {inventoryData.recent.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#425664]">{item.item}</p>
                  <p className="text-xs text-gray-500">Threshold: {item.threshold}</p>
                </div>
                <p className={`text-sm font-medium ${item.stock === 0 ? 'text-red-500' : item.stock <= item.threshold ? 'text-yellow-500' : 'text-green-500'}`}>
                  {item.stock} in stock
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Inventory; 