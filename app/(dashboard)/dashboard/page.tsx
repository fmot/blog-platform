import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";
import PostCreateButton from "@/components/post-create-button";

export default function DashboardPage() {
  return (
    <DashBoardShell>
      <DashBoardHeader heading="記事投稿" text="記事の投稿と管理">
        <PostCreateButton />
      </DashBoardHeader>
    </DashBoardShell>
  );
}
