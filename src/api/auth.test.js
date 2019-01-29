import { Auth } from 'aws-amplify';
import { auth } from './index.js';
jest.mock('aws-amplify');

describe('API:', () => {
  let mockInfo;
  let expected;

  beforeEach(() => {
    mockInfo = {
      firstName: 'Foo',
      lastName: 'Bar',
      email: 'Baz',
      registerPassword: 'Quux',
      farmLocation: 'Quuz',
      farmSize: 'Flim',
      termsAgreed: true
    };

    expected = {
      username: mockInfo.email,
      password: mockInfo.registerPassword,
      attributes: {
        given_name: mockInfo.firstName,
        family_name: mockInfo.lastName,
        email: mockInfo.email,
        'custom:farm_location': mockInfo.farmLocation,
        'custom:farm_size': mockInfo.farmSize,
        'custom:terms_agreed': mockInfo.termsAgreed
      }
    };
  });

  afterEach(() => {
    Auth.signUp.mockClear();
  });

  describe('register method', () => {
    test('calls Auth.signUp with the right arguments', async () => {
      await auth.register(mockInfo);
      expect(Auth.signUp.mock.calls).toEqual([[expected]]);
    });

    test('does not include custom:farm_location or custom:farm_size if not provided', async () => {
      mockInfo.farmLocation = undefined;
      mockInfo.farmSize = undefined;

      expected.attributes['custom:farm_location'] = undefined;
      expected.attributes['custom:farm_size'] = undefined;

      await auth.register(mockInfo);
      expect(Auth.signUp.mock.calls).toEqual([[expected]]);
    });
  });

  describe('login method', () => {
    test('calls Auth.signIn with the right arguments', async () => {
      const username = 'Foo',
        password = 'Bar';
      await auth.login(username, password);
      expect(Auth.signIn.mock.calls).toEqual([[username, password]]);
    });
  });

  describe('logout method', () => {
    test('calls Auth.signOut', async () => {
      await auth.logout();
      expect(Auth.signOut.mock.calls.length).toBe(1);
    });
  });
});
