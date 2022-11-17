import { useState } from "react";


export const Editor = (props: {
    currentContent: string,
}) => {
    const [buffer, setBuffer] = useState(props.currentContent);

    return (
        <div>
            <span></span>
            <textarea
                value={buffer}
                onInput={(e) => setBuffer(e.currentTarget.value)}
            />
        </div>
        
    );
};
