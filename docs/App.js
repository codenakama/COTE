import React from "react";
import { Button, Navigation, lato, initGlobalStyles } from "cote";

initGlobalStyles();

const App = () => (
  <div>
    <Navigation />
    <Button type="submit">Hello world</Button>
  </div>
);

export default App;
