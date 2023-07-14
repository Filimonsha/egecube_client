import styles from "./labels.module.css"
import TextLabel from "@/components/profile/schedule/infoPanel/textLabels/labels/TextLabel";

const TextLabels = () => {
    return <div className={styles.labelsContainer}>
        <TextLabel text={"Предмет"}/>
        <TextLabel text={"Группа"}/>
    </div>
}

export default TextLabels