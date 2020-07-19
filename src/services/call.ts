import axios from 'axios';
import { Call } from '../@types/call';

const baseURL = 'https://aircall-job.herokuapp.com/activities';

const request = axios.create({
  baseURL,
  timeout: 5000,
});

export async function fetchCalls(): Promise<Call[]> {
  const { data } = await request.get('/');
  return data;
}

export async function fetchCall(id: string): Promise<Call> {
  const { data } = await request.get(`/${id}`);
  return data;
}

export function archiveCall(id: string) {
  return request.post(`/${id}`, {
    is_archived: true,
  });
}
