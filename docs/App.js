import {
  Button,
  Dropdown,
  Heading2,
  hexToRgbA,
  initGlobalStyles,
  Navigation,
  StyledInput,
  Tab,
  Tabs,
  TextInput,
  Title
} from 'cote';
import React from 'react';
import { ThemeProvider } from 'styled-components';

initGlobalStyles();

let fruit = 'apple';

const theme = {
  colorPrimary: '#27B161',
  colorPrimaryDark: '#148443',
  colorDarkGrey: '#A4AAB3',
  colorShadow: '#000000',
  colorLightBlack: '#061F33',
  colorBlack: '#061f33',
  colorPrimaryEmphasis: '#148443',
  colorDanger: '#FF7183',
  colorDangerDark: '#ff001f',
  colorLightGrey: '#f3f3f3',
  // Elevation theme
  elevation: {
    // What property to use to apply depth
    property: 'box-shadow',
    // Transition for animating buttons
    transition: {
      duration: '280ms',
      effect: 'cubic-bezier(.4, 0, .2, 1)'
    },
    colors: {
      umbra: hexToRgbA('#000000', 0.2),
      penumbra: hexToRgbA('#000000', 0.14),
      ambient: hexToRgbA('#000000', 0.12)
    }
  },
  breakpoints: [32, 48, 64],
  logoUrl: '/apps/apply/static/images/cot_logo.svg',
  companyName: 'Capital On Tap'
};

const App = () => {
  const handleClick = () => (fruit = 'banana');

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navigation />
        <Heading2>This is a heading 2</Heading2>
        <Title>This is a title</Title>
        <Button type="submit">Hello world</Button>
        <Dropdown
          options={[
            { title: 'Option 1', value: 1 },
            { title: 'Option 2', value: 2 },
            { title: 'Option 3', value: 3 }
          ]}
        />
        <StyledInput
          onClick={e => (e.target.value = 'banana')}
          onChange={e => (fruit = 'banana')}
          value={fruit}
        />
        <TextInput onChange={e => (fruit = 'banana')} value={() => fruit} />

        <TextInput
          placeholder="Type something"
          labelText="Hellooooooo"
          full
          tooltip={{
            title: 'Why we need to know your Personal Income?',
            description:
              'Your Personal Income can help us to blabla information information information information information information information information'
          }}
        />

        <Tabs>
          <Tab title="Tab One" active="true">
            <div>Tab One Content</div>
          </Tab>
          <Tab title="Tab Two">
            <div>Tab Two Content</div>
          </Tab>
          <Tab title="Tab Three">
            <div>Tab Two Content</div>
          </Tab>
        </Tabs>
      </div>
    </ThemeProvider>
  );
};

export default App;
