'use strict';

import { test } from 'ava';
import config from '../../config';

test('is correctly defined', t => {
    t.is(typeof config._get, 'function');
});

test('returns itself when called', t => {
    t.deepEqual(config._get(), config);
});
