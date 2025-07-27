/**
 * trajet router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::trajet.trajet');

const customRoutes = [
  {
    method: 'GET',
    path: '/trajets/document/:documentId',
    handler: 'trajet.findByDocumentId',
    config: {
      auth: false,
    },
  },
];

export default {
  ...defaultRouter,
  routes: [...defaultRouter.routes, ...customRoutes],
};