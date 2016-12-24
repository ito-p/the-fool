# The Fool

The Foolは、jsonを渡すとスクレイピングしてきてくれます。

## スクレイピング
サイト内の情報を取得します。
### 用意するjson
```json
{
  "data": [
    ["goto", "https://www.google.co.jp/"],
    ["type", "form[action='/search']", "fool"],
    ["click", "form[action*='/search'] [type=submit]"],
    ["wait", "._NId h3 a"],
    ["snatch", "._NId h3 a", "innerText"]
  ]
}
```

### サンプルコード
```es6
const data = {
  data: [
    ["goto", "https://www.google.co.jp/"],
    ["type", "form[action='/search']", "fool"],
    ["click", "form[action*='/search'] [type=submit]"],
    ["wait", "._NId h3 a"],
    ["snatch", "._NId h3 a", "innerText"]
  ]
};

const fool = new Fool();

fool.travel(data)
  .then(result => {
    console.log(result);
  });

/**
* CONSOLE
*
[ [ 'foolの意味 - 英和辞典 Weblio辞書',
    'FOOLの番長ブログ - アメーバブログ',
    'foolの意味・用例｜英辞郎 on the WEB：アルク',
    'foolの意味 - goo辞書 英和和英',
    'FooL',
    'FOOLとは (フールとは) [単語記事] - ニコニコ大百科',
    'フール(FOOL)｜ホットペッパービューティー',
    'FOOL THE PUBLIC OFFICIAL WEB SITE - Jimdo',
    'Shaqtin\' A Fool - NBA.com',
    'Fool.com: Stock Investing Advice | Stock Research' ] ]
*/
```

### その他の操作について

nightmare.jsを使用しています。下記は主なコマンドです。
Intaract with the pageの詳細は、nightmareをご参照ください。

https://github.com/segmentio/nightmare/blob/master/Readme.md#interact-with-the-page

|概要|intaract with the page|json.dataの例|
|---|---|---|
|WEBページを開く|goto|["goto", "https://www.google.co.jp/"]|
|テキストボックスに入力|type|["type", "form[action='/search']", "fool"]|
|セレクターで指定された<br>要素の表示を待つ|wait|["wait", "._NId h3 a"]|
|セレクターで指定された<br>要素をクリックする|click|["click", "form[action*='/search'] [type=submit]"]|
|セレクターで指定された<br>単一の要素のpropertyを取得する|scrape|["scrape", "._NId h3 a", "innerText"]|
|セレクターで指定された<br>要素のpropertyを配列で取得する|snatch|["snatch", "._NId h3 a", "innerText"]|

## 詩
> ゼロを知れ！いずれの遣り方も、無知であれば許される。 - アレイスター・クロウリー 『トートの書』(国書刊行会、1991年)
