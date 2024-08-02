import { Category } from "../../lib/types"
import HeaderSubmenu from "./header-submenu"
import Link from "next/link"
import { useState } from "react"

export default function HeaderMenu({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false)
  const [sumenuItems, setSubmenuItems] = useState<Category[] | []>([])

  return (
    <nav className="header-menu">
      <ul>
        {categories.map((item, index) => (
          <li key={item.uid}>
            {item.children.length === 0 && (
              <Link href={`/shop/${item.url_path}`}>{item.name}</Link>
            )}
            {item.children.length > 0 && (
              <>
                <Link
                  href="#"
                  onClick={() => {
                    setSubmenuItems(categories[index].children)
                    setOpen(!open)
                  }}
                >
                  {item.name}
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>
      {open && <HeaderSubmenu categories={sumenuItems} open={open} />}
    </nav>
  )
}
