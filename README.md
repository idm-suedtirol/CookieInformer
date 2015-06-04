# CookieInformer

*   The cookie Informer is a banner that indicates that cookies are set on this website.
*   The cookie Informer is purely for information and accomplishes no changes in your browser settings.
*   This cookie Banner can be integrated to any website, referring to the Cookie-policy-side.

How-To:

1. The index.html page is passed in the src attribute of an IFrame that calls a page in a page.
    <pre> \<iframe src="index.html">\<p>Text if the browser doesn't support IFrames\</p>\</iframe> </pre>

2. (optional) The link may be provided with the parameter lang. When lang = de the banner appears in German, if lang = en     it appears in English and if lang = anything else the banner appears in Italian by default.
    <pre> \<iframe src="index.html?lang=de">\<p>Text if the browser doesn't support IFrames\</p>\</iframe> For German
     \<iframe src="index.html?lang=en">\<p>Text if the browser doesn't support IFrames.\</p>\</iframe> For English </pre>
