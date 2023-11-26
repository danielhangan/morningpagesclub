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
import { Input } from "./ui/input"


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
        <div className="grid w-full gap-4 py-4 ">
          <div className="grid items-center grid-cols-4 gap-4 font-normal">
            <Label htmlFor="name" className="text-xs font-normal text-left">
              View
            </Label>
            <div className="flex items-center space-x-2">
              <Switch checked={pageSize === '40vw' ? false : true} onCheckedChange={(e) => e ? setPageSize('70vw') : setPageSize('40vw')} />
              <Label className="text-xs font-normal text-right">Wide</Label>
            </div>
          </div>
          <div className="grid items-center grid-cols-4 gap-4 font-normal">
            <Label htmlFor="name" className="text-xs font-normal text-left">
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
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="username" className="text-xs font-normal text-left">
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
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="username" className="text-xs font-normal text-left">
              Page Color
            </Label>
            <RadioGroup defaultValue="background" value={pageColor} orientation="horizontal" className='flex flex-row justify-between gap-4' onValueChange={(value: string) => setPageColor(value)}>
              <RadioGroupItem value="background" className="w-6 h-6 border-none rounded-sm bg-background" id="r1" />
              <RadioGroupItem value="softivory" className="w-6 h-6 border-none rounded-sm bg-softivory" id="r1" />
              <RadioGroupItem value="pastelgray" className="w-6 h-6 border-none rounded-sm bg-pastelgray" id="r2" />
              <RadioGroupItem value="paleblue" className="w-6 h-6 border-none rounded-sm bg-paleblue" id="r3" />
              <RadioGroupItem value="mintcream" className="w-6 h-6 border-none rounded-sm bg-mintcream" id="r4" />
              <RadioGroupItem value="lavendermist" className="w-6 h-6 border-none rounded-sm bg-lavendermist" id="r5" />
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

