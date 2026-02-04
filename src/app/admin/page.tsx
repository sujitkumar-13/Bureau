"use client";

import React, { useState, useEffect } from "react";
import {
  RiLockLine,
  RiMoneyDollarCircleLine,
  RiUserLine,
  RiCalendarLine,
  RiCheckLine,
  RiCloseLine,
  RiTimeLine,
  RiRefreshLine,
  RiLogoutBoxLine,
} from "react-icons/ri";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface Payment {
  id: string;
  razorpayOrderId: string;
  razorpayPaymentId: string | null;
  amount: number;
  plan: string;
  status: string;
  receiptSent: boolean;
  createdAt: string;
  user: User;
}

interface Stats {
  byStatus: Array<{
    status: string;
    _count: { id: number };
    _sum: { amount: number | null };
  }>;
  totalRevenue: number;
}

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const [payments, setPayments] = useState<Payment[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  });
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    // Check for saved token
    const savedToken = localStorage.getItem("adminToken");
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && token) {
      fetchPayments();
    }
  }, [isLoggedIn, token, pagination.page, statusFilter]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      setToken(data.token);
      localStorage.setItem("adminToken", data.token);
      setIsLoggedIn(true);
    } catch (err: any) {
      setLoginError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken("");
    setIsLoggedIn(false);
    localStorage.removeItem("adminToken");
  };

  const fetchPayments = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
      });
      if (statusFilter) params.append("status", statusFilter);

      const res = await fetch(`/api/admin/payments?${params}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });

      if (res.status === 401) {
        handleLogout();
        return;
      }

      const data = await res.json();
      setPayments(data.payments);
      setStats(data.stats);
      setPagination(data.pagination);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount / 100);
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(dateString));
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      failed: "bg-red-100 text-red-800",
    };
    const icons = {
      completed: <RiCheckLine className="w-4 h-4" />,
      pending: <RiTimeLine className="w-4 h-4" />,
      failed: <RiCloseLine className="w-4 h-4" />,
    };
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
          styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800"
        }`}
      >
        {icons[status as keyof typeof icons]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  // Login Form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-4">
              <RiLockLine className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">BENZZ Trading</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1e40af] text-white py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#1e40af] text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">BENZZ Trading Admin</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
          >
            <RiLogoutBoxLine />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <RiMoneyDollarCircleLine className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats ? formatAmount(stats.totalRevenue) : "₹0"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <RiUserLine className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Payments</p>
                <p className="text-2xl font-bold text-gray-900">
                  {pagination.total}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <RiCheckLine className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats?.byStatus.find((s) => s.status === "completed")?._count.id || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <RiTimeLine className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats?.byStatus.find((s) => s.status === "pending")?._count.id || 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Actions */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPagination((p) => ({ ...p, page: 1 }));
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] outline-none"
            >
              <option value="">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          <button
            onClick={fetchPayments}
            disabled={loading}
            className="flex items-center gap-2 bg-[#1e40af] text-white px-4 py-2 rounded-lg hover:bg-[#1d4ed8] transition-colors disabled:opacity-50"
          >
            <RiRefreshLine className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {/* Payments Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Payment ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Receipt
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payments.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      No payments found
                    </td>
                  </tr>
                ) : (
                  payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">
                            {payment.user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {payment.user.email}
                          </div>
                          <div className="text-sm text-gray-500">
                            {payment.user.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="capitalize font-medium">
                          {payment.plan}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {formatAmount(payment.amount)}
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(payment.status)}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-mono">
                        {payment.razorpayPaymentId || "-"}
                      </td>
                      <td className="px-6 py-4">
                        {payment.receiptSent ? (
                          <span className="text-green-600 text-sm">Sent ✓</span>
                        ) : (
                          <span className="text-gray-400 text-sm">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDate(payment.createdAt)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
                {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
                {pagination.total} results
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setPagination((p) => ({ ...p, page: p.page - 1 }))
                  }
                  disabled={pagination.page === 1}
                  className="px-3 py-1 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setPagination((p) => ({ ...p, page: p.page + 1 }))
                  }
                  disabled={pagination.page >= pagination.totalPages}
                  className="px-3 py-1 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
