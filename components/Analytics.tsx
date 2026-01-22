'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { BarChart3, PieChart as PieIcon, Activity, Github, Loader2, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Analytics() {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/stats');
        if (!res.ok) throw new Error('Falha na API');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);
  
  const pieData = data?.wakatime?.languages?.slice(0, 5).map((lang: any, index: number) => ({
    name: lang.name,
    value: lang.percent,
    color: ['#06b6d4', '#10b981', '#8b5cf6', '#f59e0b', '#ec4899'][index] || '#cbd5e1'
  })) || [];

  const barData = data?.wakatime?.days?.map((day: any) => {
    const date = new Date(day.date);
    const weekday = new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'pt-BR', { weekday: 'short' }).format(date);
    
    return {
      day: weekday.charAt(0).toUpperCase() + weekday.slice(1), 
      hours: (day.total_seconds / 3600).toFixed(1), 
      rawDate: day.date
    };
  }) || [];

  const titles = {
    en: {
      section: "Real-time Analytics",
      focus: "Top Languages (WakaTime)",
      weekly: "Coding Activity (Last 7 Days)",
      loading: "Fetching real data...",
      error: "Could not load stats. Check API Keys.",
      empty: "No coding activity recorded this week."
    },
    pt: {
      section: "Analytics em Tempo Real",
      focus: "Top Linguagens (WakaTime)",
      weekly: "Atividade de Código (7 Dias)",
      loading: "Buscando dados reais...",
      error: "Não foi possível carregar. Verifique as chaves.",
      empty: "Nenhuma atividade de código registrada nesta semana."
    }
  };

  const t = titles[language];

  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-3">
            <Activity className="text-cyan-500" size={32} />
            <h2 className="text-3xl font-bold text-white border-l-4 border-cyan-500 pl-4">
              {t.section}
            </h2>
          </div>
          
          {!loading && data?.github && (
            <div className="flex items-center gap-4 bg-gray-800 px-5 py-3 rounded-xl border border-gray-700 shadow-lg">
              <Github size={24} className="text-white" />
              <div className="flex flex-col">
                 <span className="text-xs text-gray-400 uppercase tracking-wider">GitHub</span>
                 <div className="flex gap-4 text-sm text-gray-300">
                    <span><strong className="text-white">{data.github.repos}</strong> Repos</span>
                    <span className="w-px h-4 bg-gray-600 self-center"></span>
                    <span><strong className="text-white">{data.github.followers}</strong> Followers</span>
                 </div>
              </div>
            </div>
          )}
        </div>

        {loading ? (
           <div className="flex flex-col items-center justify-center py-20 gap-4">
             <Loader2 className="animate-spin text-cyan-500" size={40} />
             <p className="text-gray-400 animate-pulse">{t.loading}</p>
           </div>
        ) : error ? (
           <div className="flex items-center justify-center py-20 gap-2 text-red-400 bg-red-900/10 rounded-xl border border-red-900/50">
             <AlertTriangle size={20} />
             <p>{t.error}</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <PieIcon size={20} className="text-purple-400" />
                {t.focus}
              </h3>
              
              {pieData.length > 0 ? (
                <>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0.5)" />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', color: '#fff' }}
                          formatter={(value: any) => `${Number(value).toFixed(1)}%`}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {pieData.map((item: any) => (
                      <div key={item.name} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        {item.name} ({item.value.toFixed(1)}%)
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-gray-500 text-sm">
                  {t.empty}
                </div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <BarChart3 size={20} className="text-green-400" />
                {t.weekly}
              </h3>
              
              {barData.length > 0 ? (
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                      <XAxis dataKey="day" stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                      <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af' }} unit="h" />
                      <Tooltip 
                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', color: '#fff' }}
                        formatter={(value: any) => [`${value}h`, 'Coding']}
                      />
                      <Bar dataKey="hours" name="Coding" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-gray-500 text-sm">
                  {t.empty}
                </div>
              )}
            </motion.div>

          </div>
        )}
      </div>
    </section>
  );
}