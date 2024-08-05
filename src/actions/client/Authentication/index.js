export const SingInAction = async ({ request }) => {

    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('https://colorshopapi.onrender.com/api/users/signin', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        return {
            status: response.status,
            message: "Signin Failed",
            ok: false
        }
    }

    const data = await response.json();
    return {...data, ok: true};
}

export const SignUpAction = async ({ request }) => {

    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    const surname = formData.get('surname');
    
    const response = await fetch('https://colorshopapi.onrender.com/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            surname: surname,
            isAdmin: false,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        return {
            status: response.status,
            message: "Signin Failed",
            ok: false
        }
    }

    const data = await response.json();
    return {...data, ok: true};
}