import { Category } from "../../lib/types"
import Link from "next/link"

export default function HeaderSubmenu({
  categories,
  open,
}: {
  categories: Category[]
  open: boolean
}) {
  console.log(categories)
  return (
    <div className={open ? "show" : "hide"}>
      <ul className="header-submenu">
        {categories.map((category) => (
          <li>
            <Link href={`shop/${category.url_path}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
