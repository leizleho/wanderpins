const { AuthenticationError } = require('apollo-server');
const user = {
  _id: '5cb8934c3e7e42f1fa7ecddb',
  name: 'Liza Ho',
  email: 'liza.v.ho@gmail.com',
  picture: 'https://cloudinary.com/asd'
};

const authenticated = next => (root, args, ctx, info) => {
  console.log('ctx.currentUser', ctx.currentUser);
  if (!ctx.currentUser) {
    throw new AuthenticationError('You must be logged in');
  }

  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx, info) => ctx.currentUser)
  }
};
