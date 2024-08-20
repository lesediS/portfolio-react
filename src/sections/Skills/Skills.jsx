import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";
import checkMark from '../../assets/checkmark-light.svg'

function Skills() {
return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        
        <div className={styles.skillList}>
            <SkillList src={checkMark} skill='Kotlin'/>
            <SkillList src={checkMark} skill='Java'/>
            <SkillList src={checkMark} skill='Java EE'/>
            <SkillList src={checkMark} skill='Spring Boot'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMark} skill='React'/>
            <SkillList src={checkMark} skill='HTML5'/>
            <SkillList src={checkMark} skill='CSS'/>
            <SkillList src={checkMark} skill='JavaScript'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMark} skill='Jetpack Compose'/>
            <SkillList src={checkMark} skill='Vite'/>
            <SkillList src={checkMark} skill='MUI'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMark} skill='Git '/>
            <SkillList src={checkMark} skill='Android Studio'/>
            <SkillList src={checkMark} skill='IntelliJ IDEA'/>
            <SkillList src={checkMark} skill='Visual Studio Code'/>
            <SkillList src={checkMark} skill='Eclipse'/>
            <SkillList src={checkMark} skill='Postman'/>
        </div>
    </section>
  );
}

export default Skills;
