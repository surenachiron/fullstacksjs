import { getRecord } from '@/data-layer/supabase/getRecord';

import { TypeContent } from './TypeContent';

export default async function TypePage() {
  const record = await getRecord();

  return <TypeContent record={record?.time ?? null} />;
}
