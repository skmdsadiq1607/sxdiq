import { useState, useRef, useEffect } from "react";

const TerminalConsole = () => {
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to Sadiq's Shell (v1.0.0)" },
    { type: "output", text: "Type 'help' to view available commands, or press TAB for auto-complete hints." },
    { type: "output", text: "" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focusInput();
  }, []);

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

    // Add to history list
    const updatedCmdHistory = [...commandHistory, trimmed];
    setCommandHistory(updatedCmdHistory);
    setHistoryPointer(updatedCmdHistory.length);

    let response = [];

    switch (cleanCmd) {
      case "help":
        response = [
          { type: "output", text: "Available commands:" },
          { type: "output", text: "  about       - Who is Shaik Sadiq?" },
          { type: "output", text: "  skills      - Core technical skills & tools" },
          { type: "output", text: "  projects    - Key projects built by Sadiq" },
          { type: "output", text: "  education   - Timeline of academic milestones" },
          { type: "output", text: "  experience  - Student leadership & activities" },
          { type: "output", text: "  contact     - Contact information and links" },
          { type: "output", text: "  clear       - Clear screen history" },
          { type: "output", text: "  sudo hack   - ??? [Easter Egg]" }
        ];
        break;
      case "about":
        response = [
          { type: "output", text: "Shaik Kemple Mohammed Sadiq | Full Stack Developer" },
          { type: "output", text: "IT student at Anurag University, Hyderabad (CGPA: 9.25)." },
          { type: "output", text: "Passionate about building highly interactive web apps using the MERN stack." }
        ];
        break;
      case "skills":
        response = [
          { type: "output", text: "Web Technologies:" },
          { type: "output", text: "  React, Vite, Express, Node.js, MongoDB, SQL, Tailwind CSS, Bootstrap, REST APIs" },
          { type: "output", text: "Programming Languages & Algorithms:" },
          { type: "output", text: "  Java, C, Python, JavaScript, Data Structures & Algorithms" },
          { type: "output", text: "Developer Tools:" },
          { type: "output", text: "  Git, GitHub, Vercel, Netlify, VS Code" }
        ];
        break;
      case "projects":
        response = [
          { type: "output", text: "1. Krushi Mitra (AI-Powered Farming Assistant)" },
          { type: "output", text: "   Multi-language scheme recommendations, soil analysis, and disease detection." },
          { type: "output", text: "   Live: https://krushi-mitra-unquadtrium.vercel.app/" },
          { type: "output", text: "2. IgniteXT (Student Community Platform)" },
          { type: "output", text: "   Shared study notes, circulars, department events, supporting multiple colleges." },
          { type: "output", text: "   Live: https://ignitext2026.vercel.app/" },
          { type: "output", text: "3. Developer Portfolio (This site!)" },
          { type: "output", text: "   Minimalist high-contrast layout, flat structural panels, interactive shell." }
        ];
        break;
      case "education":
        response = [
          { type: "output", text: "- B.Tech (Information Technology) @ Anurag University | 2024 - 2028 (CGPA: 9.25)" },
          { type: "output", text: "- Intermediate (MPC) @ Sri Chaitanya Junior College | 2022 - 2024 (94.6%)" },
          { type: "output", text: "- SSC (Class X) @ Sri Chaitanya School | 2022 (GPA: 9.7)" }
        ];
        break;
      case "experience":
        response = [
          { type: "output", text: "Student Leadership & Contributions:" },
          { type: "output", text: "- CSI Student Branch: Technical Team Member (Monitored AI100K event)" },
          { type: "output", text: "- IgniteXT: Technical Team Member (Curating resources & study files)" },
          { type: "output", text: "- Coding Club: Content Writer & Workshop Organizer" }
        ];
        break;
      case "contact":
        response = [
          { type: "output", text: "Get in touch:" },
          { type: "output", text: "  Email:    skmdsadiq1607@gmail.com" },
          { type: "output", text: "  Phone:    +91 9441921812" },
          { type: "output", text: "  LinkedIn: linkedin.com/in/shaik-sadiq-b1650a377" },
          { type: "output", text: "  GitHub:   github.com/skmdsadiq1607" }
        ];
        break;
      case "clear":
        setHistory([]);
        setInputValue("");
        return;
      case "sudo hack":
        response = [
          { type: "output", text: "ACCESS GRANTED... INITIATING MATRIX EMULATION..." },
          { type: "output", text: "01001000 01000001 01000011 01001011 01000101 01000100" },
          { type: "output", text: "System overrides loaded. Sadiq's portfolio is now under your control." },
          { type: "output", text: "Try checking out Sadiq's certificates!" }
        ];
        break;
      default:
        response = [
          { type: "output", text: `Command not found: '${trimmed}'. Type 'help' for options.` }
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
      const commands = ["help", "about", "skills", "projects", "education", "experience", "contact", "clear", "sudo hack"];
      const matches = commands.filter(c => c.startsWith(inputValue.toLowerCase()));
      if (matches.length === 1) {
        setInputValue(matches[0]);
      }
    }
  };

  return (
    <div
      onClick={focusInput}
      className="w-full max-w-lg bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs overflow-hidden flex flex-col cursor-text select-text"
      style={{ height: "350px", borderRadius: "0px" }}
    >
      {/* Title bar */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center gap-2 select-none">
        <div className="w-2.5 h-2.5 rounded-full border border-zinc-700 bg-zinc-800" />
        <div className="w-2.5 h-2.5 rounded-full border border-zinc-700 bg-zinc-800" />
        <div className="w-2.5 h-2.5 rounded-full border border-zinc-700 bg-zinc-800" />
        <span className="text-[10px] text-zinc-500 font-medium ml-2 tracking-wide uppercase">sadiq_shell.sh</span>
      </div>

      {/* Screen */}
      <div className="flex-1 p-4 overflow-y-auto space-y-1.5 scrollbar-thin">
        {history.map((entry, idx) => (
          <div key={idx} className="leading-relaxed">
            {entry.type === "input" ? (
              <div className="flex">
                <span className="text-zinc-500 mr-2">sadiq@portfolio:~$</span>
                <span className="text-white font-bold">{entry.text}</span>
              </div>
            ) : (
              <div className="text-zinc-400 whitespace-pre-wrap">{entry.text}</div>
            )}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-zinc-500 mr-2">sadiq@portfolio:~$</span>
          <span className="text-white">{inputValue}</span>
          <span className="terminal-cursor" />
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Hidden input */}
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
