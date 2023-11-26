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
// - progress feedback
// - emotion analytics
// - sentiment analysis
// - word cloud
// - select text and share to twitter.

export default function Home() {
  const [words, setWords] = useState<number>(0)
  const [selectedText, setSelectedText] = useState<string>('');
  const [fontSize, fontFamily, pageSize, pageColor, contentText, setContentText] = appStore(useShallow((state) => [state.fontSize, state.fontFamily, state.pageSize, state.pageColor, state.contentText, state.setContentText]))

  function countWords(text: string): number {
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    const words = normalizedText.split(' ');
    return words.length > 0 && words[0] !== '' ? words.length : 0;
  }

  const handleTextSelect = (e: any) => {
    setSelectedText('');
  }

  useEffect(() => {
    setWords(countWords(contentText))
  }, [contentText])


  return (
    <main
      className={`flex max-h-screen h-full w-full flex-col items-center pt-8 pb-16 font-${fontFamily} bg-${pageColor}`}
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
        <Textarea
          value={contentText}
          onChange={(e) => setContentText(e.target.value)}
          className={`bg-${pageColor} h-[90vh] p-8 font-${fontFamily}`}
          style={{
            fontSize: `${fontSize}px`,
            width: `${pageSize}`,
          }} 
        autoFocus={true}
        placeholder="“Creativity - like human life itself - begins in darkness”"
        onMouseUp={handleTextSelect}
      />

      
      <div className="fixed border-none top-4 right-4 ring-none" >
        <SheetDemo />
        {selectedText ? <TwitterLogoIcon className="w-5 h-5 ml-2" /> : null}
      </div>

      <div className="fixed bottom-4 right-4">
        <p className='text-primary'>words typed: {words}</p>
      </div>

      <div className="fixed bottom-4 left-4 ">
          <ModeToggle />
      </div>
    </main >
      )
}
