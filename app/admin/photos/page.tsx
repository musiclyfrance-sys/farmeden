import { getGallery } from '@/lib/admin/store';
import { PhotosManager } from '@/components/admin/PhotosManager';

export const dynamic = 'force-dynamic';

export default async function AdminPhotosPage() {
  const gallery = await getGallery();
  return <PhotosManager initial={gallery} />;
}
