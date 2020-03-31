# 学习MariaDB

## 设置MariaDB镜像的默认密码
```bash
$ docker build -t db:test .
$ docker run -itd -p 3306:3306 db:test
$ docker exec -it CONTAINER_ID bash
$ mysql -u root -p
$ 输入：123456
```