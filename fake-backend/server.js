import { createServer } from 'the-fake-backend';

const server = createServer();

server.routes([
  {
    path: '/example',
    methods: [
      {
        type: 'get', // or MethodType.GET with Typescript
        data: 'your-response-data-here',
        // data: (req) => 'your-response-data-here-based-in-request'
      },
    ],
  },
]);

server.listen(8080);