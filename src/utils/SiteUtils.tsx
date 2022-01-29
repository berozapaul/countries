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

export const generateSlug = (str: string) => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
};
