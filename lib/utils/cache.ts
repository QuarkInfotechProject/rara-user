interface CacheItem<T> {
  data: T;
  timestamp: number;
}

class Cache {
  private cache = new Map<string, CacheItem<any>>();
  private readonly defaultDuration: number;

  constructor(defaultDuration: number = 1000 * 60 * 60) {
    // 1 hour default
    this.defaultDuration = defaultDuration;
  }

  get<T>(key: string, duration?: number): T | null {
    const item = this.cache.get(key);
    if (!item) return null;

    const cacheDuration = duration || this.defaultDuration;
    const isExpired = Date.now() - item.timestamp > cacheDuration;

    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  // Clean expired items
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > this.defaultDuration) {
        this.cache.delete(key);
      }
    }
  }
}

// Export singleton instance
export const cache = new Cache(
  parseInt(process.env.CACHE_DURATION || "3600000") // 1 hour
);

// Utility functions
export const getCached = <T>(key: string, duration?: number): T | null => {
  return cache.get<T>(key, duration);
};

export const setCache = <T>(key: string, data: T): void => {
  cache.set(key, data);
};

export const clearCache = (): void => {
  cache.clear();
};

// Auto cleanup every hour
if (typeof window === "undefined") {
  // Only run on server
  setInterval(() => {
    cache.cleanup();
  }, 1000 * 60 * 60); // 1 hour
}
