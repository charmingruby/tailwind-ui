import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { InputRoot, InputControl, InputPrefix } from '../ui/Form/Input'
import * as FileInput from '@/components/ui/Form/FileInput'
import { Select } from '../ui/Form/Select'
import { SelectItem } from '../ui/Form/Select/SelectItem'

export function SettingsForm() {
  return (
    <form
      id="settings"
      action=""
      className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
    >
      {/* Name */}
      <div className="grid grid-cols-form gap-3">
        <label
          htmlFor="firstName"
          className="text-sm font-medium text-zinc-700"
        >
          Name
        </label>
        <div className="grid grid-cols-2 gap-6">
          <InputRoot>
            <InputControl id="firstName" defaultValue="Gustavo" />
          </InputRoot>

          <InputRoot>
            <InputControl defaultValue="Dias" />
          </InputRoot>
        </div>
      </div>

      {/* Email */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
          Email address
        </label>
        <InputRoot>
          <InputPrefix>
            <Mail className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl
            id="email"
            type="email"
            defaultValue="gustavo@mail.com"
          />
        </InputRoot>
      </div>

      {/* Photo */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
          Your photo
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Description
          </span>
        </label>

        <FileInput.Root className="flex items-start gap-5 pt-5">
          <FileInput.ImagePreview />
          <FileInput.Trigger />
          <FileInput.Control />
        </FileInput.Root>
      </div>

      {/* Role */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <label htmlFor="role" className="text-sm font-medium text-zinc-700">
          Role
        </label>
        <InputRoot>
          <InputControl id="role" type="text" defaultValue="Intern" />
        </InputRoot>
      </div>

      {/* Country */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <label htmlFor="country" className="text-sm font-medium text-zinc-700">
          Country
        </label>
        <Select placeholder="Select a country...">
          <SelectItem value="br" text="Brazil" />
          <SelectItem value="us" text="United States" />
        </Select>
      </div>

      {/* Timezone */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
          Timezone
        </label>
        <Select placeholder="Select a timezone...">
          <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
          <SelectItem value="utc3" text="America SP (UTC-03:00)" />
        </Select>
      </div>

      {/* Bio */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
          Bio
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Write a short introduction.
          </span>
        </label>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Select placeholder="Select a timezone..." defaultValue="normal">
              <SelectItem defaultChecked value="normal" text="Normal text" />
              <SelectItem value="md" text="Markdown" />
            </Select>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="rounded-md p-2 transition-colors hover:bg-zinc-50"
              >
                <Bold className="h-4 w-4  text-zinc-500" strokeWidth={3} />
              </button>
              <button
                type="button"
                className="rounded-md p-2 transition-colors hover:bg-zinc-50"
              >
                <Italic className="h-4 w-4  text-zinc-500" strokeWidth={3} />
              </button>
              <button
                type="button"
                className="rounded-md p-2 transition-colors hover:bg-zinc-50"
              >
                <Link className="h-4 w-4  text-zinc-500" strokeWidth={3} />
              </button>
              <button
                type="button"
                className="rounded-md p-2 transition-colors hover:bg-zinc-50"
              >
                <List className="h-4 w-4  text-zinc-500" strokeWidth={3} />
              </button>
              <button
                type="button"
                className="rounded-md p-2 transition-colors hover:bg-zinc-50"
              >
                <ListOrdered
                  className="h-4 w-4  text-zinc-500"
                  strokeWidth={3}
                />
              </button>
            </div>
          </div>

          <textarea
            id="bio"
            className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
            defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
          />
        </div>
      </div>

      {/* Portfolio Projects */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
          Portfolio projects
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Share a few snippets of your work
          </span>
        </label>

        <FileInput.Root>
          <FileInput.Trigger />
          <FileInput.FileList />
          <FileInput.Control multiple />
        </FileInput.Root>
      </div>

      <div className="flex items-center justify-end gap-2 pt-5">
        <button
          type="button"
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
        >
          Save
        </button>
      </div>
    </form>
  )
}
