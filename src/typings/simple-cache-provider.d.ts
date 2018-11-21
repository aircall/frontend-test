declare module "simple-cache-provider" {
  const SimpleCache: {
    Consumer: React.ComponentClass<{ children: (cache: Cache) => ReactNode }>;
  };

  type Cache = {
    invalidate(): void;
    preload(resourceType, key, miss, missArg): void;
    read(resourceType, key, miss, missArg): void;
  };

  class Resource<T, U = undefined> {
    preload(cache: Cache, key?: U): undefined;
    read(cache: Cache, key?: U): T;
  }

  function createResource<T, U>(f: (key: U) => Promise<T>): Resource<T, U>;
  function createCache(invalidator?: () => void): Cache;

  export { createResource, createCache, SimpleCache };
}
