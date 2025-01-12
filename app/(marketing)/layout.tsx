import { buttonVariants } from "@/components/ui/button";
import MainNav from "@/components/ui/main-nav";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import  Link from "next/link";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
        <div>
            <header className="container z-40 bg-background">
                <div className="h-20 py-6 pl-4 sm:pl-8 md:pl-10 lg:pl-12 flex items-center justify-between">
                    <MainNav items={marketingConfig.mainNav} />
                    <nav>
                        <Link href={"/login"} className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "px-4")}>ログイン</Link>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
        </div>
    )
};