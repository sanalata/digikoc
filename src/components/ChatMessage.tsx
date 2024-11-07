import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isBot ? 'bg-blue-50' : ''} p-4 rounded-lg`}>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
        {isBot ? (
          <Bot className="w-5 h-5 text-white" />
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </div>
      <div className="flex-1">
        <p className="font-medium mb-1">{isBot ? 'DigiKoç' : 'Sen'}</p>
        <p className="text-gray-700 whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
}