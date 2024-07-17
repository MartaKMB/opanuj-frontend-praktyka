// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import { renderItems } from './renderer';

const users: User[] = [
  { id: 1, name: 'John', age: 30, role: 'user' },
  { id: 2, name: 'Jane', age: 25, role: 'admin' },
  { id: 3, name: 'Jack', age: 40, role: 'user' },
];

describe('User renderer', () => {
  test('should render all users if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);
    const matches = container.querySelectorAll('li');
    expect(matches).toHaveLength(3);
    matches.forEach(item => expect(item.textContent).to.contain('Name') && expect(item.textContent).to.contain('Age'));
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const container = document.createElement('div');
    renderItems(container, users);
    const matches = container.querySelectorAll('li');
    expect(matches).toHaveLength(2);
    matches.forEach(item => expect(item.textContent).to.contain('Name') && expect(item.textContent).to.contain('Age'));
  });

  // test('should render all users have Name and Age if admin is rendering the list', () => {
  //   localStorage.setItem('userRole', 'admin');

  //   const container = document.createElement('div');
  //   const matches = container.querySelectorAll('li');
  //   renderItems(container, users);

  //   expect(matches).toHaveLength(3);
  //   matches.forEach((m) => {
  //     expect(m).toBeInTheDocument();
  //   });

  //   // expect(Array.from(container.querySelectorAll('li'))).toContain('(Admin)');
  //   // expect(container.getByText('(Admin)')).toBeInTheDocument();
  // });
  
});
