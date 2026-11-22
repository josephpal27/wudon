"use client";

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Button = ({ label, url, type = "button", target }) => {

  const classes = `bg-[#29396e] text-white w-max rounded-full flex items-center gap-[0.6rem] pl-[1rem] sm:pl-[1rem] lg:pl-[0.9rem] xl:pl-[1rem] 2xl:pl-[1.1rem] py-[0.4rem] sm:py-[0.5rem] lg:py-[0.4rem] xl:py-[0.45rem] 2xl:py-[0.5rem] pr-[0.5rem] sm:pr-[0.5rem] lg:pr-[0.4rem] xl:pr-[0.45rem] 2xl:pr-[0.5rem] text-[1rem] sm:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] font-medium hover:bg-[#ad030c] group transition duration-500`;

  const content = (
    <>
      {label}
      <MdArrowOutward className={`bg-[#ad030c] w-[28px] sm:w-[30px] lg:w-[27px] xl:w-[30px] 2xl:w-[32px] h-[28px] sm:h-[30px] lg:h-[27px] xl:h-[30px] 2xl:h-[32px] rounded-full p-[0.3rem] group-hover:rotate-45 group-hover:bg-[#29396e] transition duration-500`} />
    </>
  );

  return url
    ? <Link href={url} className={classes} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>{content}</Link>
    : <button type={type} className={classes}>{content}</button>
}

export default Button;