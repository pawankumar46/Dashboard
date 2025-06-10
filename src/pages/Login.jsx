import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import reactLogo from '../assets/react.svg';

const ChartCarousel = () => {
  const [currentChart, setCurrentChart] = useState(0);

  // Chart components
  const BarChart = () => (
    <div className="flex items-end gap-1 h-[100px]">
      {[60, 90, 40, 80, 50, 70, 85, 45].map((height, index) => (
        <div key={index} className="flex-1 h-full flex items-end">
          <div
            className="w-full rounded-t-lg animate-slideUp"
            style={{
              height: `${height}%`,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              animationDelay: `${index * 0.1}s`,
            }}
          />
        </div>
      ))}
    </div>
  );

  const LineChart = () => (
    <div className="h-[100px] relative">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M0,50 Q25,20 50,50 T100,50"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
          className="animate-drawLine"
        />
      </svg>
    </div>
  );

  const PieChart = () => (
    <div className="h-[100px] flex justify-center items-center">
      <div className="w-20 h-20 rounded-full border-8 border-white/20 relative animate-spin-slow">
        <div className="absolute inset-0 border-8 border-white/40 rounded-full" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
      </div>
    </div>
  );

  const charts = [
    { component: <BarChart />, name: "Bar Chart" },
    { component: <LineChart />, name: "Line Graph" },
    { component: <PieChart />, name: "Pie Chart" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentChart((prev) => (prev + 1) % charts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8">
      <div className="h-[100px] relative overflow-hidden">
        <div className="transition-opacity duration-500">
          {charts[currentChart].component}
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy credentials
    const dummyCredentials = {
      email: "test@example.com",
      password: "password123"
    };

    if (isLoginView) {
      if (formData.email === dummyCredentials.email && formData.password === dummyCredentials.password) {
        console.log("Login successful!");
        navigate('/dashboard');
      } else {
        console.log("Invalid credentials");
      }
    } else {
      console.log("Signing up with", formData);
      // Handle signup logic here if needed
      navigate('/dashboard');
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setFormData({
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4f8] to-[#748d92] p-4">
      <div className="flex w-full max-w-6xl rounded-[2rem] overflow-hidden bg-white shadow-2xl">
        {/* Left Section with Illustration */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#124e66] to-[#748d92] p-12 relative overflow-hidden">
          <div className="relative z-10 text-white w-full">
            <div className="flex items-center gap-2 mb-4 text-center">
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-lg"></div>
              </div>
              <h1 className="text-2xl font-bold text-white">Your Company</h1>
            </div>
            <div className="mt-20">
              <h2 className="text-4xl font-bold mb-4 text-white">Start your journey with us</h2>
              <p className="text-white/90 text-lg">
                Discover a world of possibilities with our innovative platform
              </p>
              <ChartCarousel />
            </div>
            
            {/* Decorative circles */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mb-32"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#124e66] mb-2">
              {isLoginView ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-700">
              {isLoginView ? "Please enter your details" : "Please fill in the form"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLoginView && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-[#124e66] focus:ring-0 transition-all text-gray-900"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLoginView}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-[#124e66] focus:ring-0 transition-all text-gray-900"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-[#124e66] focus:ring-0 transition-all text-gray-900"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {!isLoginView && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-[#124e66] focus:ring-0 transition-all text-gray-900"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isLoginView}
                />
              </div>
            )}

            {isLoginView && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-[#124e66] focus:ring-[#124e66]" />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#124e66] hover:text-[#748d92] font-medium transition-colors duration-200">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#124e66] to-[#748d92] text-white rounded-xl font-medium hover:from-[#748d92] hover:to-[#124e66] transition-all duration-300 shadow-sm"
            >
              {isLoginView ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-700">
              {isLoginView ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleView}
                className="ml-2 bg-gradient-to-r from-[#124e66] to-[#748d92] text-white"
              >
                {isLoginView ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
