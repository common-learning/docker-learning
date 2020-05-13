# 如何使用node-mariadb
```bash
$ cd node-mariadb/
$ docker-compose up -d
$ curl 127.0.0.1:3001   #等待大概五秒左右执行该命令(因为数据库启动需要时间)
```

# 创建ElasticSearch集群
```bash
$ cd elasticsearch-multi-node/
$ docker-compose up -d
$ curl -X GET "localhost:9200/_cat/nodes?v&pretty"
```
- [参考链接](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html#docker-compose-file)