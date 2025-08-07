
import React from 'react';

type IconProps = {
  className?: string;
};

export const BehanceIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M8.56 11.23h5.88c.44 0 .66-1.03.3-1.39-1.29-1.29-3.35-1.29-4.64 0-.36.36-.14 1.39.3 1.39zM12 2a10 10 0 100 20 10 10 0 000-20z"/>
    <path d="M15.44 14.33h-5.22c-1.8 0-2.42-1.8-1.2-2.81a3.81 3.81 0 015.42 0c1.22 1.01.6 2.81-1.2 2.81zM15.11 8.51H8.89"/>
  </svg>
);

export const DribbbleIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 4.1-14.14 0" />
    </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const WebflowIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 114 31.8"
        className={className}
    >
        <path d="M81.5 13.3c0-4.6-2-7.2-5.9-7.2s-5.9 2.6-5.9 7.2v11.3c0 4.6 2 7.2 5.9 7.2s5.9-2.6 5.9-7.2V13.3zm-7.6 11.3c0-2.6.9-4.1 1.7-4.1s1.7 1.5 1.7 4.1v3.2c0 2.6-.9 4.1-1.7 4.1s-1.7-1.5-1.7-4.1v-3.2zM98.9 13.3c0-4.6-2-7.2-5.9-7.2s-5.9 2.6-5.9 7.2v11.3c0 4.6 2 7.2 5.9 7.2s5.9-2.6 5.9-7.2V13.3zm-7.6 11.3c0-2.6.9-4.1 1.7-4.1s1.7 1.5 1.7 4.1v3.2c0 2.6-.9 4.1-1.7 4.1s-1.7-1.5-1.7-4.1v-3.2zM27.2 24.6V7.4h4.3v17.2h-4.3zM45.6 24.6l-5-7.7h-.1v7.7h-4.3V7.4h4.3l5 7.7h.1V7.4h4.3v17.2h-4.3zM58.7 7.4h4.3v17.2h-4.3V7.4zM0 15.9c0-8.8 7.1-15.9 15.9-15.9s15.9 7.1 15.9 15.9-7.1 15.9-15.9 15.9S0 24.7 0 15.9zm27.5 0c0-6.4-5.2-11.6-11.6-11.6S4.3 9.5 4.3 15.9s5.2 11.6 11.6 11.6 11.6-5.2 11.6-11.6zM114 24.6V7.4h3.6v17.2h-3.6z"></path>
    </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor"
    className={className}
  >
    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
  </svg>
);
