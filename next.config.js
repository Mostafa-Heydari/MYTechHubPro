module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',  // برای همه صفحات
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-eval' https://unpkg.com; object-src 'none';",
          },
        ],
      },
    ]
  },
}