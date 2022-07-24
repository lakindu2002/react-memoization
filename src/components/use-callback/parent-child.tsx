import { FC, useCallback, useEffect, useState } from "react";

const Child: FC<{ getItems: () => number[] }> = ({ getItems }) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    console.log('rendering child component');
    setItems(getItems());
  }, [getItems]);

  return (
    <>
      <ul>
        {items.map((item, itemIdx) => (
          <li key={itemIdx}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export const Parent: FC = () => {
  const [toggleStatus, setToggleStatus] = useState<boolean>(false);
  const [input, setInput] = useState<number>(0);

  const getItems = useCallback(() => {
    return [input, input * 3, input * 5];
  }, [input]);

  return (
    <>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={() => setToggleStatus(!toggleStatus)}>Toggle</button>
      <h6>Button Toggled: {toggleStatus ? 'true' : 'false'}</h6>
      <Child getItems={getItems} />
    </>
  );
};
