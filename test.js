import test from 'ava';
import rs from '.';

test('Main', t => {
	t.truthy(rs());
	t.not(rs(), rs());
	t.is(rs().length, 30);
	t.is(rs(7).length, 7);
	t.true(rs().length > 0);
	t.is(rs().length, rs().length);
});
