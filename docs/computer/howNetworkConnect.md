---
title: 精读《网络是怎样连接的》
---

### 生成HTTP请求

输入网址后，浏览器的第一步工作就是对URL进行解析，生成发送给Web服务器的消息。**URL的格式会随着协议的不同而不同，访问web服务器时应该使用HTTP协议**。

```
URL = HTTP协议 + // + Web服务器名 + 数据源路径名
```

HTTP协议定义了客户端和服务器之间交互的消息内容和步骤。

首先，客户端会向服务器发送请求消息，服务器接收到消息后，根据消息中的URI和HTTP方法进行工作并响应。

```
URI(Uniform Resource Identifier) 统一资源标识符
URL(Uniform Resource Locator) 统一资源定位符
URL是URI的子集。URL是URI的一种形式。
```

### DNS查询

根据域名查询IP地址时，浏览器会使用DNS解析器，DNS查询时，使用的是UDP协议。

DNS解析器实际上是一段程序，包含在操作系统的Socket库中，Socket库是用于调用网络功能的程序组件集合。

### 委托协议栈发送消息

浏览器委托协议栈使用TCP协议来收发数据，需要按照指定的顺序来调用socket库中的程序组件。

协议栈收到委托之后收发数据的过程：

1. 创建套接字

   调用socket创建套接字，会在内存中开辟一个套接字所需的空间，然后向其中写入初始状态。

   套接字只是一个概念，可以理解为存放了控制信息的内存空间，协议栈时根据这些信息进行工作。windows中可以使用netstat命令显示套接字内容。

2. 将管道连接到服务器端的套接字上

   调用socket库中的connect组件完成客户端套接字与服务端套接字连接，调用connect时，需要指定描述符、服务器IP、端口号。**描述符用于计算机内部识别套接字机制，端口号和IP是客户端和服务端之间用来识别套接字的机制。**

3. 收发数据

4. 断开管道并删除套接字