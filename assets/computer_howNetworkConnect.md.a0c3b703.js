import{_ as e,c as t,o as a,a as o}from"./app.9bd94a15.js";const u='{"title":"\u7CBE\u8BFB\u300A\u7F51\u7EDC\u662F\u600E\u6837\u8FDE\u63A5\u7684\u300B","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u751F\u6210 HTTP \u8BF7\u6C42","slug":"\u751F\u6210-http-\u8BF7\u6C42"},{"level":3,"title":"DNS \u67E5\u8BE2","slug":"dns-\u67E5\u8BE2"},{"level":3,"title":"\u59D4\u6258\u534F\u8BAE\u6808\u53D1\u9001\u6D88\u606F","slug":"\u59D4\u6258\u534F\u8BAE\u6808\u53D1\u9001\u6D88\u606F"}],"relativePath":"computer/howNetworkConnect.md","lastUpdated":1645672724000}',r={},n=o(`<h1 id="\u7CBE\u8BFB\u300A\u7F51\u7EDC\u662F\u600E\u6837\u8FDE\u63A5\u7684\u300B" tabindex="-1">\u7CBE\u8BFB\u300A\u7F51\u7EDC\u662F\u600E\u6837\u8FDE\u63A5\u7684\u300B <a class="header-anchor" href="#\u7CBE\u8BFB\u300A\u7F51\u7EDC\u662F\u600E\u6837\u8FDE\u63A5\u7684\u300B" aria-hidden="true">#</a></h1><h3 id="\u751F\u6210-http-\u8BF7\u6C42" tabindex="-1">\u751F\u6210 HTTP \u8BF7\u6C42 <a class="header-anchor" href="#\u751F\u6210-http-\u8BF7\u6C42" aria-hidden="true">#</a></h3><p>\u8F93\u5165\u7F51\u5740\u540E\uFF0C\u6D4F\u89C8\u5668\u7684\u7B2C\u4E00\u6B65\u5DE5\u4F5C\u5C31\u662F\u5BF9 URL \u8FDB\u884C\u89E3\u6790\uFF0C\u751F\u6210\u53D1\u9001\u7ED9 Web \u670D\u52A1\u5668\u7684\u6D88\u606F\u3002<strong>URL \u7684\u683C\u5F0F\u4F1A\u968F\u7740\u534F\u8BAE\u7684\u4E0D\u540C\u800C\u4E0D\u540C\uFF0C\u8BBF\u95EE web \u670D\u52A1\u5668\u65F6\u5E94\u8BE5\u4F7F\u7528 HTTP \u534F\u8BAE</strong>\u3002</p><div class="language-"><pre><code>URL = HTTP\u534F\u8BAE + // + Web\u670D\u52A1\u5668\u540D + \u6570\u636E\u6E90\u8DEF\u5F84\u540D
</code></pre></div><p>HTTP \u534F\u8BAE\u5B9A\u4E49\u4E86\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u4EA4\u4E92\u7684\u6D88\u606F\u5185\u5BB9\u548C\u6B65\u9AA4\u3002</p><p>\u9996\u5148\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u6D88\u606F\uFF0C\u670D\u52A1\u5668\u63A5\u6536\u5230\u6D88\u606F\u540E\uFF0C\u6839\u636E\u6D88\u606F\u4E2D\u7684 URI \u548C HTTP \u65B9\u6CD5\u8FDB\u884C\u5DE5\u4F5C\u5E76\u54CD\u5E94\u3002</p><div class="language-"><pre><code>URI(Uniform Resource Identifier) \u7EDF\u4E00\u8D44\u6E90\u6807\u8BC6\u7B26
URL(Uniform Resource Locator) \u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26
URL\u662FURI\u7684\u5B50\u96C6\u3002URL\u662FURI\u7684\u4E00\u79CD\u5F62\u5F0F\u3002
</code></pre></div><h3 id="dns-\u67E5\u8BE2" tabindex="-1">DNS \u67E5\u8BE2 <a class="header-anchor" href="#dns-\u67E5\u8BE2" aria-hidden="true">#</a></h3><p>\u6839\u636E\u57DF\u540D\u67E5\u8BE2 IP \u5730\u5740\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u4F7F\u7528 DNS \u89E3\u6790\u5668\uFF0CDNS \u67E5\u8BE2\u65F6\uFF0C\u4F7F\u7528\u7684\u662F UDP \u534F\u8BAE\u3002</p><p>DNS \u89E3\u6790\u5668\u5B9E\u9645\u4E0A\u662F\u4E00\u6BB5\u7A0B\u5E8F\uFF0C\u5305\u542B\u5728\u64CD\u4F5C\u7CFB\u7EDF\u7684 Socket \u5E93\u4E2D\uFF0CSocket \u5E93\u662F\u7528\u4E8E\u8C03\u7528\u7F51\u7EDC\u529F\u80FD\u7684\u7A0B\u5E8F\u7EC4\u4EF6\u96C6\u5408\u3002</p><h3 id="\u59D4\u6258\u534F\u8BAE\u6808\u53D1\u9001\u6D88\u606F" tabindex="-1">\u59D4\u6258\u534F\u8BAE\u6808\u53D1\u9001\u6D88\u606F <a class="header-anchor" href="#\u59D4\u6258\u534F\u8BAE\u6808\u53D1\u9001\u6D88\u606F" aria-hidden="true">#</a></h3><p>\u6D4F\u89C8\u5668\u59D4\u6258\u534F\u8BAE\u6808\u4F7F\u7528 TCP \u534F\u8BAE\u6765\u6536\u53D1\u6570\u636E\uFF0C\u9700\u8981\u6309\u7167\u6307\u5B9A\u7684\u987A\u5E8F\u6765\u8C03\u7528 socket \u5E93\u4E2D\u7684\u7A0B\u5E8F\u7EC4\u4EF6\u3002</p><p>\u534F\u8BAE\u6808\u6536\u5230\u59D4\u6258\u4E4B\u540E\u6536\u53D1\u6570\u636E\u7684\u8FC7\u7A0B\uFF1A</p><ol><li><p>\u521B\u5EFA\u5957\u63A5\u5B57</p><p>\u8C03\u7528 socket \u521B\u5EFA\u5957\u63A5\u5B57\uFF0C\u4F1A\u5728\u5185\u5B58\u4E2D\u5F00\u8F9F\u4E00\u4E2A\u5957\u63A5\u5B57\u6240\u9700\u7684\u7A7A\u95F4\uFF0C\u7136\u540E\u5411\u5176\u4E2D\u5199\u5165\u521D\u59CB\u72B6\u6001\u3002</p><p>\u5957\u63A5\u5B57\u53EA\u662F\u4E00\u4E2A\u6982\u5FF5\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u5B58\u653E\u4E86\u63A7\u5236\u4FE1\u606F\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u534F\u8BAE\u6808\u65F6\u6839\u636E\u8FD9\u4E9B\u4FE1\u606F\u8FDB\u884C\u5DE5\u4F5C\u3002windows \u4E2D\u53EF\u4EE5\u4F7F\u7528 netstat \u547D\u4EE4\u663E\u793A\u5957\u63A5\u5B57\u5185\u5BB9\u3002</p></li><li><p>\u5C06\u7BA1\u9053\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u7AEF\u7684\u5957\u63A5\u5B57\u4E0A</p><p>\u8C03\u7528 socket \u5E93\u4E2D\u7684 connect \u7EC4\u4EF6\u5B8C\u6210\u5BA2\u6237\u7AEF\u5957\u63A5\u5B57\u4E0E\u670D\u52A1\u7AEF\u5957\u63A5\u5B57\u8FDE\u63A5\uFF0C\u8C03\u7528 connect \u65F6\uFF0C\u9700\u8981\u6307\u5B9A\u63CF\u8FF0\u7B26\u3001\u670D\u52A1\u5668 IP\u3001\u7AEF\u53E3\u53F7\u3002<strong>\u63CF\u8FF0\u7B26\u7528\u4E8E\u8BA1\u7B97\u673A\u5185\u90E8\u8BC6\u522B\u5957\u63A5\u5B57\u673A\u5236\uFF0C\u7AEF\u53E3\u53F7\u548C IP \u662F\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4E4B\u95F4\u7528\u6765\u8BC6\u522B\u5957\u63A5\u5B57\u7684\u673A\u5236\u3002</strong></p></li><li><p>\u6536\u53D1\u6570\u636E</p></li><li><p>\u65AD\u5F00\u7BA1\u9053\u5E76\u5220\u9664\u5957\u63A5\u5B57</p></li></ol>`,14),s=[n];function i(c,p,d,l,h,_){return a(),t("div",null,s)}var f=e(r,[["render",i]]);export{u as __pageData,f as default};
