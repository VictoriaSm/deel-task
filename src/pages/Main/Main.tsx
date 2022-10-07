import { useState } from 'react';

import Autocomplete from 'src/components/core/Autocomplete';
import { OptionEntity as OptionType } from 'src/types';

import mockData from './mockData.json';

import './Main.css';

const Main = () => {
  const [value, setValue] = useState<OptionType | null>(null);

  return (
    <div className='Main'>
      <Autocomplete
        options={mockData}
        value={value}
        onChange={setValue}
        placeholder='Search movie'
      />
    </div>
  );
}

export default Main;
