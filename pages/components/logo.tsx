import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="logo" width={228} height={36} />
    </Link>
  )
}
