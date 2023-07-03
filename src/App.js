
import './App.css';
import Button from './lib/components/Button';
import Card from './lib/components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type='primary' text="Primary button"/>
        <Button type='secondary' text="Secondary button"/>
        <Card productTitle="Product Title" productDesc="Product Description" fullPrice="£0.00" discountPrice="£0.00" imgUrl="https://placehold.co/600"/>
      </header>
    </div>
  );
}

export default App;
