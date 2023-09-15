export default (data) => {
    const formData = new FormData();

    for (const key in data) {
        const value = data[key];

        if (value instanceof File) {
            formData.append(key, value);
        } else {
            formData.append(key, value);
        }
    }
    return formData;
};
