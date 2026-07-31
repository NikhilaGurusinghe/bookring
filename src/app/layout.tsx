import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Bookring",
    description: "Bookring - a book themed webring",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
            {children}
            </body>
        </html>
    );
}
