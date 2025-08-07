import React from 'react';

interface Position {
    x: number;
    y: number;
}

interface ConnectingLinesProps {
    positions: Position[];
    hoveredIndex: number | null;
}

export const ConnectingLines: React.FC<ConnectingLinesProps> = ({ positions, hoveredIndex }) => {
    if (positions.length < 2) return null;

    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ 
                filter: 'drop-shadow(0 0 2px rgba(45, 212, 191, 0.1))'
            }}
        >
            {positions.map((pos1, i) =>
                positions.slice(i + 1).map((pos2, j) => {
                    const isConnectedToHovered = 
                        hoveredIndex === i || 
                        hoveredIndex === i + j + 1;

                    return (
                        <line
                            key={`line-${i}-${j}`}
                            x1={pos1.x}
                            y1={pos1.y}
                            x2={pos2.x}
                            y2={pos2.y}
                            stroke={isConnectedToHovered ? 'rgb(45, 212, 191)' : 'rgba(255, 255, 255, 0.1)'}
                            strokeWidth={isConnectedToHovered ? '2' : '1'}
                            opacity={isConnectedToHovered ? '0.5' : '0.2'}
                        />
                    );
                })
            )}
        </svg>
    );
};