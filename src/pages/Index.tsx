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
          Сыктывкарский лесопромышленный техникум · 2026
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
        <p className="font-golos text-gray-500 text-sm">Руководитель: Кирпечова О.А. · Группа МРОА 12</p>
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

// ─── Слайд 5: LEGO-модель ─────────────────────────────────────────────────────
const Slide5 = ({ active }: { active: boolean }) => {
  if (!active) return null;

  const parts = [
    { label: "ПРУЖИНА", color: "#00d4ff", desc: "Закон Гука: F = −kx", x: "18%", y: "28%", lineX2: "22%", lineY2: "42%" },
    { label: "АМОРТИЗАТОР", color: "#ff6b6b", desc: "Fд = −c·v", x: "58%", y: "22%", lineX2: "52%", lineY2: "38%" },
    { label: "РЫЧАГ", color: "#ffb300", desc: "Передача усилия", x: "72%", y: "58%", lineX2: "62%", lineY2: "60%" },
    { label: "КОЛЕСО", color: "#00ff88", desc: "Точка контакта с дорогой", x: "14%", y: "72%", lineX2: "28%", lineY2: "72%" },
  ];

  return (
    <div className="h-full flex flex-col px-10 py-8 dot-bg">
      <div className="mb-4 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-amber-500/60 tracking-widest">СЛАЙД 05 / ДЕМОНСТРАЦИЯ</span>
          <span className="font-mono text-xs bg-amber-400/15 border border-amber-400/40 text-amber-300 px-2 py-0.5 rounded">★ КЛЮЧЕВОЙ СЛАЙД</span>
        </div>
        <h2 className="font-oswald text-4xl font-bold text-white mt-1">
          LEGO-модель <span className="glow-amber">подвески</span>
        </h2>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* Модель — основная зона */}
        <div className="md:col-span-3 relative bg-gray-950/80 rounded-2xl border border-amber-400/20 overflow-hidden animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}>

          {/* Заглушка-фото модели в виде детальной SVG */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 500 340" className="w-full h-full p-6">
              {/* Фон-платформа */}
              <rect x="0" y="280" width="500" height="60" fill="#111827" rx="4" />
              <line x1="0" y1="280" x2="500" y2="280" stroke="#374151" strokeWidth="1.5" strokeDasharray="30,15" />

              {/* LEGO-кузов */}
              <rect x="100" y="60" width="300" height="80" fill="#1d4ed8" rx="8" stroke="#3b82f6" strokeWidth="2" />
              <rect x="115" y="48" width="270" height="20" fill="#2563eb" rx="4" stroke="#60a5fa" strokeWidth="1.5" />
              {/* LEGO-шипы на кузове */}
              {[130,160,190,220,250,280,310,340].map((x, i) => (
                <circle key={i} cx={x} cy={42} r={7} fill="#1d4ed8" stroke="#60a5fa" strokeWidth="1.5" />
              ))}
              <text x="250" y="107" textAnchor="middle" fill="#93c5fd" fontSize="13" fontFamily="IBM Plex Mono" fontWeight="bold">КУЗОВ · LEGO</text>

              {/* Левая стойка — амортизатор */}
              <rect x="148" y="140" width="12" height="80" fill="#374151" rx="3" stroke="#6b7280" strokeWidth="1.5" />
              <rect x="150" y="165" width="8" height="35" fill="#9ca3af" rx="2" />
              {/* Левая пружина */}
              {[0,1,2,3,4,5].map((i) => (
                <path key={i}
                  d={`M ${135 + (i % 2 === 0 ? -10 : 10)} ${140 + i * 11} Q ${135 + (i % 2 === 0 ? 10 : -10)} ${140 + i * 11 + 5} ${135 + (i % 2 === 0 ? 10 : -10)} ${140 + (i + 1) * 11}`}
                  stroke="#00d4ff" strokeWidth="2.5" fill="none" />
              ))}

              {/* Правая стойка — амортизатор */}
              <rect x="340" y="140" width="12" height="80" fill="#374151" rx="3" stroke="#6b7280" strokeWidth="1.5" />
              <rect x="342" y="165" width="8" height="35" fill="#9ca3af" rx="2" />
              {/* Правая пружина */}
              {[0,1,2,3,4,5].map((i) => (
                <path key={i}
                  d={`M ${365 + (i % 2 === 0 ? -10 : 10)} ${140 + i * 11} Q ${365 + (i % 2 === 0 ? 10 : -10)} ${140 + i * 11 + 5} ${365 + (i % 2 === 0 ? 10 : -10)} ${140 + (i + 1) * 11}`}
                  stroke="#00d4ff" strokeWidth="2.5" fill="none" />
              ))}

              {/* Левый рычаг */}
              <line x1="100" y1="230" x2="155" y2="215" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
              {/* Правый рычаг */}
              <line x1="400" y1="230" x2="345" y2="215" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />

              {/* Левое колесо */}
              <circle cx="85" cy="255" r="30" fill="none" stroke="#6b7280" strokeWidth="5" />
              <circle cx="85" cy="255" r="18" fill="none" stroke="#4b5563" strokeWidth="3" />
              <circle cx="85" cy="255" r="6" fill="#374151" stroke="#9ca3af" strokeWidth="2" />
              {[0,60,120,180,240,300].map((angle, i) => (
                <line key={i}
                  x1={85 + Math.cos(angle * Math.PI / 180) * 7}
                  y1={255 + Math.sin(angle * Math.PI / 180) * 7}
                  x2={85 + Math.cos(angle * Math.PI / 180) * 17}
                  y2={255 + Math.sin(angle * Math.PI / 180) * 17}
                  stroke="#6b7280" strokeWidth="2" />
              ))}

              {/* Правое колесо */}
              <circle cx="415" cy="255" r="30" fill="none" stroke="#6b7280" strokeWidth="5" />
              <circle cx="415" cy="255" r="18" fill="none" stroke="#4b5563" strokeWidth="3" />
              <circle cx="415" cy="255" r="6" fill="#374151" stroke="#9ca3af" strokeWidth="2" />
              {[0,60,120,180,240,300].map((angle, i) => (
                <line key={i}
                  x1={415 + Math.cos(angle * Math.PI / 180) * 7}
                  y1={255 + Math.sin(angle * Math.PI / 180) * 7}
                  x2={415 + Math.cos(angle * Math.PI / 180) * 17}
                  y2={255 + Math.sin(angle * Math.PI / 180) * 17}
                  stroke="#6b7280" strokeWidth="2" />
              ))}

              {/* Подписи со стрелками */}
              {/* Пружина */}
              <line x1="118" y1="175" x2="65" y2="155" stroke="#00d4ff" strokeWidth="1" strokeDasharray="4,3" />
              <text x="60" y="148" textAnchor="end" fill="#00d4ff" fontSize="11" fontFamily="IBM Plex Mono">ПРУЖИНА</text>
              <text x="60" y="160" textAnchor="end" fill="#4b5563" fontSize="9" fontFamily="IBM Plex Mono">F = −kx</text>

              {/* Амортизатор */}
              <line x1="352" y1="165" x2="440" y2="140" stroke="#ff6b6b" strokeWidth="1" strokeDasharray="4,3" />
              <text x="445" y="135" fill="#ff6b6b" fontSize="11" fontFamily="IBM Plex Mono">АМОРТИЗАТОР</text>
              <text x="445" y="147" fill="#4b5563" fontSize="9" fontFamily="IBM Plex Mono">Fд = −c·v</text>

              {/* Рычаг */}
              <line x1="125" y1="225" x2="70" y2="240" stroke="#ffb300" strokeWidth="1" strokeDasharray="4,3" />
              <text x="65" y="252" textAnchor="end" fill="#ffb300" fontSize="11" fontFamily="IBM Plex Mono">РЫЧАГ</text>

              {/* Колесо */}
              <line x1="85" y1="285" x2="85" y2="310" stroke="#00ff88" strokeWidth="1" strokeDasharray="4,3" />
              <text x="85" y="322" textAnchor="middle" fill="#00ff88" fontSize="11" fontFamily="IBM Plex Mono">КОЛЕСО</text>
            </svg>
          </div>

          {/* Плашка «живая модель» */}
          <div className="absolute top-3 right-3 bg-amber-400/15 border border-amber-400/40 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs text-amber-300">ЖИВАЯ МОДЕЛЬ</span>
          </div>
        </div>

        {/* Правая панель — детали */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <p className="font-golos text-gray-500 text-xs animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Модель полностью функциональна: пружины сжимаются, рычаги двигаются, колёса вращаются.
          </p>

          {[
            { icon: "🔵", name: "Пружина", formula: "F = −kx", desc: "Жёсткость k подобрана под масштаб 1:5", color: "#00d4ff" },
            { icon: "🔴", name: "Амортизатор", formula: "Fд = −c·v", desc: "Демпфирует колебания пружины", color: "#ff6b6b" },
            { icon: "🟡", name: "Рычаг", formula: "M = F·L", desc: "Передаёт усилие от колеса к кузову", color: "#ffb300" },
            { icon: "🟢", name: "Колесо", formula: "v = ωr", desc: "Единственная точка контакта с дорогой", color: "#00ff88" },
          ].map((part, i) => (
            <div key={i} className="bg-gray-900/70 rounded-xl p-3 border border-gray-700/40 animate-fade-in flex items-start gap-3"
              style={{ animationDelay: `${0.4 + i * 0.1}s`, opacity: 0, borderLeftColor: part.color, borderLeftWidth: "2px" }}>
              <span className="text-lg">{part.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-oswald text-sm font-bold text-white">{part.name}</span>
                  <span className="font-mono text-xs px-1.5 py-0.5 rounded" style={{ color: part.color, background: `${part.color}15` }}>{part.formula}</span>
                </div>
                <p className="font-golos text-gray-500 text-xs">{part.desc}</p>
              </div>
            </div>
          ))}

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2 flex items-center gap-2 animate-fade-in mt-auto"
            style={{ animationDelay: "0.9s", opacity: 0 }}>
            <Icon name="CheckCircle" size={14} className="text-amber-400 flex-shrink-0" />
            <span className="font-golos text-amber-300 text-xs">Модель передана в кабинет техникума</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Слайд 6: Как создавался видеоурок ───────────────────────────────────────
const Slide6 = ({ active }: { active: boolean }) => {
  if (!active) return null;

  const steps = [
    { num: "01", icon: "📹", title: "Съёмка", desc: "Камера на штативе, демонстрация работы LEGO-модели крупным планом" },
    { num: "02", icon: "✂️", title: "Монтаж в CapCut", desc: "Нарезка, синхронизация, наложение формул и подписей поверх видео" },
    { num: "03", icon: "📐", title: "Вставка формул", desc: "Формулы Гука и Ньютона добавлены текстом с анимацией появления" },
    { num: "04", icon: "🎵", title: "Озвучка и музыка", desc: "Закадровый голос с объяснением + фоновая музыка без слов" },
  ];

  return (
    <div className="h-full flex flex-col px-10 py-8 grid-bg">
      <div className="mb-5 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <span className="font-mono text-xs text-cyan-500/60 tracking-widest">СЛАЙД 06 / ПРОИЗВОДСТВО</span>
        <h2 className="font-oswald text-4xl font-bold text-white mt-1">
          Как создавался <span className="glow-cyan">видеоурок</span>
        </h2>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* Левая — «скриншот» стоп-кадра */}
        <div className="md:col-span-3 flex flex-col gap-4">
          {/* Мокап видеоредактора CapCut */}
          <div className="flex-1 bg-gray-950 rounded-2xl border border-cyan-400/20 overflow-hidden animate-fade-in relative"
            style={{ animationDelay: "0.2s", opacity: 0 }}>

            {/* Шапка редактора */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 bg-gray-800 rounded px-3 py-0.5">
                  <span className="text-base">✂️</span>
                  <span className="font-oswald text-xs text-white tracking-wider">CapCut</span>
                  <span className="font-mono text-xs text-gray-500">· Подвеска_урок_v3.mp4</span>
                </div>
              </div>
            </div>

            {/* Область предпросмотра */}
            <div className="relative bg-black" style={{ aspectRatio: "16/7" }}>
              {/* SVG-стоп-кадр */}
              <svg viewBox="0 0 640 280" className="w-full h-full">
                {/* Фон кадра */}
                <rect width="640" height="280" fill="#0f172a" />
                {/* Сетка */}
                {[0,1,2,3,4,5,6,7,8].map(i => (
                  <line key={i} x1={i*80} y1="0" x2={i*80} y2="280" stroke="#1e293b" strokeWidth="1" />
                ))}
                {[0,1,2,3,4].map(i => (
                  <line key={i} x1="0" y1={i*70} x2="640" y2={i*70} stroke="#1e293b" strokeWidth="1" />
                ))}

                {/* LEGO-модель на заднем плане (стилизованно) */}
                <rect x="80" y="100" width="220" height="60" fill="#1d4ed8" rx="6" stroke="#3b82f6" strokeWidth="1.5" opacity="0.8" />
                <text x="190" y="136" textAnchor="middle" fill="#93c5fd" fontSize="11" fontFamily="IBM Plex Mono">LEGO-МОДЕЛЬ</text>
                {[0,1,2,3].map((i) => (
                  <path key={i} d={`M ${100 + (i % 2 === 0 ? -8 : 8)} ${165 + i * 9} Q ${100 + (i % 2 === 0 ? 8 : -8)} ${165 + i * 9 + 4} ${100 + (i % 2 === 0 ? 8 : -8)} ${165 + (i + 1) * 9}`}
                    stroke="#00d4ff" strokeWidth="2" fill="none" />
                ))}
                <circle cx="120" cy="220" r="22" fill="none" stroke="#6b7280" strokeWidth="3" />
                <circle cx="260" cy="220" r="22" fill="none" stroke="#6b7280" strokeWidth="3" />
                <line x1="95" y1="200" x2="125" y2="190" stroke="#f59e0b" strokeWidth="3" />
                <line x1="265" y1="200" x2="240" y2="190" stroke="#f59e0b" strokeWidth="3" />

                {/* Блок с формулой — наложение CapCut */}
                <rect x="340" y="60" width="260" height="120" fill="rgba(0,0,0,0.75)" rx="10" />
                <rect x="340" y="60" width="260" height="4" fill="#00d4ff" rx="2" />
                <text x="470" y="95" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="IBM Plex Mono">ЗАКОН ГУКА</text>
                <text x="470" y="128" textAnchor="middle" fill="#00d4ff" fontSize="28" fontFamily="IBM Plex Mono" fontWeight="bold">F = −k·x</text>
                <text x="360" y="158" fill="#64748b" fontSize="10" fontFamily="IBM Plex Mono">F — сила упругости (Н)</text>
                <text x="360" y="172" fill="#64748b" fontSize="10" fontFamily="IBM Plex Mono">k — жёсткость пружины</text>

                {/* Второй блок — второй закон */}
                <rect x="340" y="195" width="120" height="60" fill="rgba(255,179,0,0.15)" rx="8" stroke="#ffb300" strokeWidth="1" />
                <text x="400" y="220" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="IBM Plex Mono">2-й закон</text>
                <text x="400" y="242" textAnchor="middle" fill="#ffffff" fontSize="18" fontFamily="IBM Plex Mono" fontWeight="bold">F=ma</text>

                {/* Метка времени */}
                <rect x="10" y="255" width="80" height="18" fill="rgba(0,0,0,0.6)" rx="3" />
                <text x="50" y="268" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="IBM Plex Mono">00:04:32</text>

                {/* REC индикатор */}
                <circle cx="615" cy="20" r="6" fill="#ff4444" opacity="0.9" />
                <text x="605" y="38" textAnchor="middle" fill="#ff4444" fontSize="9" fontFamily="IBM Plex Mono">REC</text>
              </svg>

              {/* Иконка паузы поверх */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
                  <Icon name="Pause" size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* Таймлайн редактора */}
            <div className="px-4 py-2 bg-gray-900/80 border-t border-gray-800">
              <div className="h-6 bg-gray-800 rounded relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[42%] bg-gradient-to-r from-cyan-900/60 to-cyan-700/40 rounded-l" />
                <div className="absolute left-[42%] top-0 h-full w-0.5 bg-white" />
                <div className="flex items-center justify-between px-2 h-full">
                  <span className="font-mono text-xs text-gray-600">0:00</span>
                  <span className="font-mono text-xs text-gray-600">10:48</span>
                </div>
              </div>
              <div className="flex gap-1 mt-1">
                {["Видео", "Формулы", "Озвучка", "Музыка"].map((track, i) => (
                  <div key={i} className="flex-1 h-2 rounded-full opacity-60"
                    style={{ background: ["#00d4ff","#ffb300","#00ff88","#a78bfa"][i] }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Правая — этапы */}
        <div className="md:col-span-2 flex flex-col gap-3">
          {/* Логотип CapCut */}
          <div className="bg-gray-900/70 border border-gray-700/40 rounded-xl p-4 flex items-center gap-3 animate-fade-in"
            style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
              <span className="text-xl">✂️</span>
            </div>
            <div>
              <p className="font-oswald text-white text-base font-bold">CapCut</p>
              <p className="font-mono text-xs text-gray-500">Инструмент монтажа · бесплатно</p>
            </div>
          </div>

          {steps.map((step, i) => (
            <div key={i} className="bg-gray-900/70 rounded-xl p-3 border border-gray-700/40 flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${0.4 + i * 0.1}s`, opacity: 0 }}>
              <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm">{step.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-xs text-cyan-500">#{step.num}</span>
                  <span className="font-oswald text-sm text-white">{step.title}</span>
                </div>
                <p className="font-golos text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}

          <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2 flex items-center gap-2 animate-fade-in mt-auto"
            style={{ animationDelay: "0.9s", opacity: 0 }}>
            <Icon name="CheckCircle" size={14} className="text-green-400 flex-shrink-0" />
            <span className="font-golos text-green-300 text-xs">Видеоурок смонтирован и размещён</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Слайд 7: Значимость ──────────────────────────────────────────────────────
const Slide7 = ({ active }: { active: boolean }) => {
  if (!active) return null;

  const blocks = [
    {
      icon: "🔩",
      title: "Для автослесаря",
      subtitle: "Быстрая диагностика",
      color: "#00d4ff",
      tag: "Профессия",
      tagColor: "#00d4ff",
      main: "Понимание физики — ключ к точной диагностике",
      points: [
        "Зная закон Гука, слесарь определяет износ пружины без сложных приборов",
        "Формула демпфирования помогает выявить неисправный амортизатор по звуку",
        "Физическая база сокращает время диагностики в 2–3 раза",
        "Снижается риск ошибочной замены исправных деталей",
      ],
      quote: "«Физика — это и есть диагностика без слов»",
    },
    {
      icon: "👩‍🔧",
      title: "Для девушек в автосфере",
      subtitle: "Вдохновляющий пример",
      color: "#ff6b9d",
      tag: "Вдохновение",
      tagColor: "#ff6b9d",
      main: "Доказательство: техника доступна каждому",
      points: [
        "Проект показывает, что сложная тема объяснима простым языком",
        "Видеоурок снят девушкой — это разрушает стереотипы об автосфере",
        "LEGO-модель делает физику наглядной и нестрашной",
        "Мотивирует выбирать технические специальности",
      ],
      quote: "«Я сделала это — значит, ты тоже сможешь»",
    },
    {
      icon: "📚",
      title: "Для преподавателей",
      subtitle: "Готовый ресурс",
      color: "#a78bfa",
      tag: "Методика",
      tagColor: "#a78bfa",
      main: "Полный комплект для урока физики и спецдисциплин",
      points: [
        "Видеоурок готов к использованию без дополнительной подготовки",
        "Физическая LEGO-модель остаётся в кабинете техникума",
        "Задачи на основе реальной подвески — связь теории и практики",
        "Материал легко встраивается в рабочую программу",
      ],
      quote: "«Лучший урок — тот, что можно потрогать руками»",
    },
  ];

  return (
    <div className="h-full flex flex-col px-10 py-8 grid-bg">
      <div className="mb-5 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <span className="font-mono text-xs text-purple-500/60 tracking-widest">СЛАЙД 07 / ЗНАЧИМОСТЬ</span>
        <h2 className="font-oswald text-4xl font-bold text-white mt-1">
          Значимость для <span style={{ color: "#a78bfa", textShadow: "0 0 10px rgba(167,139,250,0.4)" }}>меня и других</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
        {blocks.map((b, i) => (
          <div key={i} className="bg-gray-900/70 rounded-2xl flex flex-col border border-gray-700/40 overflow-hidden animate-fade-in"
            style={{ animationDelay: `${0.2 + i * 0.15}s`, opacity: 0 }}>

            {/* Цветная шапка блока */}
            <div className="px-5 pt-5 pb-4" style={{ background: `linear-gradient(135deg, ${b.color}18, ${b.color}05)`, borderBottom: `1px solid ${b.color}25` }}>
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{b.icon}</span>
                <span className="font-mono text-xs px-2 py-1 rounded-full" style={{ color: b.tagColor, background: `${b.tagColor}15`, border: `1px solid ${b.tagColor}30` }}>
                  {b.tag}
                </span>
              </div>
              <h3 className="font-oswald text-xl font-bold text-white leading-tight">{b.title}</h3>
              <p className="font-mono text-xs mt-0.5" style={{ color: b.color }}>{b.subtitle}</p>
            </div>

            {/* Основной тезис */}
            <div className="px-5 py-3 border-b border-gray-800/60">
              <p className="font-golos text-white text-sm font-medium leading-snug">{b.main}</p>
            </div>

            {/* Пункты */}
            <div className="px-5 py-3 space-y-2 flex-1">
              {b.points.map((p, j) => (
                <div key={j} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: b.color }} />
                  <span className="font-golos text-gray-400 text-xs leading-relaxed">{p}</span>
                </div>
              ))}
            </div>

            {/* Цитата внизу */}
            <div className="px-5 pb-4 pt-2">
              <p className="font-golos text-xs italic" style={{ color: `${b.color}90` }}>{b.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Слайд 8: Результаты и перспективы ───────────────────────────────────────
const Slide8 = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="relative h-full flex flex-col px-10 py-8 grid-bg overflow-hidden">
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-400/40" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-400/40" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-cyan-400/40" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-400/40" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/4 rounded-full blur-3xl" />
      </div>

      <div className="mb-6 animate-fade-in relative z-10" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <span className="font-mono text-xs text-green-500/60 tracking-widest">СЛАЙД 08 / РЕЗУЛЬТАТЫ И ПЕРСПЕКТИВЫ</span>
        <h2 className="font-oswald text-4xl font-bold text-white mt-1">
          Что сделано и <span className="glow-green">что впереди</span>
        </h2>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

        {/* Левая — ДОСТИГНУТО */}
        <div className="flex flex-col gap-4">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                <Icon name="CheckCheck" size={14} className="text-green-400" />
              </div>
              <span className="font-oswald text-lg text-green-400 tracking-wider uppercase">Достигнуто</span>
            </div>

            {[
              {
                icon: "🎬",
                title: "Видеоурок готов",
                desc: "Смонтирован в CapCut, содержит анимированные формулы и демонстрацию модели",
                color: "#00d4ff",
              },
              {
                icon: "🔧",
                title: "Модель работает",
                desc: "LEGO-модель подвески с пружиной, амортизатором, рычагом и колесом передана в техникум",
                color: "#ffb300",
              },
              {
                icon: "📐",
                title: "Физика изучена",
                desc: "Законы Гука, Ньютона, принципы демпфирования и стабилизатора разобраны на практике",
                color: "#a78bfa",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/60 border border-green-500/15 mb-3 animate-fade-in"
                style={{ animationDelay: `${0.3 + i * 0.12}s`, opacity: 0 }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}35` }}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-400 text-base">✅</span>
                    <span className="font-oswald text-white text-base font-semibold">{item.title}</span>
                  </div>
                  <p className="font-golos text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Правая — В ПЛАНАХ */}
        <div className="flex flex-col gap-4">
          <div className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Icon name="Rocket" size={13} className="text-amber-400" />
              </div>
              <span className="font-oswald text-lg text-amber-400 tracking-wider uppercase">В планах</span>
            </div>

            {[
              { icon: "⛔", title: "Тормозная система", sub: "Закон трения · Гидравлика", color: "#ff4444", when: "2026" },
              { icon: "🎯", title: "Рулевое управление", sub: "Кинематика · Передаточное число", color: "#ffb300", when: "2026" },
              { icon: "⚙️", title: "Двигатель внутреннего сгорания", sub: "Термодинамика · КПД", color: "#00ff88", when: "2027" },
            ].map((plan, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/60 border border-gray-700/40 mb-3 animate-fade-in"
                style={{ animationDelay: `${0.45 + i * 0.12}s`, opacity: 0, borderLeftColor: `${plan.color}50`, borderLeftWidth: "2px" }}>
                <span className="text-2xl flex-shrink-0">{plan.icon}</span>
                <div className="flex-1">
                  <p className="font-oswald text-white text-base font-semibold">{plan.title}</p>
                  <p className="font-mono text-xs text-gray-600 mt-0.5">{plan.sub}</p>
                </div>
                <span className="font-mono text-xs px-2 py-1 rounded flex-shrink-0"
                  style={{ color: plan.color, background: `${plan.color}15` }}>{plan.when}</span>
              </div>
            ))}
          </div>

          {/* Итоговая цитата */}
          <div className="mt-auto bg-gray-900/60 border border-cyan-400/20 rounded-xl px-5 py-4 animate-fade-in animate-pulse-glow"
            style={{ animationDelay: "0.9s", opacity: 0 }}>
            <p className="font-golos text-gray-300 text-sm italic leading-relaxed">
              «Физика — язык, на котором написана вся техника»
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-6 h-px bg-gray-700" />
              <span className="font-mono text-xs text-gray-600">Сыктывкарский лесопромышленный техникум · 2026</span>
            </div>
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