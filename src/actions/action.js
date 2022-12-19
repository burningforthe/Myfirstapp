
export const getData = () => async (dispatch, getState) => {
    try {
        const { BASE_URL } = getState();
        const url = `${BASE_URL}get-Data/`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        const { status } = response;
        if (status >= 200 && status < 400) {
            dispatch({
                type: "DATA",
                payload: data
            });
        }
    } catch (err) {
        console.log("action.js getData", err.message);
        // Handle error here
    }
};
