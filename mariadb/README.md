# 设置MariaDB的默认密码
```bash
$ cd default-password/
$ docker build -t db:pwd .
$ docker run -itd -p 3306:3306 db:pwd
$ docker exec -it CONTAINER_ID bash
$ mysql -u root -p
$ 输入：123456
```

# 启动MariaDB并导入sql文件
```bash
$ cd dump-sql/
$ docker build -t db:dump .
$ docker run -itd -p 3306:3306 db:dump
$ mysql -h 0.0.0.0 -P 3306 -u root -p123456 < test.sql
```