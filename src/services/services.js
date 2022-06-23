import { ContactsOutlined } from '@mui/icons-material';
import { parseFetchResponse } from '../parse-fetch-response/parse-fetch-response';

const baseURL = 'https://dev-lead2change-ctw.azurewebsites.net/example/';

/**
 * It makes a request to the server, parses the response, and returns the students
 * @returns An array of students.
 */
export const getStudents = async () => {
  const response = await fetch(`${baseURL}getstudents`, { method: 'GET' });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint, and returns the student object that was created
 * @param student - The student to add
 * @returns The student object
 */
export const addStudent = async (student) => {
  const response = await fetch(`${baseURL}createstudent`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint with the updated student
 * @param student - The student to update
 * @returns The response from the server.
 */
export const updateStudent = async (student) => {
  const response = await fetch(`${baseURL}updatestudent/${student.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

const baseWasteURL = ' https://ctw-dev-mc-wm.azurewebsites.net/';

export const authenticate = async (wasteUser) => {
  const response = await fetch(`${baseWasteURL}users/authenticate`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wasteUser),
  });
  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

// We need to : call the authenticate method
// its response needs to be stored into a new object

/**
 * It makes a request to the server, parses the response, and returns the Waste Items
 * @returns An array of Waste Items.
 */
export const getWasteList = async () => {
  const response = await fetch(`${baseWasteURL}inventory`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
  });
  const parsedResponse = await parseFetchResponse(response);

  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint, and returns the Waste Item object that was created
 * @param waste - The Waste Item to add
 * @returns The Waste Item object
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
 * It makes a POST request to the endpoint with the updated waste item
 * @param waste - The waste item to update
 * @returns The response from the server.
 */
export const updateWaste = async (waste) => {
  const response = await fetch(`${baseWasteURL}inventory`, {
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
