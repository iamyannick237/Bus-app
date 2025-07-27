export default [
  {
    method: 'GET',
    path: '/trajets/:id',
    handler: 'api::trajet.trajet.findOne',
    config: {
      auth: false, // à mettre à true si tu veux restreindre
    },
  },
];
