import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://www.github.com/charmingruby.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Gustavo Dias
        </span>
        <span className="truncate text-sm text-zinc-500">
          gustavodiasa2121@gmail.com
        </span>
      </div>

      <button
        type="button"
        className="ml-auto rounded-md p-2 transition-colors hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
