
const DEFAULT_HASH = key => {
  return key.split('')
    .map(item => {
      return item.charCodeAt(0);
    })
    .join('')
    % 150;
};

class HashTable {
  constructor(hashAlgorithm = DEFAULT_HASH) {
    this.arr = [];
  }

  add(key, value) {

  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.arr[index];
    if(bucket.length === 0) return null;
    const item = bucket.find(([storedKey]) => storedKey === key);
    if(!item) return null;
    return item[1];
  }

  contains(key) {

  }

  hash(key) {
    return this.hashAlgorithm(key);
  }
}




