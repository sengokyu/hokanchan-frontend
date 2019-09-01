# ホスティング

AWS S3 でホスティングします。

## S3 バケットの準備

別ドメイン名でホストする場合は、バケット名を DNS CNAME レコードに合わせる必要があります。

```sh
s3bucket=MY-BUCKET-NAME
s3uri=s3://${s3bucket}
```

```sh
# バケットを作成
aws s3 mb ${s3uri} --region ap-northeast-1
# バケットをWebiteとして使用
aws s3 website ${s3uri} --index-document
# 公開ポリシーをセット
aws s3api put-bucket-policy --bucket ${s3bucket} --policy file://etc/aws-s3-bucket-policy.json
```

## アップロード

```sh
aws s3 sync dist/hokanchan ${s3uri}
```
