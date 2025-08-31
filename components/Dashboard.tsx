
import React from 'react';
import { Link } from 'react-router-dom';
import { DASHBOARD_HEADING, DASHBOARD_ADMIN_TITLE, DASHBOARD_ADMIN_DESC, DASHBOARD_DEV_TITLE, DASHBOARD_DEV_DESC } from '../constants';

const EcorpLogo: React.FC = () => (
    <div className="flex justify-center mb-6">
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
        <path d="M18 6H9C7.34315 6 6 7.34315 6 9V15C6 16.6569 7.34315 18 9 18H18V15H9V12H16V9H9V6H18Z" fill="currentColor"/>
      </svg>
    </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-100 font-sans text-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl text-center">
            <EcorpLogo />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{DASHBOARD_HEADING}</h1>
            <p className="text-gray-500 mb-10">Select a portal to continue.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <Link to="/admin" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow text-left">
                    <h2 className="text-xl font-semibold text-blue-700">{DASHBOARD_ADMIN_TITLE}</h2>
                    <p className="text-gray-600 mt-2">{DASHBOARD_ADMIN_DESC}</p>
                </Link>
                 <Link to="/dev" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow text-left">
                    <h2 className="text-xl font-semibold text-blue-700">{DASHBOARD_DEV_TITLE}</h2>
                    <p className="text-gray-600 mt-2">{DASHBOARD_DEV_DESC}</p>
                </Link>
            </div>
        </div>
         <footer className="text-center text-gray-500 text-xs mt-12">
          &copy; {new Date().getFullYear()} E Corp. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
