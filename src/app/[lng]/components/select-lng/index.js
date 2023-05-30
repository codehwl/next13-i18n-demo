'use client'

import Link from "next/link"
import {languages} from '@/app/i18n/settings'
import { useMemo } from "react"

const SelectLng = ({ lng }) => {
  return (
    <div style={{padding: '32px'}}>
      {
        languages.filter((l) => lng !== l).map((l, index) => (
          <span key={l}>
            {index > 0 && (' or ')}
            <Link href={`/${l}`}>
              {l}
            </Link>
          </span>
        ))
      }
    </div>
  )
}

export default SelectLng
