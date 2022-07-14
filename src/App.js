// Context
import { CalculationsProvider } from "./context/CalculationsContext";

// Local Components
import { Headline, Card } from "./components";

function App() {
  return (
    <CalculationsProvider>
      <main>
        <Headline />
        <Card />
      </main>
    </CalculationsProvider>
  );
}

export default App;
