import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ErpLayout from '../components/ErpLayout';

export default function AssessmentResult() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock answers data achieving 5/5
  const mockResults = [
    {
      id: 1,
      text: "A TM is designed to remove all 0s from a binary string. Identify which design approach is suitable?",
      status: "Correct",
      marks: 1,
      maxMarks: 1
    },
    {
      id: 2,
      text: "Which of the following is an example of a finite state machine without output?",
      status: "Correct",
      marks: 1,
      maxMarks: 1
    },
    {
      id: 3,
      text: "Context-free languages are closed under which of the following operations?",
      status: "Correct",
      marks: 1,
      maxMarks: 1
    },
    {
      id: 4,
      text: "Which class of languages is accepted by a pushdown automaton?",
      status: "Correct",
      marks: 1,
      maxMarks: 1
    },
    {
      id: 5,
      text: "Is the halting problem for Turing machines decidable?",
      status: "Correct",
      marks: 1,
      maxMarks: 1
    }
  ];

  return (
    <ErpLayout>
      <div className="bg-[#f8f9fc] rounded-2xl border border-thistle shadow-sm overflow-hidden flex flex-col font-jakarta">
        
        {/* Header Title */}
        <div className="bg-white px-4 sm:px-6 py-4 border-b border-thistle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-shadow-grey uppercase tracking-wider flex items-center gap-2 flex-wrap">
            ACADEMIC FUNCTIONS <span className="material-symbols-outlined text-[16px]">double_arrow</span> ONLINE ASSESSMENT
          </h2>
          <div className="text-left sm:text-right">
            <p className="text-xs sm:text-sm font-bold text-shadow-grey uppercase">APR 06, 2026 11:48:20 PM</p>
            <span className="inline-block mt-1 bg-shadow-grey text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-md font-semibold">Current Online Assessment</span>
          </div>
        </div>

        {/* Outer Banner */}
        <div className="bg-blue-slate text-white text-center py-2 font-bold uppercase text-sm tracking-widest shadow-sm">
           <span className="material-symbols-outlined align-middle mr-2 text-[18px]">assessment</span>
           QUIZ RESULT DETAILS
        </div>

        <div className="p-4 md:p-6 space-y-6">
          
          {/* Top Panel - Summaries & Charts */}
          <div className="bg-white border border-thistle rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
             
             {/* Text Summaries */}
             <div className="md:col-span-3 flex flex-col gap-6">
                
                {/* Marks Summary */}
                <div className="border border-thistle rounded-md overflow-hidden text-sm">
                  <div className="bg-blue-slate text-white font-bold py-1.5 px-3 text-center border-b border-thistle">Marks Summary</div>
                  <div className="flex justify-between items-center px-4 py-2 border-b border-lavender-blush">
                    <span className="text-blue-slate font-semibold">Total Marks</span><span className="font-bold text-shadow-grey">5</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-2 border-b border-lavender-blush">
                    <span className="text-blue-slate font-semibold">Passing Marks</span><span className="font-bold text-shadow-grey">2</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-2 bg-blue-50/50">
                    <span className="text-blue-slate font-semibold">Obtained Marks</span><span className="font-bold text-green-600">5</span>
                  </div>
                </div>

                {/* Questions Summary */}
                <div className="border border-thistle rounded-md overflow-hidden text-sm">
                  <div className="bg-blue-slate text-white font-bold py-1.5 px-3 text-center border-b border-thistle">Questions Summary</div>
                  <div className="flex justify-between items-center px-4 py-1.5 border-b border-lavender-blush">
                    <span className="text-blue-slate font-semibold">Total Questions</span><span className="font-bold text-shadow-grey">5</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-1.5 border-b border-lavender-blush bg-blue-50/50">
                    <span className="text-blue-slate font-semibold">Attempted</span><span className="font-bold text-blue-600">5</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-1.5 border-b border-lavender-blush">
                    <span className="text-blue-slate font-semibold">Not Attempted</span><span className="font-bold text-shadow-grey">0</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-1.5 border-b border-lavender-blush">
                    <span className="text-blue-slate font-semibold">Wrong Answers</span><span className="font-bold text-red-600">0</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-1.5 border-b border-lavender-blush bg-green-50/50">
                    <span className="text-blue-slate font-semibold">True Answers</span><span className="font-bold text-green-600">5</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-1.5">
                    <span className="text-blue-slate font-semibold">Evaluation Pending</span><span className="font-bold text-shadow-grey">0</span>
                  </div>
                </div>

             </div>

             {/* Charts Area */}
             <div className="md:col-span-9 flex flex-col md:flex-row justify-around items-center border border-lavender-blush rounded-xl bg-[#f8f9fc] p-6 gap-8">
                
                {/* Attempt Chart */}
                <div className="flex flex-col items-center gap-6">
                  <h4 className="font-bold text-shadow-grey">Questions Summary</h4>
                  {/* CSS Pie Chart: 100% blue */}
                  <div 
                    className="w-48 h-48 rounded-full shadow-md border-4 border-white transform transition-transform hover:scale-105"
                    style={{ background: 'conic-gradient(#3b82f6 100%, transparent 0)' }}
                  >
                    {/* Inner styling if you want a donut, but user image shows pie */}
                  </div>
                  <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full border border-thistle shadow-sm text-xs font-semibold">
                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 inline-block border border-blue-600"></span> Attempted Questions 5</div>
                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 inline-block border border-red-600"></span> Not Attempted 0</div>
                  </div>
                </div>

                {/* Score Chart */}
                <div className="flex flex-col items-center gap-6">
                  <h4 className="font-bold text-shadow-grey">Questions Summary</h4>
                  {/* CSS Pie Chart: 100% correct (blue in user image, but I'll use blue slate to match theme, actually user image uses blue for both) */}
                  <div 
                    className="w-48 h-48 rounded-full shadow-md border-4 border-white transform transition-transform hover:scale-105"
                    style={{ background: 'conic-gradient(#3b82f6 100%, transparent 0)' }}
                  ></div>
                  <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-thistle shadow-sm text-[11px] font-semibold flex-wrap justify-center">
                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 inline-block border border-blue-600"></span> Correct Answers 5</div>
                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 inline-block border border-red-600"></span> Wrong Answers 0</div>
                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-400 inline-block border border-yellow-500"></span> Evaluation Pending 0</div>
                  </div>
                </div>

             </div>
          </div>

          {/* Answer Legend */}
          <div className="bg-yellow-50/50 border border-yellow-200 rounded-md p-3 flex items-center flex-wrap gap-4 text-sm font-semibold">
            <span className="material-symbols-outlined text-yellow-600 text-[18px]">warning</span>
            <div className="flex items-center gap-1 shrink-0">
               <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span> Attended
            </div>
            <div className="flex items-center gap-1 shrink-0">
               <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span> Not Attended
            </div>
          </div>

          {/* Answer Sheet Table */}
          <div className="bg-white border border-thistle rounded-xl shadow-sm overflow-hidden">
             <div className="bg-blue-slate text-white text-center py-2 font-bold uppercase text-sm tracking-widest border-b border-thistle">
                Answer Sheet
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="bg-[#f8f9fc] border-b border-thistle text-xs font-bold text-shadow-grey">
                    <tr>
                      <th className="px-4 py-3 w-16 text-center">Sr.No.</th>
                      <th className="px-4 py-3">Question</th>
                      <th className="px-4 py-3 text-center">Status</th>
                      <th className="px-4 py-3 text-center">Marks</th>
                      <th className="px-4 py-3 text-center">Marks out of</th>
                      <th className="px-4 py-3 text-center">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-lavender-blush text-sm">
                     {mockResults.map((res, i) => (
                       <tr key={res.id} className="hover:bg-blue-50/30 transition-colors">
                         <td className="px-4 py-4 text-center font-bold text-lilac-ash">{i + 1}</td>
                         <td className="px-4 py-4 text-blue-slate pr-10">{res.text}</td>
                         <td className="px-4 py-4 text-center">
                            <span className="w-3 h-3 bg-green-500 rounded-full inline-block shadow-sm"></span>
                         </td>
                         <td className="px-4 py-4 text-center font-bold text-green-600">{res.marks}</td>
                         <td className="px-4 py-4 text-center text-shadow-grey font-semibold">{res.maxMarks}</td>
                         <td className="px-4 py-4 text-center">
                            <button className="text-blue-slate hover:text-shadow-grey bg-lavender-blush p-1.5 rounded hover:bg-thistle transition-colors">
                               <span className="material-symbols-outlined text-[18px]">edit</span>
                            </button>
                         </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
             </div>
          </div>

          <div className="flex justify-end pt-4">
            <button 
              onClick={() => navigate('/online-assessment')}
              className="bg-shadow-grey hover:bg-blue-slate text-white px-6 py-2 rounded-md font-bold shadow-md transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Assessments
            </button>
          </div>

        </div>
      </div>
    </ErpLayout>
  );
}
