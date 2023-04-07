const get = (obj, path) => {
    const pathKeys = path.split('.');

    if (!path) {
        return obj;
    }

    if (!obj) {
        return undefined;
    }

    const slicedPath = String(pathKeys.slice(1).join('.'));

    return get(obj[pathKeys[0]], slicedPath);
};
