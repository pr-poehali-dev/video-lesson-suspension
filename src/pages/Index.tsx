import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

// ─── Вспомогательные компоненты ───────────────────────────────────────────────

const SpringSVG = ({ active }: { active: boolean }) => (
  <svg width="60" height="120" viewBox="0 0 60 120" className={active ? "spring-animate" : ""}>
    <line x1="30" y1="0" x2="30" y2="15" stroke="#00d4ff" strokeWidth="2.5" />
    {[15, 25, 35, 45, 55, 65, 75, 85].map((y, i) => (
      <path
        key={i}
        d={`M 10 ${y} Q 50 ${y + 4} 50 ${y + 5} Q 50 ${y + 6} 10 ${y + 10}`}
        stroke="#00d4ff"
        strokeWidth="2"
        fill="none"
        opacity={0.8}
      />
    ))}
    <line x1="30" y1="95" x2="30" y2="120" stroke="#00d4ff" strokeWidth="2.5" />
  </svg>
);

const AnimatedFormula = ({ formula, delay = 0 }: { formula: string; delay?: number }) => (
  <div
    className="formula-box animate-fade-in rounded-r"
    style={{ animationDelay: `${delay}s`, opacity: 0 }}
  >
    <span className="font-mono text-lg glow-cyan tracking-wider">{formula}</span>
  </div>
);

const KeywordBadge = ({ text, color = "cyan", delay = 0 }: { text: string; color?: string; delay?: number }) => {
  const colors: Record<string, string> = {
    cyan: "border-cyan-400/50 text-cyan-300 bg-cyan-400/10",
    amber: "border-amber-400/50 text-amber-300 bg-amber-400/10",
    green: "border-green-400/50 text-green-300 bg-green-400/10",
  };
  return (
    <span
      className={`inline-block border px-4 py-2 rounded text-sm font-oswald tracking-widest uppercase animate-fade-in ${colors[color]}`}
      style={{ animationDelay: `${delay}s`, opacity: 0 }}
    >
      {text}
    </span>
  );
};

const CheckItem = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <div
    className="flex items-start gap-3 animate-fade-in"
    style={{ animationDelay: `${delay}s`, opacity: 0 }}
  >
    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Icon name="Check" size={12} className="text-green-400" />
    </div>
    <span className="text-gray-300 text-sm font-golos leading-relaxed">{text}</span>
  </div>
);

// ─── Слайд 1: Титул ───────────────────────────────────────────────────────────
const Slide1 = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="relative h-full flex flex-col items-center justify-center text-center px-8 grid-bg">
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-400/50" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-400/50" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-cyan-400/50" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-400/50" />

      <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <span className="font-oswald text-xs tracking-[0.3em] uppercase text-gray-500 border border-gray-700 px-4 py-1.5 rounded-full">
          Сыктывкарский лесопромышленный техникум · 2024
        </span>
      </div>

      <div className="mb-6 animate-float" style={{ animationDelay: "0.2s", opacity: 0 }}>
        <div className="w-20 h-20 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center animate-pulse-glow">
          <span className="text-4xl">🚗</span>
        </div>
      </div>

      <h1 className="font-oswald text-5xl md:text-6xl font-bold text-white mb-2 tracking-wide animate-fade-in leading-tight"
        style={{ animationDelay: "0.3s", opacity: 0 }}>
        ПОДВЕСКА<br />
        <span className="glow-cyan">АВТОМОБИЛЯ</span>
      </h1>

      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-5 animate-fade-in"
        style={{ animationDelay: "0.4s", opacity: 0 }} />

      <p className="font-golos text-gray-400 text-lg mb-8 max-w-lg animate-fade-in"
        style={{ animationDelay: "0.5s", opacity: 0 }}>
        Физические основы работы, создание видеоурока и действующей модели
      </p>

      <div className="neon-border rounded-lg px-8 py-4 animate-fade-in"
        style={{ animationDelay: "0.6s", opacity: 0 }}>
        <p className="font-golos text-white font-medium text-base">Владимирова Полина Вадимовна</p>
        <p className="font-golos text-gray-500 text-sm mt-1">Специальность: Техническое обслуживание и ремонт автомобилей</p>
        <p className="font-golos text-gray-500 text-sm">Руководитель: Петров А.В. · Группа 2ТО-23</p>
      </div>

      <div className="absolute bottom-10 right-16 font-mono text-xs text-gray-700 animate-fade-in"
        style={{ animationDelay: "1s", opacity: 0 }}>
        F = −kx · · · a = F/m · · · F = mg
      </div>
    </div>
  );
};

// ─── Слайд 2: Актуальность ────────────────────────────────────────────────────
const Slide2 = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="h-full flex flex-col px-10 py-8 grid-bg">
      <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <span className="font-mono text-xs text-cyan-500/60 tracking-widest">СЛАЙД 02 / АКТУАЛЬНОСТЬ</span>
        <h2 className="font-oswald text-4xl font-bold text-white mt-1">
          Почему это <span className="glow-cyan">важно?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <div className="flex flex-col gap-4">
          <div className="neon-border rounded-lg p-5 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="font-golos text-gray-300 leading-relaxed text-sm">
              Подвеска — одна из ключевых систем безопасности автомобиля.
              Её понимание критически важно для будущих специалистов в автосфере,
              поскольку напрямую влияет на жизнь водителя и пассажиров.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { num: "67%", label: "ДТП связаны с неисправной подвеской" },
              { num: "3×", label: "меньше усталости при хорошей подвеске" },
              { num: "40%", label: "влияние на управляемость авто" },
            ].map((s, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-700/50 rounded-lg p-3 text-center animate-counter-up"
                style={{ animationDelay: `${0.3 + i * 0.1}s`, opacity: 0 }}>
                <div className="font-oswald text-2xl font-bold glow-cyan">{s.num}</div>
                <div className="font-golos text-xs text-gray-500 mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <p className="font-mono text-xs text-gray-600 mb-3 tracking-widest uppercase">Ключевые понятия проекта</p>
            <div className="flex flex-wrap gap-2">
              <KeywordBadge text="Комфорт" color="cyan" delay={0.7} />
              <KeywordBadge text="Безопасность" color="amber" delay={0.8} />
              <KeywordBadge text="Управляемость" color="green" delay={0.9} />
            </div>
          </div>
        </div>

        <div className="neon-border rounded-lg p-5 flex flex-col justify-between animate-fade-in"
          style={{ animationDelay: "0.3s", opacity: 0 }}>
          <p className="font-mono text-xs text-gray-500 mb-4 tracking-widest">ВАЖНОСТЬ СИСТЕМ АВТОМОБИЛЯ</p>
          {[
            { label: "Подвеска", val: 92, color: "#00d4ff" },
            { label: "Тормоза", val: 98, color: "#ff4444" },
            { label: "Двигатель", val: 85, color: "#ffb300" },
            { label: "Рулевое", val: 88, color: "#00ff88" },
            { label: "Кузов", val: 70, color: "#a78bfa" },
          ].map((item, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="font-golos text-xs text-gray-400">{item.label}</span>
                <span className="font-mono text-xs" style={{ color: item.color }}>{item.val}%</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${item.val}%`, background: `linear-gradient(90deg, ${item.color}80, ${item.color})` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Слайд 3: Цель и задачи ───────────────────────────────────────────────────
const Slide3 = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="h-full flex flex-col px-10 py-8 grid-bg">
      <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <span className="font-mono text-xs text-amber-500/60 tracking-widest">СЛАЙД 03 / ЦЕЛЬ И ЗАДАЧИ</span>
        <h2 className="font-oswald text-4xl font-bold text-white mt-1">
          Цель проекта и <span className="glow-amber">задачи</span>
        </h2>
      </div>

      <div className="neon-border-amber rounded-lg p-5 mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded bg-amber-400/15 flex items-center justify-center">
            <Icon name="Target" size={16} className="text-amber-400" />
          </div>
          <span className="font-oswald text-amber-400 text-sm tracking-widest uppercase">Главная цель</span>
        </div>
        <p className="font-golos text-white text-base leading-relaxed">
          Создание видеоурока и действующей физической модели подвески автомобиля для
          наглядной демонстрации физических законов и их практического применения в автомобилестроении.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {[
          { num: "01", title: "Теоретическая база", text: "Изучить физические законы, лежащие в основе работы подвески: закон Гука, второй закон Ньютона", icon: "BookOpen", color: "#00d4ff" },
          { num: "02", title: "Проектирование модели", text: "Разработать схему и спроектировать действующую физическую модель подвески", icon: "Layers", color: "#ffb300" },
          { num: "03", title: "Съёмка видеоурока", text: "Записать структурированный видеоурок с демонстрацией работы модели и анализом формул", icon: "Video", color: "#00ff88" },
          { num: "04", title: "Апробация и внедрение", text: "Провести апробацию в учебной группе, получить обратную связь и внедрить в учебный процесс", icon: "Users", color: "#a78bfa" },
        ].map((task, i) => (
          <div key={i} className="bg-gray-900/60 border border-gray-700/40 rounded-lg p-4 flex gap-4 animate-fade-in hover:border-gray-600/60 transition-colors"
            style={{ animationDelay: `${0.3 + i * 0.15}s`, opacity: 0 }}>
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: `${task.color}15`, border: `1px solid ${task.color}40` }}>
                <Icon name={task.icon as "BookOpen"} size={18} style={{ color: task.color }} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs" style={{ color: task.color }}>#{task.num}</span>
                <span className="font-oswald text-white text-sm font-medium">{task.title}</span>
              </div>
              <p className="font-golos text-gray-500 text-xs leading-relaxed">{task.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Слайд 4: Физические законы ───────────────────────────────────────────────
const Slide4 = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="h-full flex flex-col px-10 py-8 dot-bg">
      <div className="mb-5 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <span className="font-mono text-xs text-green-500/60 tracking-widest">СЛАЙД 04 / ФИЗИКА</span>
        <h2 className="font-oswald text-4xl font-bold text-white mt-1">
          Физические <span className="glow-green">законы</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
        <div className="bg-gray-900/70 rounded-xl border border-cyan-400/20 p-5 animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded bg-cyan-400/10 flex items-center justify-center">
              <span className="font-mono text-xs glow-cyan font-bold">Гук</span>
            </div>
            <h3 className="font-oswald text-lg text-white">Закон Гука</h3>
          </div>
          <AnimatedFormula formula="F = −k·x" delay={0.3} />
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            {[
              { sym: "F", desc: "сила упругости (Н)" },
              { sym: "k", desc: "жёсткость пружины" },
              { sym: "x", desc: "деформация (м)" },
            ].map((v) => (
              <div key={v.sym} className="bg-gray-800/60 rounded p-2 text-center">
                <div className="font-mono text-cyan-400 font-bold text-sm">{v.sym}</div>
                <div className="text-gray-500 text-xs mt-1 leading-tight">{v.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-3">
            <SpringSVG active={true} />
          </div>
          <p className="font-golos text-xs text-gray-500 text-center mt-2">
            Пружина подвески сжимается пропорционально нагрузке
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-gray-900/70 rounded-xl border border-amber-400/20 p-4 animate-fade-in"
            style={{ animationDelay: "0.4s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded bg-amber-400/10 flex items-center justify-center">
                <span className="font-mono text-xs glow-amber font-bold">2N</span>
              </div>
              <h3 className="font-oswald text-lg text-white">2-й закон Ньютона</h3>
            </div>
            <div className="formula-box rounded-r mb-2" style={{ borderLeftColor: "#ffb300" }}>
              <span className="font-mono text-lg glow-amber tracking-wider">F = m·a</span>
            </div>
            <p className="font-golos text-xs text-gray-500">
              Определяет ускорение кузова при наезде на неровность. Чем жёстче подвеска — тем больше ускорение.
            </p>
          </div>

          <div className="bg-gray-900/70 rounded-xl border border-red-400/20 p-4 animate-fade-in"
            style={{ animationDelay: "0.5s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded bg-red-400/10 flex items-center justify-center">
                <Icon name="Zap" size={14} className="text-red-400" />
              </div>
              <h3 className="font-oswald text-lg text-white">Амортизатор</h3>
            </div>
            <div className="formula-box rounded-r mb-2" style={{ borderLeftColor: "#ff6b6b" }}>
              <span className="font-mono text-base" style={{ color: "#ff6b6b" }}>Fд = −c·v</span>
            </div>
            <p className="font-golos text-xs text-gray-500">
              Сила демпфирования пропорциональна скорости колебаний. Гасит энергию за счёт вязкого трения масла.
            </p>
          </div>

          <div className="bg-gray-900/70 rounded-xl border border-purple-400/20 p-4 animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded bg-purple-400/10 flex items-center justify-center">
                <Icon name="BarChart2" size={14} className="text-purple-400" />
              </div>
              <h3 className="font-oswald text-lg text-white">Стабилизатор</h3>
            </div>
            <p className="font-golos text-xs text-gray-500">
              Перераспределяет крутящий момент между колёсами при крене. Уменьшает угол крена кузова в поворотах.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Слайд 5: Результат ───────────────────────────────────────────────────────
const Slide5 = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="h-full flex flex-col px-10 py-8 grid-bg">
      <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <span className="font-mono text-xs text-green-500/60 tracking-widest">СЛАЙД 05 / РЕЗУЛЬТАТ</span>
        <h2 className="font-oswald text-4xl font-bold text-white mt-1">
          Готовый <span className="glow-green">продукт</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <div className="neon-border rounded-xl p-6 flex flex-col animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center animate-pulse-glow">
              <Icon name="PlayCircle" size={24} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="font-oswald text-xl text-white">Видеоурок</h3>
              <span className="font-mono text-xs text-gray-500">«Подвеска: физика и практика»</span>
            </div>
          </div>
          <div className="space-y-2 flex-1">
            <CheckItem text="Теоретическая часть с анимированными формулами (12 мин.)" delay={0.3} />
            <CheckItem text="Демонстрация действующей модели с комментариями" delay={0.4} />
            <CheckItem text="Практические задачи и разбор решений" delay={0.5} />
            <CheckItem text="Итоговые выводы и связь с профессией" delay={0.6} />
          </div>
          <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 flex items-center gap-2 animate-fade-in"
            style={{ animationDelay: "0.7s", opacity: 0 }}>
            <Icon name="CheckCircle" size={16} className="text-green-400" />
            <span className="font-golos text-green-300 text-sm">Видеоурок готов и размещён на учебном портале</span>
          </div>
        </div>

        <div className="bg-gray-900/60 border border-amber-400/20 rounded-xl p-6 flex flex-col animate-fade-in"
          style={{ animationDelay: "0.3s", opacity: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
              <span className="text-2xl">🔧</span>
            </div>
            <div>
              <h3 className="font-oswald text-xl text-white">Действующая модель</h3>
              <span className="font-mono text-xs text-gray-500">Масштаб 1:5 · Металл + полимеры</span>
            </div>
          </div>

          <div className="flex-1 bg-gray-950/60 rounded-lg p-4 mb-4 relative overflow-hidden">
            <svg viewBox="0 0 280 160" className="w-full h-full">
              <rect x="0" y="145" width="280" height="15" fill="#1a1a2e" rx="2" />
              <line x1="0" y1="145" x2="280" y2="145" stroke="#374151" strokeWidth="1" strokeDasharray="20,10" />
              <circle cx="80" cy="130" r="20" fill="none" stroke="#6b7280" strokeWidth="2.5" />
              <circle cx="80" cy="130" r="8" fill="none" stroke="#4b5563" strokeWidth="1.5" />
              <line x1="80" y1="110" x2="110" y2="95" stroke="#9ca3af" strokeWidth="2" />
              {[0,1,2,3,4].map((i) => (
                <path key={i} d={`M ${110 + (i % 2 === 0 ? -8 : 8)} ${95 - i * 8} Q ${110 + (i % 2 === 0 ? 8 : -8)} ${95 - i * 8 + 4} ${110 + (i % 2 === 0 ? 8 : -8)} ${95 - (i + 1) * 8}`} stroke="#00d4ff" strokeWidth="2" fill="none" />
              ))}
              <rect x="125" y="55" width="8" height="45" fill="#374151" rx="2" />
              <rect x="127" y="75" width="4" height="20" fill="#6b7280" rx="1" />
              <rect x="30" y="25" width="180" height="40" fill="#1e293b" rx="6" stroke="#334155" strokeWidth="1.5" />
              <text x="120" y="50" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="IBM Plex Mono">КУЗОВ</text>
              <circle cx="200" cy="130" r="20" fill="none" stroke="#6b7280" strokeWidth="2.5" />
              <circle cx="200" cy="130" r="8" fill="none" stroke="#4b5563" strokeWidth="1.5" />
              <line x1="200" y1="110" x2="175" y2="95" stroke="#9ca3af" strokeWidth="2" />
              {[0,1,2,3,4].map((i) => (
                <path key={i} d={`M ${175 + (i % 2 === 0 ? 8 : -8)} ${95 - i * 8} Q ${175 + (i % 2 === 0 ? -8 : 8)} ${95 - i * 8 + 4} ${175 + (i % 2 === 0 ? -8 : 8)} ${95 - (i + 1) * 8}`} stroke="#00d4ff" strokeWidth="2" fill="none" />
              ))}
              <rect x="147" y="55" width="8" height="45" fill="#374151" rx="2" />
              <rect x="149" y="75" width="4" height="20" fill="#6b7280" rx="1" />
              <text x="50" y="162" fill="#4b5563" fontSize="8" fontFamily="IBM Plex Mono">ПРУЖИНА</text>
              <text x="120" y="162" fill="#4b5563" fontSize="8" fontFamily="IBM Plex Mono">АМОРТИЗАТОР</text>
            </svg>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2 flex items-center gap-2 animate-fade-in"
            style={{ animationDelay: "0.7s", opacity: 0 }}>
            <Icon name="CheckCircle" size={16} className="text-amber-400" />
            <span className="font-golos text-amber-300 text-sm">Модель собрана, испытана и передана в кабинет</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Слайд 6: Аудитория ───────────────────────────────────────────────────────
const Slide6 = ({ active }: { active: boolean }) => {
  if (!active) return null;
  const audiences = [
    {
      icon: "🔩", title: "Автослесарь", subtitle: "Техническое обслуживание", color: "#00d4ff",
      points: ["Диагностика неисправностей подвески", "Понимание физики износа деталей", "Технические регламенты и допуски", "Безопасная эксплуатация подъёмников"],
    },
    {
      icon: "👩‍🔧", title: "Девушки в автосфере", subtitle: "Женская аудитория", color: "#ff6b9d",
      points: ["Доступное объяснение без жаргона", "Визуальное обучение с 3D-моделями", "Уверенность при обращении в сервис", "Карьера в автомобильной индустрии"],
    },
    {
      icon: "📚", title: "Преподаватели", subtitle: "Методический материал", color: "#a78bfa",
      points: ["Готовый учебный видеоматериал", "Физическая модель для урока", "Интеграция в рабочую программу", "Задачи с решениями по теме"],
    },
  ];

  return (
    <div className="h-full flex flex-col px-10 py-8 grid-bg">
      <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <span className="font-mono text-xs text-purple-500/60 tracking-widest">СЛАЙД 06 / АУДИТОРИЯ</span>
        <h2 className="font-oswald text-4xl font-bold text-white mt-1">
          Для кого этот <span style={{ color: "#a78bfa", textShadow: "0 0 10px rgba(167,139,250,0.4)" }}>проект?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
        {audiences.map((aud, i) => (
          <div key={i} className="bg-gray-900/70 rounded-xl p-5 flex flex-col animate-fade-in border border-gray-700/40"
            style={{ animationDelay: `${0.2 + i * 0.15}s`, opacity: 0, borderTopColor: `${aud.color}50`, borderTopWidth: "2px" }}>
            <div className="text-3xl mb-3">{aud.icon}</div>
            <h3 className="font-oswald text-xl font-bold mb-0.5" style={{ color: aud.color }}>{aud.title}</h3>
            <p className="font-mono text-xs text-gray-600 mb-4">{aud.subtitle}</p>
            <div className="space-y-2 flex-1">
              {aud.points.map((p, j) => (
                <div key={j} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: aud.color }} />
                  <span className="font-golos text-gray-400 text-xs leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Слайд 7: Перспективы ─────────────────────────────────────────────────────
const Slide7 = ({ active }: { active: boolean }) => {
  if (!active) return null;
  const plans = [
    {
      phase: "Фаза II", title: "Тормозная система", timeline: "2025 г.", icon: "⛔", color: "#ff4444",
      items: ["Закон трения Амонтона", "Гидравлика тормозного привода", "Модель дискового тормоза"],
    },
    {
      phase: "Фаза III", title: "Рулевое управление", timeline: "2025–2026 г.", icon: "🎯", color: "#ffb300",
      items: ["Передаточное число рейки", "Сила трения в шарнирах", "Кинематика поворота"],
    },
    {
      phase: "Фаза IV", title: "Двигатель ВС", timeline: "2026 г.", icon: "⚙️", color: "#00ff88",
      items: ["Термодинамика цикла", "Механика кривошипного механизма", "КПД и тепловые потери"],
    },
  ];

  return (
    <div className="h-full flex flex-col px-10 py-8 dot-bg">
      <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <span className="font-mono text-xs text-amber-500/60 tracking-widest">СЛАЙД 07 / ПЕРСПЕКТИВЫ</span>
        <h2 className="font-oswald text-4xl font-bold text-white mt-1">
          Планы <span className="glow-amber">развития</span>
        </h2>
      </div>

      <div className="relative mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
        <div className="flex items-center gap-0">
          <div className="w-4 h-4 rounded-full bg-cyan-400 flex-shrink-0" />
          <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 via-amber-400 to-green-400" />
          <div className="w-4 h-4 rounded-full bg-red-400 flex-shrink-0" />
          <div className="flex-1 h-0.5 bg-gradient-to-r from-red-400 via-amber-400 to-green-400" />
          <div className="w-4 h-4 rounded-full bg-amber-400 flex-shrink-0" />
          <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-400 to-green-400" />
          <div className="w-4 h-4 rounded-full bg-green-400 flex-shrink-0" />
        </div>
        <div className="flex justify-between mt-1">
          <span className="font-mono text-xs text-cyan-400">2024 ✓</span>
          <span className="font-mono text-xs text-red-400">2025</span>
          <span className="font-mono text-xs text-amber-400">2025–26</span>
          <span className="font-mono text-xs text-green-400">2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
        {plans.map((plan, i) => (
          <div key={i} className="bg-gray-900/70 rounded-xl p-5 flex flex-col border border-gray-700/40 animate-fade-in"
            style={{ animationDelay: `${0.3 + i * 0.15}s`, opacity: 0, borderTopColor: `${plan.color}50`, borderTopWidth: "2px" }}>
            <div className="flex justify-between items-start mb-3">
              <span className="text-2xl">{plan.icon}</span>
              <span className="font-mono text-xs px-2 py-1 rounded" style={{ color: plan.color, background: `${plan.color}15` }}>
                {plan.timeline}
              </span>
            </div>
            <span className="font-mono text-xs text-gray-600 mb-1">{plan.phase}</span>
            <h3 className="font-oswald text-lg font-bold text-white mb-3">{plan.title}</h3>
            <div className="space-y-2 flex-1">
              {plan.items.map((item, j) => (
                <div key={j} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: plan.color }} />
                  <span className="font-golos text-gray-400 text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Слайд 8: Итог ────────────────────────────────────────────────────────────
const Slide8 = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="relative h-full flex flex-col items-center justify-center text-center px-8 grid-bg overflow-hidden">
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-cyan-400/40" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-cyan-400/40" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-cyan-400/40" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-cyan-400/40" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <span className="font-mono text-xs text-gray-600 tracking-widest">СЛАЙД 08 / ИТОГИ</span>
        </div>

        <h2 className="font-oswald text-3xl font-bold text-gray-400 mt-4 mb-2 animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}>
          ФОРМУЛА УСПЕХА
        </h2>

        <div className="bg-gray-900/80 border border-cyan-400/30 rounded-2xl px-8 py-6 mb-8 animate-fade-in animate-pulse-glow"
          style={{ animationDelay: "0.3s", opacity: 0 }}>
          <div className="font-mono text-2xl md:text-3xl text-white tracking-wider">
            <span className="glow-cyan">Знания</span>
            <span className="text-gray-600 mx-3">×</span>
            <span className="glow-amber">Практика</span>
            <span className="text-gray-600 mx-3">×</span>
            <span className="glow-green">Страсть</span>
            <span className="text-gray-600 mx-3">=</span>
            <span className="text-white">🏆</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: "🎬", label: "Видеоурок\nготов", color: "#00d4ff" },
            { icon: "🔧", label: "Модель\nсоздана", color: "#ffb300" },
            { icon: "📖", label: "Физика\nосвоена", color: "#00ff88" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-900/60 rounded-xl p-4 border border-gray-700/40 animate-counter-up"
              style={{ animationDelay: `${0.5 + i * 0.1}s`, opacity: 0 }}>
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-golos text-xs text-gray-400 leading-tight whitespace-pre-line">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <p className="font-golos text-gray-500 text-sm italic">
            «Физика — язык, на котором написана вся техника»
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-gray-700" />
            <span className="font-mono text-xs text-gray-600 tracking-widest">ГБПОУ · 2024</span>
            <div className="w-8 h-px bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Данные слайдов ───────────────────────────────────────────────────────────
const SLIDES = [
  { id: 1, title: "Титульный слайд", Component: Slide1 },
  { id: 2, title: "Актуальность", Component: Slide2 },
  { id: 3, title: "Цель и задачи", Component: Slide3 },
  { id: 4, title: "Физические законы", Component: Slide4 },
  { id: 5, title: "Готовый продукт", Component: Slide5 },
  { id: 6, title: "Аудитория", Component: Slide6 },
  { id: 7, title: "Перспективы", Component: Slide7 },
  { id: 8, title: "Итоги", Component: Slide8 },
];

// ─── Главный компонент ────────────────────────────────────────────────────────
export default function Index() {
  const [current, setCurrent] = useState(0);
  const [renderKey, setRenderKey] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setRenderKey((k) => k + 1);
    setNavOpen(false);
  };

  const prev = () => { if (current > 0) goTo(current - 1); };
  const next = () => { if (current < SLIDES.length - 1) goTo(current + 1); };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  const { Component } = SLIDES[current];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      {/* Шапка */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-gray-800/60 bg-gray-950/90 backdrop-blur flex-shrink-0 z-10 relative">
        <div className="flex items-center gap-4">
          <button onClick={() => setNavOpen(!navOpen)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Icon name="Menu" size={16} />
            <span className="font-mono text-xs hidden sm:block">НАВИГАЦИЯ</span>
          </button>
          <div className="hidden sm:block w-px h-4 bg-gray-700" />
          <span className="font-mono text-xs text-gray-600 hidden sm:block">
            {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        <div className="font-oswald text-sm text-gray-400 tracking-wider uppercase">
          Подвеска автомобиля
        </div>

        <div className="flex items-center gap-2">
          <button onClick={prev} disabled={current === 0}
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
            <Icon name="ChevronLeft" size={14} />
          </button>
          <button onClick={next} disabled={current === SLIDES.length - 1}
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
            <Icon name="ChevronRight" size={14} />
          </button>
        </div>
      </header>

      {/* Выпадающая навигация */}
      {navOpen && (
        <div className="absolute top-14 left-4 z-50 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-3 min-w-56 animate-fade-in">
          {SLIDES.map((slide, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                i === current ? "bg-cyan-400/10 text-cyan-300" : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}>
              <span className="font-mono text-xs text-gray-600 w-5">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-golos text-sm">{slide.title}</span>
            </button>
          ))}
        </div>
      )}

      {/* Контент */}
      <main className="flex-1 relative overflow-hidden" style={{ height: "calc(100vh - 108px)" }}>
        <div key={renderKey} className="slide-enter h-full">
          <Component active={true} />
        </div>
      </main>

      {/* Подвал */}
      <footer className="flex items-center justify-between px-6 py-3 border-t border-gray-800/60 bg-gray-950/90 backdrop-blur flex-shrink-0">
        <div className="flex items-center gap-3 flex-1 max-w-xs">
          <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full transition-all duration-500"
              style={{ width: `${((current + 1) / SLIDES.length) * 100}%` }} />
          </div>
          <span className="font-mono text-xs text-gray-600">{Math.round(((current + 1) / SLIDES.length) * 100)}%</span>
        </div>

        <div className="flex items-center gap-1.5">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-5 h-1.5 bg-cyan-400" : "w-1.5 h-1.5 bg-gray-700 hover:bg-gray-500"
              }`} />
          ))}
        </div>

        <div className="font-mono text-xs text-gray-700 hidden sm:block">← → перемещение</div>
      </footer>
    </div>
  );
}