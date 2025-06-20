import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    use: {
        headless: false, // Run tests in headed mode
        launchOptions: {
            args: ["--start-maximized"], // Maximize window for Chromium and WebKit
        },
    },
    projects: [
        {
            name: "chromium",
            use: {
                browserName: "chromium",
            },
        },
        {
            name: "firefox",
            use: {
                browserName: "firefox",
            },
        },
        {
            name: "webkit",
            use: {
                browserName: "webkit",
            },
        },
    ],
});
