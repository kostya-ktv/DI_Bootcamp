function checkingAnagram(string1, string2) {
    if(string1.length !== string2.length) return false;
    let victim = string2.trim().toLowerCase().split('');

        return string1.trim().toLowerCase().split('').every(el => {
            if(victim.lastIndexOf(el) === -1) return false;
            return victim.splice(victim.lastIndexOf(el), 1);
        });
}

console.log(checkingAnagram('School mastjr', 'The classroom'));