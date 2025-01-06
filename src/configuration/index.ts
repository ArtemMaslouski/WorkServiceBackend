export default () => ({
  secret_jwt: process.env.SECRET_KEY,
  expire_jwt: process.env.EXPIRE_TOKEN,
});
