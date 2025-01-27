import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

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
    </div>
  );
}
