import styles from "../styles/footer.module.css";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

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
                <a
                  style={{ color: "#5c5757", textDecoration: "inherit" }}
                  href="https://www.youtube.com/"
                  className="text-text-default hover:text-text-dark"
                >
                  <i className={styles.icon} style={{ fontSize: "24px" }}>
                    <FaYoutube />
                  </i>
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{ color: "#5c5757", textDecoration: "inherit" }}
                  href="https://www.twitter.com/"
                  className="text-text-default hover:text-text-dark"
                >
                  <i className={styles.icon} style={{ fontSize: "24px" }}>
                    <FaTwitter />
                  </i>
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{ color: "#5c5757", textDecoration: "inherit" }}
                  href="https://www.facebook.com/"
                  className="text-text-default hover:text-text-dark"
                >
                  <i className={styles.icon} style={{ fontSize: "24px" }}>
                    <FaFacebook />
                  </i>
                </a>
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
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="/documentaries/"
                  >
                    Documentaries
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="/themes/"
                  >
                    Themes
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Chrome casts
                  </a>
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
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Download Chrome Browser
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Chrome Browser for Enterprise
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Chrome Browser Devices
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    ChromeOS
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Google Cloud
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Google Workspace
                  </a>
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
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="/documentaries/"
                  >
                    Documentaries
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="/themes/"
                  >
                    Themes
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Chrome casts
                  </a>
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
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Download Chrome Browser
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Chrome Browser for Enterprise
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Chrome Browser Devices
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    ChromeOS
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Google Cloud
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Google Workspace
                  </a>
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
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="/documentaries/"
                  >
                    Documentaries
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="/themes/"
                  >
                    Themes
                  </a>
                </li>
                <li style={{ listStyle: "none" }}>
                  <a
                    style={{
                      color: "black",
                      lineHeight: "1.5rem",
                      paddingBottom: "0.5rem",
                      paddingTop: "0.5rem",
                      display: "block",
                      textDecoration: "inherit",
                    }}
                    href="#"
                  >
                    Chrome casts
                  </a>
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
              <a
                className={styles.logo_wrap__Uh7uD}
                title="Go to home page"
                href="/"
              >
                <div
                  className={styles.transition_colors}
                  style={{
                    alignItems: "center",
                    display: "flex",
                    position: "relative",
                  }}
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
              </a>
            </div>
            <ul
              className={`${styles.flex} ${styles.items_center} ${styles.gap_8}`}
            >
              <li style={{ listStyle: "none" }}>
                <a
                  style={{
                    color: "black",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                  href="/privacy/"
                >
                  Privacy Policy
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{
                    color: "black",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                  href="/terms/"
                >
                  Terms and conditions
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{
                    color: "black",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                  href="/cookies/"
                >
                  Cookies Policy
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{
                    color: "black",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                  href="/about/"
                >
                  About us
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{
                    color: "black",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                  href="/eula/"
                >
                  EULA
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{
                    color: "black",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                  href="/contact/"
                >
                  Contact
                </a>
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
