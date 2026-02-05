export type Blog = {
    id: number;
    title: string;
    description: string;
    slug: string;
    image: string;
    content: {
        intro: string;
        sections: {
            heading?: string;
            content: string;
            points?: string[];
        }[];
    };
};

export const blogs: Blog[] = [
    {
        id: 1,
        title: "Stock Market Basics: A Simple Guide for Beginners",
        description:
            "Stock market kya hota hai, kaise kaam karta hai aur beginners ke liye ye long-term wealth kaise banata hai – simple language me samjhein.",
        slug: "stock-market-basics-for-beginners",
        image: "/Stock-Market.jpeg",
        content: {
            intro:
                "If you are new to investing, the stock market may seem confusing at first. However, once you understand the basics, it becomes a powerful tool for long-term wealth creation.",
            sections: [
                {
                    content:
                        "The stock market is a place where shares of publicly listed companies are bought and sold. When you buy a share, you own a small part of that company and participate in its growth.",
                },
                {
                    heading: "How the Stock Market Works",
                    content:
                        "Companies raise money by listing their shares on stock exchanges like NSE and BSE. Investors buy these shares, and their prices move based on company performance, economic factors, and market demand.",
                },
                {
                    heading: "Key Terms Every Beginner Should Know",
                    content: "",
                    points: [
                        "Shares: Units of ownership in a company",
                        "Stock Exchange: Platform where shares are traded",
                        "Market Price: Current trading price of a share",
                        "Long-Term Investing: Holding shares for years to grow wealth",
                    ],
                },
                {
                    content:
                        "The stock market is not gambling when approached with proper knowledge, patience, and discipline.",
                },
            ],
        },
    },
    {
        id: 2,
        title: "How to Start Investing in the Stock Market in India",
        description:
            "India me stock market investing shuru karne ka complete step-by-step guide – Demat account se lekar long-term thinking tak.",
        slug: "start-investing-stock-market-india",
        image: "/trading-courses.png",
        content: {
            intro:
                "Starting your stock market journey in India is simpler than most people think.",
            sections: [
                {
                    heading: "Step-by-Step Guide to Get Started",
                    content: "",
                    points: [
                        "Open a Demat & Trading Account - A Demat account stores your shares electronically, while a trading account helps you buy and sell them.",
                        "Understand Your Financial Goals - Decide whether you are investing for long-term wealth, future security, or financial independence.",
                        "Know Your Risk Appetite - Every investor has a different risk tolerance. Your investments should match your comfort level.",
                        "Start Small and Stay Consistent - You don't need a large amount to begin. Consistency matters more than the amount.",
                        "Think Long-Term - Avoid reacting to daily market movements. Long-term investing helps reduce risk.",
                    ],
                },
            ],
        },
    },
    {
        id: 3,
        title: "Demat Account Explained: Everything a New Investor Should Know",
        description:
            "Demat account kya hota hai, kyun zaroori hai aur Demat aur Trading account me kya difference hota hai – beginners ke liye guide.",
        slug: "demat-account-explained",
        image: "/images/demat-account.png",
        content: {
            intro:
                "A Demat Account is mandatory for investing in the Indian stock market. It holds your shares and securities in electronic form.",
            sections: [
                {
                    heading: "Why a Demat Account Is Important",
                    content: "",
                    points: [
                        "Eliminates physical share certificates",
                        "Safe and secure holding of investments",
                        "Easy buying, selling, and tracking of shares",
                    ],
                },
                {
                    heading: "Difference Between Demat and Trading Account",
                    content: "",
                    points: [
                        "Demat Account: Stores your shares",
                        "Trading Account: Used to place buy and sell orders",
                    ],
                },
                {
                    content:
                        "Always open your Demat account with a SEBI-registered broker to ensure safety and compliance.",
                },
            ],
        },
    },
    {
        id: 4,
        title: "Difference Between Investing and Trading",
        description:
            "Investing aur trading me kya farq hota hai? Risk, time aur approach ke basis par simple comparison beginners ke liye.",
        slug: "difference-between-investing-and-trading",
        image: "/images/investing-vs-trading.png",
        content: {
            intro:
                "Many beginners confuse investing with trading, but both approaches are very different.",
            sections: [
                {
                    heading: "Investing",
                    content: "",
                    points: [
                        "Long-term approach",
                        "Focuses on company fundamentals",
                        "Lower risk when done correctly",
                        "Suitable for beginners and working professionals",
                    ],
                },
                {
                    heading: "Trading",
                    content: "",
                    points: [
                        "Short-term approach",
                        "Focuses on price movements",
                        "Higher risk",
                        "Requires time, experience, and discipline",
                    ],
                },
                {
                    content:
                        "For most new investors, long-term investing is safer and more sustainable than frequent trading.",
                },
            ],
        },
    },
    {
        id: 5,
        title: "Common Mistakes First-Time Investors Make",
        description:
            "New investors ke common mistakes jaise panic selling, quick profit chasing aur unhe avoid kaise karein – practical advice.",
        slug: "common-mistakes-first-time-investors",
        image: "/images/investor-mistakes.png",
        content: {
            intro:
                "Most beginners lose money not because the market is bad, but due to avoidable mistakes.",
            sections: [
                {
                    heading: "Common Investor Mistakes",
                    content: "",
                    points: [
                        "Chasing quick profits",
                        "Following unverified tips or social media advice",
                        "Ignoring risk management",
                        "Investing without clear goals",
                        "Panic selling during market volatility",
                    ],
                },
                {
                    heading: "How to Avoid These Mistakes",
                    content: "",
                    points: [
                        "Invest with a clear plan",
                        "Focus on learning and discipline",
                        "Diversify your investments",
                        "Stay patient during market ups and downs",
                    ],
                },
                {
                    content:
                        "Successful investing is built on consistency, patience, and informed decision-making.",
                },
            ],
        },
    },
];
