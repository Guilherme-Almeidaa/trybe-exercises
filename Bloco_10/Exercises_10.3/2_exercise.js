function up(string) {
    return string.toLocaleUpperCase()
}

function first(string) {
    return string[0]
}

function concatenate(string1, string2) {
    return string1 + string2
}

module.exports = { up, first, concatenate }