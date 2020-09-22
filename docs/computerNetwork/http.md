# http协议

## https

https数据传输过程中，使用SSL/TLS对数据进行加密，使用http对加密后的数据进行传输。所以:  
> https = http + SSL/TLS。

## SSL
SSL全称为Secure Socket Layer，即安全套接层协议，是为网络通信提供安全及数据完整性的一种安全协议。

## TLS
TLS全称为Transfer Layer Security，安全传输层协议，是SSL3.0的后续版本。

### 对称加密
对称加密又称为公钥加密。即信息的发送方和接收方使用同一个密钥去进行信息的加密或解密。
加密：明文 + 公钥 + 加密算法 => 密文  
解密：密文 + 公钥 + 解密算法 => 明文  

### 非对称加密
非对称加密又称为私钥加密。
加密：明文 + 公钥 + 加密算法 => 密文  
解密：密文 + 私钥 + 解密算法 => 明文  

### https流程
![https](../assets/https.jpg)

### 证书验证流程
![CA](../assets/validateCA.jpg)

## Q&A
1. http和https的区别
2. 详述一下https的流程
3. 如何验证证书