import { useRef, useEffect } from "react";
import { useMantineTheme } from "@mantine/core";

const Canvas = () => {
    const theme = useMantineTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const numberOfSquares = 150;
    const averageSize = 30;
    const sizeChange = 40;
    const squareColour = theme.colorScheme === 'dark' ? "white" : "black"
    const canvasColour = theme.colorScheme === 'dark' ? "black" : "white"
    const maxSpeed = 1;
    const maxRotationSpeed = 0.01;

    useEffect(() => {
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
                        context.strokeRect(-square.size / 2, -square.size / 2, square.size, square.size);
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
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: "absolute", top: 0, left: 0 }}
            width={window.innerWidth}
            height={window.innerHeight * 0.65}
        />
    );
};

export default Canvas;
