import { useEffect, useState } from "react";

export type TypedTextConfig = {
    baseText: string;
    typoSuffixes?: string[];
    correctSuffix?: string;
    className?: string;
    cursorClassName?: string;
    typingSpeedMs?: number;
    deleteSpeedMs?: number;
    startDelayMs?: number;
    highlightDelayMs?: number;
};

type TypedTextProps = {
    uiConfig: TypedTextConfig;
};

// Component that types out text with optional typos and corrections.
export default function TypedText({
    uiConfig,
}: TypedTextProps) {
    const {
        baseText,
        typoSuffixes = [],
        correctSuffix = "",
        className,
        cursorClassName = "typing-cursor",
        typingSpeedMs = 70,
        deleteSpeedMs = 45,
        startDelayMs = 250,
        highlightDelayMs = 650,
    } = uiConfig;

    const [displayed, setDisplayed] = useState("");
    const [highlightLength, setHighlightLength] = useState(0);

    useEffect(() => {
        let currentText = "";
        let timeoutId: number | undefined;
        let isCancelled = false;

        const setText = (value: string) => {
            currentText = value;
            setDisplayed(value);
        };

        const typeToTarget = (target: string) =>
            new Promise<void>((resolve) => {
                const step = () => {
                    if (isCancelled) return;
                    if (currentText.length >= target.length) {
                        setText(target);
                        resolve();
                        return;
                    }
                    setText(target.slice(0, currentText.length + 1));
                    timeoutId = window.setTimeout(step, typingSpeedMs);
                };
                step();
            });

        const deleteToLength = (targetLength: number) =>
            new Promise<void>((resolve) => {
                const step = () => {
                    if (isCancelled) return;
                    if (currentText.length <= targetLength) {
                        resolve();
                        return;
                    }
                    setText(currentText.slice(0, -1));
                    timeoutId = window.setTimeout(step, deleteSpeedMs);
                };
                step();
            });

        const run = async () => {
            await new Promise<void>((resolve) => {
                timeoutId = window.setTimeout(resolve, startDelayMs);
            });

            setHighlightLength(0);
            await typeToTarget(baseText);

            for (const suffix of typoSuffixes) {
                await typeToTarget(baseText + suffix);
                setHighlightLength(suffix.length);
                await new Promise<void>((resolve) => {
                    timeoutId = window.setTimeout(resolve, highlightDelayMs);
                });
                setHighlightLength(0);
                await deleteToLength(baseText.length);
            }

            if (correctSuffix) {
                await typeToTarget(baseText + correctSuffix);
            }
        };

        run();

        return () => {
            isCancelled = true;
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [baseText, correctSuffix, deleteSpeedMs, highlightDelayMs, startDelayMs, typoSuffixes, typingSpeedMs]);

    const renderText = () => {
        if (!highlightLength) {
            return displayed;
        }

        const prefix = displayed.slice(0, displayed.length - highlightLength);
        const error = displayed.slice(displayed.length - highlightLength);

        return (
            <>
                {prefix}
                <span className="typing-error">{error}</span>
            </>
        );
    };

    return (
        <span className={className}>
            {renderText()}
            <span className={cursorClassName} aria-hidden="true" />
        </span>
    );
}
