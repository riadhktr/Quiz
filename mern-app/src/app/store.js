import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./QuestionReducer";
import resultReducer from "./ResultReducer";

export default  configureStore({
    reducer:{
        questions : questionReducer,
        result : resultReducer
    }

    })
    




