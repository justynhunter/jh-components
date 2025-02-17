import styles from "./mirrored-image.module.css";

export type MirroredImageProps = {
    blur: string;
    gap: string;
    height: string;
    imageUrl: string;
    mirrorPct: string;
    width: string;
};

export function MirroredImage({
    blur = "2px",
    gap = "4px",
    height = "100%",
    imageUrl,
    mirrorPct = "25%",
    width = "100%" }: MirroredImageProps) {

    const cssVars = {
        "--blur": blur,
        "--gap": gap,
        "--image": `url(${imageUrl})`,
        "--image-height": height,
        "--mirror-amount": mirrorPct,
        "--width": width
    } as React.CSSProperties;

    return (
        <div className={styles.mirrorImage} style={cssVars}>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
        </div >
    )
}
