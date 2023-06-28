export default function getResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
