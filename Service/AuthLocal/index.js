import LocalAuthentication from 'rn-local-authentication';

export const AuthenLocal = async () => {
  await LocalAuthentication.authenticateAsync({
    reason: 'Enter your password to use app',
    fallbackEnabled: true,
    fallbackTitle: 'Enter password',
    cancelTitle: 'Cancel',
    reuseDuration: '300',
    fallbackToPinCodeAction: true,
  })
};
