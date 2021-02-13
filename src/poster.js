class Poster {
  constructor(imageURL, altText, title, quote) {
    this.id = Date.now();
    this.imageURL = imageURL;
    this.altTxt = altText;
    this.title = title;
    this.quote = quote;
  }
}