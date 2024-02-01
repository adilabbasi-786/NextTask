import styles from "../styles/bookmark.module.css";

const Bookmark = () => {
  return (
    <>
      <div className={styles.box}>
        <h2>Your Bookmarks</h2>
        <div className={styles.grid}>
          <a
            href="https://www.hipdf.com/pdf-editor"
            className={`${styles.item} ${styles.tool}`}
            ga360location="content_2_buttonLink_22"
          >
            <img
              style={{
                width: "65px",
                verticalAlign: "middle",
                borderStyle: "none",
              }}
              className="tool-image"
              src="https://images.hipdf.com/images2022/icons/editPDF.svg"
              alt="edit pdf"
            />
            <h3 className={styles.title}>Edit PDF</h3>
            <div className={`${styles.desc} `} style={{ overflow: "hidden" }}>
              Use the best online tool to edit PDFs in your browser.
            </div>
          </a>
          <a
            href="https://www.hipdf.com/crop-pdf"
            className={`${styles.item} ${styles.tool}`}
            ga360location="content_2_buttonLink_23"
          >
            <img
              style={{
                width: "65px",
                verticalAlign: "middle",
                borderStyle: "none",
              }}
              className="tool-image"
              src="https://images.hipdf.com/images2022/icons/Crop-PDF.svg"
              alt="crop pdf"
            />
            <h3 className={styles.title}>Crop PDF</h3>
            <div className={`${styles.desc} overflow-hidden`}>
              Crop PDF online to a selected area, adjust margin size swiftly.
            </div>
          </a>
          <a
            href="https://www.hipdf.com/replace-text"
            className={`${styles.item} ${styles.tool}`}
            ga360location="content_2_buttonLink_24"
          >
            <img
              style={{
                width: "65px",
                verticalAlign: "middle",
                borderStyle: "none",
              }}
              className="tool-image"
              src="https://images.hipdf.com/images2022/icons/replace-text-pdf.svg"
              alt="replace text in pdf"
            />
            <h3 className={styles.title}>Replace Text</h3>
            <div className={`${styles.desc} overflow-hidden`}>
              The easiest way to replace text online.
            </div>
          </a>
          <a
            href="https://www.hipdf.com/rotate-pdf"
            className={`${styles.item} ${styles.tool}`}
            ga360location="content_2_buttonLink_25"
          >
            <img
              style={{
                width: "65px",
                verticalAlign: "middle",
                borderStyle: "none",
              }}
              className="tool-image"
              src="https://images.hipdf.com/images2022/icons/Rotate-PDF.svg"
              alt="rotate pdf"
            />
            <h3 className={styles.title}>Rotate PDF</h3>
            <div className={`${styles.desc} overflow-hidden`}>
              Rotate and save your PDF pages online for free.
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Bookmark;
