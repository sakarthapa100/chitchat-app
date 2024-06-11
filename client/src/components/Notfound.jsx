import React from 'react';

export default function Widget() {
  const isDarkMode = true; 

  return (
    <div>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            height: 100%;
            font-family: Arial, sans-serif;
          }

          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f4f4f5;
          }

          .container.dark {
            background-color: #262626;
          }

          .container img {
            margin-bottom: 2rem;
          }

          .container h1 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #1a202c;
            margin-bottom: 1rem;
          }

          .container.dark h1 {
            color: #e5e7eb;
          }

          .container p {
            font-size: 1.125rem;
            color: #4a5568;
          }

          .container.dark p {
            color: #d1d5db;
          }

          @media (min-width: 768px) {
            .container h1 {
              font-size: 3rem;
            }
            
            .container p {
              font-size: 1.25rem;
            }
          }
        `}
      </style>

      <div className={`container ${isDarkMode ? 'dark' : ''}`}>
      
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
      </div>
    </div>
  );
}