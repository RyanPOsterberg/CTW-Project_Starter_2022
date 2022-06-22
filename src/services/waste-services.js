import { parseFetchResponse } from '../parse-fetch-response/parse-fetch-response';

const baseWasteURL = ' https://ctw-dev-mc-wm.azurewebsites.net/';

/**
 * It makes a request to the server, parses the response, and returns the students
 * @returns An array of students.
 */
export const getWasteList = async () => {
  const response = await fetch(`${baseWasteURL}inventory`, { method: 'GET' });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint, and returns the student object that was created
 * @param student - The student to add
 * @returns The student object
 */
export const addWaste = async (waste) => {
  const response = await fetch(`${baseWasteURL}inventory`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(waste),
  });
  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint with the updated student
 * @param student - The student to update
 * @returns The response from the server.
 */
export const updateWaste = async (waste) => {
  const response = await fetch(`${baseWasteURL}inventory/${waste.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(waste),
  });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};
