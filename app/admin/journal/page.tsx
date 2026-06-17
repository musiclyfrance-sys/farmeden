import { getPosts } from '@/lib/admin/store';
import { JournalManager } from '@/components/admin/JournalManager';

export const dynamic = 'force-dynamic';

export default async function AdminJournalPage() {
  const posts = await getPosts();
  return <JournalManager initial={posts} />;
}
