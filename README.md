# Starlight Loading

WIP

## For Firefox User

You can see a starry loading screen whenever you open a website.

### Install

FIXME

### Caveat

* I DO NOT assure that Starlight Loading works on every site without problems.
    * You should disable Starlight Loading addon when you use some important website.

## For Web M@ster

You can introduce a starry loading screen into your website.

### Install

* Download these 2 files:
    * [starlight-loading.min.js](starlight-loading.min.js)
    * [starlight-loading.min.css](starlight-loading.min.css)

* Add 2 lines into your page:

```html
<head>
  <link href="starlight-loading.min.css" rel="stylesheet" />
  <script src="starlight-loading.min.js"></script>
  ...
```

The above sample is equivarent to the following:

```html
<head>
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

### How does it works?

FIXME

## Credits

* Pace.js : http://github.hubspot.com/pace/docs/welcome/
* M+ Fonts : https://mplus-fonts.osdn.jp/
* Loading Icon : @mikeda3
* Conversely, Starlight Loading is not endorsed by nor affiliated with BANDAI NAMCO.

## Author

* megane42
    * https://twitter.com/tsdnm
    * https://deresute.me/582302781
