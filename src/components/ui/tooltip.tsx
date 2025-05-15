"use client";

import * as React from "react";
import { useTooltipStore } from "@/stores/useTooltipStore";
import { useTooltipLogic } from "@/hooks/Tooltip";

export function Tooltip() {
  const { talks, position } = useTooltipStore();
  const { getTooltipContent } = useTooltipLogic();

  return (
    <div
      className="absolute bg-white border border-gray-300 shadow-lg p-2 rounded z-10"
      style={{ top: position?.top || 0, left: position?.left || 0 }}
    >
      {talks.length > 0 ? (
        <>
          <h3 className="font-semibold text-sm mb-2">{getTooltipContent()}</h3>
          <ul>
            {talks.map((talk, index) => (
              <li key={index} className="text-sm text-gray-700">
                {talk.title}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-sm text-gray-500">Aucun talk prévu</p>
      )}
    </div>
  );
}
