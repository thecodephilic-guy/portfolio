import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  //Other Next.js configs:
  async headers() {
    return [
      {
        source: "/api/sb-contact",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  // Markdown plugins will go here
  extension: /\.(md|mdx)$/, // this is to allow .md files to be compiled by webpack
})

export default withMDX(nextConfig);
