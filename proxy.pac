function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*.local/*")) {
    return "PROXY 192.168.1.56:8888";
  }
  return "PROXY 192.168.1.56:8888; DIRECT";
}

