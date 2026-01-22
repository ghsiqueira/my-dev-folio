'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Sparkles, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '@/context/LanguageContext'; 

type Message = {
  role: 'user' | 'bot';
  text: string;
};

const uiText = {
  pt: {
    initial: 'Olá! Sou a IA do Gabriel. Posso te contar sobre a stack completa (React, Python, Dados) e projetos dele. O que manda? 🤖',
    placeholder: 'Pergunte sobre skills, projetos...',
    thinking: 'Pensando...',
    title: 'Assistente Virtual',
    online: 'Online',
    connectionError: 'Ops! Minha conexão falhou. Tente de novo!'
  },
  en: {
    initial: 'Hello! I am Gabriel\'s AI. I can tell you about his full stack skills, data projects, and career. Ask me anything! 🤖',
    placeholder: 'Ask about skills, projects...',
    thinking: 'Thinking...',
    title: 'Virtual Assistant',
    online: 'Online',
    connectionError: 'Oops! Connection failed. Please try again!'
  }
};

export default function ChatBot() {
  const { language } = useLanguage(); 
  const t = uiText[language as keyof typeof uiText]; 

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'bot', text: t.initial }]);
  }, [language]); 

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const clearChat = () => {
    setMessages([{ role: 'bot', text: t.initial }]); 
  };

  const sendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, lang: language }), 
      });
      
      const data = await res.json();
      
      if (data.response) {
        setMessages(prev => [...prev, { role: 'bot', text: data.response }]);
      } else {
        throw new Error('Sem resposta');
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: t.connectionError }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg shadow-cyan-500/20 transition-all ${
          isOpen ? 'hidden' : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
        }`}
      >
        <div className="relative">
            <MessageSquare size={26} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[85vh] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Bot size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm flex items-center gap-1">
                    {t.title} <Sparkles size={12} className="text-yellow-400" />
                  </h3>
                  <span className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    {t.online}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <button 
                  onClick={clearChat}
                  title="Limpar/Clear"
                  className="p-2 hover:bg-gray-700 rounded-full text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  title="Fechar/Close"
                  className="p-2 hover:bg-gray-700 rounded-full text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/95 scrollbar-thin scrollbar-thumb-gray-800">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-cyan-600 text-white rounded-br-none'
                        : 'bg-gray-800 text-gray-200 rounded-bl-none border border-gray-700'
                    }`}
                  >
                    {msg.role === 'bot' ? (
                      <ReactMarkdown
                        components={{
                          strong: ({node, ...props}) => <span className="font-bold text-cyan-300" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-4 space-y-1 my-2" {...props} />,
                          li: ({node, ...props}) => <li className="marker:text-cyan-500" {...props} />,
                          h3: ({node, ...props}) => <h3 className="font-bold text-white mt-3 mb-1 text-base border-b border-gray-700 pb-1" {...props} />,
                          p: ({node, ...props}) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 p-3 rounded-2xl rounded-bl-none border border-gray-700 flex items-center gap-2">
                    <Loader2 className="animate-spin text-cyan-500" size={16} />
                    <span className="text-xs text-gray-400">{t.thinking}</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={sendMessage} className="p-3 bg-gray-800 border-t border-gray-700 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 bg-gray-900 border border-gray-600 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-500"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/20"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}