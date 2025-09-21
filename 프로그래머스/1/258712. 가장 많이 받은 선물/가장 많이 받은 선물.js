function solution(friends, gifts) {
    var ans = {};
    var count = 0;
    var backGiftAmount = 0;
    friends.forEach(x => {
      ans[x] = { 'totalNum' : 0, 'backAmount' : 0 };
    });
    gifts.forEach(x => {
      let [giver, receiver] = x.split(' ');
      if (ans[giver][receiver]) {
        ans[giver][receiver]++;
      } else {
        ans[giver] = { ...ans[giver], [receiver]: 1 };
      }
        ans[giver]['totalNum']++;
    });
        for (let i = 0; i < friends.length; i++) {
            for (let j = 0; j < friends.length; j++) {
                if(ans[friends[j]][friends[i]]) {
                   ans[friends[i]]['totalNum'] -= ans[friends[j]][friends[i]]
                }
             }
        }
    for (let i = 0; i < friends.length; i++) {
        for (let j = 0; j < friends.length; j++) {
                if(ans[friends[j]][friends[i]] < ans[friends[i]][friends[j]]) {
                    ans[friends[i]]['backAmount']++;
                } else if (ans[friends[j]][friends[i]] == ans[friends[i]][friends[j]]) {
                    if(ans[friends[i]]['totalNum'] > ans[friends[j]]['totalNum']) {
                        ans[friends[i]]['backAmount'] += 1;
                    }
                }
            if(ans[friends[i]][friends[j]] !== undefined 
                        && ans[friends[j]][friends[i]] == undefined) {
                        ans[friends[i]]['backAmount'] += 1;                    
            }
            } 
    }
    var goal = 0;
    friends.forEach(x => {
        if(goal < ans[x]['backAmount']) {
         goal =  ans[x]['backAmount']
        }
    })

    return goal;
}