import Script from "next/script";

export const metadata = {
  title: "Christiana Edem Julius | Backend Engineer",
  description:
    "Portfolio of Christiana Edem Julius — Backend Software Engineer specializing in Go, Redis, WebSockets, and scalable distributed systems.",
};

const inlineStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    color: #e2e8f0;
    background: #020817;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .gradient-text {
    background: linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .dot-grid {
    background-image: radial-gradient(circle, rgba(100,116,139,0.15) 1px, transparent 1px);
    background-size: 28px 28px;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes pulseRing {
    0%   { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
    70%  { box-shadow: 0 0 0 16px rgba(16,185,129,0); }
    100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
  }
  @keyframes bounceY {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-6px); }
  }
  .animate-fade-up        { animation: fadeUp 0.7s ease forwards; }
  .animate-fade-up-delay  { animation: fadeUp 0.7s ease 0.2s both; }
  .animate-float          { animation: float 4s ease-in-out infinite; }
  .animate-pulse-ring     { animation: pulseRing 2.5s ease-out infinite; }
  .animate-bounce-y       { animation: bounceY 1.5s ease-in-out infinite; }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: inlineStyles }} />
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
