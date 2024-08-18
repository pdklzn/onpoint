import React from 'react';
import { Slider } from './components/Slider';
import { AppContext } from "./AppContext";
import { Main } from "./components/Main";
import { Message } from "./components/Message";
import { Brend } from "./components/Brend";

const slides = [
  <Main />,
  <Message />,
  <Brend />,
];

export const App = React.memo(() => <AppContext slides={slides}><Slider /></AppContext>);
