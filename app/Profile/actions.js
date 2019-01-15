export function loadUser(userCredentials) {
    return { type: 'LOAD_USER', payload:userCredentials}
}