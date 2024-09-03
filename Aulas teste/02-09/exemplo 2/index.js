function isPalindrome(str) {

    const frase = str;
    const fraseAoContrario = frase.split().reverse().join();
    if (frase === fraseAoContrario) {
        return true
    } else
        return false
}

module.exports = isPalindrome;