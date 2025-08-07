import React from 'react';
import { FaJava, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

// Define common styles for all icons for consistency
const iconStyle = "w-8 h-8 text-teal-400";

// Export each icon directly as a functional component
export const JavaScriptIcon = () => <SiJavascript className={iconStyle} />;
export const TypeScriptIcon = () => <SiTypescript className={iconStyle} />;
export const ReactIcon = () => <FaReact className={iconStyle} />;
export const NextjsIcon = () => <SiNextdotjs className={iconStyle} />;
export const NodejsIcon = () => <FaNodeJs className={iconStyle} />;
export const TailwindCssIcon = () => <SiTailwindcss className={iconStyle} />;
export const JavaIcon = () => <FaJava className={iconStyle} />;
export const FigmaIcon = () => <FaFigma className={iconStyle} />;