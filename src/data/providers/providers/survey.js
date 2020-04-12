import React, { useReducer } from 'react';

import reducer, { defaultState } from '../reducers/survey';
import surveyActions from '../actions/survey';


export const SurveyContext = React.createContext();


const SurveyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const actions = surveyActions(dispatch);

  const providedValue = {
    state,
    actions,
  };

  return (
    <SurveyContext.Provider value={providedValue}>
      { children }
    </SurveyContext.Provider>
  );
};

export default SurveyProvider;
