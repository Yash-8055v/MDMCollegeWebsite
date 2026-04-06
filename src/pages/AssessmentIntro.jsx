import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ErpLayout from '../components/ErpLayout';

export default function AssessmentIntro() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <ErpLayout>
      <div className="bg-white rounded-2xl border border-thistle shadow-sm overflow-hidden min-h-[500px] flex flex-col">
        {/* Header Title */}
        <div className="bg-lavender-blush px-6 py-4 border-b border-thistle flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-slate uppercase tracking-wider flex items-center gap-2">
            ACADEMIC FUNCTIONS <span className="material-symbols-outlined text-[16px]">double_arrow</span> ONLINE ASSESSMENT
          </h2>
          <div className="text-right">
            <p className="text-sm font-bold text-shadow-grey uppercase">APR 06, 2026 11:41:20 PM</p>
            <span className="inline-block mt-1 bg-shadow-grey text-white text-xs px-3 py-1 rounded-md font-semibold">Current Online Assessment</span>
          </div>
        </div>

        {/* Content container */}
        <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10 flex-1">
          
          {/* Left panel - Overview & Start Button */}
          <div className="md:w-1/3 flex flex-col gap-8 items-center">
            <div className="w-full bg-blue-slate text-white text-center py-2 rounded-md font-bold shadow-md">
              Online Assessment Overview
            </div>

            <button 
              onClick={() => navigate(`/online-assessment/quiz/${id}`)}
              className="w-56 h-56 rounded-full border-4 border-green-500 flex flex-col items-center justify-center text-center transition-all hover:scale-105 hover:bg-green-50 shadow-lg group relative overflow-hidden focus:outline-none"
            >
               <div className="absolute inset-0 bg-green-500/10 scale-0 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
               <span className="text-2xl font-black text-shadow-grey mb-1 z-10 block">START</span>
               <span className="text-sm font-semibold text-blue-slate z-10 block">Online Assessment</span>
            </button>
          </div>

          {/* Right panel - Instructions & Legend */}
          <div className="md:w-2/3 border-2 border-lavender-blush rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">
            <div className="w-full bg-blue-slate text-white text-center py-2 font-bold flex-shrink-0">
              Online Assessment
            </div>
            
            <div className="p-6 bg-blue-slate/5 border-b border-lavender-blush">
              <h3 className="font-bold text-shadow-grey flex items-center gap-2 mb-2 text-sm">
                <span className="material-symbols-outlined text-blue-slate text-[18px]">info</span>
                Instructions :
              </h3>
              <p className="text-sm font-semibold text-blue-slate ml-6 mb-6">Attempt all Questions.</p>

              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-blue-400 border border-blue-500 shadow-sm"></div>
                  <span className="text-sm font-bold text-shadow-grey">Pending Questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-green-400 border border-green-500 shadow-sm"></div>
                  <span className="text-sm font-bold text-shadow-grey">Saved Questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-yellow-400 border border-yellow-500 shadow-sm"></div>
                  <span className="text-sm font-bold text-shadow-grey">Marked for Review Questions</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white"></div>
          </div>

        </div>
      </div>
    </ErpLayout>
  );
}
