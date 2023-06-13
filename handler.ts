// const url = "https://aws.amazon.com/";

export const handler = async(event) => {
    try {
        // fetch is available with Node.js 18
        // const res = await fetch(url);
        const res = "Foo bar response.";
        console.info("status", 200);
        return res;
    }
    catch (e) {
        console.error(e);
        return 500;
    }
};