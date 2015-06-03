# CookieInformer

Der CookieInformer ist ein Banner, das darauf hinweist, dass auf der besuchten Seite Cookies gesetzt werden. Der CookieInformer dient rein zur Information und bewerkstelligt keine Änderungen in den Einstellungen ihres Browsers. Dieser Cookiebanner kann auf die betroffenen Seiten eingebunden werden und verweist auf die policy-Seite der Cookies.

How-To:
1.Die index.html Seite wird im src Attribute eines IFrames übergeben, dass eine Seite in einer Seite aufruft.
    <iframe src="index.html"><p>Text falls der Browser keine IFrames unterstützt.</iframe>
2.(optional)Der Link kann mit den Parameter lang versehen werden. Bei lang=de wird das Banner auf Deutsch angezeigt, bei lang=en auf Englisch und Standartmäßig auf Italienisch.
    <iframe src="index.html?lang=de"><p>Text falls der Browser keine IFrames unterstützt.</iframe> Für Deutsch
     <iframe src="index.html?lang=en"><p>Text falls der Browser keine IFrames unterstützt.</iframe> Für Englischvim
