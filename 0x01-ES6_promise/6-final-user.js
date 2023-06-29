import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [signUpUser(fileName, lastName), uploadPhoto(fileName)];
    return Promise.all(promises)
        .then((results) => {
        return results.map((result) => {
        return { status: resut.status, value: result.status === 'fulfilled' ? result.value : result.reason }
        })
        })
}
