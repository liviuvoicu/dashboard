const oktaAuthConfig = {
    pkce: false,
    issuer: 'https://dev-971690.okta.com/oauth2/default',
    clientId: '0oa8dxpaoaS2MMzak357',
    redirectUri: window.location.origin + '/login/callback',
};

const oktaSignInConfig = {
    baseUrl: 'https://dev-971690.okta.com',
    clientId: '0oa8dxpaoaS2MMzak357',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {
        pkce: false,
    }
}

export { oktaAuthConfig, oktaSignInConfig };