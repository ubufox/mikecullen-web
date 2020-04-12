import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import Form from './Form';
import { SurveyContext } from '../../data/providers/providers/survey';


const Component = ({ videoID }) => {
  const { state, actions } = useContext(SurveyContext);
  const [submitted, setSubmitted] = useState(false);

  const {
    choices,
    loading,
  } = state;
  const videoChoices = choices[videoID];

  useEffect(() => {
    if (!loading && !videoChoices) {
      actions.getChoices(videoID);
    }
  }, [videoChoices, actions, videoID, loading]);


  const submit = (optionID) => {
    actions.saveSelection(optionID, videoID);
  };


  return (
    <div>
      <div>
        Let us know what you think!
      </div>
      <Form
        options={choices}
        onSubmit={submit}
      />
    </div>
  );
}

Component.displayName = 'Survey';

export default Component;
