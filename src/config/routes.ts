const data = [
    {
        name: "Peggy Poodle",
        age: 9,
        description: "The cutest cat",
        id: 1
    },
    {
        name: "Biscuits Booooooooodle",
        age: 1,
        description: "Also cute",
        id: 2
    }
]


const getAll = () => {
    return data;
}


const getOne = (request, h) => {
    const id = parseInt(request.params.id);
    return data.filter(cat => cat.id === id);
}

export default [
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
    }
];
