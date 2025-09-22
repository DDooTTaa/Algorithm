function solution(name, yearning, photo) {
    var answer = [];
    const memory = new Map();
    const length = name.length;
    for(let i = 0; i < length; i++) {
            memory.set(name[i], yearning[i]);
    }
    const a = photo.map(na => {
        const initialValue = 0;
        return na.reduce((arr, curr) => {
            console.log(memory.get(curr));
            if(memory.get(curr) !== undefined) {
                return arr + memory.get(curr);
            } else {
                return arr;
            }
        }, initialValue);
    })
    console.log(a);
    return a;
}