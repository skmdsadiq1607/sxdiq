import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white noise-overlay">
      <div className="text-center font-mono">
        <h1 className="mb-4 text-5xl font-black">404</h1>
        <p className="mb-6 text-sm text-zinc-500 uppercase tracking-widest">Page Not Found</p>
        <a href="/" className="solid-btn">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
