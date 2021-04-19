const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
    const loginUrl = API_URL + '/posts';
    try {
        const resp = await fetch(loginUrl, {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(payload)
        });

        if (resp) {
            const responseData = await resp.json();
            if (resp && resp.status === 200 && resp.ok) {
                return {
                    status: 'ok',
                    data: [
                        ...responseData
                    ]
                }
            } else {
                return {
                    status: 'error',
                    message: responseData.message
                }
            }
        }
        return {
            status: 'error',
            message: 'Something went wrong'
        }

    } catch (error) {
        console.log('error :>> ', error);
        return {
            status: 'error',
            message: 'Something went wrong'
        }
    }
};

export const fetchPost = async (postId: string | number) => {
    const loginUrl = API_URL + '/posts/' + postId;
    try {
        const resp = await fetch(loginUrl, {
            method: 'GET',
        });

        if (resp) {
            const responseData = await resp.json();
            if (resp && resp.status === 200 && resp.ok) {
                return {
                    status: 'ok',
                    data: responseData
                }
            } else {
                return {
                    status: 'error',
                    message: responseData.message
                }
            }
        }
        return {
            status: 'error',
            message: 'Something went wrong'
        }

    } catch (error) {
        console.log('error :>> ', error);
        return {
            status: 'error',
            message: 'Something went wrong'
        }
    }
};