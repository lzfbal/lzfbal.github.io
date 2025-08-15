---
title: https免费证书申请
tags:
  - web
createTime: 2025/08/15 13:59:39
permalink: /article/08151359/
draft: false
---

### 操作步骤如下
```bash
sudo yum install snapd -y

sudo systemctl enable --now snapd.socket

sudo ln -s /var/lib/snapd/snap /snap

sudo snap install --classic certbot

sudo ln -s /snap/bin/certbot /usr/bin/certbot

sudo certbot --nginx --nginx-server-root /your/nginx/conf/path -d yourdomain.com -d www.yourdomain.com
```

