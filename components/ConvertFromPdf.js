import { useEffect, useState } from "react";
import styles from "../styles/converpdf.module.css";
import PdfLinks from "./PdfLinks";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

const ConvertFromPdf = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(PdfLinks);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.box}>
          <h2>Convert from PDF</h2>

          <div className={styles.grid}>
            {data.map((link, i) => (
              <div
                key={i}
                className={`${styles.item} ${styles.tool}`}
                // ga360location={link.ga360location}
                style={{
                  transform: `translateX(${(i - index) * 10}%)`,
                }}
              >
                <img
                  className={styles.tool_image}
                  src={link.imgSrc}
                  alt={link.imgAlt}
                />
                <h3 className="title">{link.title}</h3>
                <div className={`${styles.desc} `}>{link.desc}</div>
              </div>
            ))}
          </div>
          <button className={styles.next} onClick={() => setIndex(index + 1)}>
            <BiRightArrowCircle />
          </button>
          <button className={styles.prev} onClick={() => setIndex(index - 1)}>
            <BiLeftArrowCircle />
          </button>
        </div>
      </div>
    </>
  );
};

export default ConvertFromPdf;
