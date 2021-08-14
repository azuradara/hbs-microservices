import { format } from 'date-fns';

const formatDate = (dateString) => {
  return format(new Date(dateString), 'MMM do, yyyy');
};

export default formatDate;
