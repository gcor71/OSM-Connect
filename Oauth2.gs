function logout() {
  var service = getOSMService()
  service.reset();
}

/**
 * Configures the service.
 */
function getOSMService() {
  // Google Sheets OSM App creds
  if (DEV_MODE) {
    // Add creds here for debugging. NEVER publish with creds here!
    var client_id = 'VSEbdNLaRL48tSVjGuuTOiHeAI8EH2xI';
    var client_secret = 'sSCdom50tIRpVuqw1Y8xLNjvQSu6ZW0k7RK2ACWj61uCrAkmpmwzbWIH1I8lZGGv';
  } else {
    var client_id = fetch_userid();
    var client_secret = fetch_secret();
  }

  return OAuth2.createService('OSM')
      // Set the endpoint URLs.
      .setTokenUrl('https://www.onlinescoutmanager.co.uk/oauth/token')

      // Set the client ID and secret.
      .setClientId(client_id)
      .setClientSecret(client_secret)

      // Sets the custom grant type to use.
      .setGrantType('client_credentials')

      // Set the property store where authorized tokens should be persisted.
      .setPropertyStore(PropertiesService.getUserProperties())

      // Set the cache
      .setCache(CacheService.getUserCache())

      // Set a lock
      .setLock(LockService.getUserLock())

      // Set the scopes to request (space-separated for Google services).
      .setScope('section:attendance:read section:event:read section:flexirecord:read section:member:read section:finance:read section:badge:read');
      //.setScope('section:member:read');
      // .setScope('section:event:read');

}
