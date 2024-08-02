import Image from "next/image"
import Link from "next/link"
export default function HeaderActions() {
  return (
    <div className="header-actions">
      <Link href="/">
        <Image
          src="/icons/icon-account.svg"
          width={32}
          height={32}
          alt="Your Account"
        />
      </Link>
      <Link href="/">
        <Image src="/icons/icon-cart.svg" width={32} height={32} alt="Cart" />
      </Link>
      <Link href="/">
        <Image
          src="/icons/icon-wishlist.svg"
          width={32}
          height={32}
          alt="Wishlist"
        />
      </Link>
    </div>
  )
}
