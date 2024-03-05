import React from 'react';

// @ts-ignore
export const StoreCtx = React.createContext();

export const initState = {
  isDark: false,

}

const reducer = (state, action) => {

  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDark: action.payload
      }

    default:
      return state;
  }
}

const StoreCtxProvider = (props) => {

  // useState
  const [ _state, $dispatch ] = React.useReducer(reducer, initState);
  React.useEffect(() => {
  }, []);

  const __toggleTheme = (data) => {
    // @ts-ignore
    $dispatch({
      type: 'TOGGLE_THEME',
      payload: data
    });
  }

  return (
    <StoreCtx.Provider value={{
      _state,
      __toggleTheme
    }}>
      {props.children}
    </StoreCtx.Provider>
  )
}

export default StoreCtxProvider;