const eventProxy = {
  onQueue: {},
  oneQueue: {},

  on(key, fn) {
    if (this.onQueue[key] === undefined) {
      this.onQueue[key] = [];
    }
    this.onQueue[key].push(fn);
  },

  one(key, fn) {
    if (this.oneQueue[key] === undefined) {
      this.oneQueue[key] = [];
    }
    this.oneQueue[key].push(fn);
  },

  off(key) {
    this.onQueue[key] = [];
    this.oneQueue[key] = [];
  },

  emit(...args) {
    if (args.length === 0) {
      return false;
    }

    let key = args[0];
    let argsCache = [...args].slice(1);

    if (this.onQueue[key] !== undefined && this.onQueue[key].length > 0) {
      for (let i in this.onQueue[key]) {
        this.onQueue[key][i].apply(null, argsCache);
      }
    }

    if (this.oneQueue[key] !== undefined && this.oneQueue[key].length > 0) {
      for (let i in this.oneQueue[key]) {
        this.oneQueue[key][i].apply(null, argsCache);
        this.oneQueue[key][i] = undefined;
      }
      this.oneQueue[key] = [];
    }
  }
};

export default eventProxy;
