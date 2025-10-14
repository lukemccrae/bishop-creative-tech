import React from 'react'; // Import React
import 'primereact/resources/themes/lara-light-blue/theme.css'; // or your preferred theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

export default function App() {
  return (
    <div className="home-prime-container">
      <Card className="prime-card" title="Next Meeting: TBD">
        <div className="prime-image-wrapper">
          <Image
            src="/flier.png"
            alt="Bishop Creative Technology Meetup"
            width="100%"
            style={{ borderRadius: '1rem', maxWidth: '400px', objectFit: 'scale-down' }}
          />
        </div>
      </Card>
    </div>
  );
}