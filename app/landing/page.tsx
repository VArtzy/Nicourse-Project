import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const LandingPage = () => {
    return (
        <>
            <Image
                height={5446}
                width={1440}
                alt="Landing image"
                src="/landing.png"
            />
            <Link href="/">
                <Button className="absolute uppercase bg-amber-500 top-3/4 left-1/4">
                    Mulai Belajar
                </Button>
            </Link>
        </>
    )
}

export default LandingPage
