import React from "react";
import { combineReducers } from "redux";
import number from "./number";

const rootReducers = combineReducers({
    Number : number
});

export default rootReducers;

