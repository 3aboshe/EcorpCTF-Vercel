
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_HEADING, LOGIN_USERNAME_LABEL, LOGIN_PASSWORD_LABEL, LOGIN_BUTTON } from '../constants';

// A generic, corporate-style 'E' logo to replace the placeholder image.
const EcorpLogo: React.FC = () => (
  <div className="flex justify-center mb-4">
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-600"
    >
      <path
        d="M18 6H9C7.34315 6 6 7.34315 6 9V15C6 16.6569 7.34315 18 9 18H18V15H9V12H16V9H9V6H18Z"
        fill="currentColor"
      />
    </svg>
  </div>
);


const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    // Client-side authentication check (for CTF purposes)
    if (username === 'tyrellw' && password === '3r@s3_UrS3lf!') {
      navigate('/$2a$12$KJywhIRpfbNU5V26wXaz7');
    } else {
      alert('Authentication failed. Please check your credentials.');
    }
  };

  return (
    // This full-screen wrapper completely overrides the global dark/mono theme
    // to create a distinct corporate feel for this page only.
    <div className="fixed inset-0 bg-gray-100 font-sans text-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
          <EcorpLogo />
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">{LOGIN_HEADING}</h2>
          <p className="text-center text-gray-500 mb-6 text-sm">Please sign in to continue.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="username" className="block text-left mb-1 text-sm font-medium text-gray-700">{LOGIN_USERNAME_LABEL}</label>
              <input
                id="username"
                name="username"
                type="text"
                className="w-full bg-white border border-gray-300 text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                placeholder="e.g., elliot.alderson"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-left mb-1 text-sm font-medium text-gray-700">{LOGIN_PASSWORD_LABEL}</label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full bg-white border border-gray-300 text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 border-transparent text-white py-3 mt-4 text-base font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
              {LOGIN_BUTTON}
            </button>
          </form>
        </div>
        <footer className="text-center text-gray-500 text-xs mt-8">
          &copy; {new Date().getFullYear()} E Corp. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Login;
