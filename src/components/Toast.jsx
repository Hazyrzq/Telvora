import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!onClose) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return createPortal(
    <div
      className={`fixed top-6 right-6 z-[999999] px-5 py-3 rounded-lg shadow-lg text-white font-semibold flex items-center gap-2 transition-all animate-fade-in-up ${
        type === 'success'
          ? 'bg-emerald-600'
          : type === 'error'
          ? 'bg-red-600'
          : 'bg-slate-700'
      }`}
      style={{ minWidth: 220, width: 'auto', pointerEvents: 'auto' }}
    >
      {type === 'success' ? (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
      ) : type === 'error' ? (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      ) : null}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 text-white/80 hover:text-white text-lg">×</button>
    </div>,
    document.body
  );
};

export default Toast;
