import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Router } from "./Router";

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export { App };
