module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7f8dfff820bba199d2c227536099fa78'),
  },
});
