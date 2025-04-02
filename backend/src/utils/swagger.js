const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Hotel",
      version: "1.0.0",
      description: "API para configuración de Hotel",
    },
    servers: [{ url: "http://localhost:3003" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.js"]
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = { swaggerDocs };
