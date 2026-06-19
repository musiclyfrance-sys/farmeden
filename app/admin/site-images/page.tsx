import { slotGroups } from '@/lib/siteImages';
import { getSiteImages } from '@/lib/admin/store';
import { SiteImagesManager } from '@/components/admin/SiteImagesManager';

export const dynamic = 'force-dynamic';

export default async function AdminSiteImagesPage() {
  const groups = slotGroups();
  const initial = await getSiteImages();
  return <SiteImagesManager groups={groups} initial={initial} />;
}
