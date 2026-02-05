import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";
import Footer from "@/components/Footer";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPage({ params }: PageProps) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <>
            <article className="min-h-screen bg-gray-50 lg:pt-10 pt-5 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <Link
                        href="/#blogs"
                        className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium mb-8 transition-colors"
                    >
                        <RiArrowLeftLine className="mr-2" /> Back to Blogs
                    </Link>

                    {/* Main Content Card */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        {/* Header Image */}
                        <div className="relative h-64 md:h-96 w-full">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="p-8 md:p-12">
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                {blog.title}
                            </h1>

                            <p className="text-xl text-gray-700 mb-10 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
                                {blog.content.intro}
                            </p>

                            <div className="space-y-12">
                                {blog.content.sections.map((section, index) => (
                                    <div key={index} className="space-y-4">
                                        {section.heading && (
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                                {section.heading}
                                            </h2>
                                        )}

                                        {section.content && (
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                {section.content}
                                            </p>
                                        )}

                                        {section.points && (
                                            <ul className="grid gap-3 mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                                {section.points.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <span className="text-blue-600 mt-1.5 flex-shrink-0 text-xl">
                                                            •
                                                        </span>
                                                        <span className="text-gray-700 text-lg">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}
