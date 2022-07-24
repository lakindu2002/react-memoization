import { FC, useMemo, useState } from "react";

export const Parent: FC = () => {
    const [input, setInput] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const addItem = () => {
        setItems([...items, input]);
        setInput('');
    }

    const itemLabels = useMemo(() => {
        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )
    }, [items]);

    return (
        <>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => addItem()}>Add Item</button>
            {itemLabels}
        </>
    );
};
