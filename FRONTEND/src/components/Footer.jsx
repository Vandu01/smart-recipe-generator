export default function Footer() {
  return (
    <footer
      style={{
        background: "#0077ff",
        color: "white",
        padding: "15px 0",
        textAlign: "center",
        marginTop: "40px",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.2)",
      }}
    >
      <p style={{ margin: 0, fontSize: "16px" }}>
        © {new Date().getFullYear()} Smart Recipe App — All Rights Reserved
      </p>
    </footer>
  );
}
