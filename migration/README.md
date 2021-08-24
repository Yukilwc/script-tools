<!--
 * @Author: 李文超
 * @Date: 2021-08-24 13:48:32
 * @LastEditors: 李文超
 * @LastEditTime: 2021-08-24 20:16:23
 * @Description: file content
-->
# 小程序首页备份迁移

``` bash
# 备份指定的首页
npx gulp mp2Backup --name index10

# 将指定备份中的首页拷贝替换小程序工程首页
npx gulp backup2Mp --name index10

```