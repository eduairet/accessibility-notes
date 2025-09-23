# Accessibility Notes

Web Content Accessibility Guidelines (WCAG) and web accessibility in general notes.

## Notes

- [Web Accessibility Overview](./_notes/01-overview.md)

## Instructions

- Run the Docker compose setup which will build the application container.
- Run the following command for running the application.

  ```bash
  docker-compose up --build
  ```
- Access the application at `http://localhost:5173`.
- To access the container's shell, use the command:

  ```bash
  docker exec -it accessible-app /bin/sh
  ```
