const URI = `http://localhost:5000/api/v1`;

const loginApi = async (email, password) => {
    try {
        const res = await fetch(`${URI}/users/login`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
            throw new Error(await res.text());
        }
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

export { loginApi };
