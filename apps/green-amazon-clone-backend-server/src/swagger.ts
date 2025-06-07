import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("green-amazon-clone-backend")
  .setDescription(
    'This is the backend service for the Amazon Clone project, built using Amplication\'s Node.js standard. It powers sustainability tagging, product management, group buying sessions, and LeafCoin rewards system.\n\nFeatures include:\n- REST API for product, category, user, and order management\n- Custom models for green scoring, group sessions, and coin tracking\n- JWT-based auth for buyers and admins\n- Integrated with PostgreSQL and Prisma ORM\n\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your service resource comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "green-amazon-clone-backend",
};
