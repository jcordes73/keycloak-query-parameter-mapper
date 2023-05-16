function authenticate(context) {

  var username = user ? user.username : "anonymous";
  var uri = new java.net.URI(httpRequest.httpHeaders.getHeaderString("Referer"));
  
  LOG.info(uri);
  
  var uriInfo = new org.jboss.resteasy.spi.ResteasyUriInfo(uri);
  var states = uriInfo.queryParameters['state'];

  if (states !== null ){

    var state = state[0];

    LOG.info(script.name + ": " + username + " state=" + state);
    authenticationSession.setUserSessionNote("state", state);

  }

  context.success();
}
