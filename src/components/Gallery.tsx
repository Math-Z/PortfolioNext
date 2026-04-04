type GalleryImage = { src: string; alt: string }

export default function Gallery({ images, group }: { images: GalleryImage[]; group: string }) {
    const count = images.length;

    return (
        <div className={`grid gap-4 ${count === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
            {images.map((img, i) => (
                <a
                    key={i}
                    data-fancybox={group}
                    href={img.src}
                    className={count % 2 !== 0 && i === count - 1 ? "col-span-2" : ""}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="rounded-lg border border-white/10 shadow-2xl w-full cursor-zoom-in hover:border-indigo-500/50 transition-all"
                    />
                </a>
            ))}
        </div>
    );
}