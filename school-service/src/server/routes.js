/**
 * Again, I put everything in 1 file to save time.
 * Ideally I'd have made a proper directory structure with separate models, controllers and routes
 */

import {
  studentRoutes,
  professorRoutes,
  moduleRoutes,
  junctionRoutes,
} from './routes/index.js';

const setupRoutes = (app) => {
  /** STUDENTS */
  studentRoutes(app);

  /** PROFESSORS */
  professorRoutes(app);

  /** MODULES */
  moduleRoutes(app);
};

export default setupRoutes;
