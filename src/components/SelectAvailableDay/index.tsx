import React, { Dispatch, SetStateAction, useState } from "react";
import "./style.scss";

interface Option {
  id: string;
  value: string;
}

interface ISelectAvailableDay {
  options: Option[];
  setValue: Dispatch<SetStateAction<Option[]>>;
  label: string;
  className?: string;
}

const SelectAvailableDay: React.FC<ISelectAvailableDay> = ({
  setValue,
  options,
  label,
  className,
  ...props
}) => {
  const [selectedItems, setSelectedItems] = useState<Option[]>([]);

  const HandleSelectedItems = (option: Option) => {
    const alreadySelected = selectedItems.findIndex(
      (weekDay) => weekDay === option
    );
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(
        (weekDay) => weekDay.id !== option.id
      );
      setSelectedItems(filteredItems);
      setValue(filteredItems);
    } else {
      setSelectedItems([...selectedItems, option]);
      setValue([...selectedItems, option]);
    }
  };

  return (
    <div>
      <p className="label">{label}</p>
      <ul className="list-item">
        {options?.map((option) => {
          return (
            <li
              key={option.id}
              id={option.id}
              className={
                selectedItems.includes(option)
                  ? `${className} status-active`
                  : className
              }
              onClick={() => HandleSelectedItems(option)}
            >
              <p>{option.value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectAvailableDay;