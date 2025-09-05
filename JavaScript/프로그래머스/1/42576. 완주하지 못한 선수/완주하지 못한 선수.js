function solution(participant, completion) {
    participant.sort();
    completion.sort();
    var answer = 'a';
    console.log(participant);
    console.log(completion);
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i] && answer == 'a') {
            answer = i;
        }
    }
    return participant[answer];
}