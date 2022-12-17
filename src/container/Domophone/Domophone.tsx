import React from 'react';
import BtnNumber from "../../components/BtnNumber/BtnNumber";
import {btnStore} from "../../btnStore";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {changeValue, checkPassword, deleteOneNumber} from "./calculatorSlice";


const Domophone = () => {
    const text = useSelector((state: RootState)=> state.domophone.passwordText);
    const border = useSelector((state: RootState)=> state.domophone.passwordBorder);
    const stars = useSelector((state: RootState)=> state.domophone.stars);
    const dispatch = useDispatch();

    const btnNumber = (
       btnStore.buttons.map(item => (
           <BtnNumber btnSymbol={item}
                      key={item}
                      tapNumber={() => dispatch(changeValue(item))}
           />
       ))
    );

    return (
        <div className="container mt-5">
            <div className="bg-light col-6 p-4 fs-3">
                <div className="">
                    <div className={`border ${border} p-3`}>
                        {stars ? stars : text}
                    </div>
                </div>
                <div className="calc__body m-2">
                    {btnNumber}
                    <button className="btn btn-white border border-dark m-2 p-2"
                            onClick={() => dispatch(deleteOneNumber())}
                    > {'>'} </button>
                    <button className="btn btn-white border border-dark m-2 p-2"
                            onClick={() => dispatch(checkPassword())}
                    > E </button>
                </div>

            </div>
        </div>
    );
};

export default Domophone;