
const DEFAULT_HASH = size => key => key
  .split('')
  .map(item => {
    return item.charCodeAt(0);
  })
  .join('')
  % 150;


class HashTable {
  constructor(buckets = 150, hashAlgorithm = DEFAULT_HASH) {
    this.arr = new Array(buckets).fill([]);
    this.hashAlgorithm = hashAlgorithm(buckets);
  }

  add(key, value) {
    const index = this.hash(key);
    const bucket = this.arr[index];

    if (this.get(key)) {
      const item = bucket.find(([storedKey]) => storedKey === key);
      item[1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.arr[index];

    const item = bucket.find(([storedKey]) => storedKey === key);
    if (!item) return null;
    return item[1];
  }

  contains(key) {
    if (this.get(key) === null) return false;
    else return true;
  }

  hash(key) {
    return this.hashAlgorithm(key);
  }
}

module.exports = HashTable;




