import 'reflect-metadata';
import { expect, test, describe } from 'bun:test';
import { Base } from '@/app/api/models/_base';

describe('Base', () => {
    const base = new Base();

    test('version', () => {
        expect(base.version()).toBe(process.env.NODE_ENV);
    });
});
