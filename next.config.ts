import type { NextConfig } from "next";
import { hostname } from "os";
import path from "path";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "be-sporton.agunacourse.com",
                pathname: "/uploads/**"
            }
        ]
    }
};

export default nextConfig;
