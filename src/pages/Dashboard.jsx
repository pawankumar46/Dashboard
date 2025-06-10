import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  BellIcon,
  ArrowLeftOnRectangleIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  CubeIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ClockIcon,
  ChartPieIcon,
  DocumentChartBarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Line } from 'react-chartjs-2';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import Layout from './Layout';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [timeRange, setTimeRange] = useState('monthly'); // State for time range selection
  const navigate = useNavigate(); // Initialize useNavigate

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Sales', href: '/sales', icon: CurrencyDollarIcon },
    { name: 'Purchases', href: '/purchases', icon: ShoppingCartIcon },
    { name: 'Inventory', href: '/inventory', icon: CubeIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Team', href: '/team', icon: UserGroupIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ];

  const handleNavigation = (href) => {
    setIsSidebarOpen(false); // Close the sidebar
    navigate(href); // Navigate to the selected component
  };

  // Sample data for charts
  const data = {
    monthly: {
      sales: [12000, 19000, 30000, 50000, 20000, 30000, 40000],
      purchases: [15000, 22000, 25000, 30000, 15000, 20000, 35000],
      inventory: [1250, 15, 3],
    },
    sixMonths: {
      sales: [10000, 15000, 25000, 40000, 30000, 45000],
      purchases: [12000, 18000, 23000, 28000, 20000, 30000],
      inventory: [1300, 10, 5],
    },
    yearly: {
      sales: [150000, 200000, 250000],
      purchases: [180000, 220000, 270000],
      inventory: [1400, 20, 10],
    },
  };

  // Recent Activity Data
  const recentActivityData = {
    sales: {
      daily: [5000, 7500, 6200, 8900, 7100, 8300, 9500],
      weekly: [35000, 42000, 38000, 45000, 41000, 48000, 52000],
      monthly: [150000, 180000, 165000, 190000, 175000, 200000, 220000],
    },
    purchases: {
      daily: [3000, 4500, 3800, 5200, 4100, 4800, 5500],
      weekly: [25000, 30000, 28000, 32000, 29000, 35000, 38000],
      monthly: [120000, 140000, 130000, 150000, 145000, 160000, 180000],
    },
    inventory: {
      categories: ['Electronics', 'Office Supplies', 'Furniture', 'IT Equipment', 'Accessories'],
      stock: [450, 780, 320, 560, 890],
      lowStock: [15, 8, 12, 5, 10],
      outOfStock: [3, 1, 2, 0, 4],
    }
  };

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: data[timeRange].sales,
        backgroundColor: 'rgba(18, 78, 102, 0.2)',
        borderColor: '#124e66',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const purchasesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
    datasets: [
      {
        label: 'Purchases',
        data: data[timeRange].purchases,
        backgroundColor: 'rgba(18, 78, 102, 0.2)',
        borderColor: '#124e66',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const inventoryData = {
    labels: ['Items in Stock', 'Low Stock', 'Out of Stock'],
    datasets: [
      {
        label: 'Inventory Status',
        data: data[timeRange].inventory,
        backgroundColor: ['#124e66', '#748d92', '#d3d9d4'],
      },
    ],
  };

  // Recent Activity Charts Data
  const recentSalesData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Sales',
        data: recentActivityData.sales.daily,
        backgroundColor: 'rgba(18, 78, 102, 0.2)',
        borderColor: '#124e66',
        borderWidth: 2,
        fill: true,
      },
      {
        label: 'Weekly Average',
        data: recentActivityData.sales.weekly.map(val => val / 7),
        backgroundColor: 'rgba(116, 141, 146, 0.2)',
        borderColor: '#748d92',
        borderWidth: 2,
        fill: true,
      }
    ],
  };

  const recentPurchasesData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Purchases',
        data: recentActivityData.purchases.daily,
        backgroundColor: 'rgba(18, 78, 102, 0.2)',
        borderColor: '#124e66',
        borderWidth: 2,
        fill: true,
      },
      {
        label: 'Weekly Average',
        data: recentActivityData.purchases.weekly.map(val => val / 7),
        backgroundColor: 'rgba(116, 141, 146, 0.2)',
        borderColor: '#748d92',
        borderWidth: 2,
        fill: true,
      }
    ],
  };

  const inventoryAlertsData = {
    labels: recentActivityData.inventory.categories,
    datasets: [
      {
        label: 'Current Stock',
        data: recentActivityData.inventory.stock,
        backgroundColor: 'rgba(18, 78, 102, 0.2)',
        borderColor: '#124e66',
        borderWidth: 2,
      },
      {
        label: 'Low Stock',
        data: recentActivityData.inventory.lowStock,
        backgroundColor: 'rgba(116, 141, 146, 0.2)',
        borderColor: '#748d92',
        borderWidth: 2,
      },
      {
        label: 'Out of Stock',
        data: recentActivityData.inventory.outOfStock,
        backgroundColor: 'rgba(211, 217, 212, 0.2)',
        borderColor: '#d3d9d4',
        borderWidth: 2,
      }
    ],
  };

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#f0f4f8] flex">
        {/* Sidebar */}
        

        {/* Main Content */}
        <div>
          {/* Top Navigation */}
         

          {/* Dashboard Content */}
          <main className="p-6">
            {/* Time Range Dropdown */}
            <div className="mb-6">
              <label htmlFor="timeRange" className="block text-sm font-medium text-[#124e66] mb-2">
                Select Time Range
              </label>
              <select
                id="timeRange"
                value={timeRange}
                onChange={handleTimeRangeChange}
                className="w-full md:w-64 h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-[#124e66] focus:ring-0 transition-all text-gray-900"
              >
                <option value="monthly">Monthly</option>
                <option value="sixMonths">Half-Yearly</option>
                <option value="yearly">Annually</option>
              </select>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              {/* Sales Chart */}
              <div className="bg-white rounded-xl shadow-sm p-6 h-[400px]">
                <h3 className="text-lg font-medium text-[#124e66] mb-4">Sales Overview</h3>
                <div className="h-[320px]">
                  <Line 
                    data={salesData} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                          },
                        },
                        x: {
                          grid: {
                            display: false,
                          },
                        },
                      },
                    }} 
                  />
                </div>
              </div>

              {/* Purchases Chart */}
              <div className="bg-white rounded-xl shadow-sm p-6 h-[400px]">
                <h3 className="text-lg font-medium text-[#124e66] mb-4">Purchases Overview</h3>
                <div className="h-[320px]">
                  <Line 
                    data={purchasesData} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                          },
                        },
                        x: {
                          grid: {
                            display: false,
                          },
                        },
                      },
                    }} 
                  />
                </div>
              </div>

              {/* Inventory Chart */}
              <div className="bg-white rounded-xl shadow-sm p-6 h-[400px]">
                <h3 className="text-lg font-medium text-[#124e66] mb-4">Inventory Status</h3>
                <div className="h-[320px]">
                  <Pie 
                    data={inventoryData} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                      },
                    }} 
                  />
                </div>
              </div>
            </div>

            {/* Recent Activity Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              {/* Recent Sales */}
              <div className="bg-white rounded-xl shadow-sm p-6 h-[400px]">
                <h3 className="text-lg font-medium text-[#124e66] mb-4">Recent Sales</h3>
                <div className="h-[320px]">
                  <Line 
                    data={recentSalesData} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                          },
                        },
                        x: {
                          grid: {
                            display: false,
                          },
                        },
                      },
                    }} 
                  />
                </div>
              </div>

              {/* Recent Purchases */}
              <div className="bg-white rounded-xl shadow-sm p-6 h-[400px]">
                <h3 className="text-lg font-medium text-[#124e66] mb-4">Recent Purchases</h3>
                <div className="h-[320px]">
                  <Line 
                    data={recentPurchasesData} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                          },
                        },
                        x: {
                          grid: {
                            display: false,
                          },
                        },
                      },
                    }} 
                  />
                </div>
              </div>

              {/* Inventory Alerts */}
              <div className="bg-white rounded-xl shadow-sm p-6 h-[400px]">
                <h3 className="text-lg font-medium text-[#124e66] mb-4">Inventory Alerts</h3>
                <div className="h-[320px]">
                  <Bar 
                    data={inventoryAlertsData} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                          },
                        },
                        x: {
                          grid: {
                            display: false,
                          },
                        },
                      },
                    }} 
                  />
                </div>
              </div>
            </div>

            {/* Coming Soon Section */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#124e66] mb-6">Coming Soon</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Analytics Dashboard */}
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-200 flex flex-col h-[300px]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-[#124e66]">Advanced Analytics</h3>
                    <ChartPieIcon className="w-6 h-6 text-[#124e66]" />
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">Detailed insights and predictive analytics for your business</p>
                  <div className="flex items-center text-sm text-[#748d92]">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>Coming in Q2 2024</span>
                  </div>
                </div>

                {/* Reports */}
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-200 flex flex-col h-[300px]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-[#124e66]">Custom Reports</h3>
                    <DocumentChartBarIcon className="w-6 h-6 text-[#124e66]" />
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">Generate and customize detailed business reports</p>
                  <div className="flex items-center text-sm text-[#748d92]">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>Coming in Q3 2024</span>
                  </div>
                </div>

                {/* Customer Portal */}
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-200 flex flex-col h-[300px]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-[#124e66]">Customer Portal</h3>
                    <UserCircleIcon className="w-6 h-6 text-[#124e66]" />
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">Self-service portal for your customers</p>
                  <div className="flex items-center text-sm text-[#748d92]">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>Coming in Q4 2024</span>
                  </div>
                </div>

                {/* Mobile App */}
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-200 flex flex-col h-[300px]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-[#124e66]">Mobile App</h3>
                    <svg className="w-6 h-6 text-[#124e66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">Access your dashboard on the go with our mobile app</p>
                  <div className="flex items-center text-sm text-[#748d92]">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>Coming in Q1 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard; 