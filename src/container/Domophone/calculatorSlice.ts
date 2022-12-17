import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CalcState {
    password: string;
    passwordBorder: string;
    passwordText: string;
    value: string;
    stars: string;
}

const initialState: CalcState = {
    password: '1234',
    passwordBorder: 'border-dark',
    passwordText: 'Enter password!',
    value: '',
    stars: '',
};

export const calculatorSlice = createSlice({
    name: 'domophone',
    initialState,
    reducers:{
        changeValue: (state, action: PayloadAction<string>) => {
            if(state.value.length < 4){
                state.value += action.payload;
                state.stars += "*";
            }else{
                state.passwordBorder = 'border-red';
                return;
            }
        },
        checkPassword: (state) => {
            if(state.password === state.value){
                state.passwordBorder = 'border-success'
                state.value = 'Password is right!';
            }else {
                state.value = 'Password is wrong!';
                state.passwordBorder = 'border-danger';
            }
        },
        deleteOneNumber: (state) => {
            state.value = state.value.substring(0, state.value.length - 1);
            state.stars = state.stars.substring(0, state.stars.length - 1);
        }
    }
});
export const domophoneReducer = calculatorSlice.reducer;
export const {changeValue, checkPassword, deleteOneNumber} = calculatorSlice.actions;
