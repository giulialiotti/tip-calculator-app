// Context
import { TotalProvider } from "./context/TotalContext";

// Local Components
import { Headline, Card } from "./components";

function App() {
  return (
    <TotalProvider>
      <main>
        <Headline />
        <Card />
      </main>
    </TotalProvider>
  );
}

export default App;
