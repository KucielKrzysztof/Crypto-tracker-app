> [!IMPORTANT]
> **API LIMITATIONS:** This project uses the free tier of the **CoinGecko API**.
> There is a strict limit on requests per minute (approx. 10-30 req/min).
> If data stops loading or you see errors, please wait a moment before refreshing.
>
> _Note: Global Market Data is cached for 15 minutes to preserve API limits._

# Todo

- **Crypto Table:**
  - _Current status: Real-time global metrics, Pagination_
  - sorting, filtering.

- **Coin Details Page**
  - _Current status: coind data with chart for past 7days_
  - **Converter:** Quick calculator for converting values (e.g., 0.5 BTC to USD/PLN).
  - **Key Metrics:** Circulating Supply, All-Time High (ATH), All-Time Low (ATL).
  - **About:** Brief description of the project with links to the whitepaper and official website.

- **Watchlist (Favorites)**
  - _Current status: UI only._
  - Planned: Persistence via LocalStorage.
  - Ability to "star" coins to create a personalized list of tracked assets.

# Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Tailwind CSS v4, Lucide React
- **State & API:** TanStack Query (React Query), Axios
- **Routing:** React Router DOM
- **Charts:** Recharts (#todo)
