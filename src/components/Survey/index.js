import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import Form from './Form';
import { SurveyContext } from '../../data/providers/providers/survey';

import styles from './styles/Survey.module.scss';

const Component = ({ videoID }) => {
  const { state, actions } = useContext(SurveyContext);
  const [submitted, setSubmitted] = useState(false);

  const {
    choices,
    loading,
    error,
  } = state;
  const videoChoices = choices[videoID];

  useEffect(() => {
    if (!loading && !videoChoices && !error) {
      actions.getChoices(videoID);
    }
  }, [videoChoices, actions, videoID, loading, error]);


  const submit = async (optionID) => {
    await actions.submitChoice(videoID, optionID);
    setSubmitted(true);

    await actions.getVideoResults(videoID);
  };

  const element =  submitted
    ? (
      <div className={styles.header}>
        Thanks for your answer!
      </div>
    )
    : (
      <div>
        <div className={styles.header}>
          Let us know what you think!
        </div>
        <div>
          <Form
            options={videoChoices}
            onSubmit={submit}
            loading={loading}
          />
        </div>
      </div>
    );

  return (
    <div className={styles.container}>
      {
        !loading && videoChoices
          ? element
          : null
      }
    </div>
  );
}

Component.displayName = 'Survey';

export default Component;
