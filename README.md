# Browser Simulator 🧪🌐

This project utilizes **Playwright** ([https://playwright.dev/](https://playwright.dev/)) to simulate and rigorously test your web application's compatibility and functionality across the leading desktop browsers: **Chromium**, **Firefox**, and **Safari (via WebKit)**.

## 📦 Project Setup

### Install Dependencies

To get started, install the necessary project dependencies:

```bash
npm install
```

## 🚀 Running Tests

You can run tests for individual browsers or all of them simultaneously.

### Chromium (Google Chrome, Edge, etc.)

```bash
npm run test:chromium
```

### Firefox

```bash
npm run test:firefox
```

### Safari (via WebKit)

```bash
npm run test:safari
```

### All Browsers

```bash
npm run test:all
```

## 📁 Project Structure

Here's an overview of the project's directory structure:

```plaintext
browser-simulator/
├── tests/                 # Your test files go here
├── playwright.config.ts   # Playwright configuration file
├── package.json
└── README.md
```

## ⚙️ Configuration

Playwright is pre-configured to provide a clear and comprehensive testing experience:

-   **Headed Mode:** Tests run in `headed: false` mode, allowing you to visually observe the browser windows during test execution.
-   **Maximized Window:** Browsers launch in a maximized window to ensure consistent test environments.
-   **Separate Projects:** Three distinct projects are set up: `chromium`, `firefox`, and `webkit` (branded as "Safari") for isolated browser testing.

The main configuration file is `playwright.config.ts`.

## 🔧 Customize

You can easily extend this setup to include mobile devices, specific browser channels (like Google Chrome or Microsoft Edge), or emulate other environments using Playwright's powerful `devices` API.

### Example: Emulating iPhone 13

```typescript
import { devices } from "@playwright/test";

use: {
  ...devices["iPhone 13"],
  browserName: "webkit"
}
```

## 📚 Resources

For more in-depth information and advanced usage, refer to the official Playwright documentation:

-   [Playwright Documentation](https://playwright.dev/docs/intro)
-   [Playwright Test Configuration](https://playwright.dev/docs/test-configuration)
-   [Playwright CLI](https://playwright.dev/docs/cli)

## 📝 License

This project is licensed under the ISC License.
