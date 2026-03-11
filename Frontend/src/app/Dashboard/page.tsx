export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Wildlife Monitoring Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Animals Detected</p>
          <h2 className="text-3xl font-bold text-green-600">124</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Active Alerts</p>
          <h2 className="text-3xl font-bold text-red-500">3</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Monitoring Zones</p>
          <h2 className="text-3xl font-bold text-blue-500">12</h2>
        </div>
      </div>
    </div>
  );
}