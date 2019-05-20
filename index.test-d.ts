import { expectType } from 'tsd';
import randomString = require('.');

expectType<string>(randomString());
expectType<string>(randomString(30));