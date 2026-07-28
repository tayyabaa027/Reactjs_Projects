import React from "react";
import { ShoppingCart, TrendingUp, Star, Sparkles } from "lucide-react";

const RightContent = () => {
  return (
    <div className="w-full lg:w-1/2 h-auto lg:h-full flex justify-center items-center">
      <div className="w-full flex justify-center items-center overflow-hidden h-[240px] sm:h-[336px] md:h-[408px] lg:h-[480px]">
      <div className="relative w-120 h-120 origin-center scale-[0.5] sm:scale-[0.7] md:scale-[0.85] lg:scale-100">
        {/* Ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(16,185,129,0.16), transparent 60%), radial-gradient(circle at 70% 70%, rgba(99,102,241,0.14), transparent 55%)",
            filter: "blur(10px)",
          }}
        />

        {/* ================= Main Revenue Card ================= */}
        <div
          className="absolute top-10 left-10 w-72 h-72 p-8 hover:-translate-y-1.5 transition-transform duration-300"
          style={{
            borderRadius: "32px",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(15,23,42,0.06)",
            boxShadow:
              "0 30px 60px -20px rgba(15,23,42,0.18), 0 2px 8px rgba(15,23,42,0.04)",
          }}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ background: "#10B981" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: "#059669" }}
                  />
                </span>
                <span
                  className="text-[11px] font-semibold tracking-widest uppercase"
                  style={{ color: "#059669" }}
                >
                  Live
                </span>
              </div>
              <h2
                className="text-lg font-semibold mt-2"
                style={{ color: "#0B1220" }}
              >
                Revenue
              </h2>
            </div>

            <div
              className="w-11 h-11 rounded-full flex justify-center items-center shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #059669, #10B981)",
                boxShadow: "0 8px 16px -4px rgba(5,150,105,0.45)",
              }}
            >
              <Sparkles className="text-white" size={18} />
            </div>
          </div>

          <h1
            className="text-5xl font-bold mt-6 tracking-tight tabular-nums"
            style={{ color: "#0B1220" }}
          >
            $2.4M
          </h1>
          <p className="text-sm mt-1.5" style={{ color: "#64748B" }}>
            Total revenue this quarter
          </p>

          {/* Chart */}
          <div className="absolute bottom-8 left-8 flex items-end gap-1.5 h-16">
            {[
              { h: 24, c: "#A7F3D0" },
              { h: 40, c: "#6EE7B7" },
              { h: 16, c: "#A7F3D0" },
              { h: 56, c: "#10B981" },
              { h: 34, c: "#34D399" },
              { h: 48, c: "#059669" },
            ].map((bar, i) => (
              <div
                key={i}
                className="w-3 rounded-full"
                style={{ height: `${bar.h}px`, background: bar.c }}
              />
            ))}
          </div>
        </div>

        {/* ================= Rating Card ================= */}
        <div
          className="absolute bottom-4 right-2 w-40 h-32 flex flex-col justify-center items-center gap-1 hover:-translate-y-1.5 transition-transform duration-300"
          style={{
            borderRadius: "26px",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(15,23,42,0.06)",
            boxShadow:
              "0 20px 40px -18px rgba(15,23,42,0.16), 0 2px 8px rgba(15,23,42,0.04)",
          }}
        >
          <div
            className="w-9 h-9 rounded-full flex justify-center items-center mb-1"
            style={{ background: "rgba(245,158,11,0.12)" }}
          >
            <Star className="fill-current" size={18} style={{ color: "#F59E0B" }} />
          </div>
          <h2
            className="text-3xl font-bold tracking-tight tabular-nums"
            style={{ color: "#0B1220" }}
          >
            4.9
          </h2>
          <p className="text-xs font-medium" style={{ color: "#64748B" }}>
            Rating
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RightContent;