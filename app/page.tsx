'use client'
import { useState, useEffect } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { ModeToggle } from '@/components/toggleTheme'
import { SheetDemo } from '@/components/drawer'
import { TwitterLogoIcon } from '@radix-ui/react-icons'

import { appStore } from '@/context/AppSettingsState'
import { useShallow } from 'zustand/react/shallow'

// Features
// - word count (done)
// - dark mode (done)
// - drawer on the right side (done)
// - font size (done)
// - background color (done)
// - wide/narrow (done)
// - keep state on refresh! (done)
// - font (done)
// - save to PDF (done)
// - select text and share to twitter.
// - progress feedback
// - emotion analytics
// - sentiment analysis
// - word cloud
// - auth
// - database (turso with prisma)
// - stripe (2.99/month or 29.99/year)
// - test users (10 preferably)
// - launch streategy
// - launch



interface pageSettingsI {
  fontSize: number;
  fontFamily: string;
  pageSize: string;
  pageColor: string;
  contentText: string;
}

const initPageSettings = {
  fontSize: 14,
  fontFamily: 'sans',
  pageSize: '40vw',
  pageColor: 'background',
  contentText: ''
}

export default function Home() {
  const [words, setWords] = useState<number>(0)
  const [selectedText, setSelectedText] = useState<string>('');
  const [pageSettings, setPageSettings] = useState<pageSettingsI>(initPageSettings);
  const store = appStore(useShallow((state) => state))

  function countWords(text: string): number {
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    const words = normalizedText.split(' ');
    return words.length > 0 && words[0] !== '' ? words.length : 0;
  }

  const handleTextSelect = (e: any) => {
    setSelectedText('');
  }

  useEffect(() => {
    setWords(countWords(pageSettings.contentText))
  }, [pageSettings.contentText])

  useEffect(() => {
    setPageSettings({
      fontSize: store.fontSize,
      fontFamily: store.fontFamily,
      pageSize: store.pageSize,
      pageColor: store.pageColor,
      contentText: store.contentText
    })
  }, [store])

  return (
    <main
      className={`flex max-h-screen h-full w-full flex-col items-center pt-8 pb-16 font-${pageSettings.fontFamily} bg-${pageSettings.pageColor}`}
    >
      <Textarea
        value={pageSettings.contentText}
        onChange={(e) => store.setContentText(e.target.value)}
        className={`h-[90vh] p-8 font-${pageSettings.fontFamily} text-${pageSettings.fontSize} w-full md:w-[60vw] xl:w-[50vw]`}
        autoFocus={true}
        placeholder="“Creativity - like human life itself - begins in darkness”"
        onMouseUp={handleTextSelect}
      />


      <div className="fixed border-none top-4 right-4 ring-none" >
        <SheetDemo />
        {selectedText ? <TwitterLogoIcon className="w-5 h-5 ml-2" /> : null}
      </div>

      <div className="fixed top-4 left-4">
        <p className='text-primary'>words: {words}</p>
      </div>

      <div className="fixed bottom-4 left-4 ">
        <ModeToggle />
      </div>
    </main >
  )
}
