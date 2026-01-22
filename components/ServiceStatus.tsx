'use client';

import { useState, useEffect } from 'react';
import { Server, CheckCircle2, XCircle, Loader2, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type ServiceHealth = {
  name: string;
  status: 'operational' | 'degraded' | 'down' | 'checking';
  latency: number | null;
  endpoint: string;
  type: 'internal' | 'external'; 
};

export default function ServiceStatus() {
  const { language } = useLanguage();
  
  const [services, setServices] = useState<ServiceHealth[]>([
    { 
      name: 'Portfolio (Este site)', 
      status: 'checking', 
      latency: null, 
      endpoint: '/', 
      type: 'internal' 
    },
    { 
      name: 'CineVerse', 
      status: 'checking', 
      latency: null, 
      endpoint: 'cineverse-weld.vercel.app', 
      type: 'external' 
    },
     { 
      name: 'DevTracker', 
      status: 'checking', 
      latency: null, 
      endpoint: 'ghsiqueira.pythonanywhere.com', 
      type: 'external' 
    },
  ]);

  const checkService = async (index: number) => {
    const service = services[index];
    const start = performance.now();
    
    try {
      const options: RequestInit = service.type === 'external' 
        ? { mode: 'no-cors', cache: 'no-store' } 
        : { cache: 'no-store' };

      await fetch(service.endpoint, options);
      
      const end = performance.now();
      const latency = Math.round(end - start);
      
      setServices(prev => {
        const newServices = [...prev];
        newServices[index] = {
          ...service,
          status: latency > 800 ? 'degraded' : 'operational',
          latency: latency
        };
        return newServices;
      });

    } catch (error) {
      console.error(`Erro ao testar ${service.name}:`, error);
      setServices(prev => {
        const newServices = [...prev];
        newServices[index] = { ...service, status: 'down', latency: null };
        return newServices;
      });
    }
  };

  useEffect(() => {
    services.forEach((_, index) => checkService(index));
    
    const interval = setInterval(() => {
        services.forEach((_, index) => checkService(index));
    }, 60000);

    return () => clearInterval(interval);
  }, []); 

  const t = {
    title: language === 'en' ? "Project Status" : "Status dos Projetos",
    operational: language === 'en' ? "Online" : "Online",
    degraded: language === 'en' ? "Slow" : "Lentidão",
    down: language === 'en' ? "Offline" : "Fora do Ar",
    checking: language === 'en' ? "Pinging..." : "Testando...",
    ms: "ms"
  };

  const getIcon = (status: string) => {
    switch(status) {
      case 'operational': return <CheckCircle2 className="text-green-500" size={18} />;
      case 'degraded': return <Activity className="text-yellow-500" size={18} />;
      case 'down': return <XCircle className="text-red-500" size={18} />;
      default: return <Loader2 className="animate-spin text-gray-500" size={18} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'operational': return 'bg-green-500/10 border-green-500/20 text-green-400';
      case 'degraded': return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400';
      case 'down': return 'bg-red-500/10 border-red-500/20 text-red-400';
      default: return 'bg-gray-800 border-gray-700 text-gray-400';
    }
  };

  return (
    <section className="py-10 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-2 mb-6 text-gray-400 text-sm font-mono uppercase tracking-widest">
            <Server size={14} />
            {t.title}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-lg border flex flex-col gap-2 transition-all ${getStatusColor(service.status)}`}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm truncate pr-2">{service.name}</span>
                {getIcon(service.status)}
              </div>
              
              <div className="flex justify-between items-end mt-2">
                <span className="text-xs opacity-70">
                    {service.status === 'checking' ? t.checking : 
                     service.status === 'operational' ? t.operational : 
                     service.status === 'degraded' ? t.degraded : t.down}
                </span>
                {service.latency !== null && (
                    <span className="text-lg font-bold font-mono">
                        {service.latency}<span className="text-xs font-normal ml-0.5">{t.ms}</span>
                    </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}