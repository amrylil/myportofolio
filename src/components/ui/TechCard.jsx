import React from "react";

const Cardtech = ({ title, icon: Icon, style, Classname }) => {
  return (
    <div
      style={style}
      className={`border group border-green-400 gap-2 h-9 rounded shadow-sm flex items-center justify-start p-1 py-2 text-slate-50 cursor-pointer hover:bg-green-500 transition-all hover:scale-105 hover:shadow-off hover:shadow-green-500 hover:text-slate-900 ${Classname}`}
    >
      {Icon && (
        <Icon size={20} className="text-green-400 group-hover:text-slate-900" />
      )}{" "}
      <div className="text-xs font-bold tracking-wide">{title}</div>
    </div>
  );
};

export default Cardtech;
