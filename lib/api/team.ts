import { wpFetch } from '@/lib/wordpress'
import type { WPTeamDepartment } from '@/types/wordpress'

export async function getTeamDepartments(): Promise<WPTeamDepartment[]> {
  const departments = await wpFetch<WPTeamDepartment[]>(
    '/team_department?per_page=100&_fields=id,title,acf&orderby=date&order=asc',
    { revalidate: 3600, tags: ['team'] }
  )
  if (!departments) return []
  return departments.sort((a, b) => (a.acf.display_order || 0) - (b.acf.display_order || 0))
}
