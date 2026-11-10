import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old press-kit URL still circulating in emails and festival applications.
      {
        source: "/almyr-jules-electronic-press-kit-epk",
        destination: "/epk",
        permanent: true,
      },
      // Merch store and stock admin are offline until merch is ready.
      // Still available locally with `npm run dev`.
      ...(process.env.NODE_ENV === "production"
        ? [
            { source: "/merch", destination: "/", permanent: false },
            { source: "/inventory", destination: "/", permanent: false },
            { source: "/api/merch/:path*", destination: "/", permanent: false },
          ]
        : []),
    ];
  },
};

export default nextConfig;
