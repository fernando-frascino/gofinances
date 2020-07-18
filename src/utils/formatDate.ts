import { format, parseISO } from 'date-fns';

const formatDate = (date: Date): string => {
  const parsedDate = parseISO(String(date));
  return format(parsedDate, 'dd/MM/yyyy');
};

export default formatDate;
