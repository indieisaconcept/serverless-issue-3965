import { test } from 'ava';
import { handler } from '../../../lib/default';

test('exported handler is a function', (t) => {

    t.is(typeof handler, 'function');
    t.is(handler.length, 3, 'has an arity of 3');
});

test.cb('handler passed "event" & "context" objects when called', t => {

    handler({
        name : 'event'
    }, {
        name : 'context'
    }, (noerr, result) => {

        t.deepEqual(result, {
            statusCode : 200,
            body       : JSON.stringify({
                event   : { name : 'event' },
                context : { name : 'context' }
            })
        });
        t.end();
    });
});
