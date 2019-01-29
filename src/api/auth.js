import { Auth } from 'aws-amplify';

export const register = async ({
  firstName,
  lastName,
  email,
  registerPassword,
  farmLocation,
  farmSize,
  termsAgreed
}) => {
  const attributes = {
    given_name: firstName,
    family_name: lastName,
    email,
    'custom:terms_agreed': termsAgreed
  };

  // We don't want to send these if they are undefined
  farmLocation && (attributes['custom:farm_location'] = farmLocation);
  farmSize && (attributes['custom:farm_size'] = farmSize);

  return await Auth.signUp({
    username: email,
    password: registerPassword,
    attributes
  });
};

export const login = async (username, password) => {
  return await Auth.signIn(username, password);
};

export const logout = async () => {
  return await Auth.signOut();
};

export const forgotPassword = async username => {
  return await Auth.forgotPassword(username);
};

export const resetPassword = async (username, code, password) => {
  return await Auth.forgotPasswordSubmit(username, code, password);
};

export const confirmUser = async (username, code) => {
  return await Auth.confirmSignUp(username, code);
};

export const getCurrentUser = async () => {
  return await Auth.currentAuthenticatedUser();
};
