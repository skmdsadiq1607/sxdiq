import { useState, useRef, useEffect } from "react";
import { Terminal, Copy, Check } from "lucide-react";

const TerminalConsole = () => {
  const [history, setHistory] = useState([
    { type: "output", text: "SYSTEM BOOT // SADIQ_OS v2.5 [ONLINE]" },
    { type: "output", text: "Shaik Kemple Mohammed Sadiq - Full Stack Software Engineer" },
    { type: "output", text: "Type 'help' to inspect commands or press TAB for auto-complete." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newHistory = [...history, { type: "input", text: trimmed }];
    const cleanCmd = trimmed.toLowerCase();

    const updatedCmdHistory = [...commandHistory, trimmed];
    setCommandHistory(updatedCmdHistory);
    setHistoryPointer(updatedCmdHistory.length);

    let response = [];

    switch (cleanCmd) {
      case "help":
        response = [
          { type: "output", text: "AVAILABLE COMMANDS:" },
          { type: "output", text: "  about       - Overview of background & education" },
          { type: "output", text: "  skills      - Full stack technologies & proficiencies" },
          { type: "output", text: "  projects    - Production platforms & live demos" },
          { type: "output", text: "  contact     - Direct channels & email" },
          { type: "output", text: "  matrix      - Stream animated telemetry stream" },
          { type: "output", text: "  clear       - Purge terminal console screen" },
        ];
        break;
      case "about":
        response = [
          { type: "output", text: "IDENTITY: Shaik Kemple Mohammed Sadiq" },
          { type: "output", text: "DEGREE:   B.Tech (Information Technology) - CGPA: 9.25" },
          { type: "output", text: "INST:     Anurag University, Hyderabad (2024-2028)" },
          { type: "output", text: "FOCUS:    Full Stack Web Architectures, MERN, Cloud, Algorithms" },
        ];
        break;
      case "skills":
        response = [
          { type: "output", text: "CORE TECH STACK:" },
          { type: "output", text: "  [Frontend] React.js, Vite, Tailwind CSS, Framer Motion, HTML5, CSS3, JS" },
          { type: "output", text: "  [Backend]  Node.js, Express.js, REST APIs, Python, Java" },
          { type: "output", text: "  [Database] MongoDB, SQL, DBMS" },
          { type: "output", text: "  [Core]     Data Structures & Algorithms, OOP, OS, Git" },
        ];
        break;
      case "projects":
        response = [
          { type: "output", text: "FEATURED ARCHITECTURES:" },
          { type: "output", text: "  1. KRUSHI MITRA - AI Farming Assistant Platform (Vercel Live)" },
          { type: "output", text: "  2. IGNITEXT - Multi-College Student Collaboration Community" },
          { type: "output", text: "  3. PORTFOLIO - High-Performance Monochromatic Portfolio" },
        ];
        break;
      case "contact":
        response = [
          { type: "output", text: "DIRECT DISPATCH:" },
          { type: "output", text: "  EMAIL:    skmdsadiq1607@gmail.com" },
          { type: "output", text: "  PHONE:    +91 9441921812" },
          { type: "output", text: "  GITHUB:   https://github.com/skmdsadiq1607" },
          { type: "output", text: "  LINKEDIN: https://www.linkedin.com/in/shaik-sadiq-b1650a377" },
        ];
        break;
      case "matrix":
        response = [
          { type: "output", text: "01010011 01000001 01000100 01001001 01010001" },
          { type: "output", text: "INITIALIZING QUANTUM ENCRYPTION TUNNEL..." },
          { type: "output", text: ">> SYSTEM INTEGRITY 100% // READY FOR DEPLOYMENT" },
        ];
        break;
      case "clear":
        setHistory([]);
        setInputValue("");
        return;
      default:
        response = [
          { type: "output", text: `Command not recognized: '${trimmed}'. Type 'help' for options.` }
        ];
    }

    setHistory([...newHistory, ...response]);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyPointer > 0) {
        const nextIdx = historyPointer - 1;
        setHistoryPointer(nextIdx);
        setInputValue(commandHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer < commandHistory.length - 1) {
        const nextIdx = historyPointer + 1;
        setHistoryPointer(nextIdx);
        setInputValue(commandHistory[nextIdx]);
      } else {
        setHistoryPointer(commandHistory.length);
        setInputValue("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = ["help", "about", "skills", "projects", "contact", "matrix", "clear"];
      const matches = commands.filter(c => c.startsWith(inputValue.toLowerCase()));
      if (matches.length === 1) {
        setInputValue(matches[0]);
      }
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("skmdsadiq1607@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={focusInput}
      className="w-full rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/15 text-white/90 font-mono text-xs overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group cursor-text"
      style={{ height: "360px" }}
    >
      {/* Laser scanner overlay */}
      <div className="laser-scanner opacity-40" />

      {/* Terminal Title Bar */}
      <div className="bg-white/[0.04] border-b border-white/10 px-4 py-3 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
          <span className="text-[10px] text-white/50 font-bold ml-2 tracking-widest uppercase flex items-center gap-1.5">
            <Terminal size={12} className="text-white/70" /> sadiq_shell.sh
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCopyEmail();
          }}
          className="flex items-center gap-1 text-[10px] font-mono text-white/40 hover:text-white transition-colors"
          title="Copy Email"
        >
          {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
        </button>
      </div>

      {/* Terminal Screen Body */}
      <div className="flex-1 p-5 overflow-y-auto space-y-2 scrollbar-thin text-[11px] leading-relaxed select-text">
        {history.map((entry, idx) => (
          <div key={idx}>
            {entry.type === "input" ? (
              <div className="flex items-center text-white/50">
                <span className="text-white/40 mr-2 font-bold">visitor@sadiq:~$</span>
                <span className="text-white font-semibold">{entry.text}</span>
              </div>
            ) : (
              <div className="text-white/75 whitespace-pre-wrap font-light">{entry.text}</div>
            )}
          </div>
        ))}

        <div className="flex items-center text-white/50 pt-1">
          <span className="text-white/40 mr-2 font-bold">visitor@sadiq:~$</span>
          <span className="text-white font-semibold">{inputValue}</span>
          <span className="terminal-cursor" />
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Hidden input to capture keystrokes */}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="sr-only"
        autoComplete="off"
        autoCapitalize="off"
      />
    </div>
  );
};

export default TerminalConsole;
