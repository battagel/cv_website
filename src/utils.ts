export function getSystemTheme(): "light" | "dark" {
    return (
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    )
        ? "dark"
        : "light";
}

export function getInitialTheme(themeStorageKey: string): "light" | "dark" {
    const stored = localStorage.getItem(themeStorageKey);
    if (stored === "light" || stored === "dark") {
        return stored;
    }
    return getSystemTheme();
}
