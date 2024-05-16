const apiRequest = async (url = '', optionsObj = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error("Failed to fetch");
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err)
    }
}

export default apiRequest;