﻿# 如何使用http-server
```bash
$ cd http-server/
$ docker build -t http:server .
$ docker run -itd -p 3001:3001 http:server
$ curl 127.0.0.1:3001
```
