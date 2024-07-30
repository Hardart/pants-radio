import type { MetaData } from '@/types/meta'
import { STATE } from '@/enums/state-enum'
export const useMeta = () => {
  const meta = useState<MetaData>(STATE.META)
  return toValue(meta)
}
