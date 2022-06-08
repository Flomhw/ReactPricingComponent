import Pricing from './Pricing';

function App() {
  return (
    <div className="App">
      <div className="headingSection">
      <h1>Simple, traffic-based pricing</h1>
      <h2>Sign-up for our 30-day trial. No credit card required.</h2>
      </div>
      <Pricing className="priceComponent" />
    </div>
  );
}

export default App;
