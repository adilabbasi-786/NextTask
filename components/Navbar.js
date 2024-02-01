import styles from "../styles/index.module.css";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fbfbfb",
          height: "100px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        className={`${styles.P1VD_0rt} ${styles.NR3D9rbX}`}
      >
        <div className={styles.oUe0xxac}>
          <div className={styles.S0QJ4Dud}>
            <ul
              className={styles.V1S_wqw2}
              style={{ marginLeft: "50px", marginTop: "10px" }}
            >
              <li className={styles.oY1zDR5h} style={{ marginLeft: "-15px" }}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-stock-video"
                  href="/stock-video"
                >
                  Stock Video
                </a>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-video-templates"
                  href="/video-templates"
                >
                  Video Templates
                </a>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-music"
                  href="/audio"
                >
                  Music
                </a>
                <div className="Z9ckhsgK" style={{ transform: "none" }}></div>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-sound-effects"
                  href="/sound-effects"
                >
                  Sound Effects
                </a>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-graphic-templates"
                  href="/graphic-templates"
                >
                  Graphic Templates
                </a>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-graphics"
                  href="/graphics"
                >
                  Graphics
                </a>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-presentation-templates"
                  href="/presentation-templates"
                >
                  Presentation Templates
                </a>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-photos"
                  href="/photos"
                >
                  Photos
                </a>
                <div className="Z9ckhsgK" style={{ transform: "none" }}></div>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-fonts"
                  href="/fonts"
                >
                  Fonts
                </a>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-add-ons"
                  href="/add-ons"
                >
                  Add-ons
                </a>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-web-templates"
                  href="/web-templates"
                >
                  Web Templates
                </a>
              </li>
              <li className={styles.oY1zDR5h}>
                <a
                  className={styles.MUHXnq6B}
                  data-testid="pageheader-itemtype-web-templates"
                  href="/web-templates"
                >
                  More
                </a>
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
