'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { staticContent } from '../data/content';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const { language } = useLanguage();
  const content = staticContent[language].contactForm;

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("ERRO: Variáveis de ambiente não carregadas.");
      setStatus('error');
      return;
    }

    const now = new Date();
    const formattedTime = now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: formattedTime, 
      system_info: navigator.userAgent 
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Erro detalhado:', JSON.stringify(error));
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800" id="contact">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="flex flex-col md:flex-row gap-12 bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Mail className="text-cyan-500" />
              {content.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {language === 'en' 
                ? "Interested in my work? Have a project idea? Or just want to talk about RPGs? Send me a message!" 
                : "Interessado no meu trabalho? Tem uma ideia de projeto? Ou só quer falar sobre RPG? Mande uma mensagem!"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">{content.name}</label>
              <input 
                required 
                type="text"
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                placeholder={language === 'en' ? "Your Name" : "Seu Nome"}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">{content.email}</label>
              <input 
                required 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                placeholder="exemplo@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">{content.message}</label>
              <textarea 
                required 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder={language === 'en' ? "Hello..." : "Olá..."}
              />
            </div>

            <button 
              disabled={status === 'loading' || status === 'success'}
              type="submit" 
              className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                status === 'success' 
                  ? 'bg-green-600 text-white' 
                  : status === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-cyan-600 hover:bg-cyan-500 text-white'
              }`}
            >
              {status === 'loading' ? (
                <Loader2 className="animate-spin" size={20} />
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  {content.success}
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle size={20} />
                  {content.error}
                </>
              ) : (
                <>
                  <Send size={20} />
                  {content.send}
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}