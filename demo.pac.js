/*
 对所有URL，都直接连接；
 如果不能直接连接，那么就使用192.168.1.100:7070这个http代理连接；
 如果还是不能连接，则使用127.0.0.1:7070这个socks5代理连接。
*/
function FindProxyForURL(url, host) {
	  return "DIRECT; PROXY 192.168.1.100:7070; SOCKS5 127.0.0.1:7070"; 
} 
