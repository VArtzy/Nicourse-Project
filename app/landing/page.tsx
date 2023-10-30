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
                <button className="absolute uppercase bg-amber-500 top-1/2 left-1/3">
                    Mulai Belajar
                </button>
            </Link>
        </>
    )
}

export default LandingPage
