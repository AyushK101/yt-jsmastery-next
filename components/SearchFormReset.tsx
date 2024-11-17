'use client'

import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = () => {
  function reset() {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    if (form) form.reset()
  }
  return (
    <button type='reset' onClick={reset} className=''>
      <Link href={"/"} className="search-btn">
        <X className="size-5"/>
      </Link>
    </button>
  )
}

export default SearchFormReset