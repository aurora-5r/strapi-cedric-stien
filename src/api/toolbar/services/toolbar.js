'use strict';

/**
 * toolbar service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::toolbar.toolbar');
