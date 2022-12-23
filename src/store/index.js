import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";    
import allreducers from "./reducer"
let composeEnhancers = compose;

    composeEnhancers = typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;
  
  
const store = createStore(
    allreducers,
    composeEnhancers(applyMiddleware(thunk))
  )
  export default store;