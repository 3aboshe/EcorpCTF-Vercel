
import React from 'react';
import { Link } from 'react-router-dom';
import { DEV_HEADING, DEV_NOTES } from '../constants';

const Dev: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-100 font-sans text-gray-900">
        <div className="flex justify-center p-4 md:p-8">
            <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg mt-8">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h1 className="text-2xl font-bold text-gray-800">{DEV_HEADING}</h1>
                    <Link to="/dashboard" className="text-sm text-blue-600 hover:underline">← Back to Dashboard</Link>
                </div>
                <div className="space-y-6">
                    {DEV_NOTES.map((note, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h2 className="font-semibold text-gray-700">{note.title}</h2>
                            <p className="text-gray-600 text-sm mt-1 whitespace-pre-wrap">{note.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dev;
