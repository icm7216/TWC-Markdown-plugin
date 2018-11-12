# Change Log (write in Japanese)

# 変更履歴

## 1.2.3 Nov. 13, 2018

*   Update Marked.js, change version to 0.5.1 

## 1.2.2 MAy 23, 2018

*   Changed stylesheet for the code block. Adapted to marked.js 0.4.0.

## 1.2.1 Apr. 17, 2018

*   Marked.jsを0.3.19に変更。

## 1.2.0 Aug. 01, 2017

サイドバーに newMarkdown ボタンを追加。

## 1.1.0 Jul. 22, 2017

ローカルライブラリ使用時の切り替えを容易にできるように、オフライン・オプション`chkMarkdownOffline`を追加。

## Jul. 21, 2017

便宜上、プラグインtiddlerを個別ファイルに作成して履歴管理できるように、[icm7216.github.io/MyTiddlyWiki/](https://icm7216.github.io/MyTiddlyWiki/) からプラグインの個別リポジトリを作成。
 
## 1.0.10 May 24, 2017

*   Marked.jsを0.3.6に変更。

## 1.0.9 Dec. 23, 2015

*   TiddlyLinkに対応。外部リンクに`target = "_blank"`を追加。

## 1.0.8 Dec. 01, 2015

*   table tdのpaddingを調整。

## 1.0.7 Oct. 26, 2015

*   Marked.jsを0.3.5に変更。 google/code-prettifyのGitHub移行に伴いリンクを修正、[google code](https://code.google.com/p/google-code-prettify/) から [GitHub](https://github.com/google/code-prettify) に。
*   パーマリンクで開いたtiddlerの中にMarkdownコンテンツを含む場合、ページ内のMarkdownをレンダリングできない不具合への対策。プラグインの読み込み前にtiddlerが表示されるのが原因。
*   プラグイン管理メニューを開くと、プラグイン情報にオリジナルのDescriptionとVersionが表示されていた。これを正しく表示できるように修正。
*   コードブロックのcssを追加、用途は端末画面の記述用。記述方法はUsage項目の記述サンプルを参照。

## 1.0.6 Aug. 27, 2014

*   font-sizeを調整。

## 1.0.5 May 22, 2014
*   シンタックスハイライトをhighlightのコールバックで行うため、prettyPrintOneに変更。これに合わせてcssを修正。Marked.jsのCDNJSを0.3.2に変更。

## 1.0.4 Apr. 06, 2014

*   Marked.jsのCDNJSを0.3.1に変更。

## 1.0.3 Dec. 01, 2013

*   prettify.jsをCDNJS [prettify - cdnjs](http://cdnjs.com/libraries/prettify/) に変更。 

## 1.0.2 Nov. 22, 2013

*   headerのstyleを修正。

## 1.0.1 Nov. 07, 2013

*   Marked.jsをCDNJSに変更。 [marked - cdnjs](http://cdnjs.com/libraries/marked/)

## 1.0.0 Nov. 07, 2013

*   オリジナルの [ShowDown](http://showdown.tiddlyspace.com/) を元に作成。
*   MarkdownのパーサーをGFMに対応できる [marked.js](https://github.com/chjj/marked/tree/master/) へ変更。
*   シンタックスハイライト [google-code-prettify](https://github.com/google/code-prettify/tree/master) を追加。
*   Markdown用のスタイルシートtiddlerを個別に作らずプラグイン内にcssを含めたことで、オンライン使用の場合はプラグインのインストールだけですぐに使えるようになった。