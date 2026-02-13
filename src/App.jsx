function Header() {
  return <h1>My React Learning</h1>;
}

function Content() {
  return <p>I started learning React today.</p>;
}

function Footer() {
  return <small>Day 1</small>;
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
