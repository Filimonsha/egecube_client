import React, {ReactNode} from 'react';

const GameBorder = ({children}: {children: ReactNode}) => {
    return (
        <div style={{
                margin: 15,
                padding: 30,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }}
        >
            {children}
        </div>
    );
}

export default GameBorder;