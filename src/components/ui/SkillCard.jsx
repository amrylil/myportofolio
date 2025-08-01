import React from "react";

const SkillCard = ({ title, icon: Icon, color, style, Classname }) => {
  return (
    <div
      style={style}
      className={`border group border-green-400 gap-2 h-11 rounded shadow-sm flex items-center justify-start p-2 py-5 text-slate-50 cursor-pointer hover:bg-green-500 transition-all hover:scale-105 hover:shadow-off hover:shadow-green-500 hover:text-slate-900 ${Classname}`}
    >
      {Icon && (
        <Icon
          size={28}
          style={{ color: color }}
          className="group-hover:!text-slate-900"
        />
      )}
      <div className="text-sm font-bold">{title}</div>
    </div>
  );
};

export default SkillCard;
