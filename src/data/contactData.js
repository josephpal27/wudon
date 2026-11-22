import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

export const contactData = [
    {
        id: 1,
        icon: <FaLocationDot />,
        label: "Visit Us",
        value: "46C, Jawaharlal Nehru Road, Everest House, 20th Floor, Suite-C, Kolkata 700071",
        url: "https://maps.app.goo.gl/SXiL9Eo13XArS6wr9",
        target: "_blank",
    },
    {
        id: 2,
        icon: <IoMdMail />,
        label: "Email Us",
        value: "info@wudon.in",
        url: "mailto:info@wudon.in",
        target: "_self",
    },
    {
        id: 3,
        icon: <BiSupport />,
        label: "Call Us",
        value: "+91 98754 61678",
        url: "tel:+919875461678",
        target: "_self",
    },
]