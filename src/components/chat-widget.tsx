"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { chatResponses } from "@/lib/data";

interface Message {
  from: "bot" | "user";
  text: string;
}

function detectIntent(input: string): string {
  const lower = input.toLowerCase();
  if (lower.match(/new car|just bought|brand new|factory/)) return "new_car";
  if (lower.match(/scratch|swirl|paint|correction|polish|restore/)) return "paint_issues";
  if (lower.match(/ppf|protection film|xpel|stone chip|wrap/)) return "ppf";
  if (lower.match(/classic|vintage|historic|old car|museum/)) return "classic";
  if (lower.match(/price|cost|how much|pricing|quote/)) return "pricing";
  if (lower.match(/book|appointment|schedule|visit|come in/)) return "booking";
  return "fallback";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: chatResponses.greeting },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);

    setTimeout(() => {
      const intent = detectIntent(userMsg);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: chatResponses[intent] },
      ]);
    }, 600);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 z-50 w-[380px] max-h-[500px] bg-[#141414] border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 bg-[#1C1C1C] border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Könings AI Advisor</h3>
                <p className="text-xs text-muted-foreground">Ask us anything about our services</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-gold text-black"
                        : "bg-[#1C1C1C] text-foreground"
                    }`}
                  >
                    {msg.text.split("\n").map((line, j) => (
                      <p key={j} className={j > 0 ? "mt-1" : ""}>
                        {line.split(/(\*\*.*?\*\*)/g).map((part, k) =>
                          part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={k} className="font-semibold">{part.slice(2, -2)}</strong>
                          ) : (
                            <span key={k}>{part}</span>
                          )
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="p-3 border-t border-white/5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our services..."
                  className="flex-1 bg-[#1C1C1C] border border-white/10 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <button
                  type="submit"
                  className="bg-gold text-black p-2 rounded-lg hover:bg-gold-light transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
              <p className="text-[10px] text-muted-foreground mt-2 text-center">Demo mode — responses are pre-configured</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 bg-gold text-black p-3.5 rounded-full shadow-lg hover:bg-gold-light transition-colors"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
