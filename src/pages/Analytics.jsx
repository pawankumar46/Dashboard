import Layout from './Layout';

const Analytics = () => {
  return (
    <Layout>
      <main className="p-6 bg-[#f0f4f8]">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h3 className="text-lg font-medium text-[#425664]">Analytics</h3>
          <div className="flex items-center justify-center h-48">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 bg-gray-200 h-48 rounded-md"></div>
            </div>
          </div>
          <p className="text-gray-500">Coming Soon</p>
        </div>
      </main>
    </Layout>
  );
};

export default Analytics;
