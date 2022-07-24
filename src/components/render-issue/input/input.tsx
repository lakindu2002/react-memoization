import { useState } from "react"
import { RenderCounter } from "../render-counter/render-counter";

export const Input = () => {
    const [value, setValue] = useState<string>('');

    const handleInputValuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <input type="text" value={value} onChange={handleInputValuChange} />
                <RenderCounter />
            </div>
        </>
    )
}