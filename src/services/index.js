import user from './user';

const services = (() => {
  return {
    user: user()
  };
})();

export default services;
