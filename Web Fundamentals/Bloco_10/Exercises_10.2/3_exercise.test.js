const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
};

const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
            return resolve(users[id]);
        }

        return reject({ error: 'User with ' + id + ' not found.' });
    });
}

const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
}

describe('testing for success or failure', () => {
    it('should  return success', async done => {
        const response = await getUserName(4)
        expect(response).toBe('Mark');
        done();
    })

    it('should return error', async done => {
        try {
            await getUserName(6)
        } catch (erro) {
            expect(erro).toEqual({ 'error': 'User with 6 not found.' });
            done();
        }
})
            
            
       
      
      
  })