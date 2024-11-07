import React from 'react';
import { Sparkles, GraduationCap, Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">DigiKoç</h1>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-gray-600">
            <GraduationCap className="w-5 h-5" />
            <span>LGS Hazırlık</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Brain className="w-5 h-5" />
            <span>Akıllı Koç</span>
          </div>
        </div>
      </div>
    </header>
  );
}