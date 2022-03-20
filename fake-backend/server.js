import { createServer } from 'the-fake-backend';

const server = createServer();

server.routes([
  {
    path: '/user',
    methods: [
      {
        type: 'get', // or MethodType.GET with Typescript
        file: 'user.json',
      }
    ],
  },
]);

server.listen(8080);