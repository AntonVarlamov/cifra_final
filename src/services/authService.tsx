'use client'

export const login = async (username: string, password: string) => {
    const response = await fetch('http://92.55.15.91:8225/login.getAuthToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            login: username,
            password: password,
        }),
    });

    const data = await response.json();

    if (data.authToken) {
        localStorage.setItem('authToken', data.authToken);
        return data; 
    }

    if (data.error) {
        const errorMessage = data.error.String || 'Ошибка авторизации';
        throw new Error(errorMessage);
    }

    throw new Error('Неизвестная ошибка авторизации');
};