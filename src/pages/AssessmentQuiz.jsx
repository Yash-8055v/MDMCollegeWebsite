import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ErpLayout from '../components/ErpLayout';

const mockQuestions = [
  {
    id: 1,
    text: "A TM is designed to remove all 0s from a binary string. Identify which design approach is suitable?",
    options: [
      "Replace all 1s",
      "Reverse string",
      "Count number of 0s",
      "Replace 0 with blank and shift left",
    ]
  },
  {
    id: 2,
    text: "Which of the following is an example of a finite state machine without output?",
    options: [
      "Moore Machine",
      "Mealy Machine",
      "Turing Machine",
      "DFA"
    ]
  },
  {
    id: 3,
    text: "Context-free languages are closed under which of the following operations?",
    options: [
      "Union",
      "Intersection",
      "Complementation",
      "None of the above"
    ]
  },
  {
    id: 4,
    text: "Which class of languages is accepted by a pushdown automaton?",
    options: [
      "Regular languages",
      "Context-free languages",
      "Context-sensitive languages",
      "Recursively enumerable languages"
    ]
  },
  {
    id: 5,
    text: "Is the halting problem for Turing machines decidable?",
    options: [
      "Yes, always",
      "No, never",
      "Only for specific inputs",
      "Depends on the machine state"
    ]
  }
];

export default function AssessmentQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [statuses, setStatuses] = useState(Array(mockQuestions.length).fill('pending')); // 'pending' | 'saved' | 'marked'
  const [timeLeft, setTimeLeft] = useState(29 * 60 + 55); // 29m:55s

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m:${s < 10 ? '0' : ''}${s}s`;
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'saved': return 'bg-green-500 text-white';
      case 'marked': return 'bg-yellow-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  const currentQ = mockQuestions[currentIndex];

  const handleOptionSelect = (optIndex) => {
    setSelectedOptions({ ...selectedOptions, [currentIndex]: optIndex });
  };

  const handleSaveAndNext = () => {
    const newStatuses = [...statuses];
    newStatuses[currentIndex] = selectedOptions[currentIndex] !== undefined ? 'saved' : 'pending';
    setStatuses(newStatuses);
    if (currentIndex < mockQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleMarkForReview = () => {
    const newStatuses = [...statuses];
    newStatuses[currentIndex] = 'marked';
    setStatuses(newStatuses);
    if (currentIndex < mockQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const EndTest = () => {
    setShowCompletionModal(true);
  };

  return (
    <ErpLayout>
      <div className="bg-white rounded-2xl border border-thistle shadow-sm overflow-hidden min-h-[500px] flex flex-col">
        {/* Header Title */}
        <div className="bg-lavender-blush px-4 sm:px-6 py-4 border-b border-thistle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-blue-slate uppercase tracking-wider flex items-center gap-2 flex-wrap">
            ACADEMIC FUNCTIONS <span className="material-symbols-outlined text-[16px]">double_arrow</span> ONLINE ASSESSMENT
          </h2>
          <div className="text-left sm:text-right">
            <p className="text-xs sm:text-sm font-bold text-shadow-grey uppercase">APR 06, 2026 11:44:56 PM</p>
            <span className="inline-block mt-1 bg-shadow-grey text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-md font-semibold">Current Online Assessment</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-6 md:p-8 gap-8 flex-1">
          
          {/* Left Panel - Question Palette */}
          <div className="md:w-1/4 flex flex-col gap-6">
            <div className="border border-thistle rounded-lg overflow-hidden flex flex-col bg-white">
              <div className="w-full bg-blue-slate text-white text-center py-2 font-bold text-sm">
                Online Assessment Overview
              </div>
              <div className="p-4 bg-[#f8f5e6]">
                <div className="grid grid-cols-4 gap-3">
                  {mockQuestions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-10 h-10 flex text-sm items-center justify-center rounded-md font-bold transition-all shadow-sm
                        ${getStatusColor(statuses[idx])} 
                        ${currentIndex === idx ? 'ring-2 ring-shadow-grey ring-offset-2' : 'hover:opacity-80'}
                      `}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="bg-[#f8f5e6] p-4 rounded-lg flex flex-col gap-3 border border-thistle">
               <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500 shadow-sm"></div>
                  <span className="text-sm font-bold text-shadow-grey">Pending Questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-green-500 shadow-sm"></div>
                  <span className="text-sm font-bold text-shadow-grey">Saved Questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-yellow-500 shadow-sm"></div>
                  <span className="text-sm font-bold text-shadow-grey">Mark for Review Questions</span>
                </div>
            </div>
          </div>

          {/* Right Panel - Quiz Details */}
          <div className="md:w-3/4 flex flex-col border border-thistle rounded-lg overflow-hidden bg-white shadow-sm">
            
            {/* Quiz Header Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white border-b border-thistle px-4 py-3 gap-3">
               <div className="flex w-full sm:w-auto justify-between sm:justify-start items-center gap-2">
                 <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-inner shrink-0">
                   <span className="material-symbols-outlined text-[18px]">timer</span>
                   {formatTime(timeLeft)}
                 </div>
                 <div className="bg-blue-slate text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase cursor-pointer hover:bg-shadow-grey transition-colors shrink-0">
                   Instructions
                 </div>
               </div>
               <div className="flex gap-2 w-full sm:w-auto overflow-x-auto hide-scrollbar pb-1 sm:pb-0 justify-start sm:justify-end">
                 <div className="flex items-center gap-1 bg-blue-slate text-white px-3 py-1 rounded-full font-bold text-xs shrink-0">
                   <span className="material-symbols-outlined text-[14px]">flag</span>
                   Marks: 1
                 </div>
                 <div className="flex items-center bg-blue-50/50 text-blue-slate border border-blue-200 rounded divide-x divide-blue-200 font-bold overflow-hidden cursor-pointer shrink-0">
                   <span className="px-2 py-0.5 hover:bg-blue-100 transition-colors">A+</span>
                   <span className="px-2 py-0.5 hover:bg-blue-100 transition-colors">A-</span>
                 </div>
               </div>
            </div>

            {/* Question Text */}
            <div className="p-6 bg-white min-h-[350px] flex flex-col">
               <div className="flex items-start gap-4 mb-6">
                 <div className="bg-blue-slate text-white px-3 py-1 rounded-full font-bold text-xs whitespace-nowrap flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">help</span>
                    Question {currentIndex + 1} of {mockQuestions.length}
                 </div>
                 <p className="text-shadow-grey font-semibold text-lg leading-snug">{currentQ.text}</p>
               </div>

               {/* Options Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {currentQ.options.map((opt, optIndex) => (
                    <div 
                      key={optIndex}
                      onClick={() => handleOptionSelect(optIndex)}
                      className={`
                        p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-3
                        ${selectedOptions[currentIndex] === optIndex 
                          ? 'border-blue-slate bg-blue-50 shadow-sm' 
                          : 'border-thistle hover:border-blue-slate bg-white'}
                      `}
                    >
                      <div className={`
                        w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-0.5 border-2 transition-colors
                        ${selectedOptions[currentIndex] === optIndex ? 'border-blue-slate bg-blue-slate text-white' : 'border-lilac-ash text-transparent hover:border-blue-slate'}
                      `}>
                         <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                      </div>
                      <div>
                        <span className="inline-block bg-shadow-grey text-white text-[11px] font-bold px-2 py-0.5 rounded-full mb-1">
                          Option {optIndex + 1}
                        </span>
                        <p className={`font-semibold ${selectedOptions[currentIndex] === optIndex ? 'text-shadow-grey' : 'text-blue-slate'}`}>
                          {opt}
                        </p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Action Bar */}
            <div className="bg-lavender-blush px-4 sm:px-6 py-4 border-t border-thistle flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 w-full lg:w-auto">
                  <button 
                    onClick={handleSaveAndNext}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto"
                  >
                    <span className="material-symbols-outlined text-[18px]">done_outline</span> Save & Next
                  </button>
                  <button 
                    onClick={handleMarkForReview}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto"
                  >
                    <span className="material-symbols-outlined text-[18px]">push_pin</span> Save & Mark for review
                  </button>
                  <button 
                     onClick={() => {
                        const newOpts = {...selectedOptions};
                        delete newOpts[currentIndex];
                        setSelectedOptions(newOpts);
                     }}
                    className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto"
                  >
                     <span className="material-symbols-outlined text-[18px]">backspace</span> Clear Response
                  </button>
                </div>
                
                <button 
                  onClick={EndTest}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-1.5 w-full lg:w-auto mt-2 lg:mt-0"
                >
                  <span className="material-symbols-outlined text-[18px]">stop_circle</span> End Test
                </button>
            </div>

          </div>

        </div>
      </div>

      {/* Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-shadow-grey/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl border border-thistle w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 border-4 border-green-50">
                 <span className="material-symbols-outlined text-3xl font-bold">check</span>
               </div>
               <h3 className="font-bold text-shadow-grey text-lg mb-2">Online Assessment completed successfully.</h3>
               <p className="text-sm text-blue-slate mb-6">Your answers have been submitted.</p>
               
               <button 
                 onClick={() => navigate(`/online-assessment/result/${id}`)}
                 className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-bold shadow-md shadow-green-500/20 transition-all active:scale-95"
               >
                 OK
               </button>
            </div>
          </div>
        </div>
      )}

    </ErpLayout>
  );
}
