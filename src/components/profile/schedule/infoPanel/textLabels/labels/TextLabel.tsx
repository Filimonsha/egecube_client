import styles from "../labels.module.css"

interface TextLabelProps {
    text: string
}

const TextLabel = ({text}: TextLabelProps) => {
    return <div className={styles.label}>{text}</div>;
}

export default TextLabel