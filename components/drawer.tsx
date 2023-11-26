import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { appStore } from "@/context/AppSettingsState"


export function SheetDemo() {
  const [
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    pageSize,
    setPageSize,
    pageColor,
    setPageColor
  ] = appStore((state) => [state.fontSize, state.setFontSize, state.fontFamily, state.setFontFamily, state.pageSize, state.setPageSize, state.pageColor, state.setPageColor])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon className="" />
        </Button>
      </SheetTrigger>
      <SheetContent className='w-[400px] sm:w-[540px]'>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4 w-full ">
          <div className="grid grid-cols-4 items-center gap-4 font-normal">
            <Label htmlFor="name" className="text-left font-normal text-xs">
              View
            </Label>
            <div className="flex items-center space-x-2">
              <Switch checked={pageSize === '40vw' ? false : true} onCheckedChange={(e) => e ? setPageSize('70vw') : setPageSize('40vw')} />
              <Label className="text-right font-normal text-xs">Wide</Label>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4 font-normal">
            <Label htmlFor="name" className="text-left font-normal text-xs">
              Font Size
            </Label>
            <Slider
              className='col-span-3 text-sm'
              defaultValue={[fontSize]}
              value={[fontSize]}
              min={12}
              max={18}
              step={2}
              onValueChange={(value: number[]) => setFontSize(value[0])}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left font-normal text-xs">
              Font Style
            </Label>
            <Select value={fontFamily} onValueChange={(value: string) => setFontFamily(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a font" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fonts</SelectLabel>
                  <SelectItem value="sans" className="font-sans">Sans</SelectItem>
                  <SelectItem value="serif" className="font-serif">Serif</SelectItem>
                  <SelectItem value="mono" className="font-mono">Mono</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left font-normal text-xs">
              Page Color
            </Label>
            <RadioGroup defaultValue="background" value={pageColor} orientation="horizontal" className='flex flex-row justify-between gap-4' onValueChange={(value: string) => setPageColor(value)}>
              <RadioGroupItem value="background" className="bg-background border-none rounded-sm h-6 w-6" id="r1" />
              <RadioGroupItem value="softivory" className="bg-softivory border-none rounded-sm h-6 w-6" id="r1" />
              <RadioGroupItem value="pastelgray" className="bg-pastelgray border-none rounded-sm h-6 w-6" id="r2" />
              <RadioGroupItem value="paleblue" className="bg-paleblue border-none rounded-sm h-6 w-6" id="r3" />
              <RadioGroupItem value="mintcream" className="bg-mintcream border-none rounded-sm h-6 w-6" id="r4" />
              <RadioGroupItem value="lavendermist" className="bg-lavendermist border-none rounded-sm h-6 w-6" id="r5" />
            </RadioGroup>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" size='sm'>Save changes</Button>
          </SheetClose>
        </SheetFooter>
        <Separator className='my-6' />
        <SheetTitle>Analytics</SheetTitle>
      </SheetContent>
    </Sheet>
  )
}

