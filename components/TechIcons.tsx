import React from 'react';
import { 
    FaJava, 
    FaReact, 
    FaNodeJs, 
    FaFigma, 
    FaHtml5, 
    FaCss3Alt, 
    FaBootstrap, 
    FaPython, 
    FaPhp, 
    FaLaravel,
    FaDatabase // A generic icon for SQL
} from 'react-icons/fa';
import { 
    SiJavascript, 
    SiTypescript, 
    SiNextdotjs, 
    SiTailwindcss, 
    SiFirebase, 
    SiMongodb 
} from 'react-icons/si';

// Define common styles for all icons for consistency
// You can adjust colors here to match your design system
const iconStyle = "w-8 h-8"; // Color will be inherited from parent hover state

// --- Frontend Icons ---
export const HtmlIcon = () => <FaHtml5 className={iconStyle} />;
export const CssIcon = () => <FaCss3Alt className={iconStyle} />;
export const JavaScriptIcon = () => <SiJavascript className={iconStyle} />;
export const TypeScriptIcon = () => <SiTypescript className={iconStyle} />;
export const ReactIcon = () => <FaReact className={iconStyle} />;
export const NextjsIcon = () => <SiNextdotjs className={iconStyle} />;
export const TailwindCssIcon = () => <SiTailwindcss className={iconStyle} />;
export const BootstrapIcon = () => <FaBootstrap className={iconStyle} />;
export const FigmaIcon = () => <FaFigma className={iconStyle} />; // Kept for potential use

// --- Backend Icons ---
export const NodejsIcon = () => <FaNodeJs className={iconStyle} />;
export const PythonIcon = () => <FaPython className={iconStyle} />;
export const JavaIcon = () => <FaJava className={iconStyle} />;
export const PhpIcon = () => <FaPhp className={iconStyle} />;
export const LaravelIcon = () => <FaLaravel className={iconStyle} />;
export const SqlIcon = () => <FaDatabase className={iconStyle} />;
export const FirebaseIcon = () => <SiFirebase className={iconStyle} />;
export const MongoDbIcon = () => <SiMongodb className={iconStyle} />;