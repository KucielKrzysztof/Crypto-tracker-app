# Todo

- [ ] README.md improvements

- **Crypto Table:**
  - _Current status: we get 20 coins max, no pagination, no sorting._
  - Top 100 list with sorting by price, 24h change, Market Cap, and volume.

- **Coin Details Page**
  - **Advanced Chart:** Candlestick chart (ideally TradingView integration) with adjustable time intervals (1h, 1d, 1w, 1m, 1y, All).
  - **Converter:** Quick calculator for converting values (e.g., 0.5 BTC to USD/PLN).
  - **Key Metrics:** Circulating Supply, All-Time High (ATH), All-Time Low (ATL).
  - **About:** Brief description of the project with links to the whitepaper and official website.

- **Search Bar**
  - _Current status: UI only._
  - Planned: Instant search supporting both full names (e.g., Bitcoin) and tickers (e.g., BTC) with Debouncing.

- **Watchlist (Favorites)**
  - _Current status: UI only._
  - Planned: Persistence via LocalStorage.
  - Ability to "star" coins to create a personalized list of tracked assets.

# Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Tailwind CSS v4, Lucide React
- **State & API:** TanStack Query (React Query)
- **Routing:** React Router DOM
- **Charts:** Recharts (#todo)
