module.exports = {
  async rewrites() {
    return [
      {source: '/di', destination:'http://localhost:8080'},
    ]
  },
}
