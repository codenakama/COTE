import React from "react";
import { Button, Navigation, initGlobalStyles, Heading2, Title } from "cote";

initGlobalStyles();

const App = () => (
  <div>
    <Navigation />
    <Heading2>This is a heading 2</Heading2>
    <Title>This is a title</Title>
    <Button type="submit">Hello world</Button>
  </div>
);

export default App;
