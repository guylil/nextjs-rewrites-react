module.exports = {
  experimental: {
    urlImports: [
      "https://cdn.skypack.dev/canvas-confetti",
      "https://cdn.skypack.dev/-/canvas-confetti@v1.5.1-FOulXvdGbkdJFGKB7EdB/dist=es2019,mode=imports/optimized/canvas-confetti.js",
    ],
  },
  rewrites: async () => {
    return [{ source: "/di", destination: "http://localhost:8080" }];
  },
};
