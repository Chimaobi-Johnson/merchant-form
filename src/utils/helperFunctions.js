export function isEmpty(obj) {
    if(obj === null || obj === undefined) {
        return true
    } else {
        return Object.keys(obj).length === 0;
    }
}

