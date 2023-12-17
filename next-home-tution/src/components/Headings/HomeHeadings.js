import Image from 'next/image';

export default function HomeHeadings({heading}) {
    return (
        <div className="rounded-sm w-auto text-3xl font-bold flex justify-center border-t-2  py-2 mt-4 text-gray-600">
            <Image
                src='/image.gif'
                alt="Example GIF"
                width={50}
                height={20}
                className="mx-2"
            />
            <h2 className="w-auto bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-violet-300">{heading.toUpperCase()}</h2>
        </div>
    )
}