import http from 'http';
import { renderToString } from 'react-dom/server'
import DOM from 'react-dom-factories';

function requestHandler(request, response){
    const html = renderToString(
        DOM.h1(null, 'Hello, world!')
    );

    response.write(html);
    response.end();
}

const server = http.createServer(requestHandler);
server.listen(3000);