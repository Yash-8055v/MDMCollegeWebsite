import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErpLayout from '../components/ErpLayout';

export default function OnlineAssessment() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [keyInput, setKeyInput] = useState('');
  const [error, setError] = useState('');

  const assessments = [
    { id: 1, year: '2025-26', term: 'SEM IV', course: 'Artificial Intelligence', title: 'Experiment-1', maxMarks: 10, marks: 9, status: 'Completed', date: '04 Apr 2026' },
    { id: 2, year: '2025-26', term: 'SEM IV', course: 'Artificial Intelligence', title: 'Experiment-2', maxMarks: 10, marks: 8, status: 'Completed', date: '02 Apr 2026' },
    { id: 3, year: '2025-26', term: 'SEM IV', course: 'Software Engineering', title: 'Assignment 1', maxMarks: 20, marks: '-', status: 'Pending', date: '10 Apr 2026' },
    { id: 4, year: '2025-26', term: 'SEM IV', course: 'Computer Networks', title: 'Quiz 1', maxMarks: 10, marks: 10, status: 'Completed', date: '28 Mar 2026' },
    { id: 5, year: '2025-26', term: 'SEM IV', course: 'Database Management', title: 'Mini Project Phase 1', maxMarks: 25, marks: 22, status: 'Completed', date: '15 Mar 2026' },
    { id: 6, year: '2025-26', term: 'SEM IV', course: 'Artificial Intelligence', title: 'Experiment-3', maxMarks: 10, marks: '-', status: 'Pending', date: '15 Apr 2026' },
    { id: 7, year: '2025-26', term: 'SEM IV', course: 'Software Engineering', title: 'UML Diagrams', maxMarks: 15, marks: '-', status: 'Upcoming', date: '20 Apr 2026' },
    { id: 8, year: '2025-26', term: 'SEM IV', course: 'Computer Networks', title: 'Packet Tracer Lab', maxMarks: 15, marks: 14, status: 'Completed', date: '01 Apr 2026' },
    { id: 9, year: '2025-26', term: 'SEM IV', course: 'Database Management', title: 'SQL Joins Practice', maxMarks: 10, marks: 9, status: 'Completed', date: '10 Mar 2026' },
    { id: 10, year: '2025-26', term: 'SEM IV', course: 'Operating Systems', title: 'Shell Scripting', maxMarks: 20, marks: '-', status: 'Upcoming', date: '18 Apr 2026' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Upcoming': return 'bg-blue-50 text-blue-700 border-blue-200';
      default: return 'bg-lavender-blush text-shadow-grey border-thistle';
    }
  };

  const handleStartClick = (id) => {
    setSelectedQuizId(id);
    setKeyInput('');
    setError('');
    setShowModal(true);
  };

  const handleVerify = () => {
    if (keyInput === '1234') {
      setShowModal(false);
      navigate(`/online-assessment/intro/${selectedQuizId}`);
    } else {
      setError('Invalid key. Please try again.');
    }
  };

  return (
    <ErpLayout>
      <div className="bg-white rounded-2xl border border-thistle shadow-sm overflow-hidden flex flex-col relative z-0">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-thistle flex items-center justify-between bg-lavender-blush">
          <h2 className="flex items-center gap-2 text-lg font-bold text-shadow-grey">
            <span className="material-symbols-outlined text-blue-slate">assignment</span>
            Online Assessment
          </h2>
          <div className="flex gap-2">
            <button className="text-xs font-semibold text-shadow-grey hover:text-white bg-white hover:bg-shadow-grey border border-thistle px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-[14px]">filter_list</span> Filter
            </button>
            <button className="text-xs font-semibold text-white bg-blue-slate hover:bg-shadow-grey border border-transparent px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-[14px]">download</span> Export
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-thistle text-xs font-bold text-blue-slate uppercase tracking-wider">
                <th className="px-4 py-3 text-center w-12">Sr.</th>
                <th className="px-4 py-3">Academic Year</th>
                <th className="px-4 py-3">Course</th>
                <th className="px-4 py-3">Assessment Title</th>
                <th className="px-4 py-3 text-center">Marks (Obt / Max)</th>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lavender-blush">
              {assessments.map((item, index) => (
                <tr key={item.id} className="hover:bg-thistle/20 transition-colors group">
                  <td className="px-4 py-4 text-center text-sm font-semibold text-lilac-ash">{index + 1}</td>
                  <td className="px-4 py-4">
                    <p className="text-sm font-bold text-shadow-grey">{item.year}</p>
                    <p className="text-xs text-blue-slate">{item.term}</p>
                  </td>
                  <td className="px-4 py-4 text-sm font-semibold text-shadow-grey">{item.course}</td>
                  <td className="px-4 py-4 text-sm text-shadow-grey font-medium">{item.title}</td>
                  <td className="px-4 py-4 text-center">
                    <span className="text-sm font-bold text-shadow-grey">{item.marks}</span>
                    <span className="text-xs text-lilac-ash mx-1">/</span>
                    <span className="text-sm text-blue-slate">{item.maxMarks}</span>
                  </td>
                  <td className="px-4 py-4 text-sm text-blue-slate flex items-center gap-1 mt-1.5">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span> 
                    {item.date}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    {item.status === 'Completed' ? (
                      <button className="text-blue-slate hover:text-shadow-grey p-1.5 rounded-full hover:bg-thistle transition-colors" title="View Results">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleStartClick(item.id)}
                        className="text-white bg-blue-slate hover:bg-shadow-grey px-4 py-1.5 rounded-md text-xs font-bold shadow-md transition-all flex items-center gap-1 md:mx-auto"
                      >
                        <span className="material-symbols-outlined text-[16px]">play_circle</span> Start
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Pagination */}
        <div className="px-6 py-4 border-t border-thistle bg-lavender-blush flex items-center justify-between text-sm">
          <span className="text-blue-slate font-medium">Showing 1 to {assessments.length} of {assessments.length} records</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded-md text-lilac-ash border border-thistle bg-white cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 rounded-md text-white bg-blue-slate font-medium shadow-sm">1</button>
            <button className="px-3 py-1 rounded-md text-lilac-ash border border-thistle bg-white cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>

      {/* Verification Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-shadow-grey/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl border border-thistle w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-lavender-blush px-5 py-4 border-b border-thistle flex justify-between items-center">
              <h3 className="font-bold text-shadow-grey text-lg">Student Online Assessment Key Verification</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-lilac-ash hover:text-shadow-grey transition-colors rounded-full p-1 hover:bg-thistle"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-2">
                <label className="text-sm font-semibold text-blue-slate flex items-center gap-1 whitespace-nowrap min-w-[100px]">
                  <span className="material-symbols-outlined text-[16px]">key</span> Enter your key
                </label>
                <input 
                  type="password" 
                  autoFocus
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  className="w-full flex-1 border border-thistle rounded-md px-3 py-2 text-shadow-grey focus:ring-2 focus:ring-blue-slate/20 focus:border-blue-slate outline-none"
                  placeholder="****"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleVerify();
                  }}
                />
              </div>
              {error && <p className="text-red-500 text-xs font-semibold mt-1 ml-[116px]">{error}</p>}
              
              <div className="mt-8 flex justify-end gap-3">
                <button 
                  onClick={handleVerify}
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm font-bold shadow-md transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span> Verify
                </button>
                <button 
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm font-bold shadow-md transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[18px]">cancel</span> Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </ErpLayout>
  );
}
