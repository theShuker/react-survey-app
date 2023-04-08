import useSWR from 'swr';
import { ISurvey as ISubmission } from '../types/Survey';
import fetcher from './fetcher';

const defaultHeaders = {
  headers: { 'Content-Type': 'application/json' }, //json-server needs that
};

export const getSubmissions = async (surveyId: string) => {
  return fetcher<ISubmission[]>(`/submissions?surveyId=${surveyId}`);
};

export const createSubmission = async (
  surveyId: string,
  newSubmission: Omit<ISubmission, 'id'>
) => {
  return fetcher<ISubmission>(`/submissions`, {
    ...defaultHeaders,
    method: 'POST',
    body: JSON.stringify(newSubmission),
  });
};

export const deleteSubmission = async (id: string) => {
  return fetcher<ISubmission>(`/submissions/${id}`, { ...defaultHeaders, method: 'DELETE' });
};