export const CardContainer = ({ children, withPadding = true }: { children: React.ReactNode, withPadding?: boolean }) => {
  const cardContainerStyle = {
    maxWidth: "380px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "10px",
    ...(withPadding && { padding: "20px" })
  };

  return (
    <div style={cardContainerStyle}>
      {children}
    </div>
  );
};
