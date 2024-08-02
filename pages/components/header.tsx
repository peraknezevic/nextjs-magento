import { Category } from "../../lib/types"
import HeaderActions from "./header-actions"
import HeaderMenu from "./header-menu"
import HeaderTopLine from "./header-top-line"
import Logo from "./logo"
import { TextField } from "@mui/material"

export default function Header({ categories }: { categories: Category[] }) {
  return (
    <header>
      <HeaderTopLine />
      <div className="header-top-section">
        <Logo />
        <TextField
          id="outlined-basic"
          label="Search Tires & Accessories"
          variant="outlined"
          className="search-field"
        />
        <HeaderActions />
      </div>
      <HeaderMenu categories={categories} />
    </header>
  )
}
