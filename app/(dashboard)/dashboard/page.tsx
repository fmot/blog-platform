import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";

export default function DashboardPage() {
  return (
    <DashBoardShell>
      <DashBoardHeader heading="記事投稿" text="記事の投稿と管理">
        Create
      </DashBoardHeader>
    </DashBoardShell>
  );
}
