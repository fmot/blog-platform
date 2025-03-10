"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import TextAreaAutoSize from "react-textarea-autosize";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useState } from "react";

export default function Editor() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const initializeEditor = async () => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "Start writing your post",
      inlineToolbar: true,
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();
    }
  }, [isMounted]);

  return (
    <form>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link
              href={"dashboard"}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Go back
            </Link>
            <p className="text-sm test-muted-foreground">Publish</p>
          </div>
          <button type="submit" className={cn(buttonVariants())}>
            Save
          </button>
        </div>
        <div>
          <TextAreaAutoSize
            id="title"
            autoFocus
            placeholder="Post Title"
            className="w-full resize-none overflow-hidden bg-transparent text-5xl focus:outline-none font-bold"
          />
        </div>
        <div id="editor" className="min-h-[500px]" />
        <p className="test-sm text-gray-500">
          Use
          <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
            Tab
          </kbd>
          to open the command menu
        </p>
      </div>
    </form>
  );
}
