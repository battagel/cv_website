import { useEffect, useState } from "react";

export type RotatingTextConfig = {
    items: string[];
    className?: string;
};

type RotatingTextProps = {
    uiConfig: RotatingTextConfig;
};

export default function RotatingText({ uiConfig }: RotatingTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (uiConfig.items.length <= 1) {
            return;
        }

        // Pick a random item on mount only (no rotation)
        setIndex(Math.floor(Math.random() * uiConfig.items.length));
    }, [uiConfig.items.length]);

    return <span className={uiConfig.className}>{uiConfig.items[index] ?? ""}</span>;
}
