/***
|''Name''|PluginMarkdown|
|''Description''|Allows to use Markdown syntax and syntax highlight in a tiddler|
|''Author''|icm7216 aka babooshka|
|''Version''|1.2.4|
|''date''|Nov. 21, 2018|
|''Requires''|[[chjj/marked.js|https://github.com/chjj/marked]] <br> [[google/code-prettify.js|https://github.com/google/code-prettify]]|
|''Source''|[[icm7216/TWC-Markdown-plugin|https://github.com/icm7216/TWC-Markdown-plugin]]|
|''License''|[[Creative Commons Attribution-ShareAlike 2.5 License|http://creativecommons.org/licenses/by-sa/2.5/]]|
|''~CoreVersion''|2.8.1|
|''Change log''|(write in Japanese) [[icm7216/TWC-Markdown-plugin/CHANGES.md|https://github.com/icm7216/TWC-Markdown-plugin/blob/master/CHANGES.md]]|


This plugin are adapted from ShowDown.js (on [[TiddlyWikiPlugins/ShowDown.js|https://github.com/tobibeer/TiddlyWikiPlugins/blob/master/plugins/ShowDown.js]]).
Thanks [[tobibeer/TiddlyWikiPlugins|https://github.com/tobibeer/TiddlyWikiPlugins]].

Changes from the original
* Change Markdown parser from ShowDown to marked.
* Added syntax highlighting.
* Added stylesheet for Markdown.

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

!Tips!

!!Offline use in the local library

When you want to use offline. Require to install "marked.js" and "prettify.js", "prettify.css" on your PC.


!!How to local installation

!!!setp1.
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
    |               +---marked.js  <== "marked-master/lib/marked.js"
    +--- google-code-prettify/
             +--- prettify.js      <== "google-code-prettify/prettify.js"
             +--- prettify.css     <== "google-code-prettify/prettify.css"
}}}


!!!step2.
Enable the Pulgin Options ''chkMarkdownOffline'' checkbox below.


!!!step3.
Save the TiddlyWiki. Reload the TiddlyWiki browser window.


!Options

Offline use in the local library if enabled.
<<option chkMarkdownOffline>> ''chkMarkdownOffline''


!Code
***/
//{{{
if(!version.extensions.PluginMarkdown) {
    version.extensions.PluginMarkdown = { installed: true };

    if (typeof config.options.chkMarkdownOffline === "undefined") {
        config.options.chkMarkdownOffline = false;    
    }

    // ## define newMarkdown macro ##
    config.macros.newMarkdown = {};
    merge(config.macros.newMarkdown, {
        label: "new Markdown",
        prompt: "Create a new Markdown",
        title: "New Markdown",
    text: `<md>\nType the Markdown text for "New Tiddler"\n</md>`,
        accessKey: ""
    });

    config.macros.newMarkdown.handler = function(place,macroName,params) {
        if(!readOnly) {
        params = [];
        params[0] = {text: [this.text]};
        config.macros.newTiddler.createNewTiddlerButton(place, this.title, params, this.label, this.prompt, this.accessKey, "title", false);
    }
    };

    config.extensions.PluginMarkdown = {

        // ## plugin loading check ##
        ErrorCount : 0,
        ErrorCountLimit : 30,

        // ## Online use ##
        CDN_Marked : "https://cdnjs.cloudflare.com/ajax/libs/marked/0.5.1/marked.min.js",
        CDN_Prettify : "https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.js",
        CDN_cssPrettify : "https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.css",

        // ## Offline use ##
        Local_Marked : "marked-master/lib/marked.js",
        Local_Prettify : "google-code-prettify/prettify.js",
        Local_cssPrettify : "google-code-prettify/prettify.css",

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
                      +'    margin: 5px 0px 0px 0px;\n'
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
                      +'    margin: 5px 0px 0px;\n'
                      +'    padding-bottom: 5px;\n'
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
            
                    while (match = regex.exec(anchor_text)) {
                        link = match[1].replace(/%20/g,' ');
                        text = match[2];

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
            var scriptMarked = config.options.chkMarkdownOffline ? _PluginMarkdown.Local_Marked : _PluginMarkdown.CDN_Marked;
            var scriptPrettify = config.options.chkMarkdownOffline ? _PluginMarkdown.Local_Prettify : _PluginMarkdown.CDN_Prettify;
            var cssPrettify = config.options.chkMarkdownOffline ? _PluginMarkdown.Local_cssPrettify : _PluginMarkdown.CDN_cssPrettify;

            // ## load Prettify script and css ##
            var elecss = document.createElement( 'link' );
            elecss.type = 'text/css';
            elecss.rel = 'stylesheet';
            elecss.href = cssPrettify;
            document.getElementsByTagName( 'head' )[0].appendChild( elecss );

            _PluginMarkdown.loadScript( scriptPrettify );

            // ## set custom css ##
            setStylesheet( _PluginMarkdown.MyStyleSheet.text, 'PluginMarkdown' );

            // ## load marked and Options settings ##
            _PluginMarkdown.loadScript( scriptMarked, function() {
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

            // ## add "new Markdown" button to SideBarOptions ##
            var title = "SideBarOptions";
            var backup_title = "SideBarOptions_backup";
            var sidebar_regex = /(^.*?)(<<newTiddler>>.*?$)/;
            var md_button = '<<newMarkdown>>';
            var is_md_button = new RegExp(md_button);
            var cur_text = store.getTiddlerText(title);

            if(is_md_button.test(cur_text) == false) {
                // backup SideBarOptions
                store.createTiddler(backup_title);
                store.saveTiddler(backup_title, backup_title, cur_text);

                // update SideBarOptions, add "new Markdown" button.
                var new_text = cur_text.replace(sidebar_regex, `$1${md_button}$2`)
                store.saveTiddler(title, title, new_text);

            } else {
                console.log("newMarkdown button already exists in SideBarOptions.");
            }
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
                            story.refreshTiddler(w.tiddler.title,null,true);
                        }, 500);
                    }else{
                        t = "*** ERROR *** marked.js are not available.  Please check the path of marked.js"
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
        }
    });

    config.extensions.PluginMarkdown.install();
}
//}}}



