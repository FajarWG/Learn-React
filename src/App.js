function App() {

  const title = 'Welcome To My App';
  const age = 19;
  const link = 'https://www.google.com';

  return (
    <div>
      <h2>{ title }</h2>
      <h2>{ age * 20 }</h2>
      <a href={ link }>Google</a>
    </div>
  );
}

export default App;
