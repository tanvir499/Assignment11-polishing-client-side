import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Heart,
  HandHeart,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Download,
  Activity,
  CheckCircle,
  MoreHorizontal,
  TrendingUp,
  AlertTriangle,
  Shield,
  BarChart3,
  PieChart,
  Globe,
  Clock,
  UserCheck,
  Droplets,
  Building,
  Award,
  Target,
  Zap
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
  LineChart,
  Line,
  Legend
} from 'recharts';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import {
  pageVariants,
  cardVariants,
  pulseAnimation,
  buttonHoverAnimation,
} from '../../utils/AnimationUtils';

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalRequests: 0,
    totalDonations: 0,
    totalVolunteers: 0,
    pendingRequests: 0,
    completedRequests: 0,
    activeUsers: 0,
    inprogressRequests: 0,
    canceledRequests: 0
  });
  const [bloodTypeData, setBloodTypeData] = useState([]);
  const [requestStatusData, setRequestStatusData] = useState([]);
  const [monthlyTrendsData, setMonthlyTrendsData] = useState([]);

  const axiosSecure = useAxiosSecure();

  // Fetch dashboard data
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Fetch all data from backend
      const [usersRes, requestsRes, volunteersRes] = await Promise.all([
        axiosSecure.get('/users'),
        axiosSecure.get('/all-requests'),
        axiosSecure.get('/volunteers')
      ]);

      const users = usersRes.data || [];
      const requests = requestsRes.data || [];
      const volunteers = volunteersRes.data || [];

      // Calculate statistics
      const pendingCount = requests.filter(req => req.status === 'pending').length;
      const completedCount = requests.filter(req => req.status === 'done').length;
      const inprogressCount = requests.filter(req => req.status === 'inprogress').length;
      const canceledCount = requests.filter(req => req.status === 'canceled').length;
      const activeUsersCount = users.filter(u => u.status === 'active').length;

      setDashboardData({
        totalUsers: users.length,
        totalRequests: requests.length,
        totalDonations: completedCount,
        totalVolunteers: volunteers.length,
        pendingRequests: pendingCount,
        completedRequests: completedCount,
        inprogressRequests: inprogressCount,
        canceledRequests: canceledCount,
        activeUsers: activeUsersCount
      });

      // Process blood type distribution
      const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
      const bloodTypeCount = {};
      
      requests.forEach(req => {
        const bg = req.bloodGroup;
        if (bg) {
          bloodTypeCount[bg] = (bloodTypeCount[bg] || 0) + 1;
        }
      });

      const bloodTypeChartData = bloodGroups.map((group, index) => ({
        name: group,
        value: bloodTypeCount[group] || 0,
        color: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'][index]
      }));

      setBloodTypeData(bloodTypeChartData);

      // Process request status data
      const statusData = [
        { name: 'Pending', value: pendingCount, color: '#eab308' },
        { name: 'In Progress', value: inprogressCount, color: '#3b82f6' },
        { name: 'Completed', value: completedCount, color: '#22c55e' },
        { name: 'Canceled', value: canceledCount, color: '#ef4444' }
      ];

      setRequestStatusData(statusData);

      // Process monthly trends (last 6 months)
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const currentDate = new Date();
      const monthlyData = [];

      for (let i = 5; i >= 0; i--) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        const monthName = monthNames[date.getMonth()];
        const year = date.getFullYear();
        const nextMonth = new Date(year, date.getMonth() + 1, 1);

        const usersInMonth = users.filter(u => {
          const createdAt = new Date(u.createdAt);
          return createdAt >= date && createdAt < nextMonth;
        }).length;

        const requestsInMonth = requests.filter(r => {
          const createdAt = new Date(r.createdAt);
          return createdAt >= date && createdAt < nextMonth;
        }).length;

        const volunteersInMonth = volunteers.filter(v => {
          const createdAt = new Date(v.createdAt);
          return createdAt >= date && createdAt < nextMonth;
        }).length;

        monthlyData.push({
          month: monthName,
          users: usersInMonth,
          requests: requestsInMonth,
          volunteers: volunteersInMonth
        });
      }

      setMonthlyTrendsData(monthlyData);

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchDashboardData();
    setRefreshing(false);
  };

  const statsCards = [
    {
      title: 'Total Users',
      value: dashboardData.totalUsers,
      change: '+12.5%',
      changeType: 'positive',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Blood Requests',
      value: dashboardData.totalRequests,
      change: '+8.2%',
      changeType: 'positive',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      title: 'Total Donations',
      value: dashboardData.totalDonations,
      change: '+15.3%',
      changeType: 'positive',
      icon: Droplets,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Active Volunteers',
      value: dashboardData.totalVolunteers,
      change: '+5.7%',
      changeType: 'positive',
      icon: HandHeart,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: <span className="font-bold">{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-red-50 flex items-center justify-center">
        <motion.div animate={pulseAnimation} className="text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-100 to-pink-100 flex items-center justify-center mb-4">
            <BarChart3 className="w-10 h-10 text-red-500 animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Loading Dashboard</h3>
          <p className="text-gray-600 mt-2">
            Getting your analytics ready...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="min-h-screen bg-gradient-to-b from-white to-red-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ["0%", "100%", "0%"],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-red-100 to-pink-100 opacity-10 blur-3xl"
        />
      </div>

      <div className="lg:ml-72">
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Header */}
          <motion.div
            variants={cardVariants}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Dashboard Overview
                </h1>
                <p className="text-gray-600">
                  Welcome back, {user?.displayName || 'Admin'}! Here's what's happening with your blood donation platform.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </motion.button>
                <motion.button
                  {...buttonHoverAnimation}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-300 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  Export Report
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={cardVariants}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {statsCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    card.changeType === 'positive' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {card.change}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {card.value.toLocaleString()}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.title}</p>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100/50 to-transparent rounded-bl-full" />
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            {/* Monthly Trends Chart */}
            <motion.div
              variants={cardVariants}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Monthly Trends</h3>
                  <p className="text-sm text-gray-500 mt-1">Last 6 months activity</p>
                </div>
                <TrendingUp className="w-5 h-5 text-gray-400" />
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyTrendsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis 
                      dataKey="month" 
                      stroke="#666" 
                      tick={{ fill: '#666', fontSize: 12 }}
                      axisLine={{ stroke: '#e5e7eb' }}
                    />
                    <YAxis 
                      stroke="#666" 
                      tick={{ fill: '#666', fontSize: 12 }}
                      axisLine={{ stroke: '#e5e7eb' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend 
                      wrapperStyle={{ paddingTop: '20px' }}
                      iconType="circle"
                    />
                    <Bar 
                      dataKey="users" 
                      fill="#3b82f6" 
                      radius={[8, 8, 0, 0]}
                      name="Users"
                      barSize={30}
                    />
                    <Bar 
                      dataKey="requests" 
                      fill="#ef4444" 
                      radius={[8, 8, 0, 0]}
                      name="Requests"
                      barSize={30}
                    />
                    <Bar 
                      dataKey="volunteers" 
                      fill="#22c55e" 
                      radius={[8, 8, 0, 0]}
                      name="Volunteers"
                      barSize={30}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Request Status Distribution */}
            <motion.div
              variants={cardVariants}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Request Status</h3>
                  <p className="text-sm text-gray-500 mt-1">Current distribution</p>
                </div>
                <PieChart className="w-5 h-5 text-gray-400" />
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={requestStatusData}
                      cx="50%"
                      cy="45%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                      labelLine={{ stroke: '#666', strokeWidth: 1 }}
                    >
                      {requestStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {requestStatusData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-600 truncate">{item.name}</p>
                      <p className="text-sm font-bold text-gray-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Blood Type Distribution Chart */}
          <motion.div
            variants={cardVariants}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Blood Type Requests</h3>
                <p className="text-sm text-gray-500 mt-1">Distribution by blood group</p>
              </div>
              <Droplets className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bloodTypeData} margin={{ top: 10, right: 30, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#666"
                    tick={{ fill: '#666', fontSize: 12 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                  />
                  <YAxis 
                    stroke="#666"
                    tick={{ fill: '#666', fontSize: 12 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    radius={[8, 8, 0, 0]}
                    barSize={50}
                  >
                    {bloodTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mt-6">
              {bloodTypeData.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-1 p-2 bg-gray-50 rounded-lg">
                  <div 
                    className="w-6 h-6 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs font-semibold text-gray-900">{item.name}</span>
                  <span className="text-xs text-gray-600">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            variants={cardVariants}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Users, label: 'Manage Users', color: 'from-blue-500 to-blue-600', count: dashboardData.totalUsers },
                { icon: Heart, label: 'View Requests', color: 'from-red-500 to-red-600', count: dashboardData.totalRequests },
                { icon: HandHeart, label: 'Volunteers', color: 'from-purple-500 to-purple-600', count: dashboardData.totalVolunteers },
                { icon: CheckCircle, label: 'Completed', color: 'from-green-500 to-green-600', count: dashboardData.completedRequests }
              ].map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-gray-700 group-hover:text-gray-900 text-sm">
                      {action.label}
                    </p>
                    <p className="text-xl font-bold text-gray-900">{action.count}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardOverview;
