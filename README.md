# Starlight Loading

WIP

## For Firefox User

### Caveat

I DO NOT assure that Starlight Loading works on every site without problems.

You should disable Starlight Loading addon when you use some important website.

## For Web M@ster

You can introduce Starlight Loading into your website like this:

```html
<head>
  <link href="starlight-loading.min.css" rel="stylesheet" />
  <script src="starlight-loading.min.js"></script>
  ...
```

The above sample is equivarent to the following:

```html
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link href="data/mplus-1p-bold-sub-woff.css" rel="stylesheet" />
  <link href="data/pace.css" rel="stylesheet" />
  <link href="data/starlight-loading.css" rel="stylesheet" />
  <script src="data/pace-option.js"></script>
  <script src="data/pace.min.js"></script>
  <script src="data/starlight-loading.js"></script>
  ...
```

## For Contributor

### Install

* `$ git clone https://github.com/megane42/starlight-loading.git`
* `$ cd starlight-loading`
* `$ brew install node`

### Build JS & CSS

* `$ npm install`
* `$ npm run build`

### Build & Run as a Firefox Addon

* `$ npm install jpm --global`
* `$ jpm build` or `$ jpm run`

## Credits

* Pace.js : http://github.hubspot.com/pace/docs/welcome/
* M+ Fonts : https://mplus-fonts.osdn.jp/
* Loading Icon : @mikeda3
* Conversely, Starlight Loading is not endorsed by nor affiliated with BANDAI NAMCO.

## Author

* megane42
    * https://twitter.com/tsdnm
    * https://deresute.me/582302781
