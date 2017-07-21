/***
|''Name''|PluginMarkdown|
|''Description''|Allows to use MarkDown syntax and syntax highlight in a tiddler|
|''Author''|babooshka|
|''Version''|1.0.10|
|''date''|May 24, 2017|
|''Requires''|https://raw.github.com/chjj/marked/master/lib/marked.js <br> https://raw.githubusercontent.com/google/code-prettify/master/loader/prettify.js|
|''License''|[[Creative Commons Attribution-ShareAlike 2.5 License|http://creativecommons.org/licenses/by-sa/2.5/]]|
|''~CoreVersion''|2.8.1|
|''Type''|plugin|

!! 変更履歴
!!! 1.0.10 May 24, 2017
* Marked.jsを0.3.6に変更。
!!! 1.0.9 Dec 23, 2015
* TiddlyLinkに対応。外部リンクに{{{target = "_blank"}}}を追加。
!!! 1.0.8 Dec 01, 2015
* table tdのpaddingを調整。
!!! 1.0.7 Oct 26, 2015
* Marked.jsを0.3.5に変更。 google/code-prettifyのGitHub移行に伴いリンクを修正、[[google code|https://code.google.com/p/google-code-prettify/]]から[[GitHub|https://github.com/google/code-prettify]]に。
* パーマリンクで開いたtiddlerの中にMarkdownコンテンツを含む場合、ページ内のMarkdownをレンダリングできない不具合への対策。プラグインの読み込み前にtiddlerが表示されるのが原因。
* プラグイン管理メニューを開くと、プラグイン情報にオリジナルのDescriptionとVersionが表示されていた。これを正しく表示できるように修正。
* コードブロックのcssを追加、用途は端末画面の記述用。記述方法はUsage項目の記述サンプルを参照。
!!! 1.0.6 Aug 27, 2014
* font-sizeを調整。
!!! 1.0.5 May 22, 2014
* シンタックスハイライトをhighlightのコールバックで行うため、prettyPrintOneに変更。これに合わせてcssを修正。Marked.jsのCDNJSを0.3.2に変更。
!!! 1.0.4 Apr 06, 2014
* Marked.jsのCDNJSを0.3.1に変更。
!!! 1.0.3 Dec 01, 2013
* prettify.jsをCDNJS[[prettify - cdnjs|http://cdnjs.com/libraries/prettify/]]に変更。 
!!! 1.0.2 Nov 22, 2013
* headerのstyleを修正。
!!! 1.0.1 Nov 07, 2013
* Marked.jsをCDNJSに変更。[[marked - cdnjs|http://cdnjs.com/libraries/marked/]]
!!! 1.0.0 Nov 07, 2013
* オリジナルの[[ShowDown|http://showdown.tiddlyspace.com/]]を元に作成。
オリジナルからの変更内容
*  MarkdownのパーサーをGFMに対応できる[[marked.js|https://github.com/chjj/marked/tree/master/]]へ変更。
*  シンタックスハイライト[[google-code-prettify|https://github.com/google/code-prettify/tree/master]]を追加。

プラグイン内にMarkdown用cssを含んでいるため、Markdown用のスタイルシートtiddlerを個別に作らなくて済みます。 オンライン使用の場合は、このプラグインをインストールするだけで使えます。

ここに、参考にしたオリジナルのクレジットを記載します。

credit of original author
<<<
||''Name''|ShowDown|
||''Description''|Allows to use MarkDown syntax in a tiddler|
||''Documentation''|http://tobibeer.tiddlyspace.com/#ShowDown|
||''Author''|Tobias Beer|
||''Contributions''|Mario Pietsch, Paul Downey|
||''Version''|0.9.1|
||''Requires''|https://raw.github.com/tobibeer/TiddlyWikiPlugins/master/resources/ShowDown/ShowDown.js|
||''Source''|https://raw.github.com/tobibeer/TiddlyWikiPlugins/master/plugins/ShowDown.js|
||''License''|[[Creative Commons Attribution-ShareAlike 2.5 License|http://creativecommons.org/licenses/by-sa/2.5/]]|
||''~CoreVersion''|2.5.3|
||''Type''|plugin|
<<<


-----


!Description
* allows to write in the [[GFM|https://help.github.com/articles/github-flavored-markdown]] notation.
* allows to [[syntax highlighting|https://github.com/google/code-prettify]] of source code snippets for {{{<pre>}}} code blocks.<br>This plugin adds a new formatter for {{{<pre class='prettyprint linenums'>}}} within the Markdown contents. 

!Usage
* [[Markdown|http://daringfireball.net/projects/markdown/syntax]] contents wrapped in a {{{<md>...</md>}}} tag. These contents are converted into a tiddler text wrapped in a {{{<html>-</html>}}} tag.

For example
{{{
<md>
This is an h1 header
====================

Unordered list
--------------

* Item one 
* Item two
  * Item A
  * Item B

code blocks
-----------

```
loadStylesheet : function(src) {
    var MdStyleSheet = document.createElement( 'link' );
    MdStyleSheet.type = 'text/css';
    MdStyleSheet.rel = 'stylesheet';
    MdStyleSheet.href = src;
    document.getElementsByTagName( 'head' )[0].appendChild( MdStyleSheet );
},
```

```console
 ~: $ pry
[1] pry(main)> puts "Hello TiddlyWiki"
Hello TiddlyWiki
=> nil
[2] pry(main)>
```

teble
-----

|Left align  |Center align  |Right align
|:-----------|:------------:|-------------:
|0001        |apple         |1234
|0002        |`Strawberry`  |56789

Link
----

TiddlyLink
[Open MainMenu](MainMenu)

Open External link in a new wndow
[Open TiddlyWiki classic](http://classic.tiddlywiki.com/)

</md>
}}}

Displays as:
<md>
This is an h1 header
====================

Unordered list
--------------

* Item one 
* Item two
  * Item A
  * Item B

code blocks
-----------

```
loadStylesheet : function(src) {
    var MdStyleSheet = document.createElement( 'link' );
    MdStyleSheet.type = 'text/css';
    MdStyleSheet.rel = 'stylesheet';
    MdStyleSheet.href = src;
    document.getElementsByTagName( 'head' )[0].appendChild( MdStyleSheet );
},
```

```console
 ~: $ pry
[1] pry(main)> puts "Hello TiddlyWiki"
Hello TiddlyWiki
=> nil
[2] pry(main)>
```

teble
-----

|Left align  |Center align  |Right align
|:-----------|:------------:|-------------:
|0001        |apple         |1234
|0002        |`Strawberry`  |56789

Link
----

TiddlyLink
[Open MainMenu](MainMenu)

Open External link in a new wndow
[Open TiddlyWiki classic](http://classic.tiddlywiki.com/)

</md>


!When using local installation.
If you want to offline use. You need to install "marked.js" and "prettify.js", "prettify.css" in your PC.

!!How to local installation

setp1.
Download and install marked and google-code-prettify zip files. and then extract files using any extract tool. For example, [[7-Zip|http://www.7-zip.org/]], [[Lhaplus|http://www.forest.impress.co.jp/library/software/lhaplus/]], etc.

Download marked.js from here
* [[marked-master.zip|https://github.com/chjj/marked/tree/master/]]

Download prettify.js and prettify.css from here
* [[code-prettify-master.zip|https://github.com/google/code-prettify/tree/master]]

These files should be installed under the directory of TiddlyWiki.

like this
{{{
TiddlyWiki/
    +--- memo.html           <== your TiddlyWiki file
    +--- marked-master/
    |        +--- lib/
    |               +---marked.js
    +--- google-code-prettify/
             +--- prettify.js
             +--- prettify.css
}}}


step2.
Edit the code to specify the local file directory.
* Add comment mark {{{"//"}}} within an "online use" section.
* Remove comment mark {{{"//"}}} within an "offline use" section.
Fix this part of the code. like this
{{{
// ## Online use ##
//scriptMarked : "https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min.js",
//scriptPrettify : "https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.js",
//cssPrettify : "https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.css",

// ## Offline use ##
scriptMarked : "marked-master/lib/marked.js",
scriptPrettify : "google-code-prettify/prettify.js",
cssPrettify : "google-code-prettify/prettify.css",
}}}


step3.
Save the TiddlyWiki. Reload the TiddlyWiki browser window.





!Code
***/
//{{{
if(!version.extensions.PluginMarkdown) {
    version.extensions.PluginMarkdown = { installed: true };

    config.extensions.PluginMarkdown = {

        // ## plugin loading check ##
        ErrorCount : 0,
        ErrorCountLimit : 30,

        // ## Online use ##
        scriptMarked : "https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min.js",
        scriptPrettify : "https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.js",
        cssPrettify : "https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.css",

        // ## Offline use ##
        // scriptMarked : "marked-master/lib/marked.js",
        // scriptPrettify : "google-code-prettify/prettify.js",
        // cssPrettify : "google-code-prettify/prettify.css",

        // ## custom StyleSheet ##
        MyStyleSheet : { text:
                      '/*{{{*/\n'
                      +'.viewer .MarkdownBody {\n'
                      +'    background-color : rgb(251, 251, 251);\n'
                      +'    border: 1px solid rgb(200, 200, 200);\n'
                      +'    padding : 1em;\n'
                      +'}\n'
                      +'.viewer .MarkdownBody h1,\n'
                      +'.viewer .MarkdownBody h2,\n'
                      +'.viewer .MarkdownBody h3,\n'
                      +'.viewer .MarkdownBody h4,\n'
                      +'.viewer .MarkdownBody h5,\n'
                      +'.viewer .MarkdownBody h6 {\n'
                      +'    font-weight: normal;\n'
                      +'    line-height: 1;\n'
                      +'    font-weight: bold;\n'
                      +'    color: rgb(20, 20, 20);\n'
                      +'    margin: 2em 0em 1em 0em;\n'
                      +'}\n'
                      +'.viewer .MarkdownBody h1,\n'
                      +'.viewer .MarkdownBody h2,\n'
                      +'.viewer .MarkdownBody h3 {\n'
                      +'    border-bottom:1px solid rgb(190, 190, 190);\n'
                      +'}\n'
                      +'.viewer .MarkdownBody h1 { font-size: 2.5em; }\n'
                      +'.viewer .MarkdownBody h2 { font-size: 2.0em; }\n'
                      +'.viewer .MarkdownBody h3 { font-size: 1.5em; }\n'
                      +'.viewer .MarkdownBody h4 { font-size: 1.2em; }\n'
                      +'.viewer .MarkdownBody h5 { font-size: 1.0em; }\n'
                      +'.viewer .MarkdownBody h6 { font-size: 0.9em; }\n'
                      +'.viewer .MarkdownBody pre.prettyprint {\n'
                      +'    border-radius: 3px;\n'
                      +'    border: 1px solid rgb(200, 200, 200);\n'
                      +'    background-color: rgb(245, 245, 245);\n'
                      +'    padding: 0px;\n'
                      +'    margin: 1em;\n'
                      +'}\n'                      
                      +'.viewer .MarkdownBody code {\n'
                      +'    border-radius: 3px;\n'
                      +'    border: 1px solid rgb(180, 180, 180);\n'
                      +'    background-color: rgb(240, 240, 240);\n'
                      +'    margin: 0px 2px;\n'
                      +'    padding: 0px 5px;\n'
                      +'    color: rgb(10, 10, 10);\n'
                      +'    font-size: 0.9em;\n'
                      +'    line-height: 1.4em;\n'
                      +'    display: inline-block;\n'
                      +'}\n'
                      +'.viewer .MarkdownBody code.prettyprint {\n'
                      +'    border-radius: 0px;\n'
                      +'    border: none;\n'
                      +'    background-color: rgb(245, 245, 245);\n'
                      +'    box-shadow: 38px 0px 0px rgb(251, 251, 251) inset, 40px 0px 0px rgb(230, 230, 230) inset;\n'
                      +'    display: block;\n'
                      +'    margin: 0px 0px 0px 0px;\n'
                      +'    padding: 0px 0px 0px 0px;\n'
                      +'    font-family: Consolas, "DejaVu Sans Mono", verdana, monospace;\n'
                      +'    font-size: 0.9em;\n'
                      +'    line-height: 1.4em;\n'
                      +'    white-space:pre;\n'
                      +'    word-wrap: normal;\n'
                      +'    overflow: auto;\n'
                      +'}\n'
                      +'.viewer .MarkdownBody ol.linenums {\n'
                      +'    background-color: transparent;\n'
                      +'    color: rgb(160, 160, 160);\n'
                      +'    margin: 5px 0px -10px 0px;\n'
                      +'    padding: 0px 0px 0px 40px;\n'
                      +'}\n'
                      +'.viewer .MarkdownBody ol.linenums li {\n'
                      +'    list-style-type: decimal;\n'
                      +'    padding-left: 5px;\n'
                      +'    margin: 0px;\n'
                      +'}\n'
                      +'.viewer .MarkdownBody table {\n'
                      +'    border: 1px solid rgb(220, 220, 220);\n'
                      +'    border-collapse: collapse;\n'
                      +'    border-spacing: 0px;\n'
                      +'}\n'
                      +'.viewer .MarkdownBody table tr {\n'
                      +'    background-color: rgb(255, 255, 255);\n'
                      +'}\n'
                      +'.viewer .MarkdownBody table tr:nth-child(2n+1) {\n'
                      +'    background-color: rgb(245, 245, 245);\n'
                      +'}\n'
                      +'.viewer .MarkdownBody table th,\n'
                      +'.viewer .MarkdownBody table td {\n'
                      +'    border: 1px solid rgb(220, 220, 220);\n'
                      +'    padding: 0.1em 0.5em;\n'
                      +'    color: rgb(0, 0, 0);\n'
                      +'}\n'
                      +'.viewer .MarkdownBody table th {\n'
                      +'    background-color: rgb(255, 255, 255);\n'
                      +'    font-weight: bold;\n'
                      +'}\n'

                      +'.viewer .MarkdownBody code.lang-console {\n'
                      +'    background-color: rgb(238, 238, 238);\n'
                      +'    box-shadow: none;\n'
                      +'    font-size: 13px;\n'
                      +'}\n'
                      +'.viewer .MarkdownBody code.lang-console ol.linenums li {\n'
                      +'    list-style-type: none;\n'
                      +'    margin-left: -30px;\n'
                      +'}\n'
                      +'.viewer .MarkdownBody code.lang-console ol.linenums {\n'
                      +'    margin: 5px 0px -15px;\n'
                      +'}\n'
                      +'/*}}}*/\n'
        },

        loadScript: function(src, callback) {
            var elem = document.createElement('script');
            elem.type = 'text/javascript';
            elem.src = src;
            document.getElementsByTagName('head')[0].appendChild(elem);

            if ( callback && typeof(callback) === 'function' ) {
                if ( document.addEventListener ) { 
                    elem.addEventListener('load', callback, false);
                } else {
                    elem.onreadystatechange = function() { //IE8
                        if ( elem.readyState in {complete: 1, loaded: 1 }) {
                            elem.onreadystatechange = null;
                            callback();
                        }
                    };
                }
            }
        },

        // ## Open external links in a new window ##
        createExternalLinkNewWindow: function(place,url)
        {
          var link = document.createElement("a");
          link.className = "externalLink";
          link.href = url;
          var f = "Open in a new wndow, External link to %0";
          link.title = f.format([url]);
          link.target = "_blank";
          place.appendChild(link);
          return link;
        },

        // ## Markdown link to Tiddly Link ##
        ChangeTiddlyLink: function(tiddler_elem) {
            var anchor_nodes = tiddler_elem.querySelectorAll('a');
            var regex = /<a[^>].*?href="(.*?)".*?>(.*?)<\/a>/g;
            var parent_node, anchor_text, anchor_class;
            var match,text,link,e;
            
            for (var n = 0; n < anchor_nodes.length; n++) {
                anchor_node = anchor_nodes[n];
                if (!jQuery(anchor_node).hasClass('tiddlyLink') && !jQuery(anchor_node).hasClass('externalLink')) {
                    parent_node = anchor_node.parentNode;
                    anchor_text = anchor_node.outerHTML;
//console.log(n + ' => ' + anchor_text)
            
                    while (match = regex.exec(anchor_text)) {
                        link = match[1];
                        text = match[2];
//console.log(n + ' => ' + 'link = ' + link);

                        e = (config.formatterHelpers.isExternalLink(link)) ?
                            config.extensions.PluginMarkdown.createExternalLinkNewWindow(parent_node, link) :
                            createTiddlyLink(parent_node, link, false, null, false, null, true);
                        createTiddlyText(e, text);
                        parent_node.replaceChild(e, anchor_node);
                    }
                }
            }
        },

        install: function() {
            var _PluginMarkdown = config.extensions.PluginMarkdown;

            // ## load Prettify script and css ##
            var elecss = document.createElement( 'link' );
            elecss.type = 'text/css';
            elecss.rel = 'stylesheet';
            elecss.href = _PluginMarkdown.cssPrettify;
            document.getElementsByTagName( 'head' )[0].appendChild( elecss );

            _PluginMarkdown.loadScript( _PluginMarkdown.scriptPrettify );

            // ## set custom css ##
            setStylesheet( _PluginMarkdown.MyStyleSheet.text, 'PluginMarkdown' );

            // ## load marked and Options settings ##
            _PluginMarkdown.loadScript( _PluginMarkdown.scriptMarked, function() {
                marked.setOptions({
                    gfm: true,
                    tables: true,
                    breaks: false,
                    pedantic: false,
                    sanitize: false,
                    mangle: true,
                    smartLists: true,
                    smartypants: false,
                    langPrefix: 'lang-',

                    // ## highlighting with google-code-prettify ##
                    highlight: function(code, lang) {
                        var htmltext = String(code)
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/"/g, '&quot;')
                            .replace(/'/g, '&#39;');
                        return prettyPrintOne(htmltext, lang, true)
                    }
                });
            });
        }
    };

    config.formatters.push({

        name: "PluginMarkdown",
        match: "<[Mm][Dd]>",
        lookaheadRegExp: /<[Mm][Dd]>((?:.|\n)*?)<\/[Mm][Dd]>/mg,

        handler: function(w) {
            this.lookaheadRegExp.lastIndex = w.matchStart;
            var match = this.lookaheadRegExp.exec( w.source );

            if ( match && match.index == w.matchStart ) {
                
                // ## marked.js is available? ##
                try {
                    var t = marked( match[1] );
                } catch(e) {
                    config.extensions.PluginMarkdown.ErrorCount += 1;
                    if (config.extensions.PluginMarkdown.ErrorCount < config.extensions.PluginMarkdown.ErrorCountLimit) {
                        setTimeout(function() {
// console.log("## catch start ## marked refreshTiddler " + w.tiddler.title);
                            story.refreshTiddler(w.tiddler.title,null,true);
                        }, 500);
                    }else{
                        t = "marked.js are not available.  Please check the path of marked.js"
                    }
                }

                var html = '<html>' + t + '</html>'
                var e = createTiddlyElement( w.output, 'div', null, 'MarkdownBody' );
                wikify( html, e );
                config.extensions.PluginMarkdown.ChangeTiddlyLink(e);

                // ## syntax highlighting and linenums ## 
                addClass( '.MarkdownBody pre', 'prettyprint linenums' );
                addClass( '.MarkdownBody pre code', 'prettyprint linenums' );
                w.nextMatch = this.lookaheadRegExp.lastIndex;                          
            }

// console.log("# marked formatter end # : ErrorCount = " + config.extensions.PluginMarkdown.ErrorCount);

        }
    });
    config.extensions.PluginMarkdown.install();
}
//}}}



