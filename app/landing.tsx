import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const Landing = () => {
    return (
        <>
            (
            <Image
                height={1440}
                width={5446}
                alt="Landing image"
                src="/landing.png"
            />
            <Link href="/">
                <Button className="absolute uppercase bg-amber-500 top-1/2 left-1/3">
                    Mulai Belajar
                </Button>
            </Link>
            )
        </>
    )
}
