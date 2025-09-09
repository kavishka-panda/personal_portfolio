import React from 'react';

const getCircuitPathD = (startPos, endPos, index) => {
    // ... (This function remains unchanged)
    const midX = startPos.x + (endPos.x - startPos.x) / 2;
    const midY = startPos.y + (endPos.y - startPos.y) / 2;
    const style = index % 4;
    switch (style) {
        case 0: return `M${startPos.x},${startPos.y} L${midX},${startPos.y} L${midX},${endPos.y} L${endPos.x},${endPos.y}`;
        case 1: return `M${startPos.x},${startPos.y} L${startPos.x},${midY} L${endPos.x},${midY} L${endPos.x},${endPos.y}`;
        case 2: return `M${startPos.x},${startPos.y} L${endPos.x},${startPos.y} L${endPos.x},${endPos.y}`;
        case 3: return `M${startPos.x},${startPos.y} L${startPos.x},${endPos.y} L${endPos.x},${endPos.y}`;
        default: return `M${startPos.x},${startPos.y} L${endPos.x},${endPos.y}`;
    }
};

// Accept 'staticColor' for the background wire
export const ConnectingLines = ({ positions, color, glowColor, staticColor }) => {
    if (positions.length < 2) return null;

    // Default the static color if not provided
    const finalStaticColor = staticColor || 'rgba(255, 255, 255, 0.07)';

    return (
        <>
            <style>
                {`
                    @keyframes flow {
                        from { stroke-dashoffset: 200; }
                        to { stroke-dashoffset: 0; }
                    }
                `}
            </style>
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    filter: `drop-shadow(0 0 2px ${glowColor}) drop-shadow(0 0 5px ${glowColor}) drop-shadow(0 0 10px ${glowColor})`
                }}
            >
                {positions.map((pos1, i) =>
                    positions.slice(i + 1).map((pos2, j) => {
                        const uniqueKey = `line-${i}-${i + j + 1}`;
                        const pathD = getCircuitPathD(pos1, pos2, i + j);
                        const duration = Math.random() * 5 + 5;

                        return (
                            <g key={uniqueKey}>
                                {/* The static background "wire" now uses the dynamic staticColor prop */}
                                <path
                                    d={pathD}
                                    stroke={finalStaticColor}
                                    strokeWidth="1"
                                    fill="none"
                                />
                                {/* The animated "current" */}
                                <path
                                    d={pathD}
                                    stroke={color}
                                    strokeWidth="1.5"
                                    fill="none"
                                    strokeDasharray="20 180"
                                    style={{
                                        animation: `flow ${duration}s linear infinite`,
                                    }}
                                />
                            </g>
                        );
                    })
                )}
            </svg>
        </>
    );
};