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

  describe('testing for success or failure' , () => {
      it('testing for success' ,() => {
        return expect(getUserName(4)).resolves.toBe('Mark');
      })

      it('testing for failure' , () => {
          return expect(getUserName(6)).rejects.toEqual({'error' :'User with 6 not found.'});
      })
      
  })