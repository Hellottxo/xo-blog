---
title: 浏览器缓存策略
---

浏览器缓存可以**有效减少网络开销，减轻服务器压力，加快页面响应速度**，是提升性能的一种有效方式。 
<!-- more -->

# 浏览器缓存策略
浏览器缓存的主要流程: 
![cache](../assets/cache.jpg)
浏览器根据http首部字段对http响应报文进行缓存，根据使用的http首部字段不同可以分为**强缓存**和**协商缓存**。
## 强缓存
命中强缓存后，浏览器将直接读取本地缓存，不会发送请求。  

相关http头部字段：
### Expires
```
Expires: Tue, 28 Jul 2020 14:31:37 GMT
```
Expires字段会将资源过期的时间告知客户端。在Expires字段值指定的时间之前，响应的副本会一直被保存，在此之前发起相同请求，会命中强缓存。
### Cache-Control
常用值: 
- `public`: 可以被任何对象缓存
- `private`: 只有浏览器可以缓存
- `no-cache`: 在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证(协商缓存验证)
- `no-store`: 不使用任何缓存
- `max-age=<seconds>`: 设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。

浏览器第一次发送请求后，响应请求头中Cache-Control的值为：max-age=600，则600ms内再次发起相同请求，命中强缓存。

### 对比
Expires返回的是指定的时间，当客户端时间和服务端时间存在误差时，会导致强缓存失效。现代浏览器默认使用的是HTTP/1.1，而HTTP/1.1中，Expires已经被Cache-Control取代。

## 协商缓存
未命中强缓存时，浏览器会发送请求，服务端通过对比http请求首部字段来判断是否命中协商缓存。命中后，浏览器将直接读取本地缓存。未命中协商缓存时，将从服务端加载资源。

### Last-Modified 和 If-Modified-Since
```
Last-Modified: Tue, 28 Jul 2020 14:31:37 GMT
If-Modified-Since: Tue, 28 Jul 2020 14:31:37 GMT
```
Last-Modified指明资源最终修改的时间。
当浏览器再次发送相同请求，未命中强缓存时，请求首部字段带上If-Modified-Since（值为上次请求响应的Last-Modified），服务端根据资源更新时间与If-Modified-Since进行对比，判断资源是否发生改变，进行响应。

### ETag 和 If-None-Match
```
ETag: "123ewr3245253523"
If-None-Match: "123ewr3245253523"
```
响应首部字段ETag是资源的唯一标识。  
当资源更新时，ETag值也需要更新。生成ETag值时，并没有统一的算法规则，而仅仅是由服务器来分配。  
ETag可分为强ETag和弱ETag: 

- 强ETag: 资源发生任何改变，ETag都会改变。
    ETag: "user-123"
- 弱ETag: 仅用于提示资源是否相同，只有资源发生根本变化时，ETag值才会发生改变，改变时，会在字段开始处附加 W/。
    ETag: W/"user-123"  

当浏览器再次发送相同请求，未命中强缓存时，请求首部字段带上If-None-Match（值为上次请求响应的ETag），服务端根据资源当前唯一标识与If-None-Match进行对比，判断资源是否发生改变，进行响应。
### 对比
- ETag 和 If-None-Match的优先级高于Last-Modified 和 If-Modified-Since。
- Etag是服务器返回的资源统一标识，解决了使用Last-Modified的几个难题：
    1. 部分资源存在周期性的修改，但这个改动仅仅修改了时间，服务端并不希望客户端识别这次修改。
    2. If-Modified-Since的响应粒度是s级，当资源在s内频繁改动时，If-Modified-Since无法响应。
