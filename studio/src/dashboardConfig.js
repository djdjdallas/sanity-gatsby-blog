export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62d476078083e120e02eaabb",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-p3tyyxxv",
                  apiId: "f63a88da-e155-4ddd-8254-78caa7aa15ef",
                },
                {
                  buildHookId: "62d4760743a4522273973000",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-pnhiing4",
                  apiId: "4830d95f-bdfd-46f2-a9f4-5d57ebdec8a8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/djdjdallas/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-pnhiing4.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
