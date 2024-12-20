const Sidebar = () => {
  return (
    <aside style={{
      gridArea: "sidebar",
      backgroundColor: "teal",
      padding: "1rem",
      position: "sticky",
      top: 51.2,
      height: "calc(100vh - 51.2px)"
    }}>Sidebar</aside>
  )
}

export default Sidebar
