/// <reference types="astro/client" />

declare global {
    interface DocumentEventMap {
        "theme-changed": CustomEvent<ThemeChangedDetail>
    }
}

interface Window {
    theme: {
        setTheme: (theme: "auto" | "dark" | "light") => void;
        getTheme: () => "auto" | "dark" | "light";
        getSystemTheme: () => "light" | "dark";
        getDefaultTheme: () => "auto" | "dark" | "light";
    };
}

interface ThemeChangedDetail {
    theme: string;
    systemTheme: string;
    defaultTheme: string;
}