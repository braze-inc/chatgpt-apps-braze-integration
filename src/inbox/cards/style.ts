export const fontStyle = { fontFamily: "Helvetica Neue" }

export const contentContainerStyle = { padding: "10px" };

const flexContainerStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
};

export const flexColumnContainerStyle = {
  ...flexContainerStyle,
  flexDirection: "column" as const,
};

export const flexRowContainerStyle = {
  ...flexContainerStyle,
  flexDirection: "row" as const,
};

export const headerStyle = { ...fontStyle, margin: "0" };
export const pStyle = { ...fontStyle, margin: "0" };
export const linkStyle = { ...fontStyle, margin: "0", color: "#007AFF", textDecoration: "none" };
