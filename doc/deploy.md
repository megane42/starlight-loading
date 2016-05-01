# デプロイ方法

## Firefox

* package.json のバージョンを最新の値に変更
* ルートディレクトリから古い xpi を削除
* `$ jpm sign --api-key ${AMO_API_KEY} --api-secret ${AMO_API_SECRET}`
    * キーとシークレット: https://addons.mozilla.org/en-US/developers/addon/api/key/
* ダウンロードされた署名済みの xpi を starlight_loading-latest.xpi にリネーム
* starlight-loading-latest.update.rdf を開いてバージョンを最新の値に変更
* `$ git push origin master`
* `$ git checkout gh-pages`
* `$ git merge master`
* `$ git push origin gh-pages`

## Chrome

* manifest.json のバージョンを最新の値に変更
* 必要なファイルだけ zip で固める
* https://chrome.google.com/webstore/developer/dashboard
* 新しいアイテムを追加（初回）or 編集する（更新時）
* zip をアップロード

## JS / CSS

* `$ npm run build-js`
* `$ npm run build-css`
