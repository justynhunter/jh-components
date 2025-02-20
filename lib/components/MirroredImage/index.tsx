import styles from "./mirrored-image.module.css";

/** Props for MirroredImage Component */
export type MirroredImageProps = {
    /** pixels to blur the mirror, defaults to `2px` */
    blur: string;
    /** gap between image and mirror, defualts to `4px` */
    gap: string;
    /** height of image, defaults to `100%` */
    height: string;
    /** url of image to display */
    imageUrl: string;
    /** pct of mirror to show before fading out, defaults to `25` */
    mirrorPct: number;
    /** width of image to display, defaults to `100%` */
    width: string;
};

/**
 * # MirroredImage
 *
 * Component to display image with mirror effect under it.
 *
 * @see {@link MirroredImageProps}
 */
export function MirroredImage({
    blur = "2px",
    gap = "4px",
    height = "100%",
    imageUrl,
    mirrorPct = 25,
    width = "100%" }: MirroredImageProps) {

    const cssVars = {
        "--blur": blur,
        "--gap": gap,
        "--image": `url(${imageUrl})`,
        "--image-height": height,
        "--mirror-amount": `${mirrorPct}%`,
        "--width": width
    } as React.CSSProperties;

    return (
        <div className={styles.mirrorImage} style={cssVars}>
            <div className={styles.image}></div>
            <div className={styles.image}></div>
        </div >
    )
}
