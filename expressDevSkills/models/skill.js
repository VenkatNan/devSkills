const skills = [
    {id: 1, skill: 'Singing', done: true },
    {id: 2, skill: 'Drawing', done: true },
    {id: 3, skill: 'Getting distracted', done: true },
    {id: 3, skill: 'Anylitical Writing-Technology research', done: true },
    {id: 3, skill: 'Javascript', done: false},
    {id: 3, skill: 'CSS', done: false },
    {id: 3, skill: 'HTML', done: false },
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function getOne(id) {
   return skills.find(skill => skill.id === parseInt(id))
  }
  
  function getAll() {
    return skills;
  }
  
  function create(skill) {
    skill.id = Date.now()*1000000
    skill.done = false
    skills.push(skill)
  }
  
  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
  }
  
  function update(id, newskill){
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills[idx].skill = newskill.skill
    skills[idx].done = newskill.done === 'on' ? true : false
  }