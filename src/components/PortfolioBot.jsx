import { useEffect, useMemo, useRef, useState } from 'react';
import AiBot from '../assets/sunil/ai-bot.jpg';

const fallbackWebhookUrl = 'https://sunilpersonal.app.n8n.cloud/webhook/fa749434-49b8-495c-be05-06998b2dfbdb';

const quickQuestions = [
  'What projects has Sunil built?',
  'What skills does Sunil have?',
  'Tell me about D&T Pro',
  'How can I contact Sunil?',
];

const createMessage = (role, text) => ({
  id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  role,
  text,
});

const getSessionId = () => {
  const storageKey = 'sunil-portfolio-bot-session';
  const existingSessionId = window.localStorage.getItem(storageKey);

  if (existingSessionId) {
    return existingSessionId;
  }

  const nextSessionId =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `visitor-${Date.now()}`;

  window.localStorage.setItem(storageKey, nextSessionId);
  return nextSessionId;
};

const PortfolioBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState('');
  const [messages, setMessages] = useState([
    createMessage('assistant', 'Hi, I can answer questions about Sunil, his skills, projects, experience, resume, and contact details.'),
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  const webhookUrl = import.meta.env.VITE_N8N_CHAT_WEBHOOK_URL || fallbackWebhookUrl;
  const sessionId = useMemo(() => getSessionId(), []);
  const isVoiceSupported =
    typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSending]);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  const sendQuestion = async (question) => {
    const cleanQuestion = question.trim();

    if (!cleanQuestion || isSending) {
      return;
    }

    setInput('');
    setIsSending(true);
    setMessages((currentMessages) => [
      ...currentMessages,
      createMessage('user', cleanQuestion),
    ]);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: cleanQuestion,
          sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Chat request failed with status ${response.status}`);
      }

      const data = await response.json();
      const answer = data.answer || 'I could not find an answer for that right now.';

      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage('assistant', answer),
      ]);
    } catch (error) {
      console.error('Portfolio bot error:', error);
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage(
          'assistant',
          'Sorry, I could not reach the portfolio assistant right now. Please try again in a moment.'
        ),
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const startVoiceQuestion = () => {
    if (!isVoiceSupported) {
      setVoiceMessage('Voice input works best in Chrome or Edge. Please type your question here.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-IN';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceMessage('Listening...');
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0]?.transcript || '')
        .join('')
        .trim();

      setInput(transcript);

      const latestResult = event.results[event.results.length - 1];
      if (latestResult?.isFinal && transcript) {
        recognition.stop();
        sendQuestion(transcript);
      }
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      const nextMessage =
        event.error === 'not-allowed'
          ? 'Microphone permission was blocked. Please allow microphone access and try again.'
          : 'I could not hear that clearly. Please try again or type your question.';
      setVoiceMessage(nextMessage);
    };

    recognition.onend = () => {
      setIsListening(false);
      setVoiceMessage((currentMessage) =>
        currentMessage === 'Listening...' ? '' : currentMessage
      );
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendQuestion(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 flex h-[620px] max-h-[calc(100vh-7rem)] w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-[8px] border border-white/15 bg-[#0b0b0b] text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#ff2a2a] px-4 py-4">
            <div className="flex items-center gap-3">
              <img
                src={AiBot}
                alt="AI"
                className="h-10 w-10 rounded-full border border-white/30"
              />

              <div>
                <p className="text-sm font-black uppercase">
                  Sunil AI
                </p>
                <p className="text-xs text-white/80">
                  Portfolio Assistant
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#ff2a2a]"
              aria-label="Close portfolio assistant"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[86%] rounded-[8px] px-4 py-3 text-sm leading-relaxed shadow-lg ${
                    message.role === 'user'
                      ? 'self-end bg-[#ff2a2a] text-white'
                      : 'self-start border border-white/10 bg-white text-black'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              ))}

              {isSending && (
                <div className="self-start rounded-[8px] border border-white/10 bg-white px-4 py-3 text-sm text-black shadow-lg">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff2a2a]" />
                    Thinking...
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-white/10 bg-black px-4 py-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendQuestion(question)}
                  disabled={isSending}
                  className="shrink-0 rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-white/80 transition hover:border-[#ff2a2a] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Sunil..."
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/45 focus:border-[#ff2a2a] focus:ring-2 focus:ring-[#ff2a2a]/30"
              />
              <button
                type="button"
                onClick={startVoiceQuestion}
                disabled={isSending}
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition disabled:cursor-not-allowed disabled:opacity-45 ${
                  isListening
                    ? 'border-[#ff2a2a] bg-white text-[#ff2a2a] shadow-[0_0_24px_rgba(255,42,42,0.45)]'
                    : 'border-white/15 bg-white/10 text-white hover:border-[#ff2a2a] hover:bg-white hover:text-[#ff2a2a]'
                }`}
                aria-label={isListening ? 'Stop voice input' : 'Ask with voice'}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 0 1-14 0M12 18v3M9 21h6" />
                </svg>
              </button>
              <button
                type="submit"
                disabled={isSending || !input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff2a2a] text-white transition hover:bg-white hover:text-[#ff2a2a] disabled:cursor-not-allowed disabled:opacity-45"
                aria-label="Send message"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </button>
            </form>
            {voiceMessage && (
              <p className="mt-2 text-xs font-medium text-white/60">{voiceMessage}</p>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff2a2a] text-white shadow-[0_18px_45px_rgba(255,42,42,0.35)] ring-1 ring-white/20 transition hover:scale-105 hover:bg-white hover:text-[#ff2a2a]"
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}
      >
        {isOpen ? (
  <svg
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6l12 12M18 6L6 18"
    />
  </svg>
) : (
  <img
    src={AiBot}
    alt="Sunil AI"
    className="h-16 w-16 rounded-full object-cover"
  />
)}
      </button>
    </div>
  );
};

export default PortfolioBot;
