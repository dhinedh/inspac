import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, 
  Sparkles, 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  Download, 
  Copy, 
  Check, 
  ArrowRight, 
  ExternalLink, 
  Calculator, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  ChevronRight, 
  Sliders, 
  MessageSquare,
  HelpCircle,
  Clock,
  ArrowUpRight,
  Grid,
  Globe,
  Star,
  Zap,
  Cpu,
  Cloud,
  Code2,
  BarChart3,
  TrendingUp,
  Server
} from 'lucide-react';
import { generateAiResponse, calculateProjectEstimate, KNOWLEDGE_BASE } from '../utils/aiKnowledgeEngine.js';

export default function AiChatbot({ onOpenContact }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'solutions' | 'estimator' | 'offices'
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const [hasUnread, setHasUnread] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  // Interactive Project Estimator state
  const [estimatorParams, setEstimatorParams] = useState({
    projectType: 'web_mobile',
    scope: 'medium',
    timeline: 'standard',
    complianceNeeded: false
  });

  // Lead capture state
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
    submitted: false
  });

  // Solutions Hub Category Filter in modal
  const [solutionsCategory, setSolutionsCategory] = useState('all'); // 'all' | 'services' | 'products'

  // Message list initialization
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('inspac_chat_history');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load chat history', e);
    }
    return [
      {
        id: 'welcome-msg',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `👋 **Welcome to Inspac Intelligence Hub!**

I am **Nova**, your 24/7 Enterprise AI Solutions Architect & Consultant.

How can I assist your team today? Feel free to ask about our **Cloud Transformation**, **8 Enterprise SaaS Products**, **PCI-DSS 4.0 Compliance**, or launch our **Live Project Cost Estimator**.`,
        suggestions: [
          "🚀 Enterprise Cloud & AI",
          "💼 View SaaS Products & Pricing",
          "🛡️ PCI-DSS 4.0 Compliance",
          "💡 Project Cost Estimator",
          "📍 Singapore HQ & Global Offices"
        ],
        interactiveType: 'visual_welcome'
      }
    ];
  });

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const speechRecognitionRef = useRef(null);

  // Persist messages to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('inspac_chat_history', JSON.stringify(messages));
    } catch (e) {
      console.error('Failed to save chat history', e);
    }
  }, [messages]);

  // Auto scroll
  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen, activeTab]);

  // Dismiss teaser after 14 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(false);
    }, 14000);
    return () => clearTimeout(timer);
  }, []);

  // Global event listener to open chat from anywhere
  useEffect(() => {
    const handleOpenEvent = (e) => {
      setIsOpen(true);
      setShowTeaser(false);
      setHasUnread(false);
      setActiveTab('chat');
      if (e.detail && e.detail.initialPrompt) {
        setTimeout(() => {
          handleSendMessage(e.detail.initialPrompt);
        }, 100);
      } else {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 200);
      }
    };
    window.addEventListener('open-inspac-chat', handleOpenEvent);
    return () => window.removeEventListener('open-inspac-chat', handleOpenEvent);
  }, []);

  // Web Speech API
  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      speechRecognitionRef.current = new SpeechRecognition();
      speechRecognitionRef.current.continuous = false;
      speechRecognitionRef.current.interimResults = false;
      speechRecognitionRef.current.lang = 'en-US';

      speechRecognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsListening(false);
      };

      speechRecognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      speechRecognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleVoiceInput = () => {
    if (!speechRecognitionRef.current) {
      alert("Voice input is not supported in this browser. Please use Chrome, Edge, or Safari.");
      return;
    }
    if (isListening) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      speechRecognitionRef.current.start();
    }
  };

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text
      .replace(/[*#_`>]/g, '')
      .replace(/\[.*?\]\(.*?\)/g, '')
      .replace(/https?:\/\/\S+/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowTeaser(false);
    setHasUnread(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  };

  const handleSendMessage = (textToSend = null) => {
    const messageContent = (textToSend || inputText).trim();
    if (!messageContent) return;

    setActiveTab('chat');
    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: messageContent
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAiResponse(messageContent);
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: response.text,
        suggestions: response.suggestions,
        interactiveType: response.interactiveType,
        interactiveData: response.interactiveData,
        actionLinks: response.actionLinks
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);

      if (audioEnabled) {
        speakText(response.text);
      }
    }, 550);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    if (window.confirm("Reset conversation history?")) {
      const initialMessage = [
        {
          id: 'welcome-msg',
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: `👋 **Welcome back!** Conversation reset. How may I help you with Inspac's Cloud Services, SaaS Suite, or PCI-DSS 4.0 Compliance today?`,
          suggestions: [
            "🚀 Enterprise Cloud & AI",
            "💼 SaaS Products & Pricing",
            "🛡️ PCI-DSS 4.0 Compliance",
            "💡 Project Cost Estimator"
          ],
          interactiveType: 'visual_welcome'
        }
      ];
      setMessages(initialMessage);
      try {
        localStorage.setItem('inspac_chat_history', JSON.stringify(initialMessage));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleExportTranscript = () => {
    const transcriptText = messages
      .map((m) => `[${m.timestamp}] ${m.sender === 'user' ? 'You' : 'Nova (Inspac AI)'}:\n${m.text}\n`)
      .join('\n----------------------------------------\n\n');

    const blob = new Blob([transcriptText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `inspac-copilot-transcript-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyMessage = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleNavigation = (path, prefill = '') => {
    setIsOpen(false);
    if (path === '/contact' && prefill && onOpenContact) {
      onOpenContact(prefill);
    } else {
      navigate(path);
    }
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;

    setLeadForm((prev) => ({ ...prev, submitted: true }));
    
    setTimeout(() => {
      const confirmMsg = {
        id: `bot-lead-${Date.now()}`,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: `✅ **Thank you, ${leadForm.name}!** 

Your consultation request has been forwarded directly to our Singapore Solutions Architecture team (\`mkts@inspacsolutions.com\`). 

A Senior Solutions Lead will connect with you at **${leadForm.email}** within **2 business hours** with a tailored architectural proposal.`,
        suggestions: [
          "🚀 Explore Cloud Services",
          "💼 View SaaS Products",
          "📍 Office Locations"
        ]
      };
      setMessages((prev) => [...prev, confirmMsg]);
    }, 400);
  };

  // Helper for Markdown Parsing
  const renderFormattedText = (text) => {
    if (!text) return null;

    return text.split('\n').map((line, idx) => {
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="font-semibold text-cyan-300 text-xs sm:text-sm mt-2 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h3 key={idx} className="font-bold text-white text-xs sm:text-sm mt-3 mb-1">
            {line.replace('## ', '')}
          </h3>
        );
      }

      if (line.startsWith('- ') || line.startsWith('* ')) {
        const itemContent = line.substring(2);
        return (
          <div key={idx} className="flex items-start space-x-2 my-1 pl-1 text-slate-200">
            <span className="text-cyan-400 mt-1 shrink-0 text-xs">▸</span>
            <div className="flex-1 leading-relaxed text-xs">
              {parseInlineMarkdown(itemContent)}
            </div>
          </div>
        );
      }

      if (/^\d+\.\s/.test(line)) {
        return (
          <div key={idx} className="flex items-start space-x-2 my-1 pl-1 text-slate-200">
            <span className="text-cyan-400 font-semibold text-xs shrink-0">{line.match(/^\d+\./)[0]}</span>
            <div className="flex-1 leading-relaxed text-xs">
              {parseInlineMarkdown(line.replace(/^\d+\.\s/, ''))}
            </div>
          </div>
        );
      }

      return (
        <p key={idx} className="my-1 leading-relaxed text-xs text-slate-200">
          {parseInlineMarkdown(line)}
        </p>
      );
    });
  };

  const parseInlineMarkdown = (content) => {
    const parts = [];
    const regex = /(\*\*.*?\*\*|`.*?`|\*.*?\*)/g;
    let lastIdx = 0;
    let match;

    while ((match = regex.exec(content)) !== null) {
      if (match.index > lastIdx) {
        parts.push(content.substring(lastIdx, match.index));
      }
      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="font-semibold text-white">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        parts.push(
          <code key={match.index} className="px-1.5 py-0.5 bg-slate-800/90 text-cyan-300 rounded font-mono text-[11px] border border-cyan-800/50">
            {token.slice(1, -1)}
          </code>
        );
      } else if (token.startsWith('*') && token.endsWith('*')) {
        parts.push(
          <em key={match.index} className="text-cyan-200/90 italic">
            {token.slice(1, -1)}
          </em>
        );
      }
      lastIdx = regex.lastIndex;
    }

    if (lastIdx < content.length) {
      parts.push(content.substring(lastIdx));
    }

    return parts.length > 0 ? parts : content;
  };

  // Render Rich Interactive Widgets with Visuals & Images
  const renderInteractiveWidget = (msg) => {
    if (!msg.interactiveType) return null;

    // 1. Visual Welcome Hero Widget
    if (msg.interactiveType === 'visual_welcome') {
      return (
        <div className="mt-3.5 space-y-2.5 animate-fadeIn">
          {/* Visual Showcase Banner */}
          <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
              alt="Inspac Enterprise Architecture" 
              className="w-full h-24 object-cover object-center brightness-75 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent p-3 flex flex-col justify-end">
              <div className="flex items-center space-x-1.5 mb-0.5">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-cyan-500 text-navy-950 uppercase tracking-wider">
                  Enterprise Grade
                </span>
                <span className="text-[10px] text-cyan-200 font-mono">Singapore · India · Australia</span>
              </div>
              <p className="text-white text-xs font-bold leading-tight">
                Empowering Global Enterprises with Cloud, AI & GRC Excellence
              </p>
            </div>
          </div>

          {/* 4 Visual Quick Launch Cards */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleSendMessage("Tell me about Multi-Cloud and DevSecOps services")}
              className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-left transition-all group flex items-center space-x-2 shadow"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Cloud className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-white text-[11px] font-semibold truncate group-hover:text-cyan-300">Cloud & DevSecOps</p>
                <p className="text-slate-400 text-[9px]">AWS · Azure · GCP</p>
              </div>
            </button>

            <button
              onClick={() => handleSendMessage("Tell me about Enterprise AI and Data Lakehouse")}
              className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-left transition-all group flex items-center space-x-2 shadow"
            >
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-white text-[11px] font-semibold truncate group-hover:text-cyan-300">GenAI & Lakehouse</p>
                <p className="text-slate-400 text-[9px]">Snowflake · LLMs</p>
              </div>
            </button>

            <button
              onClick={() => handleSendMessage("How do you help with PCI-DSS 4.0 compliance?")}
              className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-left transition-all group flex items-center space-x-2 shadow"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-white text-[11px] font-semibold truncate group-hover:text-cyan-300">PCI-DSS 4.0 Audit</p>
                <p className="text-slate-400 text-[9px]">100% Pass Rate</p>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('estimator')}
              className="p-2 rounded-xl bg-gradient-to-br from-cyan-950/80 to-blue-950/80 hover:from-cyan-900/80 hover:to-blue-900/80 border border-cyan-500/40 text-left transition-all group flex items-center space-x-2 shadow"
            >
              <div className="w-7 h-7 rounded-lg bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Calculator className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-white text-[11px] font-semibold truncate group-hover:text-cyan-300">Cost Estimator</p>
                <p className="text-cyan-300 text-[9px]">Instant SOW Quote</p>
              </div>
            </button>
          </div>
        </div>
      );
    }

    // 2. Rich Product Card with High-Res Image
    if (msg.interactiveType === 'product_card' && msg.interactiveData) {
      const data = msg.interactiveData;
      return (
        <div className="mt-3 rounded-2xl overflow-hidden bg-slate-900/95 border border-cyan-500/40 shadow-xl text-xs space-y-0 animate-fadeIn">
          {/* High-Res Hero Image Banner */}
          {data.image && (
            <div className="relative h-28 w-full overflow-hidden">
              <img 
                src={data.image} 
                alt={data.name} 
                className="w-full h-full object-cover object-center brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute top-2.5 left-2.5 flex items-center space-x-1.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-md">
                  {data.category}
                </span>
              </div>
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                <span className="text-white font-bold text-sm drop-shadow">{data.name}</span>
                <span className="text-emerald-300 font-semibold text-xs px-2 py-0.5 rounded-full bg-slate-950/80 border border-emerald-500/40">
                  {data.pricing}
                </span>
              </div>
            </div>
          )}

          <div className="p-3.5 space-y-2.5">
            {data.stats && (
              <div className="flex items-center space-x-1.5 text-[10px] text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/40">
                <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{data.stats}</span>
              </div>
            )}

            <p className="text-slate-300 text-xs leading-relaxed">{data.summary}</p>

            <div className="flex space-x-2 pt-1 border-t border-slate-800">
              <button
                onClick={() => handleNavigation(data.path)}
                className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition shadow-md"
              >
                <span>Explore Full Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleNavigation('/contact', `Live Demo Request: ${data.name}`)}
                className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold border border-slate-700 transition"
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      );
    }

    // 3. Rich Service Card with High-Res Image
    if (msg.interactiveType === 'service_card' && msg.interactiveData) {
      const data = msg.interactiveData;
      return (
        <div className="mt-3 rounded-2xl overflow-hidden bg-slate-900/95 border border-cyan-500/40 shadow-xl text-xs space-y-0 animate-fadeIn">
          {data.image && (
            <div className="relative h-28 w-full overflow-hidden">
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-full object-cover object-center brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500 text-navy-950 uppercase tracking-wide">
                  {data.category}
                </span>
              </div>
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                <span className="text-white font-bold text-sm drop-shadow">{data.title}</span>
                <span className="text-cyan-300 text-[10px] px-2 py-0.5 rounded-full bg-slate-950/80 border border-cyan-700/50">
                  99.99% SLA
                </span>
              </div>
            </div>
          )}

          <div className="p-3.5 space-y-2.5">
            {data.badge && (
              <div className="text-[10px] text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/40 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{data.badge}</span>
              </div>
            )}

            <p className="text-slate-300 text-xs leading-relaxed">{data.summary}</p>

            <div className="flex space-x-2 pt-1 border-t border-slate-800">
              <button
                onClick={() => handleNavigation(data.path)}
                className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition shadow-md"
              >
                <span>View Practice Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              {data.quizPath && (
                <button
                  onClick={() => handleNavigation(data.quizPath)}
                  className="py-2 px-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 text-xs font-semibold border border-emerald-700/60 transition"
                >
                  Assessment Tool
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    // 4. Global Offices Card with City Photos
    if (msg.interactiveType === 'office_cards') {
      return (
        <div className="mt-3 grid grid-cols-1 gap-2.5 text-xs animate-fadeIn">
          {KNOWLEDGE_BASE.offices.map((office, oIdx) => (
            <div key={oIdx} className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-md">
              <div className="relative h-20 w-full overflow-hidden">
                <img 
                  src={office.image} 
                  alt={office.city} 
                  className="w-full h-full object-cover object-center brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="font-bold text-white text-xs drop-shadow">{office.country}</span>
                  <span className="text-[9px] text-cyan-300 px-1.5 py-0.5 rounded bg-navy-950/90 border border-cyan-800/60">
                    {office.badge}
                  </span>
                </div>
              </div>
              <div className="p-2.5 space-y-1.5">
                <p className="text-slate-300 text-[10px] flex items-start gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </p>
                <div className="flex items-center justify-between text-[10px] text-cyan-300 pt-1 border-t border-slate-800/80">
                  <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline flex items-center gap-1">
                    <Phone className="w-2.5 h-2.5" /> {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className="hover:underline flex items-center gap-1">
                    <Mail className="w-2.5 h-2.5" /> {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    // 5. In-Chat Interactive Estimator
    if (msg.interactiveType === 'estimator') {
      const estimate = calculateProjectEstimate(estimatorParams);

      return (
        <div className="mt-3 p-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-xl text-xs space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2 text-cyan-300 font-semibold">
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span>Interactive Cost & Timeline Calculator</span>
            </div>
            <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded-full font-mono">
              Live Engine
            </span>
          </div>

          <div>
            <label className="text-[11px] text-slate-400 block mb-1">Project Initiative Type:</label>
            <select
              value={estimatorParams.projectType}
              onChange={(e) => setEstimatorParams({ ...estimatorParams, projectType: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
            >
              <option value="web_mobile">Digital Web & Mobile Platform Modernization</option>
              <option value="cloud_migration">Multi-Cloud & DevSecOps Architecture</option>
              <option value="ai_lakehouse">Enterprise AI & Data Lakehouse Implementation</option>
              <option value="sap_erp">SAP S/4HANA & ERP Integration</option>
              <option value="pci_dss">PCI-DSS 4.0 / ISO 27001 Audit & Remediation</option>
              <option value="custom_saas">Custom Enterprise SaaS & Workflow Engine</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Scale / Scope:</label>
              <select
                value={estimatorParams.scope}
                onChange={(e) => setEstimatorParams({ ...estimatorParams, scope: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
              >
                <option value="small">MVP / Dept Scope</option>
                <option value="medium">Mid-Enterprise</option>
                <option value="large">Global Enterprise</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Sprint Velocity:</label>
              <select
                value={estimatorParams.timeline}
                onChange={(e) => setEstimatorParams({ ...estimatorParams, timeline: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
              >
                <option value="fast">Accelerated Sprint</option>
                <option value="standard">Standard Agile</option>
                <option value="flexible">Phased Rollout</option>
              </select>
            </div>
          </div>

          <label className="flex items-center space-x-2 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 cursor-pointer hover:border-slate-700 transition">
            <input
              type="checkbox"
              checked={estimatorParams.complianceNeeded}
              onChange={(e) => setEstimatorParams({ ...estimatorParams, complianceNeeded: e.target.checked })}
              className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-cyan-400 w-3.5 h-3.5"
            />
            <span className="text-[11px] text-slate-300">Include PCI-DSS 4.0 / MAS TRM Compliance Verification</span>
          </label>

          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-950/80 to-cyan-950/80 border border-cyan-500/40 space-y-1.5">
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-[11px] text-slate-400">Duration:</span>
              <span className="font-bold text-cyan-300 text-xs">{estimate.estimatedWeeks} Weeks (~{Math.round(estimate.estimatedWeeks / 4.3)} Months)</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-[11px] text-slate-400">Estimated Investment:</span>
              <span className="font-bold text-emerald-400 text-xs">{estimate.costRangeSGD}</span>
            </div>
            <div className="flex justify-between items-center text-slate-400 text-[10px]">
              <span>USD Reference:</span>
              <span>{estimate.costRangeUSD}</span>
            </div>
            <div className="pt-1.5 border-t border-cyan-900/60 text-[10px] text-slate-300 leading-tight">
              <span className="text-cyan-400 font-medium">Recommended Squad: </span>
              {estimate.recommendedSquad}
            </div>
          </div>

          <button
            onClick={() => handleNavigation('/contact', `Project Estimate Request: ${estimate.title} (${estimate.costRangeSGD}, ~${estimate.estimatedWeeks} wks)`)}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition shadow-lg"
          >
            <span>Lock in Estimate & Request SOW</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      );
    }

    // 6. In-Chat Lead Capture Form
    if (msg.interactiveType === 'lead_form' && !leadForm.submitted) {
      return (
        <form onSubmit={handleLeadSubmit} className="mt-3 p-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 text-xs space-y-2.5 shadow-xl animate-fadeIn">
          <div className="font-bold text-cyan-300 text-xs flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Connect with an Enterprise Solutions Architect</span>
          </div>
          <div className="space-y-1.5">
            <input
              type="text"
              placeholder="Your Full Name *"
              required
              value={leadForm.name}
              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Corporate Business Email *"
              required
              value={leadForm.email}
              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Organization / Company"
              value={leadForm.company}
              onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow"
          >
            <span>Request Fast-Track Callback</span>
            <CheckCircle2 className="w-3.5 h-3.5" />
          </button>
        </form>
      );
    }

    return null;
  };

  return (
    <>
      {/* 1. Proactive Floating Teaser Banner (Official Logo + Visual Prompt) */}
      {!isOpen && showTeaser && (
        <div className="fixed bottom-20 right-3 sm:bottom-24 sm:right-6 z-50 max-w-[calc(100vw-24px)] sm:max-w-sm animate-bounce-subtle">
          <div className="glass-panel-accent p-3 sm:p-3.5 rounded-3xl shadow-2xl border border-cyan-400/40 relative text-xs backdrop-blur-xl bg-navy-950/95">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTeaser(false);
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 text-slate-300 hover:text-white rounded-full flex items-center justify-center text-xs border border-slate-700 shadow"
            >
              ✕
            </button>
            <div className="flex items-start space-x-2.5 sm:space-x-3 cursor-pointer" onClick={handleOpenChat}>
              <div className="relative shrink-0">
                <img 
                  src="/inspac-logo.png" 
                  alt="Inspac Solutions Logo" 
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-md"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 border-2 border-navy-950 animate-pulse"></span>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-white text-xs flex items-center gap-1.5">
                  Inspac AI Copilot
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-semibold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                    Online
                  </span>
                </p>
                <p className="text-slate-300 text-[10px] sm:text-[11px] mt-0.5 leading-snug">
                  👋 Need help with Cloud, SaaS products, or PCI-DSS 4.0? Ask Nova anything!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Floating AI Widget Orb Trigger (Featuring Official Logo) */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <button
            onClick={handleOpenChat}
            className="group relative flex items-center space-x-2 sm:space-x-3 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-[#004764] via-blue-700 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 text-white shadow-[0_10px_35px_-5px_rgba(14,165,233,0.6)] border border-cyan-400/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
            aria-label="Open Inspac AI Chatbot"
          >
            {/* Glowing Aura Ring */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500 animate-pulse-slow"></span>

            {/* Inner Content with Official Logo */}
            <div className="relative flex items-center space-x-2 sm:space-x-2.5">
              <div className="relative shrink-0">
                <img 
                  src="/inspac-logo.png" 
                  alt="Inspac Solutions Logo" 
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-md"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-navy-950"></span>
              </div>
              <div className="text-left hidden xs:block sm:block">
                <p className="font-bold text-xs tracking-wide text-white leading-none">Inspac AI Copilot</p>
                <p className="text-[10px] text-cyan-200 leading-none mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Ready to Assist
                </p>
              </div>
              <Sparkles className="w-4 h-4 text-cyan-300 animate-spin-slow ml-0.5" />
            </div>

            {/* Unread dot */}
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-slate-950 rounded-full"></span>
            )}
          </button>
        </div>
      )}

      {/* 3. Main Luxury Chatbot Window & Visual Hub */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col shadow-2xl overflow-hidden ${
            isExpanded
              ? 'inset-0 sm:inset-4 lg:inset-6 rounded-none sm:rounded-3xl'
              : 'inset-x-0 bottom-0 top-0 sm:top-auto sm:inset-auto sm:bottom-6 sm:right-6 w-full sm:w-[480px] h-full sm:h-[680px] sm:max-h-[92vh] rounded-none sm:rounded-3xl'
          } glass-panel-accent border-0 sm:border border-cyan-500/40 bg-navy-950/98 backdrop-blur-3xl`}
        >
          {/* Header Bar */}
          <div className="px-3.5 sm:px-4 py-3 bg-gradient-to-r from-[#003a52] via-[#004764] to-[#00587c] border-b border-cyan-500/20 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
              <div className="relative flex items-center -space-x-2 shrink-0">
                <img 
                  src="/inspac-logo.png" 
                  alt="Inspac Logo" 
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-lg z-10"
                />
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80" 
                  alt="Nova Avatar" 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-cyan-300 shadow-md opacity-90"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5 truncate">
                  <h3 className="font-bold text-xs sm:text-sm text-white tracking-wide truncate">Inspac Copilot</h3>
                  <span className="px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 shrink-0">
                    Nova AI
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-300 flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  Inspac Solutions · Active 24/7
                </p>
              </div>
            </div>

            {/* Header Action Controls */}
            <div className="flex items-center space-x-1 text-slate-300 shrink-0">
              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                title={audioEnabled ? "Mute Voice (TTS)" : "Enable Voice Audio"}
                className={`p-1.5 rounded-xl transition ${audioEnabled ? 'text-cyan-400 bg-slate-800' : 'text-slate-400 hover:text-white'}`}
              >
                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              <button
                onClick={handleExportTranscript}
                title="Download Chat Transcript"
                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition hidden xs:block"
              >
                <Download className="w-4 h-4" />
              </button>

              <button
                onClick={handleClearChat}
                title="Reset Conversation"
                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? "Standard Window" : "Expand Window"}
                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition hidden sm:block"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Close Window"
                className="p-1.5 rounded-xl hover:bg-red-950/80 text-slate-400 hover:text-red-300 transition ml-0.5"
              >
                <X className="w-5 h-5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="px-2 sm:px-3 py-1.5 bg-navy-950 border-b border-slate-800/80 flex items-center space-x-1 shrink-0 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold whitespace-nowrap shrink-0 transition ${
                activeTab === 'chat'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>AI Chat</span>
            </button>

            <button
              onClick={() => setActiveTab('solutions')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold whitespace-nowrap shrink-0 transition ${
                activeTab === 'solutions'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Solutions Hub</span>
            </button>

            <button
              onClick={() => setActiveTab('estimator')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold whitespace-nowrap shrink-0 transition ${
                activeTab === 'estimator'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Cost Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab('offices')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold whitespace-nowrap shrink-0 transition ${
                activeTab === 'offices'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Global Hubs</span>
            </button>
          </div>

          {/* TAB 1: AI CHAT CONVERSATION */}
          {activeTab === 'chat' && (
            <div className="flex-1 flex flex-col min-h-0">
              {/* Message Feed */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                {messages.map((msg, idx) => (
                  <div
                    key={msg.id || idx}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1`}
                  >
                    <div className="flex items-start space-x-2 max-w-[90%] sm:max-w-[85%]">
                      {msg.sender === 'bot' && (
                        <img 
                          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80" 
                          alt="Nova" 
                          className="w-7 h-7 rounded-xl object-cover border border-cyan-400/60 shrink-0 mt-1 shadow"
                        />
                      )}

                      <div
                        className={`rounded-2xl p-3.5 ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-none shadow-md'
                            : 'bg-slate-900/95 text-slate-200 border border-slate-800/90 rounded-tl-none shadow-lg'
                        }`}
                      >
                        <div className="prose prose-invert max-w-none text-xs leading-relaxed">
                          {msg.sender === 'bot' ? renderFormattedText(msg.text) : msg.text}
                        </div>

                        {msg.sender === 'bot' && renderInteractiveWidget(msg)}

                        {msg.sender === 'bot' && msg.actionLinks && msg.actionLinks.length > 0 && (
                          <div className="mt-3 pt-2.5 border-t border-slate-800 flex flex-wrap gap-1.5">
                            {msg.actionLinks.map((link, lIdx) => (
                              <button
                                key={lIdx}
                                onClick={() => handleNavigation(link.path, link.prefill)}
                                className="px-2.5 py-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 text-[11px] font-semibold flex items-center space-x-1 transition shadow-sm"
                              >
                                <span>{link.label}</span>
                                <ChevronRight className="w-3 h-3 text-cyan-400" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={`flex items-center space-x-2 text-[10px] text-slate-400 px-1 ${msg.sender === 'user' ? 'mr-1' : 'ml-9'}`}>
                      <span>{msg.timestamp}</span>
                      {msg.sender === 'bot' && (
                        <>
                          <span>·</span>
                          <button
                            onClick={() => handleCopyMessage(msg.text, idx)}
                            className="hover:text-cyan-300 flex items-center space-x-0.5"
                          >
                            {copiedIndex === idx ? (
                              <>
                                <Check className="w-2.5 h-2.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-2.5 h-2.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                          <span>·</span>
                          <button
                            onClick={() => speakText(msg.text)}
                            className="hover:text-cyan-300 flex items-center space-x-0.5"
                          >
                            <Volume2 className="w-2.5 h-2.5" />
                            <span>Speak</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start space-x-2 animate-fadeIn">
                    <img 
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80" 
                      alt="Nova" 
                      className="w-7 h-7 rounded-xl object-cover border border-cyan-400 shrink-0 mt-1 shadow"
                    />
                    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl rounded-tl-none p-3.5 flex items-center space-x-2 shadow">
                      <span className="text-slate-400 text-xs">Nova is analyzing</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Reply Suggestions */}
              {messages.length > 0 && messages[messages.length - 1].suggestions && (
                <div className="px-3.5 py-2 bg-navy-950/90 border-t border-slate-800/80 flex items-center space-x-2 overflow-x-auto no-scrollbar shrink-0">
                  <span className="text-[10px] text-slate-400 shrink-0 font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" /> Prompts:
                  </span>
                  {messages[messages.length - 1].suggestions.map((suggestion, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleSendMessage(suggestion.replace(/^[^\w\s]+/, '').trim())}
                      className="px-3 py-1 rounded-full bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 text-[11px] font-medium whitespace-nowrap transition-all shadow-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              {/* Chat Input Bar */}
              <div className="p-3 bg-navy-950 border-t border-cyan-500/20 shrink-0">
                <div className="relative flex items-center bg-slate-900/90 border border-slate-700 rounded-2xl focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400/50 transition shadow-inner">
                  <button
                    type="button"
                    onClick={toggleVoiceInput}
                    title={isListening ? "Listening... click to stop" : "Voice dictation input"}
                    className={`p-2.5 text-slate-400 hover:text-cyan-300 transition ${isListening ? 'text-red-400 animate-pulse' : ''}`}
                  >
                    {isListening ? <Mic className="w-4 h-4 text-red-400" /> : <Mic className="w-4 h-4" />}
                  </button>

                  <textarea
                    ref={inputRef}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isListening ? "Listening to your voice..." : "Ask Nova about Cloud, SaaS, PCI-DSS..."}
                    rows={1}
                    className="w-full bg-transparent py-2.5 px-2 text-sm sm:text-xs text-white placeholder-slate-400 focus:outline-none resize-none max-h-24 overflow-y-auto"
                  />

                  <button
                    type="button"
                    disabled={!inputText.trim()}
                    onClick={() => handleSendMessage()}
                    className={`p-2.5 mr-1 rounded-xl transition ${
                      inputText.trim()
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-md scale-100'
                        : 'text-slate-600 cursor-not-allowed opacity-50'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between px-2 pt-2 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    Singapore HQ · Zero Data Retention
                  </span>
                  <span>Nova Enterprise AI</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SOLUTIONS VISUAL HUB (Gallery of Services & Products) */}
          {activeTab === 'solutions' && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Filter Pills */}
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">Enterprise Solutions Catalog</h4>
                <div className="flex space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setSolutionsCategory('all')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition ${solutionsCategory === 'all' ? 'bg-cyan-500 text-navy-950' : 'text-slate-400'}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSolutionsCategory('services')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition ${solutionsCategory === 'services' ? 'bg-cyan-500 text-navy-950' : 'text-slate-400'}`}
                  >
                    8 Practices
                  </button>
                  <button
                    onClick={() => setSolutionsCategory('products')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition ${solutionsCategory === 'products' ? 'bg-cyan-500 text-navy-950' : 'text-slate-400'}`}
                  >
                    8 SaaS Products
                  </button>
                </div>
              </div>

              {/* Services Section */}
              {(solutionsCategory === 'all' || solutionsCategory === 'services') && (
                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Cloud className="w-3.5 h-3.5" />
                    <span>Enterprise Technology Practices</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {KNOWLEDGE_BASE.services.map((srv) => (
                      <div 
                        key={srv.id}
                        className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between shadow"
                      >
                        <div className="relative h-24 overflow-hidden">
                          <img 
                            src={srv.image} 
                            alt={srv.name} 
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-85"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold bg-navy-950/90 text-cyan-300 border border-cyan-800">
                            {srv.category}
                          </span>
                        </div>
                        <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                          <div>
                            <h5 className="font-bold text-white text-xs group-hover:text-cyan-300 transition">{srv.name}</h5>
                            <p className="text-slate-300 text-[11px] line-clamp-2 mt-1">{srv.summary}</p>
                          </div>
                          <div className="flex space-x-1.5 pt-1">
                            <button
                              onClick={() => handleSendMessage(`Tell me all about ${srv.name}`)}
                              className="flex-1 py-1.5 px-2 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 text-[10px] font-semibold border border-cyan-800 text-center"
                            >
                              Ask Nova
                            </button>
                            <button
                              onClick={() => handleNavigation(srv.path)}
                              className="py-1.5 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-semibold"
                            >
                              Explore
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SaaS Products Section */}
              {(solutionsCategory === 'all' || solutionsCategory === 'products') && (
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Inspac Business Applications Suite</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {KNOWLEDGE_BASE.products.map((prod) => (
                      <div 
                        key={prod.id}
                        className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all group flex flex-col justify-between shadow"
                      >
                        <div className="relative h-24 overflow-hidden">
                          <img 
                            src={prod.image} 
                            alt={prod.name} 
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-85"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold bg-blue-600 text-white shadow">
                            {prod.category}
                          </span>
                          <span className="absolute bottom-1 right-2 text-emerald-400 font-bold text-[10px] bg-navy-950/90 px-1.5 py-0.5 rounded">
                            {prod.pricing}
                          </span>
                        </div>
                        <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                          <div>
                            <h5 className="font-bold text-white text-xs group-hover:text-blue-400 transition">{prod.name}</h5>
                            <p className="text-slate-300 text-[11px] line-clamp-2 mt-1">{prod.summary}</p>
                          </div>
                          <div className="flex space-x-1.5 pt-1">
                            <button
                              onClick={() => handleSendMessage(`Tell me all about ${prod.name} and pricing`)}
                              className="flex-1 py-1.5 px-2 rounded-lg bg-blue-950 hover:bg-blue-900 text-blue-300 text-[10px] font-semibold border border-blue-800 text-center"
                            >
                              Ask Nova
                            </button>
                            <button
                              onClick={() => handleNavigation(prod.path)}
                              className="py-1.5 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-semibold"
                            >
                              Live Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: DEDICATED COST ESTIMATOR SCREEN */}
          {activeTab === 'estimator' && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Header */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/60 to-cyan-900/60 border border-cyan-500/30 text-xs space-y-1">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-cyan-300" />
                  Enterprise Project SOW & Cost Estimator
                </h4>
                <p className="text-slate-300 text-[11px]">
                  Calculate immediate ballpark timeline, squad composition, and budget ranges for your custom enterprise initiatives.
                </p>
              </div>

              {/* Interactive Calculation Card */}
              {renderInteractiveWidget({ interactiveType: 'estimator' })}
            </div>
          )}

          {/* TAB 4: GLOBAL HUBS & CONTACTS */}
          {activeTab === 'offices' && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-navy-900 to-[#004764] border border-cyan-500/30 text-xs space-y-1">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-300" />
                  Inspac Global Delivery Hubs
                </h4>
                <p className="text-slate-300 text-[11px]">
                  Directly connect with our Singapore Executive HQ, India Offshore Center, or Australia Regional Operations.
                </p>
              </div>

              {renderInteractiveWidget({ interactiveType: 'office_cards' })}

              <div className="pt-2">
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Full Executive RFP & Contact Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
