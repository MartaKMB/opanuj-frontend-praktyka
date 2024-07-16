import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
    test('should return an error if first name is missing', () => {
        const errors = formValidator('', 'Doe', 30);
        expect(errors).toContain('First name is required');
    });

    test('should return an error if last name is missing', () => {
        const errors = formValidator('John', '', 30);
        expect(errors).toContain('Last name is required');
    });

    test('should return an error if first name is shorter then one sign', () => {
        const errors = formValidator('J', '', 30);
        expect(errors).toContain('Name required at least one sign');
    });

    test('should return an error if last name is shorter then one sign', () => {
        const errors = formValidator('', 'D', 30);
        expect(errors).toContain('Name required at least one sign');
    });

    test('should return an error if age is negative', () => {
        const errors = formValidator('John', 'Doe', -1);
        expect(errors).toContain('Age must be a positive number');
    });

    test('should return an error if age is not a number', () => {
        expect(() => formValidator('John', 'Doe', NaN)).toThrowError(/^Error: age must be a number$/);
    });

    test('should return no error if all data are correct', () => {
        const data = formValidator('John', 'Doe', 23);
        expect(data).toStrictEqual([]);
    });
});