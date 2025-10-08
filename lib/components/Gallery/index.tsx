import styles from "./style.module.css";

export type GalleryProps = {
    images: HTMLImageElement & {
        caption?: string;
    }[];
}

export function Gallery({ images }: GalleryProps) {
    return (
        <div className={styles.gallery}>
            {images.map(({ caption, ...img }) => (
                <div className={styles.slide}>
                    <img {...img} />
                    {caption && <p>{caption}</p>}
                </div>
            ))}
        </div>
    );
}
