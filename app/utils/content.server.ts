import fs from "fs";
import path from "path";

// Simple frontmatter parser
function parseFrontmatter(content: string) {
    const lines = content.split("\n");
    const frontmatter: Record<string, any> = {};
    let bodyStartIndex = 0;
    let inFrontmatter = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === "---") {
            if (!inFrontmatter) {
                inFrontmatter = true;
                continue;
            } else {
                bodyStartIndex = i + 1;
                break;
            }
        }

        if (inFrontmatter && line.includes(":")) {
            const colonIndex = line.indexOf(":");
            const key = line.slice(0, colonIndex).trim();
            let value: any = line.slice(colonIndex + 1).trim();

            // Remove quotes
            if ((value.startsWith('"') && value.endsWith('"')) ||
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }

            // Parse booleans
            if (value === "true") value = true;
            if (value === "false") value = false;

            // Parse numbers
            if (!isNaN(Number(value)) && value !== "") {
                value = Number(value);
            }

            frontmatter[key] = value;
        }
    }

    const body = lines.slice(bodyStartIndex).join("\n").trim();

    return { frontmatter, body };
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    authorTitle?: string;
    date: string;
    readTime: string;
    image: string;
    featured: boolean;
    body: string;
}

export interface Product {
    slug: string;
    title: string;
    description: string;
    image: string;
    rating: number;
    badge: string;
    affiliateUrl?: string;
    price?: string;
}

// Get the content directory path
function getContentPath(type: "blog" | "products") {
    // In development, use the content folder relative to project root
    return path.join(process.cwd(), "content", type);
}

export function getAllBlogPosts(): BlogPost[] {
    const contentDir = getContentPath("blog");

    if (!fs.existsSync(contentDir)) {
        return [];
    }

    const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

    const posts = files.map(file => {
        const filePath = path.join(contentDir, file);
        const content = fs.readFileSync(filePath, "utf-8");
        const { frontmatter, body } = parseFrontmatter(content);

        return {
            slug: frontmatter.slug || file.replace(".md", ""),
            title: frontmatter.title || "Untitled",
            excerpt: frontmatter.excerpt || "",
            category: frontmatter.category || "Uncategorized",
            author: frontmatter.author || "Anonymous",
            authorTitle: frontmatter.authorTitle,
            date: formatDate(frontmatter.date),
            readTime: frontmatter.readTime || "5 min read",
            image: frontmatter.image || "",
            featured: frontmatter.featured || false,
            body,
        } as BlogPost;
    });

    // Sort by date (newest first)
    return posts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });
}

export function getBlogPost(slug: string): BlogPost | null {
    const posts = getAllBlogPosts();
    return posts.find(p => p.slug === slug) || null;
}

export function getFeaturedPosts(): BlogPost[] {
    return getAllBlogPosts().filter(p => p.featured).slice(0, 3);
}

export function getAllProducts(): Product[] {
    const contentDir = getContentPath("products");

    if (!fs.existsSync(contentDir)) {
        return [];
    }

    const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

    return files.map(file => {
        const filePath = path.join(contentDir, file);
        const content = fs.readFileSync(filePath, "utf-8");
        const { frontmatter } = parseFrontmatter(content);

        return {
            slug: frontmatter.slug || file.replace(".md", ""),
            title: frontmatter.title || "Untitled Product",
            description: frontmatter.description || "",
            image: frontmatter.image || "",
            rating: frontmatter.rating || 4,
            badge: frontmatter.badge || "Top Rated",
            affiliateUrl: frontmatter.affiliateUrl,
            price: frontmatter.price,
        } as Product;
    });
}

function formatDate(date: string | Date): string {
    if (!date) return "Unknown date";

    const d = new Date(date);
    if (isNaN(d.getTime())) return String(date);

    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
