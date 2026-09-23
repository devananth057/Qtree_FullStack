import './App.css';
import Button from "./components/Button";

function App() {
  const handle = () => {
    alert("hi");
  };

  return (
    <div>
      <h1>My E-Commerce</h1>

      <Button btnName="Home" btnColor="red" Text="white" onClick={handle} />
      <Button btnName="Products" btnColor="red" Text="white" />
      <Button btnName="Cart" btnColor="red" Text="white" />
      <Button btnName="Login" btnColor="red" Text="white" />
      <Button btnName="Buy Now" btnColor="red" Text="white" />
    </div>
  );
}

export default App;