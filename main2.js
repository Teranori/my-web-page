let generationPerson = () => {
  let age = 0;
  return {
    name: 'Yoshipi',
    //アロー関数。
    getAge: () => age,
    incrementAge: () => {
      age += 1;
        return age;
    },
  };
};

const yoshipi = generationPerson();
console.log(yoshipi.name);
console.log(yoshipi.getAge());


