module.exports = {
  format(user) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      contactPhone: user.contactPhone,
    };
  },
};
