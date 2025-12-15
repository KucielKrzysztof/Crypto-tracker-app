# 🚀 Crypto Market Tracker

A modern, cryptocurrency tracking application built with **React 19** and **Vite**. This project provides real-time market data, interactive charts, and deep insights into the crypto world using the CoinGecko API.

[![Live Demo](https://img.shields.io/badge/demo-online-darkgreen?style=for-the-badge&logo=globe)](https://vercel-crypto-tracker-app.vercel.app/)

![App Preview](screenshots/home.png)

> [!IMPORTANT]
> **API LIMITATIONS:** This project uses the free tier of the **CoinGecko API**.
> There is a strict limit on requests per minute (approx. 10-30 req/min).
> If data stops loading or you see errors, please wait a moment before refreshing.
>
> _Note: Global Market Data is cached for 15 minutes to preserve API limits._

## Table of Contents

- [Key Features](#key-features)
  - [Real-Time Market Data](#real-time-market-data)
  - [Advanced Search](#advanced-search)
  - [Detailed Coin Analytics](#detailed-coin-analytics)
  - [UI & UX](#ui--ux)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Todo / Roadmap](#todo)

---

## Key Features

### Real-Time Market Data

- **Live Crypto Table:** Displays top cryptocurrencies with prices, 24h change, and market cap.
- **Sparklines:** Visual representation of 7-day price trends directly in the table (using `Recharts`).
- **Global Metrics:** Tracks total market cap, volume, and BTC/ETH dominance with smart caching.
- **Pagination:** Server-side pagination for browsing thousands of coins efficiently.

### Advanced Search

- **Global Search Bar:** Accessible from anywhere in the app (Navbar & Hero).
- **Debouncing:** Implemented custom `useDebounce` hook (500ms) to minimize API calls.
- **Smart Dropdown:** Shows suggested coins with symbols and ranks. Handles loading, error, and empty states gracefully.

### Detailed Coin Analytics

- **Dynamic Routing:** Individual pages for every coin (e.g., `/coin/bitcoin`).
- **Interactive Charts:** Area charts visualizing price action over the last 7 days.
- **Market Stats:** Key metrics like Circulating Supply, Max Supply, and ATH.
- **Smart Descriptions:** Parses and displays HTML descriptions safely with "Show More/Less" functionality.

### UI & UX

- **Modern Design:** Built with **Tailwind CSS v4**. Dark mode aesthetic with glassmorphism effects (`backdrop-blur`).
- **Responsive:** Fully mobile-responsive layout with a custom hamburger menu.
- **Feedback:** Loading skeletons, spinners, and user-friendly error messages (handling API 429 limits).

---

## Tech Stack

- **Core:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) (Icons)
- **State Management & API:** [TanStack Query v5](https://tanstack.com/query/latest) (React Query), [Axios](https://axios-http.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Charts:** [Recharts](https://recharts.org/)

---

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository:

```bash
git clone https://github.com/KucielKrzysztof/Crypto-tracker-app.git
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Run the development server:

```bash
npm run dev
```

### 4. Open your browser: Visit http://localhost:5173

---

## Screenshots

### Homepage

![Homepage](screenshots/home.png)

### Cryptocurrencies Page

![CryptoPage](screenshots/cryptopage.png)

### Crypto Details Page

![CoinDetails](screenshots/coindetails.png)

### About Page

![AboutPage](screenshots/aboutpage.png)

---

## Todo

- News Page

### Data:

Data provided by [CoinGecko API](https://www.coingecko.com/en/api).
