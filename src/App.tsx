/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  UtensilsCrossed, 
  ShoppingBag, 
  User, 
  Search, 
  Star, 
  Clock, 
  ChevronRight, 
  Plus, 
  Minus,
  Heart,
  MapPin,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Types
interface FoodItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  calories: number;
  time: string;
}

interface CartItem extends FoodItem {
  quantity: number;
}

// Mock Data
const FOOD_ITEMS: FoodItem[] = [
  {
    id: 1,
    name: "Truffle Wagyu Burger",
    price: 18.50,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    category: "Burgers",
    description: "Premium wagyu beef with black truffle aioli and caramelized onions.",
    calories: 850,
    time: "20-25 min"
  },
  {
    id: 2,
    name: "Avocado Green Bowl",
    price: 14.20,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    category: "Salads",
    description: "Fresh kale, quinoa, roasted sweet potato, and creamy avocado dressing.",
    calories: 420,
    time: "15-20 min"
  },
  {
    id: 3,
    name: "Spicy Miso Ramen",
    price: 16.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    category: "Asian",
    description: "Rich pork broth with spicy miso, bamboo shoots, and soft-boiled egg.",
    calories: 680,
    time: "25-30 min"
  },
  {
    id: 4,
    name: "Margherita Pinsa",
    price: 15.50,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    category: "Pizza",
    description: "Traditional sourdough crust with San Marzano tomatoes and buffalo mozzarella.",
    calories: 550,
    time: "15-20 min"
  },
  {
    id: 5,
    name: "Salmon Poke Bowl",
    price: 17.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    category: "Asian",
    description: "Fresh Atlantic salmon, edamame, seaweed salad, and spicy mayo.",
    calories: 480,
    time: "10-15 min"
  },
  {
    id: 6,
    name: "Crispy Chicken Tacos",
    price: 13.50,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    category: "Mexican",
    description: "Three soft corn tacos with crispy chicken, slaw, and chipotle crema.",
    calories: 520,
    time: "15-20 min"
  }
];

const CATEGORIES = ["All", "Burgers", "Salads", "Asian", "Pizza", "Mexican"];

function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onLogin();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-emerald-900/10 border border-stone-100"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30 rotate-3">
            <UtensilsCrossed size={40} className="text-white" />
          </div>
          <h1 className="font-display font-extrabold text-4xl mb-2">CraveDash</h1>
          <p className="text-stone-400 font-medium">Your favorite meals, delivered fast.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Username</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={20} />
              <input 
                required
                type="text" 
                placeholder="Enter your username"
                className="w-full bg-stone-50 border border-stone-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Password</label>
            <div className="relative">
              <ShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={20} />
              <input 
                required
                type="password" 
                placeholder="••••••••"
                className="w-full bg-stone-50 border border-stone-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-stone-900/20 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>Sign In <ChevronRight size={20} /></>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-stone-400 text-sm">
            Don't have an account? <button className="text-emerald-500 font-bold hover:underline">Sign Up</button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'menu' | 'order' | 'profile'>('menu');
  const [profileView, setProfileView] = useState<'main' | 'edit' | 'orders' | 'favorites' | 'addresses' | 'settings'>('main');
  
  const [userProfile, setUserProfile] = useState({
    name: "Alex Johnson",
    email: "alex.j@example.com",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const filteredItems = FOOD_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: FoodItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.id !== id);
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      setIsOrderPlaced(false);
      setCart([]);
      setActiveTab('menu');
    }, 3000);
  };

  const renderProfileContent = () => {
    switch (profileView) {
      case 'edit':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => setProfileView('main')} className="p-2 bg-white rounded-xl shadow-sm border border-stone-100">
                <Minus size={20} className="rotate-90" />
              </button>
              <h3 className="font-display font-extrabold text-2xl">Edit Profile</h3>
            </div>
            
            <div className="flex flex-col items-center mb-8">
              <div className="relative group">
                <img src={userProfile.photo} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-emerald-500/20" />
                <button 
                  onClick={() => setUserProfile(prev => ({ ...prev, photo: `https://picsum.photos/seed/${Math.random()}/200/200` }))}
                  className="absolute bottom-0 right-0 bg-stone-900 text-white p-2 rounded-full shadow-lg hover:bg-emerald-500 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <p className="text-stone-400 text-xs mt-2 font-bold uppercase tracking-wider">Tap + to change photo</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  value={userProfile.name}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white border border-stone-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  value={userProfile.email}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-white border border-stone-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-bold"
                />
              </div>
            </div>

            <button 
              onClick={() => setProfileView('main')}
              className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-stone-900/20 hover:bg-emerald-500 transition-all mt-8"
            >
              Save Changes
            </button>
          </motion.div>
        );
      case 'orders':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => setProfileView('main')} className="p-2 bg-white rounded-xl shadow-sm border border-stone-100">
                <Minus size={20} className="rotate-90" />
              </button>
              <h3 className="font-display font-extrabold text-2xl">Order History</h3>
            </div>
            <div className="space-y-4">
              {[
                { id: '#ORD-9281', date: 'Oct 12, 2023', total: '$42.50', status: 'Delivered' },
                { id: '#ORD-8172', date: 'Sep 28, 2023', total: '$18.20', status: 'Delivered' },
                { id: '#ORD-7261', date: 'Sep 15, 2023', total: '$35.00', status: 'Delivered' }
              ].map(order => (
                <div key={order.id} className="bg-white p-5 rounded-3xl border border-stone-100 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-stone-900">{order.id}</div>
                    <div className="text-xs text-stone-400 font-semibold">{order.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display font-extrabold text-emerald-600">{order.total}</div>
                    <div className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold uppercase">{order.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'favorites':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => setProfileView('main')} className="p-2 bg-white rounded-xl shadow-sm border border-stone-100">
                <Minus size={20} className="rotate-90" />
              </button>
              <h3 className="font-display font-extrabold text-2xl">Favorites</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {FOOD_ITEMS.slice(0, 3).map(item => (
                <div key={item.id} className="bg-white p-4 rounded-3xl border border-stone-100 flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <Star size={12} fill="currentColor" /> {item.rating}
                    </div>
                  </div>
                  <button onClick={() => addToCart(item)} className="p-2 bg-stone-900 text-white rounded-xl">
                    <Plus size={16} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'addresses':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => setProfileView('main')} className="p-2 bg-white rounded-xl shadow-sm border border-stone-100">
                <Minus size={20} className="rotate-90" />
              </button>
              <h3 className="font-display font-extrabold text-2xl">Delivery Addresses</h3>
            </div>
            <div className="space-y-4">
              {[
                { type: 'Home', address: '123 Emerald St, San Francisco, CA' },
                { type: 'Work', address: '456 Tech Plaza, Palo Alto, CA' }
              ].map((addr, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl border border-stone-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">{addr.type}</div>
                    <div className="text-sm text-stone-400">{addr.address}</div>
                  </div>
                </div>
              ))}
              <button className="w-full py-4 border-2 border-dashed border-stone-200 rounded-3xl text-stone-400 font-bold flex items-center justify-center gap-2 hover:border-emerald-500 hover:text-emerald-500 transition-all">
                <Plus size={20} /> Add New Address
              </button>
            </div>
          </motion.div>
        );
      case 'settings':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => setProfileView('main')} className="p-2 bg-white rounded-xl shadow-sm border border-stone-100">
                <Minus size={20} className="rotate-90" />
              </button>
              <h3 className="font-display font-extrabold text-2xl">Account Settings</h3>
            </div>
            <div className="bg-white rounded-3xl border border-stone-100 overflow-hidden">
              {[
                "Push Notifications",
                "Email Preferences",
                "Privacy Policy",
                "Terms of Service",
                "Delete Account"
              ].map((setting, i) => (
                <div key={i} className={`p-5 flex justify-between items-center ${i !== 4 ? 'border-bottom border-stone-50' : 'text-rose-500'}`}>
                  <span className="font-bold">{setting}</span>
                  <ChevronRight size={18} className={i === 4 ? 'text-rose-300' : 'text-stone-300'} />
                </div>
              ))}
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="w-full mt-8 py-4 bg-rose-50 text-rose-500 rounded-2xl font-bold hover:bg-rose-100 transition-colors"
            >
              Sign Out
            </button>
          </motion.div>
        );
      default:
        return (
          <>
            <div className="bg-white rounded-[2rem] p-8 border border-stone-100 text-center mb-6 relative overflow-hidden">
              <button 
                onClick={() => setProfileView('edit')}
                className="absolute top-4 right-4 p-2 bg-stone-50 rounded-xl text-stone-400 hover:text-emerald-500 transition-colors"
              >
                <User size={18} />
              </button>
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-emerald-500/20">
                <img 
                  src={userProfile.photo} 
                  alt="User"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-display font-extrabold text-2xl">{userProfile.name}</h3>
              <p className="text-stone-400 text-sm">{userProfile.email}</p>
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-stone-50 p-4 rounded-2xl">
                  <div className="font-display font-extrabold text-emerald-600 text-xl">12</div>
                  <div className="text-[10px] text-stone-400 uppercase font-bold">Orders</div>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl">
                  <div className="font-display font-extrabold text-emerald-600 text-xl">4.8</div>
                  <div className="text-[10px] text-stone-400 uppercase font-bold">Rating</div>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl">
                  <div className="font-display font-extrabold text-emerald-600 text-xl">250</div>
                  <div className="text-[10px] text-stone-400 uppercase font-bold">Points</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { icon: <ShoppingBag size={20} />, label: "Order History", view: 'orders' as const },
                { icon: <Heart size={20} />, label: "Favorites", view: 'favorites' as const },
                { icon: <MapPin size={20} />, label: "Delivery Addresses", view: 'addresses' as const },
                { icon: <User size={20} />, label: "Account Settings", view: 'settings' as const }
              ].map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => setProfileView(item.view)}
                  className="w-full flex items-center justify-between p-5 bg-white rounded-2xl border border-stone-100 hover:border-emerald-200 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center text-stone-400 group-hover:text-emerald-500 group-hover:bg-emerald-50 transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-bold text-stone-700">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-stone-300" />
                </button>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen pb-24 bg-stone-50">
      {/* Header */}
      {activeTab !== 'profile' && (
        <header className="px-6 pt-8 pb-4 sticky top-0 bg-stone-50/80 backdrop-blur-md z-40">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="flex items-center gap-1 text-stone-400 text-xs font-semibold uppercase tracking-widest mb-1">
                <MapPin size={12} className="text-emerald-500" />
                Current Location
              </div>
              <h1 className="font-display font-extrabold text-xl">San Francisco, CA</h1>
            </div>
            <div className="relative">
              <button onClick={() => setActiveTab('profile')} className="w-10 h-10 rounded-full bg-white shadow-sm border border-stone-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={userProfile.photo} 
                  alt="Profile"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-stone-50">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search for your cravings..." 
              className="w-full bg-white border border-stone-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>
      )}

      <main className={`px-6 ${activeTab === 'profile' ? 'pt-8' : ''}`}>
        <AnimatePresence mode="wait">
          {activeTab === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Banner */}
              <div className="relative h-48 rounded-3xl overflow-hidden mb-8 shadow-xl shadow-emerald-900/10">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" 
                  alt="Hero"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8">
                  <div className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full w-fit mb-2 uppercase tracking-wider">
                    Limited Offer
                  </div>
                  <h2 className="text-white font-display font-extrabold text-3xl leading-tight mb-1">
                    30% OFF <br /> <span className="text-emerald-400">Your First Order</span>
                  </h2>
                  <p className="text-white/80 text-xs">Use code: CRAVE30</p>
                </div>
              </div>

              {/* Categories */}
              <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-8 -mx-6 px-6">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat 
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                      : 'bg-white text-stone-500 border border-stone-200 hover:border-emerald-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Popular Section */}
              <div className="flex justify-between items-end mb-6">
                <h3 className="font-display font-extrabold text-2xl">Popular Dishes</h3>
                <button className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                  See All <ChevronRight size={16} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map(item => (
                  <motion.div 
                    layout
                    key={item.id}
                    className="bg-white rounded-[2rem] p-4 border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-stone-400 hover:text-rose-500 transition-colors">
                        <Heart size={18} />
                      </button>
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-bold">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        {item.rating}
                      </div>
                    </div>
                    <div className="px-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                        <span className="font-display font-extrabold text-emerald-600">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-stone-400 text-xs mb-4 line-clamp-1">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 text-[10px] text-stone-500 font-semibold">
                          <span className="flex items-center gap-1"><Clock size={12} /> {item.time}</span>
                          <span className="flex items-center gap-1"><Flame size={12} /> {item.calories} kcal</span>
                        </div>
                        <button 
                          onClick={() => addToCart(item)}
                          className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center hover:bg-emerald-500 transition-colors shadow-lg shadow-stone-900/10"
                        >
                          <Plus size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'order' && (
            <motion.div
              key="order"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pt-4"
            >
              <h2 className="font-display font-extrabold text-3xl mb-8">Your Order</h2>
              
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={40} className="text-stone-300" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Your cart is empty</h3>
                  <p className="text-stone-400 text-sm mb-8">Looks like you haven't added anything yet.</p>
                  <button 
                    onClick={() => setActiveTab('menu')}
                    className="bg-emerald-500 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-emerald-500/20"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-3xl border border-stone-100">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 rounded-2xl object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold">{item.name}</h4>
                          <p className="text-emerald-600 font-bold text-sm">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-3 bg-stone-50 p-1 rounded-xl border border-stone-100">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => addToCart(item)}
                            className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-6 rounded-[2rem] border border-stone-100 space-y-4">
                    <div className="flex justify-between text-stone-500 text-sm">
                      <span>Subtotal</span>
                      <span className="font-bold text-stone-900">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-stone-500 text-sm">
                      <span>Delivery Fee</span>
                      <span className="font-bold text-stone-900">$2.50</span>
                    </div>
                    <div className="h-px bg-stone-100" />
                    <div className="flex justify-between text-lg font-display font-extrabold">
                      <span>Total</span>
                      <span className="text-emerald-600">${(cartTotal + 2.5).toFixed(2)}</span>
                    </div>
                    
                    <button 
                      onClick={handlePlaceOrder}
                      disabled={isOrderPlaced}
                      className={`w-full py-4 rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                        isOrderPlaced ? 'bg-emerald-600' : 'bg-stone-900 hover:bg-emerald-500'
                      }`}
                    >
                      {isOrderPlaced ? (
                        <>Order Placed! 🚀</>
                      ) : (
                        <>Place Order <ChevronRight size={20} /></>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {renderProfileContent()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-nav px-8 py-4 flex justify-between items-center z-50">
        <button 
          onClick={() => { setActiveTab('menu'); setProfileView('main'); }}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'menu' ? 'text-emerald-500 scale-110' : 'text-stone-400'}`}
        >
          <div className={`p-2 rounded-xl ${activeTab === 'menu' ? 'bg-emerald-500/10' : ''}`}>
            <UtensilsCrossed size={24} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">Menu</span>
        </button>

        <button 
          onClick={() => { setActiveTab('order'); setProfileView('main'); }}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'order' ? 'text-emerald-500 scale-110' : 'text-stone-400'}`}
        >
          <div className={`p-2 rounded-xl ${activeTab === 'order' ? 'bg-emerald-500/10' : ''}`}>
            <ShoppingBag size={24} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">Order</span>
        </button>

        <button 
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'profile' ? 'text-emerald-500 scale-110' : 'text-stone-400'}`}
        >
          <div className={`p-2 rounded-xl ${activeTab === 'profile' ? 'bg-emerald-500/10' : ''}`}>
            <User size={24} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
        </button>
      </nav>
    </div>
  );
}
