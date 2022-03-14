const STUDIO_REWRITE = {
    source: "/studio/:path*",
    destination:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3333/studio/:path*"
        : "/devportfolio/index.html",
};

module.exports = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_GRAPHCMS_URL: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
    },
    rewrites: () => [STUDIO_REWRITE],
}