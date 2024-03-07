import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export function CustomSizePopOver() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Choose Custom</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="100"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Unit</Label>
              <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select a types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>No Preference</SelectLabel>
                                <SelectItem value="inch">Inch</SelectItem>
                                <SelectItem value="cm">Centimeter</SelectItem>
                                <SelectItem value="px">Pixcel</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}