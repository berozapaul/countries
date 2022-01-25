export const doSearch = async (qry: string, func: Function) => {
    try {
        const data = await func(qry);
        return data || [];
    } catch (error) {
        console.log(error);
    }
};

export const getSlug = (flag: boolean) => {
    const urlPath = window.location.pathname;
    let slug = '';
    // The first character of pathname is always (/)
    if(urlPath.length > 1){
        const urlPathArr = urlPath.split('/');
        slug = (flag) ? urlPathArr[2]: urlPathArr[1];
    }
    return slug;
};
