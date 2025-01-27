import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Icon } from "./icon";

export default function UserAuthForm() {
  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants())}>
            メールアドレスでログイン
          </button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-background">
            または
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button className={cn(buttonVariants({ variant: "outline" }))}>
          <Icon.github className="mr-2" />
          Github
        </button>
      </div>
    </div>
  );
}
