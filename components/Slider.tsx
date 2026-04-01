"use client";

import { useState, useEffect } from "react";

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  unit?: string;
  decimals?: number;
}

export default function Slider({
  label, value, min, max, step = 1, onChange, unit = "", decimals = 0
}: SliderProps) {
  const formatValue = (v: number) => (decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString());
  const [typedValue, setTypedValue] = useState(formatValue(value));

  useEffect(() => {
    setTypedValue(formatValue(value));
  }, [value, decimals]);

  const handleBlur = () => {
    const parsed = parseFloat(typedValue);
    if (Number.isNaN(parsed)) {
      setTypedValue(formatValue(value));
    } else {
      const clamped = Math.min(max, Math.max(min, parsed));
      onChange(clamped);
      setTypedValue(formatValue(clamped));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  const fillPercent = max > min ? Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100)) : 0;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span style={{ color: "var(--muted)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}>
          {label}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={typedValue}
            onChange={(e) => setTypedValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            style={{
              color: "var(--text)",
              fontSize: 11,
              fontFamily: "'JetBrains Mono', monospace",
              textAlign: "right",
              background: "transparent",
              border: "none",
              outline: "none",
              width: 50,
              padding: "1px 0",
              borderBottom: "1px solid transparent",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderBottom = "1px solid var(--accent)";
            }}
            onBlurCapture={(e) => {
              e.currentTarget.style.borderBottom = "1px solid transparent";
            }}
          />
          {unit && <span style={{ color: "var(--text)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>{unit}</span>}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{
          background: `linear-gradient(to right, var(--accent) ${fillPercent}%, var(--border) ${fillPercent}%)`,
          transition: "none",
        }}
      />
    </div>
  );
}
