import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::trajet.trajet', ({ strapi }) => ({
  async findByDocumentId(ctx) {
    const { documentId } = ctx.params;

    const trajet = await strapi.entityService.findMany('api::trajet.trajet', {
      filters: { documentId: documentId },
      limit: 1,
    });

    if (!trajet || trajet.length === 0) {
      return ctx.notFound('Trajet non trouvé');
    }

    return trajet[0];
  },
}));
