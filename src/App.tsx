import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { ChatContainer } from './components/ChatContainer';
import { getChatResponse } from './lib/gemini';

const WELCOME_MESSAGE = `Merhaba! Ben DigiKoç, senin kişisel akademik koçunum. LGS hazırlık sürecinde sana yardımcı olmak için buradayım. 

Sana nasıl yardımcı olabilirim?
- Ders çalışma stratejileri
- Konu tekrarı önerileri
- Motivasyon desteği
- Sınav kaygısıyla başa çıkma
- Zaman yönetimi tavsiyeleri

Hadi başlayalım! 📚✨`;

interface Message {
  text: string;
  isBot: boolean;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { text: WELCOME_MESSAGE, isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await getChatResponse(userMessage);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [...prev, { 
        text: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.', 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ChatContainer
          messages={messages}
          input={input}
          isLoading={isLoading}
          onInputChange={setInput}
          onSubmit={handleSubmit}
          messagesEndRef={messagesEndRef}
        />
      </main>
    </div>
  );
}

export default App;