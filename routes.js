
const getAll = () => {
    return [
        {
            name: "Peggy Poodle",
            age: 9, 
            description: "The cutest cat"
        },
        {
            name: "Biscuits Boodle",
            age: 1, 
            description: "Also cute"
        }
    ]
}


const getOne = () => {
    return "Meow";
}

module.exports = [
    {
      method: 'GET',
      path: '/',
      handler: getAll,
      config: {
        description: 'Get all meows',
        notes: 'Blah blah blah',
      }
    },
    {
      method: 'GET',
      path: '/{id}',
      handler: getOne,
      config: {
        description: 'get one meow',
    }
}];