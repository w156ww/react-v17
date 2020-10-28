function getType(val) {
    if (!val) return val;
    return Object.prototype.toString.call(val).slice(8, -1);
}

function isNum(val) {
    if (!val) return false;
    return typeof val === "number";
}

export { getType, isNum };
