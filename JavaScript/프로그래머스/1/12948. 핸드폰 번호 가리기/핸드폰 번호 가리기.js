function solution(phone_number) {
    const a = phone_number.slice(-4,  phone_number.length);
    const b = phone_number.slice(0, phone_number.length - 4);
    let c = ""
    for(let i = 0; i < b.length; i++) {
        c = c + "*";
    }
    return c + a;
}