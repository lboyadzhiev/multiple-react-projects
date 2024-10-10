// styles
import styles from './InfoBox.module.css';

interface InfoBoxProps {
  mode: 'warning' | 'hint';
}

export default function InfoBox({ mode }: InfoBoxProps) {
  return (
    <>
      {mode === 'hint' && (
        <aside className={`${styles.InfoBox} ${styles.hint}`}>
          <p>You have no course goals yet. Start adding some!</p>
        </aside>
      )}

      {mode === 'warning' && (
        <aside className={`${styles.InfoBox} ${styles.warning}`}>
          <h2>Warning</h2>
          <p>
            You're collecting a lot of goals. Don't put too much on your plate
          </p>
        </aside>
      )}
    </>
  );
}
