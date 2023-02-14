import React from 'react';
import './Options.css';

interface Props {
  title: string;
}
//create button and then an event that when the button is pressed the youtube
//API is called and the list of links is saved onto an object and then printed below said button

const Options: React.FC<Props> = ({ title }: Props) => {
  return <div className="OptionsContainer">

  </div>;
};

export default Options;
