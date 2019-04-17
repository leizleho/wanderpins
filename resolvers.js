const user = {
  _id: '1',
  name: 'Leizle',
  email: 'leizleho@yahoo.com',
  picture: 'https://cloudinary.com/asd'
};

module.exports = {
  Query: {
    me: () => user
  }
};
