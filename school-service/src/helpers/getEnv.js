// Improves performance of accessing process.env keys.

const cache = {};

const getEnv = (key, defaultValue) => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`[⚠] ${key} missing from process.env.`);
  }

  if (cache[key]) return cache[key];

  cache[key] = process.env[key];

  return process.env[key];
};

export default getEnv;
