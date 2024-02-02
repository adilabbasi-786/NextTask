import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
import { IoIosSettings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header_wrap__mGxe1}>
      <div className={styles.header_main__Sce7b}>
        <div className="">
          <Link href="/" title="Go to home page">
            <div
              style={{
                display: "flex",
                maxWidth: "max-content",
                width: "100%",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  backgroundColor: "#5151ff",
                  borderRadius: "0.5rem",
                  alignItems: "center",
                  marginLeft: "10px",
                  marginRight: "5px",

                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                }}
              >
                <IoIosSettings
                  style={{
                    alignItems: "center",
                    marginTop: "2px",
                    fontSize: "30px",
                    color: "white",
                  }}
                />
              </span>
              <div>
                <span
                  style={{
                    fontWeight: "700",
                    marginLeft: "2px",
                    color: "dark",
                    fontSize: "22px",
                  }}
                >
                  ZinTools
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "16px",
            maxWidth: "800px",
            position: "relative",
            width: "100%",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <form
            style={{
              minHeight: "48px",
              width: "70%",
              marginLeft: "230px",
              alignItems: "center",
              backgroundColor: "#f2f2f2",
              borderRadius: "24px",
              display: "flex",
            }}
          >
            <input
              type="text"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: 1,
                padding: "0px 0px 0px  24px",
                zIndex: 1,
                minHeight: "48px",
                width: "100%",
                background: "transparent",
                borderRadius: "24px",
                border: 0,
                fontFamily: "inherit",
                margin: 0,
                fontVariationSettings: "inherit",
              }}
              placeholder="Search for Movies, TV Shows, Themes &amp; Cast "
              defaultValue=""
            />
            <span className="search_loader__gfFUW"></span>
            <span
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                maxWidth: "72px",
                position: "relative",
                width: "100%",
              }}
            >
              <i
                className="icon"
                style={{
                  fontSize: "20px",
                  alignItems: "center",
                  display: "flex",
                  height: "20px",
                  justifyContent: "center",
                  maxWidth: "20px",
                  minWidth: "20px",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <FaSearch />
              </i>
            </span>
          </form>
        </div>

        <div style={{ marginLeft: "325px" }}>
          <span
            style={{
              fontWeight: "700",
              color: "grey",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Log in
          </span>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <span
            style={{
              fontWeight: "700",
              color: "white",
              fontSize: "14px",
              backgroundColor: "#5555f1",
              borderRadius: "50px",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            Sign up
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
