'use client'

import { useTranslation } from "@/app/i18n/client"
import SelectLng from "./components/select-lng"

export default function Home ({params: {lng}}) {
  const { t } = useTranslation(lng)

  return (
    <div>
      <h1>Current lng is: {t('title')}</h1>
      <SelectLng lng={lng}/>
    </div>
  )
}
