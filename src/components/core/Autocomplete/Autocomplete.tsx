import { FC, useState, useCallback } from 'react';

import Input from 'src/components/core/Input';
import Option from './components/Option';

import { OptionEntity as OptionType } from 'src/types';

import useOutsideClick from './hooks/useOutsideClick';

import './Autocomplete.css';

type Props = {
  options: OptionType[];
  value: OptionType | null;
  onChange: (value: OptionType | null) => void;
  placeholder?: string;
};

const BaseSelect: FC<Props> = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const ref = useOutsideClick(() => setIsOpen(false));

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    const filter = options.filter(({ label }) => label.match(new RegExp(query, 'gi')));
    
    setFilteredOptions(filter);
    setSearchQuery(query);

    if (value) {
      onChange(null);
    }
  }, [options, value, onChange]);

  const handleOptionClick = useCallback((val: OptionType) => {
    setSearchQuery(val.label);
    setIsOpen(false);
    onChange(val);
    setFilteredOptions(options);
  }, [onChange, options]);

  return (
    <div className='Autocomplete' ref={ref}>
      <Input
        value={searchQuery}
        onChange={handleInputChange}
        onClick={() => setIsOpen((oldState) => !oldState)}
        placeholder={placeholder || 'Search'}
      />

      {isOpen && (
        <div className='Autocomplete__dropdown'>
          {filteredOptions.length ? filteredOptions.map((item) => (
            <Option
              key={`option-${item.id}`}
              value={item}
              onClick={handleOptionClick}
              isSelected={item.id === value?.id}
              highlightedText={searchQuery}
            />
          )) : (
            <div className='Autocomplete__empty'>Nothing found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BaseSelect;
