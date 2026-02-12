
import React, { useState, useMemo, useEffect } from 'react';
import { SessionType, Question } from './types';
import { QUESTIONS } from './data';

const Header: React.FC = () => (
  <header className="bg-white border-b border-slate-200 sticky top-0 z-10 py-4 px-6">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.599 9.084a1 1 0 0 0-.019 1.838l8.57 3.906a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
        English Adverbials Practice
      </h1>
      <div className="text-sm font-medium text-slate-500">
        100 Questions • 4 Sessions
      </div>
    </div>
  </header>
);

const ScoreCard: React.FC<{ score: number; total: number; onRestart: () => void }> = ({ score, total, onRestart }) => {
  const finalScore = ((score / total) * 10).toFixed(1);
  const getFeedback = () => {
    const s = parseFloat(finalScore);
    if (s >= 9) return { text: "Excellent!", color: "text-green-600", bg: "bg-green-50" };
    if (s >= 7) return { text: "Good job!", color: "text-blue-600", bg: "bg-blue-50" };
    if (s >= 5) return { text: "Keep practicing.", color: "text-yellow-600", bg: "bg-yellow-50" };
    return { text: "Need more study.", color: "text-red-600", bg: "bg-red-50" };
  };
  const feedback = getFeedback();

  return (
    <div className={`mt-8 p-8 rounded-2xl border-2 border-dashed border-slate-200 text-center ${feedback.bg}`}>
      <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
      <div className={`text-6xl font-black mb-4 ${feedback.color}`}>
        {finalScore} <span className="text-2xl text-slate-400">/ 10</span>
      </div>
      <p className="text-slate-600 mb-6 font-medium">
        You got <span className="font-bold text-slate-900">{score}</span> out of {total} questions correct.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={onRestart}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
        >
          Retry This Session
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<SessionType | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const sessionQuestions = useMemo(() => {
    if (!selectedSession) return [];
    return QUESTIONS.filter(q => q.session === selectedSession);
  }, [selectedSession]);

  const score = useMemo(() => {
    if (!showResults) return 0;
    return sessionQuestions.reduce((acc, q) => {
      const userAnswer = (answers[q.id] || '').trim().toLowerCase().replace(/[.,!?;]$/, '');
      const isCorrect = q.expectedEnglish.some(expected => 
        expected.toLowerCase().trim().replace(/[.,!?;]$/, '') === userAnswer
      );
      return acc + (isCorrect ? 1 : 0);
    }, 0);
  }, [showResults, sessionQuestions, answers]);

  const handleSessionSelect = (session: SessionType) => {
    setSelectedSession(session);
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (id: number, val: string) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCorrectAnswer = (q: Question) => {
    const userAnswer = (answers[q.id] || '').trim().toLowerCase().replace(/[.,!?;]$/, '');
    return q.expectedEnglish.some(expected => 
      expected.toLowerCase().trim().replace(/[.,!?;]$/, '') === userAnswer
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-4xl mx-auto w-full p-6">
        {/* Session Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {Object.values(SessionType).map((session) => (
            <button
              key={session}
              onClick={() => handleSessionSelect(session)}
              className={`p-3 text-sm font-semibold rounded-xl border-2 transition-all ${
                selectedSession === session
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300'
              }`}
            >
              {session}
            </button>
          ))}
        </div>

        {!selectedSession ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Sẵn sàng ôn luyện?</h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Chọn một trong các học phần bên trên để bắt đầu bài kiểm tra 100 câu về Trạng từ.
            </p>
          </div>
        ) : (
          <div className="space-y-8 pb-20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{selectedSession}</h2>
                <p className="text-slate-500">Phần bài tập: {sessionQuestions.length} câu</p>
              </div>
              {showResults && (
                 <div className="bg-indigo-600 text-white px-4 py-2 rounded-full font-bold">
                    Score: {((score / sessionQuestions.length) * 10).toFixed(1)} / 10
                 </div>
              )}
            </div>

            {showResults && (
              <ScoreCard score={score} total={sessionQuestions.length} onRestart={() => setShowResults(false)} />
            )}

            <div className="space-y-6">
              {sessionQuestions.map((q, idx) => (
                <div 
                  key={q.id} 
                  className={`p-6 rounded-2xl border transition-all ${
                    showResults 
                      ? isCorrectAnswer(q) 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-red-50 border-red-200'
                      : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500">
                      {idx + 1}
                    </span>
                    <div className="flex-grow">
                      <p className="text-lg font-medium text-slate-800 mb-4">{q.vietnamese}</p>
                      
                      <div className="relative group">
                        <input
                          type="text"
                          disabled={showResults}
                          value={answers[q.id] || ''}
                          onChange={(e) => handleInputChange(q.id, e.target.value)}
                          placeholder="Type your English translation here..."
                          className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all font-medium ${
                            showResults
                              ? isCorrectAnswer(q)
                                ? 'bg-white border-green-500 text-green-700'
                                : 'bg-white border-red-500 text-red-700'
                              : 'bg-slate-50 border-transparent focus:border-indigo-400 focus:bg-white'
                          }`}
                        />
                        {showResults && (
                          <div className="mt-3 flex items-center gap-2">
                             {isCorrectAnswer(q) ? (
                               <span className="text-green-600 flex items-center gap-1 text-sm font-bold">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                                 Correct!
                               </span>
                             ) : (
                               <div className="flex flex-col gap-1">
                                  <span className="text-red-600 flex items-center gap-1 text-sm font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                    Incorrect
                                  </span>
                                  <p className="text-xs text-slate-500 font-medium italic">
                                    Suggested: "{q.expectedEnglish[0]}"
                                  </p>
                               </div>
                             )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!showResults && (
              <div className="flex justify-center pt-10">
                <button
                  onClick={handleSubmit}
                  className="bg-indigo-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit & Check Results
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-100">
        English Grammar Practice • Truth & Viewpoint Adverbials
      </footer>
    </div>
  );
};

export default App;
