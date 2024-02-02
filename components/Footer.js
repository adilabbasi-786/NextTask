import styles from "../styles/footer.module.css";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className={`${styles.px_3} ${styles.mt_72px} ${styles.bg_footer}`}
      >
        <div
          className={`${styles.w_full} ${styles.max_w_1425px} ${styles.mx_auto}`}
        >
          <div
            className={`${styles.flex} ${styles.items_center} ${styles.gap_8} ${styles.py_8}`}
          >
            <span
              className={`${styles.text_base} ${styles.font_medium} ${styles.text_text_dark}`}
            >
              Follow us
            </span>
            <ul
              className={`${styles.flex} ${styles.items_center} ${styles.gap_8}`}
            >
              <li style={{ listStyle: "none" }}>
                <Link
                  href="https://www.youtube.com/"
                  style={{ color: "#5c5757", textDecoration: "inherit" }}
                  className="text-text-default hover:text-text-dark"
                >
                  <i className={styles.icon} style={{ fontSize: "24px" }}>
                    <FaYoutube />
                  </i>
                </Link>
              </li>
              <li style={{ listStyle: "none" }}>
                <Link
                  href="https://www.twitter.com/"
                  style={{ color: "#5c5757", textDecoration: "inherit" }}
                  className="text-text-default hover:text-text-dark"
                >
                  <i className={styles.icon} style={{ fontSize: "24px" }}>
                    <FaTwitter />
                  </i>
                </Link>
              </li>
              <li style={{ listStyle: "none" }}>
                <Link
                  href="https://www.facebook.com/"
                  style={{ color: "#5c5757", textDecoration: "inherit" }}
                  className="text-text-default hover:text-text-dark"
                >
                  <i className={styles.icon} style={{ fontSize: "24px" }}>
                    <FaFacebook />
                  </i>
                </Link>
              </li>
            </ul>
          </div>
          <div
            style={{
              paddingBottom: "2.5rem",
              paddingTop: "2.5rem",
              borderTopColor: "red",
              borderTop: "ridge",
              borderTopWidth: "1px",
              rowGap: "2rem",
              gap: "0.5rem",
              alignItems: "flex-start",
              flexWrap: "wrap",
              display: "flex",
            }}
          >
            <div
              style={{ backgroundColor: "red", height: "2px", width: "100%" }}
            ></div>
            <div style={{ flexBasis: "calc(20% - 8px)" }}>
              <h3
                style={{
                  color: "black",
                  fontWeight: "600",
                  paddingBottom: "1.5rem",
                  fontSize: "inherit",
                }}
              >
                Internal Links
              </h3>
              <ul style={{ flexDirection: "column", display: "flex" }}>
                <li style={{ listStyle: "none" }}>
                  <Link href="/documentaries/">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Documentaries
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="/themes/">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Themes
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Chrome casts
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ flexBasis: "calc(20% - 8px)" }}>
              <h3
                style={{
                  color: "black",
                  fontWeight: "600",
                  paddingBottom: "1.5rem",
                  fontSize: "inherit",
                }}
              >
                Enterprise
              </h3>
              <ul style={{ flexDirection: "column", display: "flex" }}>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Download Chrome Browser
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Chrome Browser for Enterprise
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Chrome Browser Devices
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      ChromeOS
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Google Cloud
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Google Workspace
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ flexBasis: "calc(20% - 8px)" }}>
              <h3
                style={{
                  color: "black",
                  fontWeight: "600",
                  paddingBottom: "1.5rem",
                  fontSize: "inherit",
                }}
              >
                Internal Links
              </h3>
              <ul style={{ flexDirection: "column", display: "flex" }}>
                <li style={{ listStyle: "none" }}>
                  <Link href="/documentaries/">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Documentaries
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="/themes/">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Themes
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Chrome casts
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ flexBasis: "calc(20% - 8px)" }}>
              <h3
                style={{
                  color: "black",
                  fontWeight: "600",
                  paddingBottom: "1.5rem",
                  fontSize: "inherit",
                }}
              >
                Enterprise
              </h3>
              <ul style={{ flexDirection: "column", display: "flex" }}>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Download Chrome Browser
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Chrome Browser for Enterprise
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Chrome Browser Devices
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      ChromeOS
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Google Cloud
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Google Workspace
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ flexBasis: "calc(20% - 8px)" }}>
              <h3
                style={{
                  color: "black",
                  fontWeight: "600",
                  paddingBottom: "1.5rem",
                  fontSize: "inherit",
                }}
              >
                Internal Links
              </h3>
              <ul style={{ flexDirection: "column", display: "flex" }}>
                <li style={{ listStyle: "none" }}>
                  <Link href="/documentaries/">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Documentaries
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="/themes/">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Themes
                    </div>
                  </Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Link href="#">
                    <div
                      style={{
                        color: "black",
                        lineHeight: "1.5rem",
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem",
                        display: "block",
                        textDecoration: "inherit",
                      }}
                    >
                      Chrome casts
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{ backgroundColor: "red", height: "2px", width: "100%" }}
          ></div>
          <div
            style={{
              paddingTop: "2rem",
              paddingBottom: "3rem",
              gap: "2rem",
              borderTopColor: "red",
              borderTopWidth: "1px",
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexGrow: 1,
                display: "flex",
              }}
            >
              <Link title="Go to home page" href="/">
                <div
                  className={`${styles.logo_wrap__Uh7uD} ${styles.transition_colors}`}
                >
                  <span
                    style={{
                      color: "black",
                      fontWeight: 700,
                      fontSize: "1.8rem",
                      lineHeight: "2.25rem",
                      textDecoration: "none",
                      paddingBottom: "0.375rem",
                    }}
                  >
                    Similar
                  </span>
                  <span
                    style={{
                      minHeight: "38px",
                      paddingLeft: "0.625rem",
                      paddingRight: "0.625rem",
                      backgroundColor: "black",
                      borderRadius: "0.75rem",
                      alignItems: "center",
                      display: "flex",
                      marginLeft: "0.25rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.2rem",
                        lineHeight: "1.75rem",
                        color: "white",
                        opacity: 1,
                        fontWeight: 700,
                      }}
                    >
                      Watch
                    </span>
                  </span>
                </div>
              </Link>
            </div>
            <ul
              className={`${styles.flex} ${styles.items_center} ${styles.gap_8}`}
            >
              <li style={{ listStyle: "none" }}>
                <Link href="/privacy/">
                  <div
                    style={{
                      color: "black",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                    }}
                  >
                    Privacy Policy
                  </div>
                </Link>
              </li>
              <li style={{ listStyle: "none" }}>
                <Link href="/terms/">
                  <div
                    style={{
                      color: "black",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                    }}
                  >
                    Terms and conditions
                  </div>
                </Link>
              </li>
              <li style={{ listStyle: "none" }}>
                <Link href="/cookies/">
                  <div
                    style={{
                      color: "black",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                    }}
                  >
                    Cookies Policy
                  </div>
                </Link>
              </li>
              <li style={{ listStyle: "none" }}>
                <Link href="/Linkbout/">
                  <div
                    style={{
                      color: "black",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                    }}
                  >
                    About us
                  </div>
                </Link>
              </li>
              <li style={{ listStyle: "none" }}>
                <Link href="/eula/">
                  <div
                    style={{
                      color: "black",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                    }}
                  >
                    EULA
                  </div>
                </Link>
              </li>
              <li style={{ listStyle: "none" }}>
                <Link href="/contact/">
                  <div
                    style={{
                      color: "black",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                    }}
                  >
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
            <div style={{ display: "block", marginLeft: "auto" }}>
              <button
                data-tooltip-id="ts-tooltip"
                data-tooltip-content="Change Theme"
                style={{
                  color: "black",
                  backgroundColor: "#d9d2d2",
                  borderRadius: "999px",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "3rem",
                  display: "flex",
                  aspectRatio: "1/1",
                  backgroundImage: "none",
                  textTransform: "none",
                }}
              >
                <i
                  className={`${styles.icon_moon} ${styles.theme_light}`}
                  style={{ fontSize: "20px" }}
                >
                  <FaRegMoon />
                </i>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
