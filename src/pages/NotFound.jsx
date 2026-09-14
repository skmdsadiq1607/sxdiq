import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white px-6">
      <div className="text-center font-mono max-w-md">
        <h1 className="mb-2 text-7xl font-syne font-black tracking-tighter text-white">404</h1>
        <p className="mb-6 text-xs text-white/50 uppercase tracking-widest font-mono">
          Route Not Found // {location.pathname}
        </p>
        <a href="/" className="btn-primary">
          <ArrowLeft size={14} />
          <span>Return to Headquarters</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
