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
    body: JSON.stringify({ ...newSubmission, surveyId }),
  });
};

export const deleteSubmission = async (submissionId: string) => {
  return fetcher<ISubmission>(`/submissions/${submissionId}`, {
    ...defaultHeaders,
    method: 'DELETE',
  });
};

export const deleteSubmissionsFor = async (surveyId: string) => {
  return fetcher<ISubmission>(`/submissions?surveyId=${surveyId}`, {
    ...defaultHeaders,
    method: 'DELETE',
  });
};
