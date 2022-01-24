export const doSearch = async (qry: string, func: Function) => {
    try {
        const data = await func(qry);
        return data || [];
    } catch (error) {
        console.log(error);
    }
};
