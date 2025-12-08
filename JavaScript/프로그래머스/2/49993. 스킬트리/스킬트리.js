function solution(skill, skill_trees) {
    let count = 0;
    var newSkillTree = [];
    var temp = [];
    for (let i = 0; i < skill_trees.length; i++) {
      [...skill_trees[i]].forEach(y => {
        if (skill.includes(y)) {
          temp.push(y);
        }
      })
      newSkillTree.push(temp);
      temp = [];
    }
    while (newSkillTree.length) {
      var c = newSkillTree.shift();
      if (skill.startsWith(c.join(''))) {
        count++;
      }
    }
    return count;
}