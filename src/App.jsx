import Greeting from './components/Greeting';

const names = ["Jiro", "Taro", "Saburo"];

function App() {
  return (
    <div>
      {names.map((name, inx) => (
        <Greeting key={inx} name={name} >
          <p>ようこそ！</p>
        </Greeting>
      ))}
    </div>
  );
}

export default App;