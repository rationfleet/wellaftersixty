import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("blog", "routes/blog.tsx"),
    route("blog/:slug", "routes/blog.$slug.tsx"),
    route("products", "routes/products.tsx"),
    route("newsletter", "routes/newsletter.tsx"),
    route("search", "routes/search.tsx"),
] satisfies RouteConfig;

