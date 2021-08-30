import React from 'react';
import { Routing } from './routes/Routing'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import { UserProvider } from './shared/global/provider/UserProvider';
import './shared/global/Global.css'

function App() {
  return (
    <div>
    <UserProvider>
    <Routing>
      <NavigationBar />
    </Routing>
    </UserProvider>
    </div>
  );
}

export default App;
