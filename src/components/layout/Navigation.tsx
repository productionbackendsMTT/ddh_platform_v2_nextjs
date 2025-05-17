"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();
    const data = [
        { name: "all", icon: "/assets/navigation/all.png", link: "/" },
        { name: "slot", icon: "/assets/navigation/slot.png", link: "/slot" },
        { name: "keno", icon: "/assets/navigation/keno.png", link: "/" },
        { name: "other", icon: "/assets/navigation/other.png", link: "/" },
    ];
    return (
        <div className="w-[43%] flex justify-between items-center absolute portrait:top-[-1.5vh] landscape:top-[-1vw] left-auto h-full">
            {data?.map((item, index: number) => (
                <Link
                    key={index}
                    href={item.link}
                    className="flex flex-col gap-[0.3vh] landscape:gap-[0.3vw] items-center"
                >
                    <div
                        className={` ${pathname === item.link
                            ? "bg-gradient-to-bl from-[#531153] via-[#60185E] to-[#531153]"
                            : ""
                            } rounded-full`}
                    >
                        <div className="bg-gradient-to-bl from-[#101010] transition-all via-[#141414] to-[#6D2800] rounded-full">
                            <div className={`bg-gradient-to-bl ${pathname === item.link && 'p-[.1vw]'} from-[#E9B43F] via-[#C79017] to-[#A97510] rounded-full p-0-2vw`}>
                                <div className="portrait:border-[.2vh] landscape:border-[.2vw] border-[#57006d] rounded-full p-[.15vh] landscape:p-[.15vw]">
                                    <div className="bg-gradient-to-bl   from-[#101010] via-[#141414] to-[#6D2800] rounded-full">
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            height={50}
                                            width={50}
                                            className={`portrait:h-[2.5vh] portrait:w-[2.5vh] scale-[.7] object-contain landscape:h-[2.5vw] landscape:w-[2.5vw] ${pathname === item.link ? "animate-bounce" : ""
                                                }`}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <p
                        className={`portrait:text-[1vh] landscape:text-[1vw] uppercase transition-all duration-300 bg-clip-text text-transparent ${pathname === item.link
                                ? "font-[800] bg-gradient-to-b from-[#C79F28] via-[#FFE650] to-[#FFE650]"
                                : "font-medium bg-gradient-to-b from-[#A98E44] via-[#F9F2DB] to-[#D7BF7C]"
                            }`}
                    >
                        {item.name}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default Navigation;