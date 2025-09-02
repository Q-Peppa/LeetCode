/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
	this.dataBase = new Map();
	let key;
	for (;;) {
		key = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
		if (!dataBase.has(key)) break;
	}
	this.dataBase.set(key, longUrl);
	return `http://tinyurl.com/${key}`;
};
/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
	const p = shortUrl.lastIndexOf("/") + 1;
	const key = parseInt(shortUrl.substring(p));
	return this.dataBase.get(key);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
