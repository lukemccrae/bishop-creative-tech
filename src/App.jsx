import './App.css'

function App() {
  return (
    <div className="home-container">
      <img
        src="/bishop-meetup.jpg"
        alt="Bishop Creative Technology Meetup"
        className="splash-image"
      />
      <h1 className="home-title">Bishop Creative Technology Meetup</h1>
      <div className="info-card">
        <h2>What is this?</h2>
        <ul>
          <li>Share your projects</li>
          <li>Connect with others</li>
          <li>Learn from local developers</li>
        </ul>
      </div>
    </div>
  );
}

export default App