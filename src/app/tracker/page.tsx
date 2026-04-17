"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Car, ClipboardCheck, Wrench, Cog, Search, CheckCircle, Camera, MessageCircle, Send, LogIn } from "lucide-react";
import { demoTrackerData, trackerStages } from "@/lib/data";

const stageIcons: Record<string, React.ElementType> = {
  Car, ClipboardCheck, Wrench, Cog, Search, CheckCircle,
};

export default function TrackerPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(demoTrackerData.messages);

  const data = demoTrackerData;
  const currentIdx = trackerStages.findIndex((s) => s.id === data.currentStage);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoggedIn(true);
  }

  function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: "client", text: newMessage.trim(), time: "Just now" },
    ]);
    setNewMessage("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "konings", text: "Thanks for your message! We'll get back to you shortly. 🙂", time: "Just now" },
      ]);
    }, 1500);
  }

  if (!loggedIn) {
    return (
      <div className="py-24 px-4">
        <div className="max-w-md mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn size={28} className="text-gold" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Track Your Vehicle</h1>
            <p className="text-muted-foreground text-sm">Log in to see your vehicle&apos;s progress.</p>
          </motion.div>
          <form onSubmit={handleLogin} className="bg-[#141414] border border-white/5 rounded-xl p-6 space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@konings.co.uk"
                className="w-full bg-[#1C1C1C] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Any password works (demo)"
                className="w-full bg-[#1C1C1C] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-black py-2.5 rounded-lg font-semibold hover:bg-gold-light transition-colors"
            >
              Log In
            </button>
            <p className="text-xs text-muted-foreground text-center">Demo mode — any credentials will work</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-gold uppercase tracking-[0.2em] text-sm mb-1">My Vehicle</p>
              <h1 className="text-3xl font-bold">{data.vehicle}</h1>
            </div>
            <button
              onClick={() => setLoggedIn(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Log Out
            </button>
          </div>

          {/* Vehicle Info */}
          <div className="grid sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Colour", value: data.colour },
              { label: "Registration", value: data.registration },
              { label: "Service", value: data.service },
              { label: "Est. Completion", value: data.estimatedCompletion },
            ].map((item) => (
              <div key={item.label} className="bg-[#141414] border border-white/5 rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Stage Pipeline */}
          <div className="bg-[#141414] border border-white/5 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold mb-6">Progress</h2>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/5" />
              <div className="absolute top-5 left-0 h-0.5 bg-gold transition-all" style={{ width: `${(currentIdx / (trackerStages.length - 1)) * 100}%` }} />
              {trackerStages.map((stage, i) => {
                const Icon = stageIcons[stage.icon] || CheckCircle;
                const isComplete = i <= currentIdx;
                const isCurrent = i === currentIdx;
                return (
                  <div key={stage.id} className="relative flex flex-col items-center z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      isCurrent ? "border-gold bg-gold text-black" :
                      isComplete ? "border-gold bg-gold/20 text-gold" :
                      "border-white/10 bg-[#1C1C1C] text-muted-foreground"
                    }`}>
                      <Icon size={18} />
                    </div>
                    <p className={`text-[10px] sm:text-xs mt-2 ${isComplete ? "text-foreground" : "text-muted-foreground"}`}>
                      {stage.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-8">
            {/* Updates */}
            <div className="bg-[#141414] border border-white/5 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-6">Updates</h2>
              <div className="space-y-6">
                {data.updates.map((update, i) => {
                  const stage = trackerStages.find((s) => s.id === update.stage);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-8 border-l border-white/10"
                    >
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gold" />
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gold font-semibold">{stage?.label}</span>
                        <span className="text-xs text-muted-foreground">{update.date}</span>
                      </div>
                      <p className="text-sm leading-relaxed">{update.note}</p>
                      {update.photos > 0 && (
                        <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                          <Camera size={12} className="text-gold" />
                          {update.photos} photos taken
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Messages */}
            <div className="bg-[#141414] border border-white/5 rounded-xl p-6 flex flex-col">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageCircle size={18} className="text-gold" /> Messages
              </h2>
              <div className="flex-1 space-y-3 mb-4 max-h-[400px] overflow-y-auto">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                      msg.from === "client" ? "bg-gold text-black" : "bg-[#1C1C1C]"
                    }`}>
                      <p>{msg.text}</p>
                      <p className={`text-[10px] mt-1 ${msg.from === "client" ? "text-black/50" : "text-muted-foreground"}`}>{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-[#1C1C1C] border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <button type="submit" className="bg-gold text-black p-2 rounded-lg hover:bg-gold-light transition-colors">
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
