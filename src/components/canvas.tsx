import { useRef, useEffect } from "react";
import { useMantineTheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

const Canvas = () => {
    const theme = useMantineTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasPercentage = 0.65;
    const [shape, setShape] = useLocalStorage<number>({ key: 'canvas-shape', defaultValue: 1 });
    const [averageSize, setAverageSize] = useLocalStorage<number>({ key: 'canvas-size', defaultValue: 30 });
    const [maxSpeed, setMaxSpeed] = useLocalStorage<number>({ key: 'canvas-speed', defaultValue: 1 });
    const [maxRotationSpeed, setMaxRotationSpeed] = useLocalStorage<number>({ key: 'canvas-rotation-speed', defaultValue: 0.01 });
    const [numberOfSquares, setNumberOfSquares] = useLocalStorage<number>({ key: 'canvas-object-number', defaultValue: 150 });
    const sizeChange = 40;

    useEffect(() => {
        const squareColour = theme.colorScheme === 'dark' ? "white" : "gray";
        const canvasColour = theme.colorScheme === 'dark' ? "gray" : "white";

        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext("2d");
            canvas.style.backgroundColor = canvasColour;

            const squares = Array.from({ length: numberOfSquares }).map(() => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: averageSize + Math.random() * sizeChange - sizeChange / 2,
                dx: (Math.random() - 0.5) * maxSpeed,
                dy: (Math.random() - 0.5) * maxSpeed,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * maxRotationSpeed,
            }));

            const draw = () => {
                if (context) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    squares.forEach((square) => {
                        context.save();
                        context.translate(square.x + square.size / 2, square.y + square.size / 2);
                        context.rotate(square.rotation);
                        context.strokeStyle = squareColour;
                        switch (shape) {
                            case 1:
                                // Draw circle
                                context.beginPath();
                                context.arc(0, 0, square.size / 2, 0, Math.PI * 2);
                                context.stroke();
                                break;
                            case 2:
                                // Draw triangle
                                context.beginPath();
                                context.moveTo(-square.size / 2, square.size / 2);
                                context.lineTo(square.size / 2, square.size / 2);
                                context.lineTo(0, -square.size / 2);
                                context.closePath();
                                context.stroke();
                                break;
                            case 3:
                                // Draw square
                                context.strokeRect(
                                    -square.size / 2,
                                    -square.size / 2,
                                    square.size,
                                    square.size
                                );
                                break;
                            case 4:
                                // Draw star
                                context.beginPath();
                                context.moveTo(0, -square.size / 2);
                                context.lineTo(square.size / 3, square.size / 2);
                                context.lineTo(-square.size / 2, -square.size / 6);
                                context.lineTo(square.size / 2, -square.size / 6);
                                context.lineTo(-square.size / 3, square.size / 2);
                                context.closePath();
                                context.stroke();
                                break;
                            case 5:
                                // Draw heart
                                const curveOffset = square.size / 4;
                                const topCurveHeight = square.size / 2 - curveOffset;
                                const bottomCurveHeight = square.size / 2;

                                context.beginPath();
                                context.moveTo(0, -topCurveHeight);
                                context.bezierCurveTo(
                                    curveOffset,
                                    -topCurveHeight,
                                    square.size / 2,
                                    -curveOffset,
                                    square.size / 2,
                                    0
                                );
                                context.bezierCurveTo(
                                    square.size / 2,
                                    curveOffset,
                                    curveOffset,
                                    topCurveHeight,
                                    0,
                                    bottomCurveHeight
                                );
                                context.bezierCurveTo(
                                    -curveOffset,
                                    topCurveHeight,
                                    -square.size / 2,
                                    curveOffset,
                                    -square.size / 2,
                                    0
                                );
                                context.bezierCurveTo(
                                    -square.size / 2,
                                    -curveOffset,
                                    -curveOffset,
                                    -topCurveHeight,
                                    0,
                                    -topCurveHeight
                                );
                                context.closePath();
                                context.stroke();
                                break;
                            default:
                                console.error("Invalid shape");
                                break;
                        }
                        context.restore();
                    });
                }
            };

            const update = () => {
                canvas.style.backgroundColor = theme.colorScheme === 'dark' ? "black" : "white"
                squares.forEach((square) => {
                    if (square.x < 0 || square.x > canvas.width - square.size) {
                        square.dx *= -1;
                    }
                    if (square.y < 0 || square.y > canvas.height - square.size) {
                        square.dy *= -1;
                    }
                    square.x += square.dx;
                    square.y += square.dy;
                    square.rotation += square.rotationSpeed;
                });
            };

            const loop = () => {
                draw();
                update();
                requestAnimationFrame(loop);
            };

            loop();
        }
    }, [theme.colorScheme, shape, averageSize, maxSpeed, maxRotationSpeed, numberOfSquares]);
    // Calculate the scrollbar width
    const getScrollbarWidth = () => {
        return window.innerWidth - document.documentElement.clientWidth;
    };

    // Calculate the canvas width, taking scrollbar into account
    const canvasWidth = window.innerWidth - getScrollbarWidth();


    return (
        // +1 to fix 1px line at the bottom of the canvas
        <canvas
            ref={canvasRef}
            style={{ position: "absolute", top: 0, left: 0 }}
            width={canvasWidth}
            height={window.innerHeight * canvasPercentage + 1}
        />
    );
};

export default Canvas;
