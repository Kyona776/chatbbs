import { Component, createSignal } from 'solid-js';
import './App.scss';
import Counter from './Counter';
import Chat from './Chat';

const App: Component = () => {
  const [counter, setCounter] = createSignal(0);
  setInterval(setCounter, 1000, (c: number) => c + 1);

  return (
    <>
      <div>
        <h1 class="header">Chat</h1>
      </div>
      <Chat />
    </>
  );
};

export default App;
