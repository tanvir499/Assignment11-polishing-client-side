import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { motion, useAnimation } from "framer-motion";
import {
  Heart,
  Users,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  Search,
  UserPlus,
  ChevronRight,
  ArrowRight,
  Droplets,
  Activity,
  Award,
  Calendar,
  MapIcon,
  Star,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Globe,
  Zap,
  Target,
  BookOpen,
  MessageSquare,
  Camera,
  FileText,
  BarChart3,
  Smartphone,
  Headphones,
  Building,
  Truck,
  UserCheck,
  Clock3,
  ThumbsUp,
  Download,
  Share2,
  Bell,
  Gift,
  Briefcase,
} from "lucide-react";
import { AuthContext } from "../../Provider/AuthProvider";
import {
  fadeInUp,
  staggerContainer,
  pulseAnimation,
  textGradientAnimation,
} from "../../utils/AnimationUtils";

// Counting Number Component
const CountingNumber = ({ target, suffix, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const increment = target / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newCount = Math.min(Math.round(increment * currentStep), target);
      setCount(newCount);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <span>
      {formatNumber(count)}{suffix}
    </span>
  );
};

const Home = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const controls = useAnimation();

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50/20 relative overflow-hidden">
      {/* Smooth Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Fluid Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.4, 0.9, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
          className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-red-100/30 via-pink-100/20 to-rose-100/30 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -180, 120, 0],
            y: [0, 120, -80, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            delay: 8,
          }}
          className="absolute bottom-32 left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-100/20 via-indigo-100/25 to-purple-100/20 blur-3xl"
        />
        
        {/* Floating Blood Drop SVG Animations */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -40, 20, 0],
              x: [0, 15, -10, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.9, 0.8],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 1.5,
            }}
          >
            <svg
              width="24"
              height="32"
              viewBox="0 0 24 32"
              className="text-red-300/40"
              fill="currentColor"
            >
              <motion.path
                d="M12 0C12 0 0 12 0 20C0 26.627 5.373 32 12 32C18.627 32 24 26.627 24 20C24 12 12 0 12 0Z"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            </svg>
          </motion.div>
        ))}

        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M0,300 Q400,200 800,300 T1600,300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 2 }}
          />
          <motion.path
            d="M0,500 Q600,400 1200,500 T2400,500"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 5, ease: "easeInOut", delay: 3 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-left"
            >
              {/* Smooth Badge Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-red-50 to-pink-50 border border-red-100/50 text-red-600 rounded-full text-sm font-medium mb-8 relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <svg width="16" height="20" viewBox="0 0 24 32" fill="currentColor">
                    <motion.path
                      d="M12 0C12 0 0 12 0 20C0 26.627 5.373 32 12 32C18.627 32 24 26.627 24 20C24 12 12 0 12 0Z"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>
                  <motion.div
                    animate={{ scale: [0, 1.8, 0], opacity: [0, 0.4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-red-400 rounded-full"
                  />
                </motion.div>
                <motion.span
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Trusted by 10,000+ Life Savers
                </motion.span>
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </motion.div>

              {/* Fluid Text Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl md:text-6xl font-bold leading-tight mb-8"
              >
                <motion.span 
                  className="text-slate-900 inline-block"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                >
                  Save
                </motion.span>{" "}
                <motion.span
                  className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent inline-block relative"
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  }}
                >
                  Lives
                  <motion.div
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-2 bg-red-500/20 rounded-lg blur-sm"
                  />
                </motion.span>
                <br />
                <motion.span 
                  className="text-slate-900 inline-block"
                  animate={{ 
                    y: [0, -6, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  Through
                </motion.span>{" "}
                <motion.span 
                  className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent inline-block relative"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                >
                  Blood
                  <motion.svg
                    className="absolute -right-6 top-1"
                    width="16"
                    height="20"
                    viewBox="0 0 24 32"
                    fill="currentColor"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M12 0C12 0 0 12 0 20C0 26.627 5.373 32 12 32C18.627 32 24 26.627 24 20C24 12 12 0 12 0Z" />
                  </motion.svg>
                </motion.span>
              </motion.h1>

              {/* Smooth Subtitle with Reveal Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed overflow-hidden"
              >
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Connect with donors instantly. Every donation saves up to 3 lives. 
                  Join Bangladesh's most trusted blood donation network.
                </motion.p>
              </motion.div>

              {/* Smooth CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col sm:flex-row gap-5 mb-10"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -4,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link
                    to="/register"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-300 text-white font-semibold rounded-2xl relative overflow-hidden shadow-lg hover:shadow-red-500/25 transition-shadow duration-500"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="relative"
                    >
                      <UserPlus className="w-5 h-5" />
                    </motion.div>
                    <span className="relative z-10">Become a Donor</span>
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -4,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link
                    to="/search"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:border-red-500 hover:text-red-500 transition-all duration-500 relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Search className="w-5 h-5" />
                    </motion.div>
                    Find Donors
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 origin-left"
                    />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Smooth Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="flex items-center gap-8 text-sm text-slate-500"
              >
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </motion.div>
                  <span>24/7 Emergency Support</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Shield className="w-4 h-4 text-blue-500" />
                  </motion.div>
                  <span>Verified Donors</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative hidden lg:block"
            >
              {/* Main Visual Container */}
              <div className="relative w-96 h-96 mx-auto">
                {/* Smooth Rotating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-red-200/40"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-full bg-gradient-to-r from-red-500/10 via-pink-500/15 to-red-500/10"
                  />
                </motion.div>
                
                {/* Floating Statistics Cards */}
                {[
                  { 
                    icon: (
                      <svg width="32" height="32" viewBox="0 0 32 32" className="w-8 h-8">
                        <motion.circle
                          cx="16"
                          cy="16"
                          r="12"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="75.4"
                          animate={{
                            strokeDashoffset: [75.4, 0, 75.4],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.path
                          d="M16 8 L16 16 L22 22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          fill="none"
                          animate={{
                            pathLength: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        />
                      </svg>
                    ), 
                    label: "Success Rate", 
                    value: "98%", 
                    color: "from-purple-500 to-purple-600", 
                    angle: 270 
                  },
                ].map((card, index) => {
                  const radius = 160;
                  const x = Math.cos((card.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((card.angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -8, 0],
                      }}
                      transition={{ 
                        opacity: { delay: 1.8 + index * 0.2, duration: 0.8 },
                        scale: { delay: 1.8 + index * 0.2, duration: 0.8, type: "spring", stiffness: 200 },
                        y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -12,
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      }}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                      className="z-10 hidden lg:block"
                    >
                      <motion.div 
                        className="bg-white/30 backdrop-blur-md rounded-2xl p-3 shadow-md border border-slate-100/20 min-w-[100px] relative overflow-hidden"
                        animate={{
                          boxShadow: [
                            "0 8px 25px rgba(0,0,0,0.08)",
                            "0 15px 35px rgba(0,0,0,0.12)",
                            "0 8px 25px rgba(0,0,0,0.08)",
                          ],
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: index * 2 }}
                          className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white mb-3 mx-auto relative"
                        >
                          {card.icon}
                          <motion.div
                            animate={{ scale: [0, 1.5, 0], opacity: [0, 0.3, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                            className="absolute inset-0 bg-white rounded-xl"
                          />
                        </motion.div>
                        <div className="text-center">
                          <motion.div 
                            className="text-base font-bold text-slate-800"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                          >
                            {card.value}
                          </motion.div>
                          <div className="text-xs text-slate-500 font-medium">{card.label}</div>
                        </div>
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.8 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Enhanced Center Blood Drop Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, duration: 1, type: "spring", stiffness: 150 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-2xl relative overflow-hidden"
                  >
                    <motion.svg
                      width="48"
                      height="60"
                      viewBox="0 0 24 32"
                      className="text-white"
                      fill="currentColor"
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      <motion.path
                        d="M12 0C12 0 0 12 0 20C0 26.627 5.373 32 12 32C18.627 32 24 26.627 24 20C24 12 12 0 12 0Z"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.svg>
                    <motion.div
                      animate={{ scale: [0, 2.5, 0], opacity: [0, 0.3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-white rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 border-2 border-dashed border-white/40 rounded-full"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Redesigned */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50/30 to-pink-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4"
            >
              <Zap className="w-4 h-4" />
              Simple Process
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of heroes in just three simple steps
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  step: "01",
                  title: "Create Profile",
                  description: "Sign up and complete your donor profile with blood type, location, and contact information",
                  icon: <UserPlus className="w-8 h-8" />,
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-50",
                  textColor: "text-blue-600",
                },
                {
                  step: "02",
                  title: "Get Notified",
                  description: "Receive instant notifications when someone nearby needs your blood type urgently",
                  icon: <Bell className="w-8 h-8" />,
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50",
                  textColor: "text-purple-600",
                },
                {
                  step: "03",
                  title: "Save Lives",
                  description: "Visit the donation center, donate blood, and track the lives you've helped save",
                  icon: <Heart className="w-8 h-8" />,
                  color: "from-red-500 to-red-600",
                  bgColor: "bg-red-50",
                  textColor: "text-red-600",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative group"
                >
                  {/* Connection Line */}
                  {index < 2 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 1) * 0.3, duration: 0.8 }}
                      className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform origin-left z-10"
                    />
                  )}

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                      className="flex items-center justify-between mb-6"
                    >
                      <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className={step.textColor}>{step.icon}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                          {step.step}
                        </span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.7, duration: 0.8 }}
                      className={`h-1 rounded-full bg-gradient-to-r ${step.color}`}
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r ${step.color} opacity-20`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-red-100 to-pink-100 opacity-30 blur-xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30 blur-xl"
        />
      </section>

      {/* Blood Type Compatibility Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-red-50/30 to-pink-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-red-100/20 to-pink-100/20 blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-100/80 text-red-600 rounded-full text-sm font-medium mb-6"
            >
              <motion.svg
                width="16"
                height="20"
                viewBox="0 0 24 32"
                fill="currentColor"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path d="M12 0C12 0 0 12 0 20C0 26.627 5.373 32 12 32C18.627 32 24 26.627 24 20C24 12 12 0 12 0Z" />
              </motion.svg>
              Blood Compatibility Guide
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Know Your Blood Type
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding blood compatibility is crucial for safe transfusions and emergency situations
            </p>
          </motion.div>

          {/* Interactive Blood Type Grid */}
          <div className="max-w-6xl mx-auto">
            {/* Universal Donor/Recipient Highlight */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white relative overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-white rounded-3xl"
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center"
                      >
                        <svg width="32" height="40" viewBox="0 0 24 32" fill="currentColor">
                          <path d="M12 0C12 0 0 12 0 20C0 26.627 5.373 32 12 32C18.627 32 24 26.627 24 20C24 12 12 0 12 0Z" />
                        </svg>
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold">O-</h3>
                        <p className="text-red-100">Universal Donor</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4">
                      Can donate to all blood types. Most needed in emergencies.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Can give to: All</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 text-white relative overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute inset-0 bg-white rounded-3xl"
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        animate={{ rotate: [360, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center"
                      >
                        <svg width="32" height="40" viewBox="0 0 24 32" fill="currentColor">
                          <path d="M12 0C12 0 0 12 0 20C0 26.627 5.373 32 12 32C18.627 32 24 26.627 24 20C24 12 12 0 12 0Z" />
                        </svg>
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold">AB+</h3>
                        <p className="text-teal-100">Universal Recipient</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4">
                      Can receive from all blood types. Rare but versatile.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Can receive: All</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* All Blood Types Interactive Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
            >
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
                Complete Blood Type Compatibility Chart
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { type: "O-", color: "from-red-500 to-red-600", rarity: "6.6%", canGiveTo: ["All"], canReceiveFrom: ["O-"] },
                  { type: "O+", color: "from-orange-500 to-orange-600", rarity: "37.4%", canGiveTo: ["O+", "A+", "B+", "AB+"], canReceiveFrom: ["O-", "O+"] },
                  { type: "A-", color: "from-blue-500 to-blue-600", rarity: "6.3%", canGiveTo: ["A-", "A+", "AB-", "AB+"], canReceiveFrom: ["O-", "A-"] },
                  { type: "A+", color: "from-green-500 to-green-600", rarity: "35.7%", canGiveTo: ["A+", "AB+"], canReceiveFrom: ["O-", "O+", "A-", "A+"] },
                  { type: "B-", color: "from-purple-500 to-purple-600", rarity: "1.5%", canGiveTo: ["B-", "B+", "AB-", "AB+"], canReceiveFrom: ["O-", "B-"] },
                  { type: "B+", color: "from-pink-500 to-pink-600", rarity: "8.5%", canGiveTo: ["B+", "AB+"], canReceiveFrom: ["O-", "O+", "B-", "B+"] },
                  { type: "AB-", color: "from-indigo-500 to-indigo-600", rarity: "0.6%", canGiveTo: ["AB-", "AB+"], canReceiveFrom: ["O-", "A-", "B-", "AB-"] },
                  { type: "AB+", color: "from-teal-500 to-teal-600", rarity: "3.4%", canGiveTo: ["AB+"], canReceiveFrom: ["All"] },
                ].map((blood, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.4, ease: "easeOut" }}
                    whileHover={{ 
                      y: -3,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    className="group bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
                  >
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${blood.color} origin-left`}
                    />
                    
                    <div className="relative z-10">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${blood.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                        <motion.svg
                          width="18"
                          height="22"
                          viewBox="0 0 24 32"
                          fill="white"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path d="M12 0C12 0 0 12 0 20C0 26.627 5.373 32 12 32C18.627 32 24 26.627 24 20C24 12 12 0 12 0Z" />
                        </motion.svg>
                      </div>
                      
                      <h4 className="text-lg font-bold text-slate-900 text-center mb-2">
                        {blood.type}
                      </h4>
                      
                      <div className="text-center mb-3">
                        <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                          {blood.rarity}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-medium text-green-600">Give to:</span>
                          <p className="text-slate-600 mt-1 leading-tight">
                            {blood.canGiveTo.includes("All") ? "All types" : blood.canGiveTo.join(", ")}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium text-blue-600">Receive:</span>
                          <p className="text-slate-600 mt-1 leading-tight">
                            {blood.canReceiveFrom.includes("All") ? "All types" : blood.canReceiveFrom.join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Emergency Ready",
                  description: "O- blood is always needed for emergency transfusions",
                  color: "from-red-500 to-red-600",
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Impact",
                  description: "Blood type distribution varies by ethnicity and region",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: <Activity className="w-8 h-8" />,
                  title: "Life Saving",
                  description: "One donation can save up to 3 lives through different components",
                  color: "from-green-500 to-green-600",
                },
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${fact.color} flex items-center justify-center text-white`}>
                    {fact.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{fact.title}</h4>
                  <p className="text-slate-600 text-sm">{fact.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Clean Professional Design */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          {/* Clean Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lives Changed Through Donation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our community showing the impact of blood donation
            </p>
          </motion.div>

          {/* Clean Professional Carousel */}
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden">
              {/* Carousel Container */}
              <motion.div
                animate={{
                  x: [0, -400, -800, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-8"
                style={{ width: "calc(300% + 64px)" }}
              >
                {[
                  {
                    name: "Sarah Ahmed",
                    role: "Emergency Patient",
                    location: "Dhaka Medical College",
                    story: "During my emergency surgery, LifeStream connected me with donors in just 2 hours. The quick response saved my life.",
                    image: "https://ui-avatars.com/api/?name=Sarah+Ahmed&background=ef4444&color=fff&bold=true&size=80",
                    impact: "Life Saved",
                    category: "Patient"
                  },
                  {
                    name: "Dr. Rahman",
                    role: "Chief Medical Officer",
                    location: "Square Hospital",
                    story: "LifeStream has improved our emergency response time by 70%. It's transformed how we handle critical cases.",
                    image: "https://ui-avatars.com/api/?name=Dr+Rahman&background=3b82f6&color=fff&bold=true&size=80",
                    impact: "70% Faster Response",
                    category: "Medical Professional"
                  },
                  {
                    name: "Karim Hassan",
                    role: "Regular Donor",
                    location: "Community Volunteer",
                    story: "I've donated 18 times through LifeStream. Knowing exactly how my donations help motivates me to continue.",
                    image: "https://ui-avatars.com/api/?name=Karim+Hassan&background=10b981&color=fff&bold=true&size=80",
                    impact: "18 Donations",
                    category: "Donor"
                  },
                  {
                    name: "Fatima Khan",
                    role: "Thalassemia Patient",
                    location: "Apollo Hospital",
                    story: "Regular transfusions are vital for me. LifeStream ensures I always have access to safe blood when needed.",
                    image: "https://ui-avatars.com/api/?name=Fatima+Khan&background=ec4899&color=fff&bold=true&size=80",
                    impact: "Monthly Support",
                    category: "Patient"
                  },
                  {
                    name: "Dr. Nasir Ahmed",
                    role: "Blood Bank Director",
                    location: "National Blood Center",
                    story: "LifeStream has streamlined our donor management. We can track inventory better and respond proactively.",
                    image: "https://ui-avatars.com/api/?name=Dr+Nasir&background=8b5cf6&color=fff&bold=true&size=80",
                    impact: "System Improved",
                    category: "Medical Professional"
                  },
                  {
                    name: "Ahmed Ali",
                    role: "First-time Donor",
                    location: "University Student",
                    story: "The app made my first donation experience comfortable. Now I'm a regular donor and proud to save lives.",
                    image: "https://ui-avatars.com/api/?name=Ahmed+Ali&background=f59e0b&color=fff&bold=true&size=80",
                    impact: "New Donor",
                    category: "Donor"
                  }
                ].map((story, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-80 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          story.category === 'Patient' ? 'bg-red-100 text-red-600' :
                          story.category === 'Medical Professional' ? 'bg-blue-100 text-blue-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {story.category}
                        </span>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          story.category === 'Patient' ? 'bg-red-500 text-white' :
                          story.category === 'Medical Professional' ? 'bg-blue-500 text-white' :
                          'bg-green-500 text-white'
                        }`}>
                          {story.impact}
                        </div>
                      </div>

                      {/* Profile */}
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-16 h-16 rounded-full shadow-md"
                        />
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{story.name}</h4>
                          <p className="text-sm font-medium text-gray-600">{story.role}</p>
                          <p className="text-xs text-gray-500">{story.location}</p>
                        </div>
                      </div>

                      {/* Story */}
                      <div className="relative mb-6">
                        <div className="absolute -top-2 -left-2 text-4xl text-gray-200 font-serif">"</div>
                        <p className="text-gray-700 leading-relaxed italic relative z-10 pl-4">
                          {story.story}
                        </p>
                        <div className="absolute -bottom-2 -right-2 text-4xl text-gray-200 font-serif rotate-180">"</div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 pt-6 border-t border-gray-100">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600 font-medium">5.0</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Gradient Overlays */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 4.2,
                  }}
                  className="w-2 h-2 rounded-full bg-red-400"
                />
              ))}
            </div>

            {/* Professional Impact Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-24"
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4"
                >
                  Our Impact
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  Trusted by Thousands
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                  Join a community that's making a real difference in healthcare across Bangladesh
                </motion.p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    number: "12K+",
                    label: "Active Donors",
                    sublabel: "Verified volunteers",
                    icon: <Users className="w-6 h-6" />,
                  },
                  {
                    number: "75K+",
                    label: "Lives Saved",
                    sublabel: "Through donations",
                    icon: <Heart className="w-6 h-6" />,
                  },
                  {
                    number: "98%",
                    label: "Success Rate",
                    sublabel: "Successful matches",
                    icon: <CheckCircle className="w-6 h-6" />,
                  },
                  {
                    number: "24/7",
                    label: "Support",
                    sublabel: "Emergency response",
                    icon: <Clock className="w-6 h-6" />,
                  },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="text-center group"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-100 transition-colors duration-300">
                        {metric.icon}
                      </div>
                    </div>
                    
                    {/* Number with Typing Animation */}
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 h-12 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 + index * 0.3, duration: 0.1 }}
                      >
                        {metric.number.split('').map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 1.4 + index * 0.3 + charIndex * 0.1,
                              duration: 0.3,
                              ease: "easeOut"
                            }}
                            className="inline-block"
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.span>
                      
                      {/* Typing Cursor */}
                      <motion.span
                        animate={{
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.8 + index * 0.3,
                        }}
                        className="ml-1 text-red-500"
                      >
                        |
                      </motion.span>
                    </motion.div>
                    
                    {/* Label */}
                    <div className="text-lg font-semibold text-gray-800 mb-1">
                      {metric.label}
                    </div>
                    
                    {/* Sublabel */}
                    <div className="text-sm text-gray-500">
                      {metric.sublabel}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">Emergency Response</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our 24/7 emergency response team ensures critical blood requests are handled immediately.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock3 className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-gray-700">Average response time: 45 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-gray-700">Mobile blood collection available</span>
                    </div>
                    <div className="flex items-center">
                      <Headphones className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-gray-700">24/7 emergency hotline support</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                    <Bell className="w-16 h-16 text-white" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Request Emergency Blood
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Download Our Mobile App
                </h2>
                <p className="text-gray-600 mb-8">
                  Get instant notifications, track your donations, and help save lives on the go.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: <Bell className="w-5 h-5" />, text: "Instant emergency notifications" },
                    { icon: <BarChart3 className="w-5 h-5" />, text: "Track your donation history" },
                    { icon: <MapIcon className="w-5 h-5" />, text: "Find nearby donation centers" },
                    { icon: <UserCheck className="w-5 h-5" />, text: "Quick donor verification" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <div className="text-red-500">{feature.icon}</div>
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium"
                  >
                    <Smartphone className="w-5 h-5" />
                    Download for iOS
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium"
                  >
                    <Download className="w-5 h-5" />
                    Download for Android
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-64 h-96 mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col">
                      <div className="flex items-center justify-center mb-4">
                        <Heart className="w-8 h-8 text-red-500" />
                        <span className="ml-2 font-bold text-lg">LifeStream</span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="h-3 bg-red-100 rounded"></div>
                        <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                        <div className="h-20 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg"></div>
                        <div className="h-3 bg-gray-100 rounded"></div>
                        <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Centers Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Donation Centers Near You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the nearest blood donation center and schedule your appointment
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-100 h-96 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <pattern id="mapGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-400"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#mapGrid)" />
                    </svg>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-300 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Main Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                    {/* Animated Map Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="relative mb-6"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden">
                        <MapIcon className="w-10 h-10 text-white relative z-10" />
                        <motion.div
                          animate={{ scale: [0, 2, 0], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                          className="absolute inset-0 bg-white rounded-2xl"
                        />
                      </div>
                      
                      {/* Floating Indicators */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-red-400 rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Title and Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Interactive Map
                      </h3>
                      <p className="text-gray-600 mb-6 max-w-sm">
                        Find donation centers in your area with real-time availability and directions
                      </p>
                      
                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-300 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Search className="w-4 h-4" />
                        Explore Map
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-red-500/10 to-transparent rounded-tr-full"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full"></div>
                </motion.div>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Dhaka Medical College", distance: "2.5 km", time: "Open 24/7" },
                  { name: "Square Hospital", distance: "3.2 km", time: "8 AM - 10 PM" },
                  { name: "Apollo Hospital", distance: "4.1 km", time: "24/7 Emergency" },
                  { name: "United Hospital", distance: "5.8 km", time: "9 AM - 9 PM" },
                ].map((center, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800">{center.name}</h4>
                        <p className="text-sm text-gray-600">{center.distance} away</p>
                        <p className="text-sm text-green-600">{center.time}</p>
                      </div>
                      <Building className="w-8 h-8 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Health Benefits of Donating Blood
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Donating blood not only saves lives but also provides health benefits to donors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Cardiovascular Health",
                description: "Regular donation reduces risk of heart disease and stroke",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Iron Balance",
                description: "Helps maintain healthy iron levels in your body",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Free Health Check",
                description: "Get a mini health screening with every donation",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Blood Production",
                description: "Stimulates production of new blood cells",
                color: "from-purple-500 to-violet-500",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnership Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Corporate Partnerships
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join leading companies in making a difference through workplace blood drives
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Organize Workplace Blood Drives
                </h3>
                <p className="text-gray-600 mb-6">
                  Partner with us to organize blood donation drives at your workplace and make a lasting impact on your community.
                </p>
                <div className="space-y-3">
                  {[
                    "Free setup and coordination",
                    "Professional medical staff",
                    "Employee engagement activities",
                    "Corporate social responsibility recognition",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-red-500 to-red-300 rounded-2xl p-8 text-white">
                  <Briefcase className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">500+ Companies</h4>
                  <p className="mb-4">Already partnered with us</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2 bg-white text-red-600 rounded-lg font-medium"
                  >
                    Become a Partner
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Grameenphone", "BRAC Bank", "Square Group", "Unilever"].map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-gray-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">{company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Resources Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-green-100/20 to-teal-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              <BookOpen className="w-4 h-4" />
              Knowledge Center
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Educational Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides and resources to help you understand blood donation and maintain optimal health
            </p>
          </motion.div>

          {/* Resources Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <BookOpen className="w-7 h-7" />,
                title: "Donation Guide",
                description: "Step-by-step guide covering the entire blood donation process, eligibility requirements, and preparation tips",
                color: "from-blue-500 via-blue-600 to-indigo-600",
                bgColor: "from-blue-50 to-indigo-50",
                articles: "25 Articles",
                features: ["Eligibility Check", "Preparation Tips", "Process Guide", "Post-Donation Care"],
                accent: "blue"
              },
              {
                icon: <FileText className="w-7 h-7" />,
                title: "Health & Wellness",
                description: "Expert medical advice on maintaining optimal health as a blood donor, including nutrition and lifestyle tips",
                color: "from-emerald-500 via-green-600 to-teal-600",
                bgColor: "from-emerald-50 to-teal-50",
                articles: "18 Articles",
                features: ["Nutrition Guide", "Exercise Tips", "Health Monitoring", "Recovery Advice"],
                accent: "emerald"
              },
              {
                icon: <Camera className="w-7 h-7" />,
                title: "Video Library",
                description: "Educational video content featuring real donation experiences, expert interviews, and medical insights",
                color: "from-purple-500 via-violet-600 to-purple-600",
                bgColor: "from-purple-50 to-violet-50",
                articles: "12 Videos",
                features: ["Donor Stories", "Expert Talks", "Process Videos", "Q&A Sessions"],
                accent: "purple"
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${resource.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${resource.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {resource.icon}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        resource.accent === 'blue' ? 'bg-blue-100 text-blue-700' :
                        resource.accent === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {resource.articles}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                      {resource.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-8">
                      {resource.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1, duration: 0.5 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${resource.color}`}></div>
                          <span className="text-sm text-gray-600 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${resource.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl`}
                    >
                      <span>Explore Resources</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100"
                >
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${resource.color}`}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need More Information?
              </h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive resource library is constantly updated with the latest medical guidelines and best practices
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-red-300 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 shadow-lg"
              >
                <BookOpen className="w-5 h-5" />
                Browse All Resources
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Impact Section - Unique Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-300"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 border border-red-100 text-red-700 rounded-full text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              Nationwide Impact
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Community's
              <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                Collective Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Together, we're building Bangladesh's largest network of life-savers, creating lasting change in healthcare accessibility
            </p>
          </motion.div>

          {/* Interactive Impact Map */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="relative">
              {/* Professional Central Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
                className="relative z-10 mx-auto w-80 h-80 flex items-center justify-center"
              >
                {/* Animated Concentric Circles */}
                <div className="relative w-full h-full">
                  {/* Outer Ring */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-red-200/40"
                  />
                  
                  {/* Middle Ring */}
                  <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border border-red-300/30"
                  />
                  
                  {/* Inner Ring */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-16 rounded-full border border-red-400/20"
                  />

                  {/* Central Content */}
                  <div className="absolute inset-20 bg-white rounded-full shadow-2xl border-4 border-red-100 flex items-center justify-center">
                    <div className="flex items-center justify-center">
                      {/* Animated Blood Drop - Centered */}
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-20 h-20 relative"
                      >
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 24 32"
                          className="text-red-500"
                          fill="currentColor"
                        >
                          <motion.path
                            d="M12 0C12 0 0 12 0 20C0 26.627 5.373 32 12 32C18.627 32 24 26.627 24 20C24 12 12 0 12 0Z"
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </svg>
                        
                        {/* Ripple Effect */}
                        <motion.div
                          animate={{
                            scale: [0, 2, 0],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                          className="absolute inset-0 rounded-full bg-red-400"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-red-400 rounded-full"
                      style={{
                        left: `${50 + 35 * Math.cos((i * Math.PI * 2) / 8)}%`,
                        top: `${50 + 35 * Math.sin((i * Math.PI * 2) / 8)}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    />
                  ))}

                  {/* Connection Nodes */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-white border-2 border-red-400 rounded-full shadow-lg"
                      style={{
                        left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 4 + Math.PI / 4)}%`,
                        top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 4 + Math.PI / 4)}%`,
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        borderColor: ["#f87171", "#ef4444", "#dc2626", "#f87171"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}

                  {/* Data Flow Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {[...Array(4)].map((_, i) => {
                      const angle = (i * Math.PI * 2) / 4 + Math.PI / 4;
                      const startX = 50 + 25 * Math.cos(angle);
                      const startY = 50 + 25 * Math.sin(angle);
                      const endX = 50 + 40 * Math.cos(angle);
                      const endY = 50 + 40 * Math.sin(angle);
                      
                      return (
                        <motion.line
                          key={i}
                          x1={`${startX}%`}
                          y1={`${startY}%`}
                          x2={`${endX}%`}
                          y2={`${endY}%`}
                          stroke="#f87171"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          animate={{
                            strokeDashoffset: [0, -8],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            strokeDashoffset: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            },
                            opacity: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.5,
                            },
                          }}
                        />
                      );
                    })}
                  </svg>
                </div>
              </motion.div>

              {/* Orbiting Impact Cards */}
              {[
                {
                  icon: <Globe className="w-6 h-6" />,
                  label: "Cities Covered",
                  value: "64",
                  color: "from-blue-500 to-blue-600",
                  position: { top: "10%", left: "15%" },
                  delay: 0.8
                },
                {
                  icon: <Building className="w-6 h-6" />,
                  label: "Partner Hospitals",
                  value: "150+",
                  color: "from-green-500 to-green-600",
                  position: { top: "15%", right: "10%" },
                  delay: 1.0
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  label: "Awards Won",
                  value: "12",
                  color: "from-purple-500 to-purple-600",
                  position: { bottom: "15%", left: "10%" },
                  delay: 1.2
                },
                {
                  icon: <ThumbsUp className="w-6 h-6" />,
                  label: "Satisfaction Rate",
                  value: "98%",
                  color: "from-orange-500 to-orange-600",
                  position: { bottom: "10%", right: "15%" },
                  delay: 1.4
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: stat.delay, 
                    duration: 0.8, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="absolute group cursor-pointer"
                  style={stat.position}
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 min-w-[160px]">
                    {/* Connection Line to Center */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: stat.delay + 0.3, duration: 0.8 }}
                      className="absolute w-20 h-0.5 bg-gradient-to-r from-red-300 to-transparent"
                      style={{
                        left: index % 2 === 0 ? '100%' : '-80px',
                        top: '50%',
                        transformOrigin: index % 2 === 0 ? 'left' : 'right'
                      }}
                    />
                    
                    <div className="text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>

                    {/* Floating Indicator */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Community Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Join Our Growing Community
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Connect with thousands of donors, recipients, and healthcare professionals making a difference
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <MessageSquare className="w-8 h-8" />,
                    title: "Community Forums",
                    description: "Share experiences, ask questions, and connect with fellow donors",
                    color: "from-blue-500 to-blue-600",
                    features: ["24/7 Support", "Expert Advice", "Peer Connection"]
                  },
                  {
                    icon: <Calendar className="w-8 h-8" />,
                    title: "Local Events",
                    description: "Participate in blood drives, health camps, and awareness programs",
                    color: "from-green-500 to-green-600",
                    features: ["Regular Drives", "Health Camps", "Awareness Events"]
                  },
                  {
                    icon: <Share2 className="w-8 h-8" />,
                    title: "Impact Stories",
                    description: "Share your donation journey and inspire others to save lives",
                    color: "from-purple-500 to-purple-600",
                    features: ["Story Sharing", "Impact Tracking", "Recognition"]
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                      <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                      
                      <div className="space-y-2">
                        {feature.features.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2.4, duration: 0.8 }}
                className="text-center mt-12 pt-8 border-t border-gray-200"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Join Community
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-300 text-white font-bold rounded-2xl hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donor Recognition Program - Professional Design */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
              Recognition Program
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Donor Recognition Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We recognize and appreciate our donors based on their contribution to saving lives
            </p>
          </motion.div>

          {/* Recognition Levels */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  level: "Community Donor",
                  donations: "1-10 Donations",
                  description: "New donors making their first impact in the community",
                  benefits: [
                    "Digital donation certificate",
                    "Health screening reminders",
                    "Community newsletter access",
                    "Donor support resources"
                  ],
                  icon: <Heart className="w-6 h-6" />,
                  color: "red"
                },
                {
                  level: "Dedicated Donor",
                  donations: "11-25 Donations",
                  description: "Committed donors showing consistent dedication to helping others",
                  benefits: [
                    "Annual health check-up",
                    "Priority appointment booking",
                    "Exclusive donor events",
                    "Recognition certificate"
                  ],
                  icon: <Award className="w-6 h-6" />,
                  color: "blue"
                },
                {
                  level: "Lifesaver Champion",
                  donations: "26+ Donations",
                  description: "Elite donors who have made extraordinary contributions to healthcare",
                  benefits: [
                    "VIP donor services",
                    "Annual appreciation event",
                    "Lifetime achievement award",
                    "Personal donor coordinator"
                  ],
                  icon: <Star className="w-6 h-6" />,
                  color: "green"
                }
              ].map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                        level.color === 'red' ? 'bg-red-50 text-red-600' :
                        level.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                        'bg-green-50 text-green-600'
                      }`}>
                        {level.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.level}</h3>
                      <p className={`text-sm font-semibold mb-3 ${
                        level.color === 'red' ? 'text-red-600' :
                        level.color === 'blue' ? 'text-blue-600' :
                        'text-green-600'
                      }`}>
                        {level.donations}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {level.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-sm mb-4">Recognition Benefits:</h4>
                      {level.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            level.color === 'red' ? 'bg-red-500' :
                            level.color === 'blue' ? 'bg-blue-500' :
                            'bg-green-500'
                          }`}></div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Program Impact</h3>
                <p className="text-gray-600">Recognition program statistics</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "8,500+", label: "Community Donors", targetNumber: 8500, suffix: "+" },
                  { number: "2,800+", label: "Dedicated Donors", targetNumber: 2800, suffix: "+" },
                  { number: "700+", label: "Lifesaver Champions", targetNumber: 700, suffix: "+" },
                  { number: "95%", label: "Satisfaction Rate", targetNumber: 95, suffix: "%" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    {/* Counting Animation */}
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                      >
                        <CountingNumber 
                          target={stat.targetNumber} 
                          suffix={stat.suffix}
                          delay={1.4 + index * 0.2}
                        />
                      </motion.span>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Contact Us
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-red-500 to-red-300 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Get in Touch
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          Emergency Hotline
                        </p>
                        <p className="text-gray-600">+880 1234 567890</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-gray-600">support@lifestream.org</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Location</p>
                        <p className="text-gray-600">Dhaka, Bangladesh</p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{
                      backgroundColor: ["#fef2f2", "#fee2e2", "#fef2f2"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-4 rounded-lg border border-red-200"
                  >
                    <div className="flex items-center gap-2 text-red-600">
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">
                        24/7 Emergency Service Available
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">LifeStream</span>
              </div>
              <p className="text-gray-400">
                Connecting donors with recipients to save lives through blood
                donation across Bangladesh.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Search Donors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blood-donation-requests"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Donation Requests
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Become a Donor
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/faq"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-r-lg font-medium"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} LifeStream. All rights reserved.
            </p>
            <p className="mt-2 text-sm">
              Made by Tanvir Hossain for saving lives
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
