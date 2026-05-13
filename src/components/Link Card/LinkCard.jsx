import React, { Children } from "react";
import "./LinkCard.css";

const LinkCard = ({
  children,
  className = "",
  // spacing
  padding = "",
  paddingInline = "",
  paddingBlock = "",
  margin = "",
  marginInline = "",
  marginBlock = "",

  // text
  fontWeight = "",
  color = "",
  fontSize = "",
  fontFamily = "",
  textAlign = "",

  // background
  background = "",
  backgroundColor = "",

  // border
  border = "",
  borderWidth = "",
  borderStyle = "",
  borderColor = "",
  borderRadius = "",

  // layout
  width = "",
  height = "",
  display = "",
  alignItems = "",
  justifyContent = "",
  gap = "",

  // extra
  boxShadow = "",
  cursor = "",
}) => {
  return (
    <div
      className={`link_card ${className}`}
      style={{
        padding,
        paddingInline,
        paddingBlock,
        margin,
        marginInline,
        marginBlock,

        fontWeight,
        color,
        fontSize,
        fontFamily,
        textAlign,

        background,
        backgroundColor,

        border,
        borderWidth,
        borderStyle,
        borderColor,
        borderRadius,

        width,
        height,
        display,
        alignItems,
        justifyContent,
        gap,

        boxShadow,
        cursor,
      }}
    >
      {children}
    </div>
  );
};

export default LinkCard;
