import _ from 'lodash';

const formatGQLErrors = (error) => {
  const errorDetails = _.get(error, 'originalError.response.body');
  try {
    if (errorDetails) return JSON.parse(errorDetails);
  } catch (e) {}

  return null;
};

export default formatGQLErrors;
