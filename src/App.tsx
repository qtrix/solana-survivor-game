import React, { useState, useEffect, useRef } from 'react';
import { Play, Users, Zap, Shield, Target, FlaskConical, Crown, Eye, Shuffle, Swords, Trophy, Timer, TrendingUp, AlertTriangle, Sparkles, Flame, Skull } from 'lucide-react';

export default function SolanaSurvivorPremium() {
  const [gamePhase, setGamePhase] = useState('lobby');
  const [playerStats, setPlayerStats] = useState({ sol: 1.0, rank: 50, totalPlayers: 100 });
  const [timeRemaining, setTimeRemaining] = useState('06:00:00');
  const [allocation, setAllocation] = useState({ mining: 0, farming: 0, trading: 0, research: 0, social: 0 });
  const [battleType, setBattleType] = useState(null);
  const [chaosEvent, setChaosEvent] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState('hodler');
  const [isAnimating, setIsAnimating] = useState(false);
  const [onStartPage, setOnStartPage] = useState(true);
  const canvasRef = useRef(null);

  const characters = {
    hodler: {
      name: '🛡️ The Hodler',
      desc: 'Diamond hands never fold',
      power: 'Crash Immunity',
      gradient: 'from-emerald-400 to-green-600',
      icon: Shield
    },
    trader: {
      name: '⚡ The Trader',
      desc: 'Lightning fast profits',
      power: '3x Trading Yield',
      gradient: 'from-yellow-400 to-orange-600',
      icon: Target
    },
    networker: {
      name: '🤝 The Networker',
      desc: 'Strength in numbers',
      power: 'Alliance Mastery',
      gradient: 'from-blue-400 to-purple-600',
      icon: Users
    },
    sniper: {
      name: '🎯 The Sniper',
      desc: 'One shot, one kill',
      power: 'Perfect Accuracy',
      gradient: 'from-red-400 to-pink-600',
      icon: Target
    },
    researcher: {
      name: '🔬 The Researcher',
      desc: 'Knowledge is power',
      power: '10x Breakthrough',
      gradient: 'from-purple-400 to-indigo-600',
      icon: FlaskConical
    },
    whale: {
      name: '👑 The Whale',
      desc: 'Money talks loudly',
      power: '2x Starting SOL',
      gradient: 'from-yellow-300 to-yellow-600',
      icon: Crown
    },
    liquidator: {
      name: '🦈 The Liquidator',
      desc: 'Predator of the weak',
      power: 'Force Liquidation',
      gradient: 'from-gray-400 to-slate-700',
      icon: Target
    },
    oracle: {
      name: '🧙 The Oracle',
      desc: 'Sees the future',
      power: 'Chaos Prediction',
      gradient: 'from-indigo-400 to-purple-700',
      icon: Eye
    },
    wildcard: {
      name: '🃏 The Wildcard',
      desc: 'Chaos incarnate',
      power: 'Random Miracles',
      gradient: 'from-pink-400 to-red-600',
      icon: Shuffle
    }
  };

  const pools = {
    mining: {
      name: '⛏️ Quantum Mining',
      yield: '2-5%',
      risk: 'Ultra Safe',
      color: 'emerald',
      description: 'Steady gains with quantum efficiency',
      icon: '⛏️'
    },
    farming: {
      name: '🌾 DeFi Farming',
      yield: '5-15%',
      risk: 'Balanced',
      color: 'amber',
      description: 'Harvest the yield fields of tomorrow',
      icon: '🌾'
    },
    trading: {
      name: '📈 Hyper Trading',
      yield: '10-50%',
      risk: 'Extreme',
      color: 'red',
      description: 'Ride the volatility waves',
      icon: '🚀'
    },
    research: {
      name: '🧬 Alpha Research',
      yield: '0% or 1000%',
      risk: 'Legendary',
      color: 'purple',
      description: 'Discover the next moonshot',
      icon: '🧬'
    },
    social: {
      name: '🤝 Social Trading',
      yield: 'Variable',
      risk: 'Dynamic',
      color: 'blue',
      description: 'Power of the collective mind',
      icon: '👥'
    }
  };

  const battles = [
    { id: 'trivia', name: '🧠 Crypto IQ Battle', desc: 'Test your crypto knowledge', icon: '🧠' },
    { id: 'rps', name: '✂️ Crypto Clash', desc: 'Enhanced rock-paper-scissors', icon: '✂️' },
    { id: 'trading', name: '📊 Speed Trading', desc: 'Lightning-fast predictions', icon: '⚡' },
    { id: 'meme', name: '🎭 Meme Warfare', desc: 'Creative battle royale', icon: '🎭' }
  ];

  const chaosEvents = [
    { id: 'rugpull', name: '💥 The Great Rug', desc: 'Random pools collapse!', severity: 'critical' },
    { id: 'whale', name: '🐋 Whale Blessing', desc: 'Someone doubles their stack!', severity: 'legendary' },
    { id: 'iq', name: '🧠 IQ Challenge', desc: 'Survive the knowledge test!', severity: 'high' },
    { id: 'sniper', name: '🎯 Assassination Mode', desc: 'Direct attacks unleashed!', severity: 'extreme' },
    { id: 'crash', name: '📉 Black Swan Event', desc: 'Market apocalypse!', severity: 'critical' }
  ];

  // Enhanced particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    const particles = [];
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        hue: Math.random() * 360,
        alpha: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * 0.02 + 0.01
      });
    }

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.alpha += Math.sin(Date.now() * particle.pulse) * 0.01;
        particle.hue += 0.5;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${particle.alpha})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Enhanced particle connections
        particles.slice(index + 1, index + 4).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${0.3 - distance / 500})`);
            gradient.addColorStop(1, `hsla(${otherParticle.hue}, 70%, 60%, ${0.3 - distance / 500})`);

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (gamePhase === 'phase1' || gamePhase === 'phase2' || gamePhase === 'phase3') {
        const [h, m, s] = timeRemaining.split(':').map(Number);
        const totalSeconds = h * 3600 + m * 60 + s;
        if (totalSeconds > 0) {
          const newTotal = totalSeconds - 1;
          const newH = Math.floor(newTotal / 3600);
          const newM = Math.floor((newTotal % 3600) / 60);
          const newS = newTotal % 60;
          setTimeRemaining(`${newH.toString().padStart(2, '0')}:${newM.toString().padStart(2, '0')}:${newS.toString().padStart(2, '0')}`);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining, gamePhase]);

  const startGame = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setGamePhase('phase1');
      setTimeRemaining('05:59:59');
      setIsAnimating(false);
    }, 1000);
  };

  const allocateSOL = (pool, amount) => {
    const remaining = 1.0 - Object.values(allocation).reduce((sum, val) => sum + val, 0);
    if (amount <= remaining) {
      setAllocation(prev => ({ ...prev, [pool]: prev[pool] + amount }));
    }
  };

  const resetAllocation = () => {
    setAllocation({ mining: 0, farming: 0, trading: 0, research: 0, social: 0 });
  };

  const nextPhase = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (gamePhase === 'phase1') {
        setGamePhase('phase2');
        setTimeRemaining('12:00:00');
        setPlayerStats(prev => ({
          ...prev,
          sol: prev.sol + Math.random() * 0.5 + 0.2,
          rank: Math.max(1, prev.rank - Math.floor(Math.random() * 20 + 10)),
          totalPlayers: prev.totalPlayers - Math.floor(Math.random() * 30 + 15)
        }));
      } else if (gamePhase === 'phase2') {
        setGamePhase('phase3');
        setTimeRemaining('06:00:00');
        setPlayerStats(prev => ({
          ...prev,
          sol: prev.sol + Math.random() * 0.8 + 0.3,
          rank: Math.max(1, prev.rank - Math.floor(Math.random() * 15 + 5)),
          totalPlayers: Math.max(10, prev.totalPlayers - Math.floor(Math.random() * 25 + 15))
        }));
      } else if (gamePhase === 'phase3') {
        setGamePhase('victory');
        setPlayerStats(prev => ({ ...prev, sol: 95.0 + Math.random() * 5, rank: 1, totalPlayers: 1 }));
      }
      setIsAnimating(false);
    }, 1000);
  };

  const triggerChaosEvent = () => {
    const randomEvent = chaosEvents[Math.floor(Math.random() * chaosEvents.length)];
    setChaosEvent(randomEvent);

    switch (randomEvent.id) {
      case 'whale':
        setPlayerStats(prev => ({
          ...prev,
          sol: prev.sol * (1.5 + Math.random() * 0.5),
          rank: Math.max(1, Math.floor(prev.rank * 0.7))
        }));
        break;
      case 'crash':
        setPlayerStats(prev => ({
          ...prev,
          sol: prev.sol * (0.4 + Math.random() * 0.3)
        }));
        break;
      case 'rugpull':
        const randomPool = Object.keys(allocation)[Math.floor(Math.random() * Object.keys(allocation).length)];
        setAllocation(prev => ({ ...prev, [randomPool]: 0 }));
        break;
      default:
        break;
    }

    setTimeout(() => setChaosEvent(null), 4000);
  };

  const triggerBattle = () => {
    const randomBattle = battles[Math.floor(Math.random() * battles.length)];
    setBattleType(randomBattle);
    setTimeout(() => setBattleType(null), 3000);
  };

  // Enhanced styling classes with better contrast
  const ultraGlassPanel = "backdrop-blur-2xl bg-gradient-to-br from-black/80 to-black/60 border-2 border-white/20 rounded-3xl shadow-2xl p-8 hover:border-white/40 transition-all duration-500 hover:shadow-cyan-500/20";
  const neonButton = "relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-purple-500/50 border-2 border-white/20 hover:border-white/40";
  const dangerButton = "relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-300 border-2 border-white/30";
  const textShadow = "drop-shadow-lg text-shadow-strong";

  const [activeTab, setActiveTab] = useState("About");
  const renderStartPage = () => (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center z-10 px-12">
        {/* Title + tagline on left */}
        <div className="w-1/2 p-12 space-y-8 animate-fade-in">
          <h1
            className={`text-8xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse ${textShadow}`}
          >
            SOLANA <br /> SURVIVOR
          </h1>
          <p className="text-3xl text-cyan-200 font-bold animate-glow">
            The Ultimate Crypto Battle Royale
          </p>
          <p className="text-xl text-gray-200">
            100 Enter • 1 SOL Each • Only ONE Survives
          </p>
        </div>

        {/* Info sections on right */}
        <div className="w-1/2 p-12 space-y-8 overflow-y-auto max-h-[80vh] pr-4">
          <div className={`${ultraGlassPanel}`}>
            <h2 className="text-3xl font-bold text-cyan-300 mb-3">📖 About</h2>
            <p className="text-gray-200">
              Enter the Solana Survivor Arena — the blockchain battle royale where
              only the strongest traders, networkers, and whales survive. Powered
              by Solana, blending DeFi, GameFi, and strategy.
            </p>
          </div>

          <div className={`${ultraGlassPanel}`}>
            <h2 className="text-3xl font-bold text-purple-300 mb-3">🎮 How to Play</h2>
            <ul className="text-gray-200 space-y-2 list-disc list-inside">
              <li>Stake 1 SOL to enter the arena</li>
              <li>Choose your character — each with unique powers</li>
              <li>Allocate SOL across mining, farming, trading, research, and social</li>
              <li>Survive chaos events and battles</li>
              <li>Outlast 99 others and claim the 100 SOL prize pool</li>
            </ul>
          </div>

          <div className={`${ultraGlassPanel}`}>
            <h2 className="text-3xl font-bold text-yellow-300 mb-3">🏆 Leaderboard</h2>
            <ul className="space-y-2 text-gray-200">
              <li className="text-yellow-300 font-bold">#1 CryptoKing — 95 SOL</li>
              <li>#2 WhaleMaster — 70 SOL</li>
              <li>#3 DiamondHands — 55 SOL</li>
            </ul>
          </div>

          <div className={`${ultraGlassPanel}`}>
            <h2 className="text-3xl font-bold text-pink-300 mb-3">⚡ Features</h2>
            <ul className="text-gray-200 space-y-2 list-disc list-inside">
              <li>Real-time chaos events</li>
              <li>Unique playable characters</li>
              <li>DeFi-inspired resource pools</li>
              <li>Live leaderboard with eliminations</li>
              <li>Final showdown with cinematic finish</li>
            </ul>
          </div>

          <div className={`${ultraGlassPanel}`}>
            <h2 className="text-3xl font-bold text-green-300 mb-3">🛡️ Fair Play</h2>
            <p className="text-gray-200">
              100% transparent on-chain rules. Every action is verifiable on
              Solana, ensuring fairness and trust.
            </p>
          </div>

          {/* Enter Game Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setOnStartPage(false)}
              className={`${neonButton} text-2xl py-6 px-10 animate-pulse`}
            >
              <Play size={32} className="inline mr-3 animate-bounce" />
              ENTER THE GAME
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="z-10 py-6 border-t border-white/10 flex items-center justify-center gap-8 bg-black/30 backdrop-blur-xl">
        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          🐦 X
        </a>
        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          💬 Discord
        </a>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          📢 Telegram
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          🛠 GitHub
        </a>
      </footer>
    </div>
  );


  const renderLobby = () => (
    <div className="relative min-h-screen flex flex-col items-center justify-center space-y-10 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Floating Orbs with Enhanced Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-conic from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slow top-10 right-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-conic from-blue-500/25 via-indigo-500/25 to-purple-500/25 rounded-full blur-3xl animate-pulse bottom-20 left-10"></div>
        <div className="absolute w-72 h-72 bg-gradient-conic from-pink-500/20 via-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-bounce-slow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main Title */}
      <div className="z-10 text-center space-y-8 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-2xl opacity-50 rounded-3xl"></div>
          <div className="relative bg-black/30 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-12">
            <h1 className={`text-9xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse ${textShadow}`}>
              SOLANA
            </h1>
            <h1 className={`text-9xl font-black bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent animate-pulse ${textShadow}`}>
              SURVIVOR
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <div className={`${ultraGlassPanel} space-y-4 max-w-3xl`}>
          <p className="text-3xl text-cyan-200 tracking-wider font-bold animate-glow drop-shadow-lg">
            The Ultimate Crypto Battle Royale
          </p>
          <p className="text-2xl text-yellow-300 font-semibold italic animate-bounce drop-shadow-lg">
            "100 Enter • 1 SOL Each • Only ONE Survives"
          </p>
          <p className="text-xl text-gray-200 tracking-wide drop-shadow-lg">
            Choose Your Fighter • Master The Markets • Claim Victory
          </p>
        </div>
      </div>

      {/* Info Tabs Section */}
      <div className={`z-10 ${ultraGlassPanel} max-w-4xl animate-fade-in`}>
        <div className="flex justify-center gap-6 mb-6">
          {["About", "How to Play", "Leaderboard"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all ${activeTab === tab
                ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                : "bg-black/40 text-gray-300 hover:text-white hover:bg-black/60"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="text-center text-xl text-gray-200">
          {activeTab === "About" && (
            <p>
              Enter the Solana Survivor Arena — the ultimate blockchain battle
              royale where 100 enter and only ONE survives.
            </p>
          )}
          {activeTab === "How to Play" && (
            <p>
              Stake 1 SOL • Choose your legend • Allocate resources • Survive
              chaos events • Outlast everyone.
            </p>
          )}
          {activeTab === "Leaderboard" && (
            <ul className="space-y-2">
              <li className="text-yellow-300 font-bold">#1 CryptoKing — 95 SOL</li>
              <li className="text-gray-200">#2 WhaleMaster — 70 SOL</li>
              <li className="text-gray-200">#3 DiamondHands — 55 SOL</li>
            </ul>
          )}
        </div>
      </div>

      {/* Character Selection Grid */}
      <div className={`z-10 ${ultraGlassPanel} max-w-7xl animate-slide-up`}>
        <div className="text-center mb-8">
          <h3 className={`text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent ${textShadow}`}>
            Choose Your Legend
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {Object.entries(characters).map(([key, char]) => {
            const IconComponent = char.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedCharacter(key)}
                className={`group relative flex flex-col items-center p-8 rounded-3xl border-3 transition-all duration-300 transform hover:scale-110 ${selectedCharacter === key
                  ? `border-cyan-400 bg-gradient-to-br ${char.gradient} shadow-2xl shadow-cyan-500/50 scale-105`
                  : "border-white/20 bg-black/40 hover:border-cyan-400/70 hover:bg-black/60"
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
                <div className="relative z-10 space-y-4 text-center">
                  <IconComponent
                    size={48}
                    className={`mx-auto ${selectedCharacter === key
                      ? "text-white drop-shadow-lg"
                      : "text-gray-200"
                      } group-hover:animate-pulse`}
                  />
                  <div className={`text-3xl font-bold ${textShadow}`}>
                    {char.name.split(" ")[0]}
                  </div>
                  <div className={`text-lg text-gray-100 font-medium ${textShadow}`}>
                    {char.desc}
                  </div>
                  <div
                    className={`text-sm px-4 py-2 rounded-full font-bold ${selectedCharacter === key
                      ? "bg-white/30 text-white"
                      : "bg-purple-600/70 text-purple-100"
                      } drop-shadow-lg`}
                  >
                    {char.power}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Character Showcase */}
      <div className={`z-10 ${ultraGlassPanel} max-w-2xl text-center animate-fade-in`}>
        <div className="space-y-6">
          <h3
            className={`text-4xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent ${textShadow}`}
          >
            {characters[selectedCharacter].name}
          </h3>
          <p className={`text-gray-200 text-xl ${textShadow}`}>
            {characters[selectedCharacter].desc}
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-lg font-bold text-white drop-shadow-lg">
            {characters[selectedCharacter].power}
          </div>
        </div>
      </div>

      {/* Game Stats Preview */}
      <div className={`z-10 ${ultraGlassPanel} max-w-2xl`}>
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className={`text-4xl font-bold text-green-300 ${textShadow}`}>
              100
            </div>
            <div className={`text-lg text-gray-300 ${textShadow}`}>Players</div>
          </div>
          <div>
            <div className={`text-4xl font-bold text-yellow-300 ${textShadow}`}>
              100 SOL
            </div>
            <div className={`text-lg text-gray-300 ${textShadow}`}>
              Prize Pool
            </div>
          </div>
          <div>
            <div className={`text-4xl font-bold text-red-300 ${textShadow}`}>
              6H
            </div>
            <div className={`text-lg text-gray-300 ${textShadow}`}>
              Duration
            </div>
          </div>
        </div>
      </div>

      {/* Enter Game Button inside Portal */}
      <div className="relative z-10 flex justify-center mt-10">
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 blur-3xl animate-ping"></div>
        <button
          onClick={startGame}
          disabled={isAnimating}
          className={`relative ${neonButton} text-2xl py-8 px-12 w-full sm:w-auto max-w-xs mx-auto ${isAnimating ? "opacity-50" : "animate-pulse hover:animate-none"
            }`}
        >
          <div className="relative flex items-center gap-6">
            <Play size={40} className="animate-bounce" />
            <span className={`font-black tracking-wider ${textShadow}`}>
              {isAnimating ? "LOADING..." : "ENTER THE ARENA"}
            </span>
            <Flame size={40} className="animate-bounce" />
          </div>
        </button>
      </div>
    </div>
  );

  const renderPhase1 = () => (
    <div className="relative min-h-screen p-8 space-y-10 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-cyan-900">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>

      {/* Enhanced Phase Header */}
      <div className="relative z-10 text-center space-y-6">
        <div className={`${ultraGlassPanel} inline-block`}>
          <h2 className={`text-6xl font-black bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent animate-pulse ${textShadow}`}>
            PHASE 1: RESOURCE DOMINATION
          </h2>
        </div>
        <div className="flex justify-center items-center gap-12">
          <div className={`${ultraGlassPanel} px-8 py-4`}>
            <Timer size={32} className="inline mr-3 text-red-300 animate-pulse" />
            <span className={`text-4xl font-mono font-bold text-red-200 ${textShadow}`}>{timeRemaining}</span>
          </div>
          <div className={`${ultraGlassPanel} px-8 py-4`}>
            <Users size={32} className="inline mr-3 text-yellow-300" />
            <span className={`text-2xl font-bold text-yellow-200 ${textShadow}`}>#{playerStats.rank}/{playerStats.totalPlayers}</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Enhanced SOL Balance & Allocation */}
        <div className={`${ultraGlassPanel} space-y-8`}>
          <div className="text-center space-y-4">
            <h3 className={`text-3xl font-bold text-pink-300 ${textShadow}`}>Resource Allocation</h3>
            <div className={`text-8xl font-black text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text animate-pulse ${textShadow}`}>
              {playerStats.sol.toFixed(3)} SOL
            </div>
            <div className={`text-lg text-gray-300 ${textShadow}`}>
              Available: {(1.0 - Object.values(allocation).reduce((sum, val) => sum + val, 0)).toFixed(2)} SOL
            </div>
          </div>

          <div className="space-y-6">
            {Object.entries(pools).map(([key, pool]) => {
              const allocated = allocation[key];
              const percentage = (allocated / 1.0) * 100;

              return (
                <div key={key} className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl drop-shadow-lg">{pool.icon}</span>
                      <div>
                        <div className={`font-bold text-white text-xl ${textShadow}`}>{pool.name}</div>
                        <div className={`text-sm text-gray-300 ${textShadow}`}>{pool.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg text-gray-200 font-semibold ${textShadow}`}>{pool.yield}</div>
                      <div className={`text-sm px-3 py-1 rounded-full font-bold ${pool.risk === 'Ultra Safe' ? 'bg-green-600/70 text-green-100' :
                        pool.risk === 'Balanced' ? 'bg-yellow-600/70 text-yellow-100' :
                          pool.risk === 'Extreme' ? 'bg-red-600/70 text-red-100' :
                            pool.risk === 'Legendary' ? 'bg-purple-600/70 text-purple-100' :
                              'bg-blue-600/70 text-blue-100'
                        } drop-shadow-lg`}>
                        {pool.risk}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className={`text-2xl font-bold text-yellow-300 ${textShadow}`}>{allocated.toFixed(3)} SOL</span>
                      <div className="flex gap-3">
                        <button
                          onClick={() => allocateSOL(key, 0.1)}
                          disabled={1.0 - Object.values(allocation).reduce((sum, val) => sum + val, 0) < 0.1}
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-lg font-bold disabled:opacity-50 hover:scale-110 transition-transform border border-white/20 drop-shadow-lg"
                        >
                          +0.1
                        </button>
                        <button
                          onClick={() => allocateSOL(key, 0.5)}
                          disabled={1.0 - Object.values(allocation).reduce((sum, val) => sum + val, 0) < 0.5}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-lg font-bold disabled:opacity-50 hover:scale-110 transition-transform border border-white/20 drop-shadow-lg"
                        >
                          +0.5
                        </button>
                      </div>
                    </div>

                    <div className="w-full bg-gray-800/70 rounded-full h-4 overflow-hidden border border-white/10">
                      <div
                        className={`h-full bg-gradient-to-r ${pool.color === 'emerald' ? 'from-emerald-400 to-green-500' :
                          pool.color === 'amber' ? 'from-yellow-400 to-orange-500' :
                            pool.color === 'red' ? 'from-red-400 to-pink-500' :
                              pool.color === 'purple' ? 'from-purple-400 to-indigo-500' :
                                'from-blue-400 to-cyan-500'
                          } transition-all duration-500 animate-pulse drop-shadow-lg`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-6 justify-center">
            <button
              onClick={resetAllocation}
              className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl font-bold hover:scale-105 transition-transform border-2 border-white/20 text-lg drop-shadow-lg"
            >
              Reset All
            </button>
          </div>
        </div>

        {/* Enhanced Live Stats & Actions */}
        <div className="space-y-8">
          {/* Enhanced Performance Stats */}
          <div className={`${ultraGlassPanel} space-y-6`}>
            <h3 className={`text-3xl font-bold text-purple-300 flex items-center gap-3 ${textShadow}`}>
              <TrendingUp className="animate-pulse" size={36} />
              Live Performance
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-600/30 to-emerald-800/30 rounded-2xl border-2 border-green-500/40 backdrop-blur-xl">
                <div className={`text-4xl font-bold text-green-300 ${textShadow}`}>+{(Math.random() * 15 + 5).toFixed(1)}%</div>
                <div className={`text-lg text-gray-200 ${textShadow}`}>Total Yield</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-600/30 to-indigo-800/30 rounded-2xl border-2 border-purple-500/40 backdrop-blur-xl">
                <div className={`text-4xl font-bold text-purple-300 ${textShadow}`}>{Math.floor(Math.random() * 50 + 10)}</div>
                <div className={`text-lg text-gray-200 ${textShadow}`}>Eliminated</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-600/30 to-cyan-800/30 rounded-2xl border-2 border-blue-500/40 backdrop-blur-xl">
                <div className={`text-4xl font-bold text-blue-300 ${textShadow}`}>{Math.floor(Math.random() * 10 + 5)}</div>
                <div className={`text-lg text-gray-200 ${textShadow}`}>Alliances</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-red-600/30 to-pink-800/30 rounded-2xl border-2 border-red-500/40 backdrop-blur-xl">
                <div className={`text-4xl font-bold text-red-300 ${textShadow}`}>{Math.floor(Math.random() * 20 + 80)}%</div>
                <div className={`text-lg text-gray-200 ${textShadow}`}>Survival Rate</div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Center */}
          <div className={`${ultraGlassPanel} space-y-6`}>
            <h3 className={`text-3xl font-bold text-orange-300 flex items-center gap-3 ${textShadow}`}>
              <Zap className="animate-bounce" size={36} />
              Action Center
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <button
                onClick={triggerChaosEvent}
                className={`${dangerButton} flex flex-col items-center gap-3 py-6`}
              >
                <AlertTriangle size={32} className="animate-pulse" />
                <span className={`font-bold text-lg ${textShadow}`}>CHAOS EVENT</span>
                <span className={`text-sm opacity-90 ${textShadow}`}>Risk it all!</span>
              </button>

              <button
                onClick={triggerBattle}
                className={`${neonButton} flex flex-col items-center gap-3 py-6`}
              >
                <Swords size={32} className="animate-pulse" />
                <span className={`font-bold text-lg ${textShadow}`}>CHALLENGE</span>
                <span className={`text-sm opacity-90 ${textShadow}`}>Test your skills!</span>
              </button>

              <button
                onClick={nextPhase}
                className={`${neonButton} col-span-2 flex items-center justify-center gap-4 py-6`}
              >
                <Target size={32} className="animate-bounce" />
                <span className={`text-2xl font-black ${textShadow}`}>ADVANCE TO PHASE 2</span>
                <Sparkles size={32} className="animate-spin" />
              </button>
            </div>
          </div>

          {/* Enhanced Leaderboard Preview */}
          <div className={`${ultraGlassPanel} space-y-6`}>
            <h3 className={`text-3xl font-bold text-yellow-300 flex items-center gap-3 ${textShadow}`}>
              <Trophy className="animate-pulse" size={36} />
              Top Survivors
            </h3>

            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`flex justify-between items-center p-4 rounded-2xl ${i === Math.min(2, playerStats.rank - 1)
                  ? 'bg-pink-600/40 border-2 border-pink-500/60 backdrop-blur-xl'
                  : 'bg-black/30 backdrop-blur-xl border border-white/10'
                  }`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${i === 0 ? 'bg-yellow-500 text-black' :
                      i === 1 ? 'bg-gray-400 text-black' :
                        i === 2 ? 'bg-orange-600 text-white' :
                          'bg-gray-700 text-gray-300'
                      } drop-shadow-lg`}>
                      {i + 1}
                    </div>
                    <span className={`font-medium text-lg ${textShadow}`}>
                      {i === Math.min(2, playerStats.rank - 1) ? 'YOU' : `Player ${Math.floor(Math.random() * 9999)}`}
                    </span>
                  </div>
                  <div className={`text-green-300 font-bold text-xl ${textShadow}`}>
                    {(Math.random() * 2 + 0.8).toFixed(3)} SOL
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPhase2 = () => (
    <div className="relative min-h-screen p-8 space-y-10 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-slate-900 to-purple-900">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>

      {/* Enhanced Phase Header */}
      <div className="relative z-10 text-center space-y-6">
        <div className={`${ultraGlassPanel} inline-block`}>
          <h2 className={`text-6xl font-black bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent animate-pulse ${textShadow}`}>
            PHASE 2: BATTLE ROYALE
          </h2>
        </div>
        <div className="flex justify-center items-center gap-12">
          <div className={`${ultraGlassPanel} px-8 py-4`}>
            <Timer size={32} className="inline mr-3 text-red-300 animate-pulse" />
            <span className={`text-4xl font-mono font-bold text-red-200 ${textShadow}`}>{timeRemaining}</span>
          </div>
          <div className={`${ultraGlassPanel} px-8 py-4`}>
            <Skull size={32} className="inline mr-3 text-red-300 animate-bounce" />
            <span className={`text-2xl font-bold text-red-200 ${textShadow}`}>{playerStats.totalPlayers} REMAIN</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Enhanced Battle Arena */}
        <div className={`lg:col-span-2 ${ultraGlassPanel} space-y-8`}>
          <h3 className={`text-4xl font-bold text-red-300 text-center ${textShadow}`}>COMBAT ARENA</h3>

          <div className="grid grid-cols-2 gap-8">
            {battles.map((battle) => (
              <button
                key={battle.id}
                onClick={triggerBattle}
                className="group relative p-8 bg-gradient-to-br from-red-900/60 to-orange-900/60 rounded-3xl border-3 border-red-500/40 hover:border-red-400/70 transform hover:scale-105 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-3xl group-hover:from-red-500/30"></div>
                <div className="relative z-10 space-y-4 text-center">
                  <div className="text-5xl animate-bounce drop-shadow-lg">{battle.icon}</div>
                  <div className={`text-2xl font-bold text-white ${textShadow}`}>
                    {battle.name.split(' ').slice(1).join(' ')}
                  </div>
                  <div className={`text-lg text-gray-200 ${textShadow}`}>{battle.desc}</div>
                  <div className="text-sm bg-red-600/70 px-4 py-2 rounded-full text-red-100 font-bold drop-shadow-lg">
                    WINNER TAKES ALL
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className={`${ultraGlassPanel} max-w-lg mx-auto`}>
              <div className={`text-8xl font-black text-transparent bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text animate-pulse ${textShadow}`}>
                {playerStats.sol.toFixed(3)} SOL
              </div>
              <div className={`text-2xl text-gray-200 ${textShadow}`}>Current Holdings</div>
            </div>

            <button
              onClick={nextPhase}
              className={`${neonButton} text-2xl py-6 px-8 w-full sm:w-auto max-w-xs mx-auto`}
            >
              <div className="flex items-center gap-4">
                <Target size={32} className="animate-spin" />
                <span className={`font-black ${textShadow}`}>ENTER FINAL PHASE</span>
                <Target size={32} className="animate-bounce" />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Stats & Leaderboard */}
        <div className="space-y-8">
          <div className={`${ultraGlassPanel} space-y-6`}>
            <h3 className={`text-3xl font-bold text-purple-300 ${textShadow}`}>Battle Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between p-3 bg-black/30 rounded-xl backdrop-blur-xl border border-white/10">
                <span className={`text-lg ${textShadow}`}>Battles Won:</span>
                <span className={`text-green-300 font-bold text-lg ${textShadow}`}>{Math.floor(Math.random() * 5 + 2)}</span>
              </div>
              <div className="flex justify-between p-3 bg-black/30 rounded-xl backdrop-blur-xl border border-white/10">
                <span className={`text-lg ${textShadow}`}>Players Eliminated:</span>
                <span className={`text-red-300 font-bold text-lg ${textShadow}`}>{Math.floor(Math.random() * 3 + 1)}</span>
              </div>
              <div className="flex justify-between p-3 bg-black/30 rounded-xl backdrop-blur-xl border border-white/10">
                <span className={`text-lg ${textShadow}`}>Rank Change:</span>
                <span className={`text-yellow-300 font-bold text-lg ${textShadow}`}>+{Math.floor(Math.random() * 15 + 5)}</span>
              </div>
            </div>
          </div>

          <div className={`${ultraGlassPanel} space-y-6`}>
            <h3 className={`text-3xl font-bold text-orange-300 ${textShadow}`}>Final 50</h3>
            <div className="space-y-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`flex justify-between items-center p-4 rounded-xl ${i === 2 ? 'bg-pink-600/40 border-2 border-pink-500/60 backdrop-blur-xl' : 'bg-black/30 backdrop-blur-xl border border-white/10'
                  }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center ${i < 3 ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-gray-300'
                      } drop-shadow-lg`}>
                      {i + 1}
                    </div>
                    <span className={`text-lg ${textShadow}`}>{i === 2 ? 'YOU' : `Survivor ${Math.floor(Math.random() * 999)}`}</span>
                  </div>
                  <div className={`text-green-300 font-bold text-lg ${textShadow}`}>
                    {(Math.random() * 3 + 1).toFixed(2)} SOL
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPhase3 = () => (
    <div className="relative min-h-screen p-8 space-y-10 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-purple-900">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Enhanced Phase Header */}
      <div className="relative z-10 text-center space-y-6">
        <div className={`${ultraGlassPanel} inline-block`}>
          <h2 className={`text-6xl font-black bg-gradient-to-r from-yellow-300 via-red-300 to-purple-300 bg-clip-text text-transparent animate-pulse ${textShadow}`}>
            PHASE 3: FINAL SHOWDOWN
          </h2>
        </div>
        <div className="flex justify-center items-center gap-12">
          <div className={`${ultraGlassPanel} px-8 py-4`}>
            <Timer size={32} className="inline mr-3 text-red-300 animate-pulse" />
            <span className={`text-4xl font-mono font-bold text-red-200 ${textShadow}`}>{timeRemaining}</span>
          </div>
          <div className={`${ultraGlassPanel} px-8 py-4`}>
            <Crown size={32} className="inline mr-3 text-yellow-300 animate-bounce" />
            <span className={`text-2xl font-bold text-yellow-200 ${textShadow}`}>FINAL {playerStats.totalPlayers}</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 space-y-10">
        {/* Enhanced Final Arena */}
        <div className={`${ultraGlassPanel} text-center space-y-8`}>
          <h3 className={`text-5xl font-bold bg-gradient-to-r from-red-300 to-yellow-300 bg-clip-text text-transparent ${textShadow}`}>
            THE COLOSSEUM
          </h3>

          <div className={`text-9xl font-black text-transparent bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text animate-pulse ${textShadow}`}>
            {playerStats.sol.toFixed(3)} SOL
          </div>

          <p className={`text-2xl text-gray-200 max-w-3xl mx-auto ${textShadow}`}>
            Only the strongest survive. The final battle determines who claims the entire 100 SOL prize pool.
            Will you be the last survivor standing?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-3xl p-8 border-2 border-red-500/40 backdrop-blur-xl">
              <div className="text-4xl mb-4 drop-shadow-lg">⚔️</div>
              <div className={`text-2xl font-bold text-red-300 ${textShadow}`}>GLADIATOR MODE</div>
              <div className={`text-lg text-gray-200 ${textShadow}`}>Direct PvP combat</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/60 to-purple-800/60 rounded-3xl p-8 border-2 border-purple-500/40 backdrop-blur-xl">
              <div className="text-4xl mb-4 drop-shadow-lg">🧠</div>
              <div className={`text-2xl font-bold text-purple-300 ${textShadow}`}>MIND GAMES</div>
              <div className={`text-lg text-gray-200 ${textShadow}`}>Psychological warfare</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/60 to-yellow-800/60 rounded-3xl p-8 border-2 border-yellow-500/40 backdrop-blur-xl">
              <div className="text-4xl mb-4 drop-shadow-lg">💎</div>
              <div className={`text-2xl font-bold text-yellow-300 ${textShadow}`}>DIAMOND HANDS</div>
              <div className={`text-lg text-gray-200 ${textShadow}`}>Ultimate hodl test</div>
            </div>
          </div>

          <button
            onClick={nextPhase}
            className={`${neonButton} text-3xl py-6 px-8 w-full sm:w-auto max-w-xs mx-auto animate-pulse`}
          >
            <div className="flex items-center gap-5">
              <Crown size={40} className="animate-bounce" />
              <span className={`font-black ${textShadow}`}>CLAIM VICTORY</span>
              <Trophy size={40} className="animate-spin" />
            </div>
          </button>
        </div>

        {/* Enhanced Final Leaderboard */}
        <div className={`${ultraGlassPanel} max-w-3xl mx-auto`}>
          <h3 className={`text-4xl font-bold text-center text-yellow-300 mb-8 ${textShadow}`}>FINAL CONTENDERS</h3>
          <div className="space-y-4">
            {[...Array(Math.min(10, playerStats.totalPlayers))].map((_, i) => (
              <div key={i} className={`flex justify-between items-center p-6 rounded-2xl ${i === 0 ? 'bg-gradient-to-r from-yellow-600/40 to-orange-600/40 border-3 border-yellow-500/60 backdrop-blur-xl' :
                i < 3 ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-2 border-purple-500/40 backdrop-blur-xl' :
                  'bg-black/40 border-2 border-gray-600/40 backdrop-blur-xl'
                }`}>
                <div className="flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${i === 0 ? 'bg-yellow-500 text-black' :
                    i === 1 ? 'bg-gray-400 text-black' :
                      i === 2 ? 'bg-orange-600 text-white' :
                        'bg-gray-700 text-gray-300'
                    } drop-shadow-lg`}>
                    {i + 1}
                  </div>
                  <span className={`font-bold text-2xl ${textShadow}`}>
                    {i === 0 ? 'YOU' : `Final Boss ${String.fromCharCode(65 + i)}`}
                  </span>
                  {i === 0 && <Crown className="text-yellow-400 animate-pulse" size={24} />}
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold text-green-300 ${textShadow}`}>
                    {i === 0 ? playerStats.sol.toFixed(3) : (Math.random() * 5 + 2).toFixed(3)} SOL
                  </div>
                  <div className={`text-lg text-gray-300 ${textShadow}`}>
                    {characters[selectedCharacter].name.split(' ')[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderVictory = () => (
    <div className="relative min-h-screen flex flex-col items-center justify-center space-y-12 overflow-hidden">
      {/* Enhanced Celebration Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-orange-500 to-red-600">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
      </div>

      {/* Enhanced Victory Content */}
      <div className="relative z-10 text-center space-y-12 animate-fade-in">
        {/* Enhanced Victory Title */}
        <div className="space-y-6">
          <div className={`${ultraGlassPanel} inline-block`}>
            <h1 className={`text-10xl font-black bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-bounce ${textShadow}`}>
              VICTORY!
            </h1>
          </div>
          <h2 className={`text-5xl font-bold text-white animate-pulse ${textShadow}`}>
            SOLANA SURVIVOR CHAMPION
          </h2>
        </div>

        {/* Enhanced Prize Display */}
        <div className={`${ultraGlassPanel} max-w-3xl mx-auto space-y-8`}>
          <div className="text-9xl animate-pulse drop-shadow-lg">💎</div>
          <div className="space-y-4">
            <div className={`text-8xl font-black text-transparent bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text animate-pulse ${textShadow}`}>
              {playerStats.sol.toFixed(3)} SOL
            </div>
            <div className={`text-3xl text-yellow-300 font-bold ${textShadow}`}>
              TOTAL PRIZE POOL CLAIMED!
            </div>
            <div className={`text-2xl text-gray-200 ${textShadow}`}>
              You are the last survivor out of 100 players!
            </div>
          </div>
        </div>

        {/* Enhanced Achievement Stats */}
        <div className={`${ultraGlassPanel} max-w-5xl mx-auto`}>
          <h3 className={`text-4xl font-bold text-purple-300 mb-8 ${textShadow}`}>LEGENDARY ACHIEVEMENTS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 bg-black/30 rounded-2xl backdrop-blur-xl border border-white/20">
              <div className="text-5xl drop-shadow-lg">👑</div>
              <div className={`text-3xl font-bold text-yellow-300 ${textShadow}`}>#1</div>
              <div className={`text-lg text-gray-200 ${textShadow}`}>Final Rank</div>
            </div>
            <div className="text-center space-y-4 p-6 bg-black/30 rounded-2xl backdrop-blur-xl border border-white/20">
              <div className="text-5xl drop-shadow-lg">⚔️</div>
              <div className={`text-3xl font-bold text-red-300 ${textShadow}`}>{Math.floor(Math.random() * 15 + 10)}</div>
              <div className={`text-lg text-gray-200 ${textShadow}`}>Players Eliminated</div>
            </div>
            <div className="text-center space-y-4 p-6 bg-black/30 rounded-2xl backdrop-blur-xl border border-white/20">
              <div className="text-5xl drop-shadow-lg">📈</div>
              <div className={`text-3xl font-bold text-green-300 ${textShadow}`}>{((playerStats.sol / 1.0 - 1) * 100).toFixed(0)}%</div>
              <div className={`text-lg text-gray-200 ${textShadow}`}>Total Return</div>
            </div>
            <div className="text-center space-y-4 p-6 bg-black/30 rounded-2xl backdrop-blur-xl border border-white/20">
              <div className="text-5xl drop-shadow-lg">💎</div>
              <div className={`text-3xl font-bold text-blue-300 ${textShadow}`}>100%</div>
              <div className={`text-lg text-gray-200 ${textShadow}`}>Survival Rate</div>
            </div>
          </div>
        </div>

        {/* Enhanced Character Celebration */}
        <div className={`${ultraGlassPanel} max-w-2xl mx-auto`}>
          <h3 className={`text-3xl font-bold text-pink-300 mb-6 ${textShadow}`}>CHAMPION CHARACTER</h3>
          <div className="space-y-5">
            <div className="text-5xl drop-shadow-lg">{characters[selectedCharacter].name.split(' ')[0]}</div>
            <div className={`text-3xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent ${textShadow}`}>
              {characters[selectedCharacter].name}
            </div>
            <div className={`text-2xl text-gray-200 ${textShadow}`}>{characters[selectedCharacter].desc}</div>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl text-black font-bold text-lg drop-shadow-lg">
              {characters[selectedCharacter].power}
            </div>
          </div>
        </div>

        {/* Enhanced Play Again */}
        <div className="space-y-6">
          <button
            onClick={() => {
              setGamePhase('lobby');
              setPlayerStats({ sol: 1.0, rank: 50, totalPlayers: 100 });
              setAllocation({ mining: 0, farming: 0, trading: 0, research: 0, social: 0 });
              setSelectedCharacter('hodler');
            }}
            className={`${neonButton} text-2xl py-6 px-8 w-full sm:w-auto max-w-xs mx-auto`}
          >
            <div className="flex items-center gap-4">
              <Sparkles size={32} className="animate-spin" />
              <span className={`font-black ${textShadow}`}>PLAY AGAIN</span>
              <Target size={32} className="animate-bounce" />
            </div>
          </button>
          <p className={`text-gray-300 text-xl ${textShadow}`}>
            Think you can survive again? The arena awaits...
          </p>
        </div>
      </div>

      {/* Enhanced Confetti Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-90 animate-ping rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative text-white font-sans">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 30px currentColor; }
          50% { text-shadow: 0 0 50px currentColor, 0 0 70px currentColor; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1.2s ease-out; }
        .animate-slide-up { animation: slide-up 1.2s ease-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        
        .text-shadow-strong {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.3);
        }
        
        .shadow-neon-enhanced {
          box-shadow: 
            0 0 30px rgba(236, 72, 153, 0.4), 
            0 0 60px rgba(236, 72, 153, 0.3), 
            0 0 90px rgba(236, 72, 153, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
        }

        .bg-black\/80 {
          background-color: rgba(0, 0, 0, 0.8);
        }

        .bg-black\/60 {
          background-color: rgba(0, 0, 0, 0.6);
        }

        .bg-black\/50 {
          background-color: rgba(0, 0, 0, 0.5);
        }

        .bg-black\/40 {
          background-color: rgba(0, 0, 0, 0.4);
        }

        .bg-black\/30 {
          background-color: rgba(0, 0, 0, 0.3);
        }
      `}</style>
      {onStartPage ? (
        renderStartPage()
      ) : (
        <>
          {gamePhase === 'lobby' && renderLobby()}
          {gamePhase === 'phase1' && renderPhase1()}
          {gamePhase === 'phase2' && renderPhase2()}
          {gamePhase === 'phase3' && renderPhase3()}
          {gamePhase === 'victory' && renderVictory()}
        </>
      )}

      {/* Enhanced Chaos Event Modal */}
      {chaosEvent && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 animate-fade-in">
          <div className={`${ultraGlassPanel} max-w-2xl text-center space-y-8 animate-pulse border-4 ${chaosEvent.severity === 'critical' ? 'border-red-400/80' :
            chaosEvent.severity === 'legendary' ? 'border-yellow-400/80' :
              chaosEvent.severity === 'extreme' ? 'border-purple-400/80' :
                'border-orange-400/80'
            } shadow-2xl`}>
            <div className="text-9xl animate-bounce drop-shadow-lg">🌪️</div>
            <div className="space-y-4">
              <div className={`text-4xl font-bold ${chaosEvent.severity === 'critical' ? 'text-red-300' :
                chaosEvent.severity === 'legendary' ? 'text-yellow-300' :
                  chaosEvent.severity === 'extreme' ? 'text-purple-300' :
                    'text-orange-300'
                } ${textShadow}`}>
                CHAOS EVENT!
              </div>
              <div className={`text-3xl font-bold text-white ${textShadow}`}>{chaosEvent.name}</div>
              <div className={`text-2xl text-gray-200 ${textShadow}`}>{chaosEvent.desc}</div>
            </div>
            <div className={`inline-block px-6 py-3 rounded-2xl font-bold text-lg ${chaosEvent.severity === 'critical' ? 'bg-red-600/70 text-red-100' :
              chaosEvent.severity === 'legendary' ? 'bg-yellow-600/70 text-yellow-100' :
                chaosEvent.severity === 'extreme' ? 'bg-purple-600/70 text-purple-100' :
                  'bg-orange-600/70 text-orange-100'
              } drop-shadow-lg`}>
              {chaosEvent.severity.toUpperCase()} IMPACT
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Battle Modal */}
      {battleType && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 animate-fade-in">
          <div className={`${ultraGlassPanel} max-w-2xl text-center space-y-8 border-4 border-red-500/80 animate-pulse shadow-2xl`}>
            <div className="text-9xl animate-bounce drop-shadow-lg">{battleType.icon}</div>
            <div className="space-y-4">
              <div className={`text-4xl font-bold text-red-300 ${textShadow}`}>BATTLE INITIATED!</div>
              <div className={`text-3xl font-bold text-white ${textShadow}`}>{battleType.name}</div>
              <div className={`text-2xl text-gray-200 ${textShadow}`}>{battleType.desc}</div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-6">
                <button className="px-6 py-4 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl font-bold hover:scale-110 transition-transform text-lg border-2 border-white/20 drop-shadow-lg">
                  ATTACK
                </button>
                <button className="px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl font-bold hover:scale-110 transition-transform text-lg border-2 border-white/20 drop-shadow-lg">
                  DEFEND
                </button>
                <button className="px-6 py-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl font-bold hover:scale-110 transition-transform text-lg border-2 border-white/20 drop-shadow-lg">
                  SPECIAL
                </button>
              </div>
              <div className={`text-lg text-yellow-300 font-bold animate-pulse ${textShadow}`}>
                Choose your strategy wisely!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Loading Transition */}
      {isAnimating && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50">
          <div className="text-center space-y-8">
            <div className="text-8xl animate-spin drop-shadow-lg">⚡</div>
            <div className={`text-4xl font-bold text-white animate-pulse ${textShadow}`}>
              Entering Next Phase...
            </div>
            <div className="flex justify-center space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-bounce drop-shadow-lg"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}