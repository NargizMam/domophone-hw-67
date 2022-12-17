import React from 'react';

interface Props {
    btnSymbol: string;
    tapNumber: (btnSymbol: string)=> void;
}

const BtnNumber: React.FC<Props> = ({btnSymbol, tapNumber}) => {
    return (
        <>
            <button className="btn btn-white border border-dark m-2"
                    onClick={() => tapNumber(btnSymbol)}
            >{btnSymbol}</button>
        </>
    );
};

export default BtnNumber;