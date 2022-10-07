import { FC, Fragment, useMemo } from 'react';

import { OptionEntity as OptionType } from 'src/types';

import './Option.css';

type Props = {
  value: OptionType;
  onClick?: (value: OptionType) => void;
  isSelected?: boolean;
  highlightedText?: string;
};

const Option: FC<Props> = ({ value, onClick, isSelected, highlightedText }) => {
  const { label } = value;

  const formattedLabel = useMemo(() => {
    if (!highlightedText || highlightedText === label) {
      return label;
    }

    const indexOfHighlight = label.toLocaleLowerCase().indexOf(highlightedText.toLocaleLowerCase());
    const foundHighlight = `${label}`.substring(indexOfHighlight, highlightedText.length + indexOfHighlight);

    return label
      .split(new RegExp(`${highlightedText}`, 'gi'))
      .map((item, index, array) =>
        indexOfHighlight + highlightedText.length >= 0 && index === array.length - 1
        ? item
        : (
          <Fragment key={`${item}-${index}`}>
            {item}
            <span>{foundHighlight}</span>
          </Fragment>
        )
      );
  }, [highlightedText, label]);

  return (
    <div className={isSelected ? 'Option Option__select' : 'Option'} onClick={() => onClick && onClick(value)}>{formattedLabel}</div>
  );
}

export default Option;
