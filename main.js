module.exports = (str) => {
    ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'].forEach(e => {
        str = String(str).split(e).join('i');
    });

    return str;
};